<script lang="ts" setup>
import Header from '@/components/Header/index.vue'
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import 'styles/index.less';
</style>
