<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item.username" />
      <!-- <template v-if="!showEmpty" #finished> 没有更多了 </template> -->
    </van-list>
    <van-empty v-if="showEmpty" description="暂无数据" />
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { getUserListApi } from "@/api/index";
import { ref, computed } from "vue";
import { useRequest } from "vue-hooks-plus";

defineOptions({
  name: "List"
});

const list = ref([]);
const finished = ref(false);
const refreshing = ref(false);
const showEmpty = computed(() => {
  return list.value.length === 0 && !loading.value;
});
let pageNumber = 0;

const { run, loading } = useRequest(getUserListApi, {
  manual: true,
  onSuccess: res => {
    const { list: data, total } = res;
    list.value = list.value.concat(data);
    if (list.value.length >= total || data.length === 0) {
      finished.value = true;
    }
  },
  onError: () => {
    finished.value = true;
  }
});

const onLoad = () => {
  if (refreshing.value) {
    list.value = [];
    refreshing.value = false;
  }
  pageNumber = ++pageNumber;
  run({ pageSize: 10, pageNumber: pageNumber });
};

const onRefresh = () => {
  finished.value = false;
  pageNumber = 0;
  onLoad();
};
</script>
