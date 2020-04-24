<template>
  <div 
    ref="menu"
    v-show="viable"
    class="menu_style"
    :style="{top:y+'px',left:x+'px'}"
  >
    <slot>
      <!-- 默认内容 -->
      <div class="defalut-content">This is a default option, do nothing.</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'JgRightMenu',
  data () {
    return {
      viable: true,
      x: 0,
      y: 0,
      windowClientX: 0,
      windowClientY: 0,
      width: 0,
      height: 0,
    }
  },
  methods: {
    // 展开菜单
    openMenu (e) {
      let {width, height, windowClientX,windowClientY} = this
      let isOverX = windowClientX - e.clientX > width
      let isOverY = windowClientY - e.clientY > height
      let x = isOverX ? e.clientX : windowClientX - width
      let y = isOverY ? e.clientY : e.clientY - height
      console.log(width,height,windowClientX,windowClientY,x,y)
      this.x = x
      this.y = y
      this.viable = true
    },
    // 点击别处时隐藏目录，并传递一个关闭事件
    closeMenu () {
      this.viable = false
      this.$emit('close', false)
    }
  },
  mounted () {
    this.windowClientX = window.innerWidth
    this.windowClientY = window.innerHeight
    this.$nextTick(() => {
      this.width = this.$refs.menu.clientWidth
      this.height = this.$refs.menu.clientHeight
      this.$refs.menu.style.opacity = "1"
      this.viable = false
    })
    // 监听body上的点击
    document.querySelector('body').addEventListener('mousedown', this.closeMenu)
  },
  beforeDestroy () {
    // 移除监听
    document.querySelector('body').removeEventListener('mousedown', this.closeMenu)
  }
}
</script>

<style>
  .menu_style{
    position: fixed;
    z-index: 9999;
    width: fit-content;
    background-color: #fff;
    border-radius: 4px;
    text-align: left;
    overflow: hidden;
    opacity: 0;
    box-shadow: 2px 2px 14px #d0d0d0;
  }
  .defalut-content {
    line-height: 30px;
    font-size: 14px;
    padding: 5px 10px;
    color: #000000;
  }
  .defalut-content:hover {
    color: #fff;
    background: #ccc;
  }
</style>
