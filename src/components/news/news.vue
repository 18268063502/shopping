<template>
    <div>
        <ul class="mui-table-view">

				<li v-for="item in newList" :key="item.itemid" class="mui-table-view-cell mui-media">
					<router-link :to="'/news/newConten/' + item.itemid">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h5>{{item.title}}</h5>
							<p class='mui-ellipsis'>
                  <span>发表时间：{{item.time | dataTimeFormat("YYYY-HH-DD")}}</span>
                  <span>点击次数: {{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
				
		</ul>
    </div>
</template>

<script>

export default {
  components:{},
  props:{},
  data(){
    return {
        newList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    //   获取新闻资讯列表
    getNew(){
       this.axios
       .get('http://test/mock.com')
       .then( response=> {
         
          if (response.status===200) {
            var data =response.data
              this.newList=data.list
              console.log(this.newList)
          }
       })
       .catch(error=> {
           console.log(error);
       })
    }
  },
  created(){
      this.getNew()
  },
  mounted(){}
}
</script>

<style lang="scss" scoped>
   .mui-ellipsis{
        font-size: 12px;
        color: #1890ff;
        display: flex;
        justify-content: space-between   
   }
</style>