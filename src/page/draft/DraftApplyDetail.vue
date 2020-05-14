<template>
  <div>
    <van-nav-bar
      class="bar"
      title="提款申请"
      left-arrow
      fixed
      border='false'
      @click-left="$router.back(-1)"
    />

    <div class="content">
      <!--与顶部保持距离-->
      <div v-if='this.showC'>
          <div class='item'>
            <span class='item-left'>可用金额</span>
            <span class='item-right'>{{limitAmount}}</span>
          </div>
          <div class='top'>
            <span class='inputLable item-input'>融资金额</span>
            <input class='inputVal' type="text" ref="rApplyAmt" v-model="vApplyAmt" placeholder="请输入融资金额" />
            <img class='clearCss' v-show="vApplyAmt" @click="clear('vApplyAmt')" src="../../assets/clear.png"/>
          </div>
      </div>

      <div  v-if='!this.showC'>
          <div class='item'>
            <span class='item-left'>融资金额</span>
            <span class='item-right'>{{resData.applyAmt}}</span>
          </div>
          <div class='item'>
            <span class='item-left'>融资期限(天)</span>
            <span class='item-right'>{{resData.repayTerm}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>最长宽限期天数(天)</span>
            <span class='item-right'>{{resData.maxExtendDays}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>保证金比例(%)</span>
            <span class='item-right'>{{resData.despositAmtRate}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>融资比例(%)</span>
            <span class='item-right'>{{resData.financeScale}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>保理融资费年费率(%)</span>
            <span class='item-right'>{{resData.financRate}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>保理服务费年费率(%)</span>
            <span class='item-right'>{{resData.feeAmtRate}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>宽限期管理费年费率(%)</span>
            <span class='item-right'>{{resData.extendRate}}</span>
          </div>

          <div class='item'>
            <span class='item-left'>逾期管理费年费率(%)</span>
            <span class='item-right'>{{resData.pintRate}} </span>
          </div>
      </div>
      
      <div class="btn-box-fix">
        <LoginButton name="确定" :isInputNonEmpty="enable" @click.native="comfirm" borderRadius="6px"></LoginButton>
      </div>

    </div>

  </div>
</template>

<script>
  import LoginButton from '@/components/LoginButton.vue'

  export default {
    name: "BusinessApplyDetail",
    components: {
        LoginButton,
    },
    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        resData:{},
        limitAmount:'',
        vApplyAmt:'',
        showC:'',//池保理状态
        type:'',//保理类型
        
      }
    },
    mounted() {
        // 池保理，显示可用金额，融资金额填
        // 定票保理全部显示，融资金额去除
        //contract_type：01：定保理   02：池保理   03 ：票据保理
        this.type = this.$route.query.type;
        if( this.type == '01'|| this.type == '03'){
            this.showC = false
            this.queryContractList()
        }else{
            this.FindPoolLimitAmount()
            this.showC = true
        }
    },
    methods: {
      //清除输入框数据
      clear (str) {
        this[str] = ''
      },
      //app/findPoolLimitAmount 查询池保理池中可用余额(根据合同编号)
      FindPoolLimitAmount() {          
           const url = this.$api.ROOT + this.$Constants.FIND_POOL_LIMIT_AMOUNT;
           const data = {
             //"contractNo":this.$route.query.id,
             //"custNo": sessionStorage.getItem('custNo'), 
             "contractNo": "CON2019062800000079",
             "custNo": "C000311"
           }
           this.$http.post(url,data)
           .then(function (res) {
                const resDataAmount = JSON.parse(res.data)
                this.limitAmount = resDataAmount.creditlimitBal;
          }).catch(function () {
                this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          })
      },   
      //应收账款转让详情信息查询(通过合同编号)
      queryContractList() {
           //this.contractNo = this.$route.query.id;
           const url = this.$api.ROOT + this.$Constants.APP_TRANS_APPLY_DETAIL;
           const data = {
             "contractNo":this.$route.query.id,
           }
           this.$http.post(url,data)
           .then(function (res) {              
                this.resData = JSON.parse(res.data);
                console.log(this.resData)          
          }).catch(function () {
             this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          })
      }, 
      //确定提交  
      comfirm(){ 
           const url = this.$api.ROOT + this.$Constants.LOAD_INFO_APPLY;
           let data 
           if( this.type == '01'|| this.type == '03'){
                data.vApplyAmt = this.vApplyAmt
           }else{
                data = this.resData
           }
           this.$http.post(url,{'resDataAmount' : data })
           .then(function (res) {
                //console.log(res)
                this.resData = JSON.parse(res.data);          
          }).catch(function () {
             this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          })
      },

    }

  }
</script>
<style >
  .w100{
    width: 100%;
  }

  .credit-item{
    width: 100%;
        display: flex;
  }
  .credit-item .van-radio__label{
    flex: 1;
  }
</style>
<style scoped>
@import "../../css/common";

  .item {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .content {
    margin-top: 46px;
    position: relative;
  }
 .item-input{
    font-size: 0.42667rem;
    color: #343434;
    font-weight: bolder;
 }
  
</style>
