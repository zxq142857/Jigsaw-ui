<template>
  <div v-if="show"
      class="menu_style"
      :style="{top:y+'px',left:x+'px'}">
    <ul>
      <!-- 分别传递事件给父元素调用 -->
      <li @mousedown="()=>{$emit('open')}">打开</li>
      <li @click="()=>{$emit('update')}">编辑</li>
      <li @click="()=>{$emit('del')}">删除</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JgRightMenu',
  props: {
    x: {
      type: [Number],
      default: 0
    },
    y: {
      type: [Number],
      default: 0
    },
    showMenu: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    // 点击别处时隐藏目录，并传递一个关闭事件
    closeMenu () {
      this.show = false
      this.$emit('close', false)
    }
  },
  mounted () {
    // 监听body上的点击
    document.querySelector('body').addEventListener('mousedown', this.closeMenu)
  },
  beforeDestroy () {
    // 移除监听
    document.querySelector('body').removeEventListener('mousedown', this.closeMenu)
  },
  watch: {
    // 监听，保持显示状态与父元素一致
    showMenu (val) {
      this.show = val
    }
  }
}
</script>

<style>
  .menu_style{
    position: absolute;
    z-index: 9999;
    width: 150px;
    background-color: #fff;
    border-radius: 4px;
    text-align: left;
    overflow: hidden;
    box-shadow: 2px 2px 14px #d0d0d0;
  }
  .menu_style>ul>li{
    text-indent: 25px;
    height: 38px;
    color: black;
    font-weight: 500;
    line-height: 38px;
    border-bottom: 1px solid #f3f3f3;
    cursor: pointer;
  }
  .menu_style>ul>li:hover{
    background: #E0EEFF;
  }
</style>
