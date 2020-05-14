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
      <van-cell title="选择授信合同" value="" />
      <van-field name="radio" label="">
        <template #input>
          <van-radio-group class="w100"  v-model="radio" direction="columns" value='radio'>
            <van-radio  class="credit-item" :name="index" v-for='(item,index) in creditList' :key='index'>
                <van-cell center :title="item.creditContractNo" :value="item.contractEndDate" :label="item.custName" />             
            </van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <div class="btn-box-fix">
        <LoginButton name="确定" :isInputNonEmpty="enable" @click.native="comfirm" borderRadius="6px"></LoginButton>
      </div>

    </div>
  </div>
</template>

<script>
  import LoginButton from '@/components/LoginButton.vue'
  export default {
    name: "BusinessApply",
    components: {
      LoginButton
    },
    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        
        radio: '',
        creditList:[],
        creditContractNo:'',
      }
    },
    mounted() {
        if(!sessionStorage.getItem('custNo')){
          this.$toast('请先登录');          
          return
        }
        this.queryContractList()//查询可授信合同数据
    },

    methods: {
      //获取新增时的数据
      queryContractList() {
           const url = this.$api.ROOT + this.$Constants.QUERY_CONTRACT_LIST;
           const data = {
             //"custNo":sessionStorage.getItem('custNo'),
             "custNo":'C000250',
           }
           this.$http.post(url,{"creditContract":data})
           .then(function (res) { 
               const data = JSON.parse(res.data);
               this.creditList = data.records 
               console.log(this.creditList)                               
          }).catch(function () {
             this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          })
      },   
      comfirm(){ 
          if(this.radio ===''){
              this.$toast('请先选择合同');
              return
          }  
          this.creditContractNo = this.creditList[this.radio].creditContractNo;       
          console.log(this.creditList[this.radio].creditContractNo)
          console.log(this.radio)
         
          this.$router.push({
            path: this.$RM.DraftApplyDetail,
            //query:{id: this.creditContractNo} 
            query:{id: 'CON2019062800000079'}        
          })
      },
      cancel(){
          this.showPop = false    
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
  .content {
    margin-top: 46px;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 70px;
  }

</style>
