<template>
  <div class="bg pb40">
    <header class="header" @click='onUseInfo'>
      <img class="logo" src="../../assets/logo.png" />
      <span class="name" v-if='loginFlag'>请登录</span>
      <span class="name" v-else>{{userInfo}}</span>
    </header>
    <!-- 引入九宫格组件 -->
    <grid-list :gridList='gridList'></grid-list>

    <ul class="cellBox" >
      <li class="cell" @click="toPage(cell.toKey)" v-for="cell in cellList"  :key='cell.toKey'>
        <img  :src="cell.src" >
        <span > {{cell.title}}</span>
      </li>   
    </ul>
    <ul class="cellBox" v-if="!loginFlag">
      <li class="loginout" @click="loginout">       
         退出登录
      </li>
    </ul>
  </div>
</template>

<script>
  import { Dialog } from 'vant';
  import gridList from '../components/grid-list'

  export default {
    name: "mine",
    components: {Dialog,gridList },
    data() {
      return {
          gridList:[
            {
                gridPage : 'CalculateList',
                src : require('../../assets/iv_repayment_icon.png'),
                title : "还款测算"
            },
            {
                gridPage : 'LedgerList',
                src : require('../../assets/iv_parameter_icon.png'),
                title : "台账管理"
            },
            {
                gridPage : 'FinancingProgress',
                src : require('../../assets/iv_financing_progress.png'),
                title : "融资进度"
            }
          ],
          
          cellList:[
             {
                toKey : 'AuthenticateId',
                src : require('../../assets/iv_shenfenrenzheng.png'),
                title : '身份认证查询'
             },
             {
                toKey : 'ContractPage',
                src : require('../../assets/iv_contract_search_icon.png'),
                title : '合同查询'
             },
             {
                toKey : 'BrokerProgress',
                src : require('../../assets/iv_assets_icon.png'),
                title : 'ABS资产信息列表查询'
             },
             {
                toKey : 'RefactoringProgress',
                src : require('../../assets/iv_refactors_icon.png'),
                title : '再保理资产信息列表查询'
             },
             {
                toKey : 'SettingPage',
                src : require('../../assets/iv_setting_icon.png'),
                title : '设置'
             },
             {
                toKey : 'AboutPage',
                src : require('../../assets/iv_about_icon.png'),
                title : '关于我们'
             }
          ],
          userInfo:'',
          loginFlag:false,//判断登录状态
         
      };
    },
    computed: {
    },
    mounted(){
        if(!sessionStorage.getItem("loginSession")){
            this.loginFlag = true
        }else{
            //const loginSession = JSON.parse(sessionStorage.getItem("loginSession"));
            this.userInfo = sessionStorage.getItem("loginid") ;
            this.loginFlag = false
        }
    },
    methods: {
      onUseInfo() {
        if(!sessionStorage.getItem("loginSession")){
            this.loginFlag = true;
            this.$router.push({
              path: this.$RM.LoginPage
            })
        }
      },
      toPage(msg) {
          this.$router.push({
               path: this.$RM[msg]
          })  
      },
      //退出登录
      loginout(){
        //this.showLoginout = true; 
        Dialog.confirm({
          title: '消息提示',
          message: '是否确定退出在线供应链金融服务平台?'
        }).then(() => {
            //登录时，sessionStorage setItem了多少，退出登录时，removeItem了多少
            sessionStorage.removeItem('loginSession')
            sessionStorage.removeItem('custNo')
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('loginid')
            sessionStorage.removeItem('mobile')
            sessionStorage.removeItem('email')
            this.userInfo = ''
            this.loginFlag = true;
        }).catch(() => {
        });
        
      },

    }
 
  }
</script>


<style scoped>
@import "../../css/common";

  .header {
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: center;
    align-items: center;
    background-color: #FFC600;

  }

  .logo {
    background-color: #fafafa;
    border-radius: 50%;
    border: 1px;
    border-color: #ffffff;
    height: auto;
    width: 120px;
  }

  .name {
    margin-top: 10px;
    color: white;
    font-size: 16px;
  }

  /* 重置的css */
  .gridBox{
       background-color: #ffffff;
  }

  .pb40{
    padding-bottom: 20px;
  }


</style>
