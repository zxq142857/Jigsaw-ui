<template>
  <div class="index">
    <header class="face-cover">
      <div class="face-main__content">
        <!-- 头像 -->
        <a href="#" class="head-portrait"></a>
        <!-- 名字 -->
        <h1 class="pen-name">Coder's Cat</h1>
        <!-- 座右铭 -->
        <div class="motto">任尔密雨斜侵，我只坐拥王城</div>
        <!-- 细线 -->
        <hr class="filling-line__long">
        <!-- 简介 -->
        <div class="discription">嗨，我是张小强 (@codercat)，一名 FE 开发者。</div>
        <!-- 细线 -->
        <hr class="filling-line__short">
        <!-- More -->
        <div class="discription">我在Git上有一些开源的小东西，并且在掘金上总结了相关的一些收获，欢迎访问，了解更多，喜欢的可以给个Star</div>
        <!-- links -->
        <div class="navigation-buttons">
          <button @contextmenu.prevent="rightClick ($event, 1)">博客</button>
          <button>简历</button>
          <button>工具</button>
          <button>订阅</button>
        </div>
        <div class="navigation-buttons other-link">
          <button><i class="iconfont icon-weibo"></i></button>
          <button><i class="iconfont icon-GIT"></i></button>
          <button><i class="iconfont icon-youjian"></i></button>
        </div>
      </div>
    </header>
    <!--组件-->
    <jg-right-menu
      :x="x_index"
      :y="y_index"
      :showMenu="showMenu"
      @close="closeMenu"
      @open="openDetail"
      @del="delAttr"
      @update="updateArr">
    </jg-right-menu>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      x_index: 0,
      y_index: 0,
      ctrlId: '',
      showMenu: false,
      role: []
    }
  },
  methods: {
    // 关闭回调
    closeMenu (state) {
      // console.log('关闭')
      this.showMenu = state
    },
    // 打开详情回调
    openDetail () {
      // console.log('编辑')
    },
    // 删除回调
    delAttr () {
      // console.log('删除')
    },
    // 编辑回调
    updateArr () {
      // console.log('编辑')
    },
    rightClick ($event, item) {
      // console.log($event)
      this.x_index = $event.pageX
      this.y_index = $event.pageY
      this.ctrlId = item
      this.showMenu = true
    }
  }
}
</script>

<style scoped>
  .face-cover {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url('./assets/images/themebg.jpg') top left no-repeat;
    background-size: cover;
  }
  .head-portrait {
    display: block;
    width: 80px;
    height: 80px;
    background-image: url('./assets/images/logo.png');
    background-size: 80px 80px;
    border-radius: 50%;
    border: 3px solid #FFF;
    margin: 0 auto .2em;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  }
  .pen-name {
    margin: 0 auto;
    display: inline-block;
    font-size: 2.5em;
    padding: 5px 0;
    letter-spacing: 3px;
    color: #FFF;
    cursor: pointer;
  }
  .motto {
    font-size: 1.2em;
    font-weight: lighter;
    letter-spacing: 3px;
    color: #dddddd;
    padding: 3px 0 0;
  }
  .filling-line__long {
    width: 50%;
    margin: 15px auto;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
  .filling-line__short {
    width: 15%;
    margin: 15px auto;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
  .discription {
    line-height: 1.7em;
  }
  .face-main__content {
    max-width: 620px;
    width: 100%;
    color: #FFF;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  }
  button {
    color: #FFF;
    opacity: .8;
    background-color: transparent;
    padding: 8px 20px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    font-size: .9em;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: none;
    margin: 0 5px 0 0;
    outline: none;
    cursor: pointer;
  }
  .navigation-buttons {
    padding: 20px 0;
  }
  .other-link button {
    border: none;
  }
  .other-link button i {
    font-size: 40px;
  }
  .face-cover:after {
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(195, 195, 195, 0.6);
    background-image: -webkit-linear-gradient(50deg, rgba(195, 195, 195, 0.6) 20%, rgba(0, 0, 0, 0.2));
    background-image: linear-gradient(50deg, rgba(195, 195, 195, 0.6) 20%, rgba(0, 0, 0, 0.2));
  }
</style>
