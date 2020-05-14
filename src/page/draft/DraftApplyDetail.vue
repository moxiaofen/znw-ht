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
      <div class='item'>
        <span class='item-left'>可用金额</span>
        <span class='item-right'>{{limitAmount}}</span>
      </div>

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
        <span class='item-right'>pintRate</span>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "BusinessApplyDetail",
    components: {
    },
    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        resData:{},
      }
    },
    created() {
        this.FindPoolLimitAmount()
        this.queryContractList()
        //测试不成熟
    },

    methods: {
      //app/findPoolLimitAmount 查询池保理池中可用余额(根据合同编号)
      FindPoolLimitAmount() {          
           const url = this.$api.ROOT + this.$Constants.FIND_POOL_LIMIT_AMOUNT;
           const data = {
             "contractNo":this.$route.query.id,
             //"custNo": sessionStorage.getItem('custNo'),
             "custNo": sessionStorage.getItem('custNo'),
           }
           this.$http.post(url,data)
           .then(function (res) {
                console.log(res)
                //this.resData = JSON.parse(res.data);          
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
 
  
</style>
