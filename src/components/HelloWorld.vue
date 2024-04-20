<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>

  <d-cell
    title="Vite 官网"
  >
    <a href="https://cn.vitejs.dev">https://cn.vitejs.dev</a>
  </d-cell>
  <d-cell
    title="Vue 官网"
  >
    <a href="https://cn.vuejs.org/index.html">https://cn.vuejs.org</a>
  </d-cell>
  <d-cell
    title="DLUI 官网"
    description="本模板项目是基于 DLUI Common 构建的 PC 端项目，可在 APP.vue 文件中，修改全局配置"
  >
    <a href="https://www.xuanmo.xin/-/dl-ui">https://www.xuanmo.xin/-/dl-ui</a>
  </d-cell>
</template>

<style>
h1 {
  text-align: center;
}
</style>
