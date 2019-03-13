<template>
  <div class="comm-box">
    <textarea name id cols="5" rows="5"></textarea>

    <div class="comm-list">
      <div class="comm-item">
        <p>第1楼 用户：匿名用户发表时间：2012-12-12 12 12-2-3</p>
        <div class="conmm-content">锄禾日当午</div>
      </div>
       <div class="comm-item">
        <p>第1楼 用户：匿名用户发表时间：2012-12-12 12 12-2-3</p>
        <div class="conmm-content">锄禾日当午</div>
      </div>
    </div>
    {{this.newid}}
    <mt-button type="primary" size="large">发表评论</mt-button>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  props:['newid'] /* 子组件通过props接收传参 */
};
</script>

<style lang="scss" scoped>
    .comm-box {
      button{
        margin-top: 5px;
        margin-bottom: 5px;
      }
      padding: 8px;
    }
    textarea {
      margin: 0;
    }

    .comm-item{
      p{
        background-color: #efefef;
        padding: 5px;
        font-size: 12px;

      }
      .conmm-content{
        text-indent: 1rem;
        margin-bottom: 10px;
      }
    }
</style>