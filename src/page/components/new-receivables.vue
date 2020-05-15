<template>
<div>
 
    <div class='cont-sides'>
        <p class="cont-item">应收账款信息      
        </p>
        <img class="add-img" src="../../assets/icon_add.png"  @click="showPopup"/>
    </div>

    <div class="bgcf">
      <div class="affix-lib">
        <div class="flex1">
           <span >付款方名称</span>
        </div>

        <div class="flex1 ell">
         <span >应收账款数量</span>
        </div>

        <div class="flex1 ell">
            <span >应收账款金额(元)</span>
        </div>
      </div>
      <div v-for="(item,index) in dataReceivablesList" :key="index">
          <div class="affix-lib por">
            <div class="flex1">
              <span >{{item.payCustName}}</span>
            </div>
            <div class="flex1">
            <span >{{item.num}}</span>
            </div>

            <div class="flex1">
                <span >{{item.amt}}</span>
            </div>
            <img class='clear-file' @click="clearFile(index,item)" src="../../assets/gray-del.png"/>
          </div>
      </div>
      <div class="affix-lib">
        <div class="flex1">
           <span >总计</span>
        </div>

        <div class="flex1 ell">
         <span>{{totalNum}}</span>
        </div>

        <div class="flex1 ell">
            <span>{{totalMoney}}</span>
        </div>
      </div>
    </div>



    <!-- 弹窗 -->
    <van-popup v-model="show" bind:close="onClose" class="pop-content">
        <!--付款方名称-->
        <div class='top'>
          <span class='inputLable'>付款方名称</span>
          <input class='inputVal' type="text" ref="rPayCustName" v-model="vPayCustName" placeholder="请输入付款方名称"/>
          <img class='clearCss clearCss3' v-show="vPayCustName" @click.stop ="clear('vPayCustName')" src="../../assets/clear.png" />
        </div>
   
        <!--应收账款数量-->
        <div class='top'>
          <span class='inputLable'>应收账款数量</span>
          <input class='inputVal' type="number" pattern="[0-9]*" ref="rNum" v-model="vNum" placeholder="请输入应收账款数量"/>
          <img class='clearCss clearCss3' v-show="vNum" @click.stop ="clear('vNum')" src="../../assets/clear.png" />
        </div>

        <!--应收账款金额-->
        <div class='top'>
          <span class='inputLable'>应收账款金额(元)</span>
          <input class='inputVal' type="number" pattern="^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$"  ref="rAmt" v-model="vAmt" placeholder="请输入应收账款金额" />
          <img class='clearCss clearCss3' readonly="true" v-show="vAmt" @click.stop ="clear('vAmt')" src="../../assets/clear.png" />
        </div>

        <div class="file tac">
            <a class="file-button confirm" @click="submitFile">确定</a>
            <a class="file-button cancel" @click="onClose">取消</a>
        </div>
    </van-popup>
</div>
</template>

<script>
    import { Popup } from 'vant';
    
    export default {
        components: {
            [Popup.name]: Popup,
        },
        props:['dataReceivablesList'],
        data() {
            return {
              nonet: false,//断网
              enable: true,//立即注册 按钮默认不可用
              show: false,//测试时为true

              vPayCustName:'',
              vNum:'',
              vAmt:'',
              dataReceivablesList:[],
              rexTip:false,//提示语
              totalNum:'',
              totalMoney:'',
            }
        },
        mounted(){
                      
        },
        methods: {
          //清除输入框数据
          clear (str) {
            this[str] = ''
          },     
          //应收账款上传列表确定
          submitFile(){
              if(!this.vPayCustName){
                  this.$toast('付款方名称不能为空！');  
                  return                
              }
              if(!this.vNum){
                  this.$toast('应收账款数量不能为空！');  
                  return                
              }
              if(!this.vAmt){
                  this.$toast('应收账款金额不能为空！');  
                  return                
              }
              var dataFile = {
                payCustName : this.vPayCustName ,
                num : this.vNum ,
                amt : this.vAmt 
              }
              this.dataReceivablesList.push(dataFile);
              console.log(this.dataReceivablesList);
              this.show = false;
              this.totalNum = Number(this.totalNum)+ Number( this.vNum )
              this.totalMoney = Number(this.totalMoney)+ Number( this.vAmt )
          },
          //删除应收账款列表
          clearFile(index,item){
              this.totalNum = this.totalNum - Number(item.num)
              this.totalMoney = this.totalMoney - Number(item.amt)
              this.dataReceivablesList.splice(index, 1);
          },

          //弹窗
          showPopup() {
            this.show = true;
            this.vPayCustName = '';
            this.vNum = '';
            this.vAmt = '';
          },
          onClose() {
            this.show = false
          },                
        
        },

    }
</script>

<style scoped>
@import "../../css/common";

.inputVal{
    padding: 18px 15px 8px 0;
}
.clearCss3{
    right: 15px;
    top: 50%;
}
.affix-lib{
    padding: 10px 12px 10px 15px;
}
</style>
