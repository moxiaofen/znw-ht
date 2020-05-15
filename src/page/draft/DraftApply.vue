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
      <van-cell title="选择合同" value="" />
      <van-field name="radio" label="">
        <template #input>
          <van-radio-group class="w100"  v-model="radio" direction="columns" value='radio'>
            <van-radio  class="credit-item" :name="index" v-for='(item,index) in contractList' :key='index'>             
                <span class="hide">{{item.contractStatus}}}</span>
                <span class="hide">{{item.contractNo}}}</span>
                <van-cell center :title="item.contractCode" :value="formatType(item.contractType)" :label="item.contractName" />             
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
  import { NavBar,Cell,Field ,RadioGroup, Radio  } from 'vant';
  import LoginButton from '@/components/LoginButton.vue'
  
  export default {
    name: "BusinessApply",
    components: {
      [NavBar.name]: NavBar,
      [Cell.name]: Cell,
      [Field.name]: Field,
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio,
      LoginButton
    },
    data() {
      return {
        nonet: false, //断网
        enable: true, //立即注册 按钮默认不可用
        
        radio: '',
        contractList:[],
        contractNo:'',
        contractType:'',
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
           const url = this.$api.ROOT + this.$Constants.FIND_CONTRACT_LIST;
           //const url = this.$api.ROOT + this.$Constants.QUERY_CONTRACT_LIST;
           const data = {
             //"custNo":sessionStorage.getItem('custNo'),
             "custNo":'C000250',
           }
           this.$http.post(url,data)
           //this.$http.post(url,{"creditContract":data})
           .then(function (res) { 
             console.log(res)
               const data = JSON.parse(res.data);
               console.log(data)
               this.contractList = JSON.parse(res.data)
          }).catch(function () {
             this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
          })
      },   
      comfirm(){ 
          if(this.radio ===''){
              this.$toast('请先选择合同');
              return
          }  
          sessionStorage.setItem('loanInfo',JSON.stringify(this.contractList[this.radio]))
          this.$router.push({
            path: this.$RM.DraftApplyDetail     
          })
      },
      cancel(){
          this.showPop = false    
      },
      //格式化合同类型 contract_type：01：定保理   02：池保理   03 ：票据保理
      formatType(num){
        switch(num) {
            case "01":
                return "定保理" 
                break;
            case "02":
                return "池保理" 
                break;
            default:
                return "票据保理"  
        } 
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
