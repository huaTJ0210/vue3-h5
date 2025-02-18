<template>
  <div class="app-wrapper">
    <van-config-provider>
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <tabbar v-if="showTabbar" />
    </van-config-provider>
  </div>
</template>

<script setup lang="ts">
import tabbar from "@/components/tabbar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cached-view";
import { computed } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const showTabbar = computed(() => {
  return ["/demo", "/tools", "/about"].includes(route.path);
});

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
</script>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
