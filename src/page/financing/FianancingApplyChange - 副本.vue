<template>
  <div>
    <van-nav-bar
      class="bar"
      title="业务申请"
      left-arrow
      fixed
      border='false'
      @click-left="$router.back(-1)"
    />

    <div class="content">
        <div class="img-cont">
          <img src="../../assets/add.png" alt="">
        </div>

        <div class="btn-box">
          <LoginButton name="业务申请" :isInputNonEmpty="enable" @click.native="toPage" borderRadius="6px"></LoginButton>
        </div>
 
    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import LoginButton from '@/components/LoginButton.vue'

  export default {
    name: "FianancingApplyChange",
    components: {
      [NavBar.name]: NavBar,
      LoginButton,
    },

    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        routeData :{},
        projectType:'',

      }
    },
    created() {       
        //this.routeData =JSON.parse(sessionStorage.getItem('FianancingApply'))
        this.projectType = this.routeData.projectType;
    },
    mounted(){
    },

    methods: {
      toPage(num,type) {
        this.$router.push({
          path: this.$RM.FianancingApplyDetail,
          query:{type:'busy'}
        })
      },

    },    
    watch: {

    }

  }
</script>

<style scoped>
@import "../../css/common";
  .content {
    margin-top: 46px;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 70px;
  }

  .btn-box{
    padding:0 10px 10px;
  }
  .img-cont{
    text-align: center;
    padding-top: 20px;
  }
</style>
