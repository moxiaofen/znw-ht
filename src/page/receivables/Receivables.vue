<template>
  <div class="bg">
      <van-nav-bar
        class="bar"
        title="业务办理"
        left-arrow
        fixed
        border='false'
        @click-left="$router.back(-1)"
      />
      <ul class="cellBox" >
        <li class="cell" @click="toPage(cell.toKey)" v-for="cell in cellList"  :key='cell.toKey'>
          <img  :src="cell.src" >
          <span > {{cell.title}}</span>
        </li>
      </ul>

  </div>
</template>

<script>
  import { NavBar } from 'vant';

  export default {
    components: {
        [NavBar.name]: NavBar,
    },
    data() {
      return {
          cellList:[
             {
                toKey : 'draftApply',
                src : require('../../assets/iv_collection_icon.png'),
                title : '提款申请'
             },
            {
                toKey : 'apply',
                src : require('../../assets/iv_collection_icon.png'),
                title : '应收账款转让申请'
             },
             {
                toKey : 'search-dp',
                src : require('../../assets/iv_collection_icon.png'),
                title : '定保理应收账款转让查询'
             },
             {
                toKey : 'search-c',
                src : require('../../assets/iv_collection_icon.png'),
                title : '池保理应收账款转让查询'
             }
             
          ]
      }
    },
    methods: {
      toPage(msg){
        if("draftApply" == msg){
           this.$router.push({
            path: this.$RM.DraftApply
          })
        }
        if("apply" == msg){
          this.$router.push({
            path: this.$RM.BusinessApplyDetail,
            query:{type:'apply'}
          })
        }
        if("search-dp" == msg){
           this.$router.push({
            path: this.$RM.ReceivablesList,
            query:{
              id: 'dp'
            }  
          })
        }
        if("search-c" == msg){
           this.$router.push({
            path: this.$RM.ReceivablesList,
            query:{
              id: 'c'
            }  
          })
        }
      }
    }
  }
</script>

<style scoped>
@import "../../css/common";
.cellBox {
    margin-top: 46px;
  }
 
</style>
