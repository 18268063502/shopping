<template>
    <div>
       {{this.obj}}
    </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      obj:[]
    }
  },
   mounted() {
    this.getconsole() 
  },
  methods:{
    getconsole(){
      this.axios
        .get("/api/xinghao")
        .then(result => {
            this.obj=result.data
            console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
 
}
</script>

<style scoped>
   
</style>