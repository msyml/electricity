<template>
  <div class="header">
    <div class="shortcut">
      <div class="welcome"><i class="iconfont icon-place"></i><span>浙江</span></div>
      <ul class="shortcuts">
        <li class="shortcut_btn" :class="item.class" v-for="item in optionsList" :key="item.label">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="search"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue'
import { OptionsType } from './types'

const state = reactive({
  optionsList: Array<OptionsType>()
})

const { optionsList } = toRefs(state)

onMounted(() => {
  state.optionsList = [
    { label: '我的订单', type: 'jump', path: '/orders' },
    { label: '我的京东', type: 'children', path: '/orders' },
    { label: '京东会员', type: 'jump', path: '/orders' },
    { label: '企业采购', type: 'children', path: '/orders', class: 'shortcut_btn_red' },
    { label: '客户服务', type: 'children', path: '/orders' },
    { label: '网站导航', type: 'children', path: '/orders' },
    { label: '手机京东', type: 'children', path: '/orders' }
  ]
})
</script>

<style scoped lang="less">
@bgColor: #eaeaea;
@fontColor: #cccccc;

.header {
  .shortcut {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    .shortcuts {
      .shortcut_btn {
        float: left;
        color: @fontColor;
      }
      .shortcut_btn ~ .shortcut_btn:before {
        content: '|';
        color: @fontColor;
      }
      .shortcut_btn_red {
        color: #f00;
      }
    }
  }
}
</style>
