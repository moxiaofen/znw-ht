<template>
  <div class="bg">
      <van-nav-bar
        class="bar"
        title="设置"
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
          cellList : [
             {
                toKey : 'PersonInfo',
                title : '个人信息设置',
                src : require('../../assets/iv_gerenxinxi.png')
             },
             {
                toKey : 'CompanyInfo',
                title : '企业信息设置',
                src : require('../../assets/iv_qiyexinxi.png')
             }
          ]
      }
    },
    methods: {
      toPage(msg){
         if ('PersonInfo' == msg) {
          this.$router.push({
            path: this.$RM.PersonInfo
          })
        }
        if ('CompanyInfo' == msg) {
          console.log(2)
          this.$router.push({
            path: this.$RM.CompanyInfo
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
  /* .bg {
    background-color: #fafafa;
  } */
/* .cellBox {
    width: 100%;
    margin-top: 50px;
    box-sizing: border-box;
  }

  .cellBox .cell {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    background-color: #ffffff;
    margin-bottom: 2px;
  }

 .cellBox .cell img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
  .cellBox .cell span {
    font-size: 17px;
    color: #4F4F55;
    vertical-align: middle;
  } */
</style>
