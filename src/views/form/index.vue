<template>
  <div class="form-container">
    <van-form ref="formRef" class="van-form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userFormData.username"
          name="用户名"
          label="用户名"
          label-align="top"
          placeholder="用户名"
          required
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userFormData.password"
          type="password"
          name="密码"
          label="密码"
          label-align="top"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
    </van-form>
    <div class="submit-button">
      <van-button round block type="primary" @click="submitAction">
        提交
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserFormType } from "./data";
defineOptions({
  name: "FormView"
});

const userFormData = ref<UserFormType>({
  username: "",
  password: ""
});

const formRef = ref(null);

const onSubmit = (values: UserFormType) => {
  console.log("submit", values);
};

const submitAction = () => {
  formRef.value.submit();
};
</script>

<style scoped>
.form-container {
  height: 100vh;
}

.van-form {
  height: calc(100% - 60px);
  overflow-y: auto;
}
.submit-button {
  position: absolute;
  padding: 8px 12px;
  width: 100%;
  height: 60px;
}
</style>
