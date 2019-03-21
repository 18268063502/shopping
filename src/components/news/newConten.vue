<template>
    <div>
      <p>{{this.itemid}}</p>
        <p>
          <span>发表时间:{{xiangqing.time | dataTimeFormat}}</span>
          <span>发表次数:{{xiangqing.click}}</span>
        </p>
        <div class="new_contenter" v-html="xiangqing.content"></div>
        <comments :newsId="this.itemid" />
    </div>
</template>

<script>
import comments from '../../components/subCompents/comment'
export default {
  components:{},
  props:{},
  data(){
    return {
      itemid:this.$route.params.id,
      xiangqing:[],
      props:['newsId']
    }
  },
  watch:{},
  computed:{},
  components:{
    comments
  },
  methods:{

    getNewsxaingiqng(){
      this.axios.get('http://test/mock.com/'+this.itemid)
      .then((data)=>{
        this.xiangqing=data.data.list
        console.log(data)
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