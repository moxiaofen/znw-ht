<template>
  <div>
    <van-nav-bar
      class="bar"
      :title="title"
      left-arrow
      fixed
      border='false'
      @click-left="$router.back(-1)"
    />
    <div class="content"> 
        <!--产品名称-->
        <div class='top' v-if='vBusinessType=="04"'>
          <span class='inputLable'>产品名称</span>
          <input class='inputVal input-val-all' type="text" v-model="vProductName" placeholder="请输入产品名称" readonly />         
        </div>
        <!--产品编号-->
        <div class='top hide' v-if='vBusinessType=="04"'>
          <span class='inputLable'>产品编号</span>
          <input class='inputVal input-val-all' type="text" ref="rProductId" v-model="vProductId" placeholder="请输入产品编号" readonly />
        </div>

        <!-- 引入应收账款信息组件 -->
        <new-receivables v-if='vBusinessType != "04"' :dataReceivablesList='dataReceivablesLists'></new-receivables>  

        <!-- 引入附件信息组件 -->
        <new-affix :itemShow='true' :optDate='dataTypeOpt' :dataFileList='dataFileLists'></new-affix>   
    </div>
    <div class="btn-cont">
        <a class="btn btnEnable mr15" href="javascript:void(0);" @click="submit">提交申请</a>       
    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import LoginButton from '@/components/LoginButton.vue'
  import NewReceivables from '../components/new-receivables'
  import NewAffix from '../components/new-affix'

  export default {
    name: "FianancingApplyDetail",
    components: {
      [NavBar.name]: NavBar,
      LoginButton,
      NewReceivables,
      NewAffix
    },

    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        routeData :{},
        //projectType:'',
        vCustName:'',
        vProductName:'',
        vProductId:'',

        title:'业务申请',
        vBusinessType :'04',//申请业务类型---默认显示业务申请页面

        dataReceivablesLists:[],//应收账款信息
        //vDataType : "01",//资料类型
        dataTypeOpt:[
          {
            text: '营业执照',
            value: "01"
          },
          {
            text: '法人身份证明',
            value: "02"
          },
          {
            text: '开户许可证',
            value: "03"
          },
          {
            text: '护照',
            value: "04"
          },
          {
            text: '其他',
            value: "05"
          }
        ],
        dataFileLists:[],//附件参数


      }
    },
    created() {       
        //this.routeData =JSON.parse(sessionStorage.getItem('FianancingApply'))
        // this.routeData =this.$store.state.fianancingApply;
        // console.log(this.routeData)
        //this.projectType = this.routeData.projectType;
        if(!sessionStorage.getItem('custNo')){
            this.$toast('请先登录'); 
            return
        }
        if(this.$route.query.type=='busy'){
            this.vBusinessType = '04';
            this.title = '业务申请'
            this.routeData =this.$store.state.fianancingApply;
            console.log(this.routeData )
            this.vProductName = this.routeData.projectName
            this.vProductNo = this.routeData.projectNo
        }else{
            this.vBusinessType = '05';
            this.title = '应收账款转让申请'
        }
    },
    mounted(){
    },

    methods: {
      //清除输入框数据
      clear (str) {
        this[str] = ''
      },
      submit(){
          //上传数据
          const url = this.$api.ROOT + this.$Constants.APP_TRANS_APPLY;
          const data = {
              'custNo' : sessionStorage.getItem('custNo'),
              'custName' : this.vCustName ,
              'productId' : this.vProductId ,
              'acctReceiveableInfos' : this.dataReceivablesLists          
          };
          //console.log(data)
          this.$http.post(url,{
            'businessType':this.vBusinessType,
            'msgData':data, 
            'fileList':this.dataFileLists
            })
          .then(function (res) {   
              // console.log(res )  
              // console.log(JSON.parse(res.data))
              const resDate = JSON.parse(res.data)
              if (resDate.respCode === '000000') {
                  this.$indicator.close();
                  this.$toast("操作成功！");
                  this.$router.go(-1)
              } else {
                  this.$indicator.close();
                  this.$toast(resDate.respMsg);
              }
          })
          .catch(function () {
             this.$indicator.close();
             this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          });     
      }
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
   .btn-cont{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #fff;
 }
 .btn{
    padding: 12px;
    border-radius: 50px;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff1e8;
 }
 .btnEnable {
    background-color: rgba(255, 198, 0, 1);
    text-shadow: 0 0.01333rem 0 #ff6400;
}
.input-val-all{
    padding: 17px 0 10px 8px;
}
</style>
