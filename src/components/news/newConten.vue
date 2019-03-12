<template>
    <div>
        <h3>新闻资讯--因为接口不全模拟</h3>
        <p>
          <span>发表时间:{{xiangqing.add_time | dataTimeFormat}}</span>
          <span>发表次数:{{xiangqing.click}}</span>
        </p>
        <div class="new_contenter" v-html="xiangqing.content"></div>
    </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      id:23,
      xiangqing:[]
    }
  },
  watch:{},
  computed:{},
  methods:{

    getNewsxaingiqng(){
      this.axios.get('http://www.liulongbin.top:3005/api/getnew/'+this.id)
      .then((data)=>{
        this.xiangqing=data.data.message[0]
        console.log(this.xiangqing)
      })
     
    }
  },
  created(){
    this.getNewsxaingiqng()
  },
  mounted(){}
}
</script>

<style scoped>
   
</style>