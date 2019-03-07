<template>
  <div>
    <!-- 轮播图  -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu1.png" alt>
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu2.png" alt>
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu3.png" alt>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu4.png" alt>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu5.png" alt>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu6.png" alt>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    //  this.getlunbo()
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      // 一定要用this   es6箭头函数
      this.axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.data.status === 0) {
            this.lunbotu = result.data.message;
            console.log(this.lunbotu);
          }
        })
        .catch(error => {
          Toast("轮播图加载失败");
        });
    },
    get() {
      console.log(this.lunbotu);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
// 轮播
.mint-swipe {
  height: 150px;
  .mint-swipe-item {
    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}

// 六宫格
.mui-content {
  
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
  }
  // 边框
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
  img {
    width: 60px;
    height: 60px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
  }
  
}
.mui-content > .mui-table-view:first-child{
    margin-top: 0
  }
</style>