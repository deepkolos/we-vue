<template>
  <div class="page">
    <wv-pull-down-refresh class="pull-down" @onLoad="loadMore" :showMsgIcon="true">
      <wv-cell :title="item" v-for="(item, $index) in list" :key="$index" @click="msg(list, $index)"></wv-cell>
    </wv-pull-down-refresh>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        list: [],
        attempt: 0
      }
    },
    
    mounted (){
      this.loadMore(()=>{
        console.log('inital load');
      })
    },
    methods: {
      loadMore (success, error, noMore){
        if( this.attempt === 2 ){
          setTimeout(error, 800);
        }else if(this.attempt == 3 ){
          setTimeout(noMore, 800);
        }else{
          setTimeout(()=>{
            var start = this.list.length, i ;
            for(i = 0; i < 5; i++){
              this.list.push('下拉查看更多状态'+(i+start));
            }
            
            success();
          }, 800);
        }
        this.attempt++;
      },

      msg (list, index){
        this.$set(list, index, list[index]+'_edited')
        console.log('%O',list);
        console.log(index);
      }
    }
  }
</script>

<style scoped lang="scss">
  .pull-down{
    height: 100vh;
  }
</style>
