<template>
<div>
      <div class='cont-sides'>
          <p class="cont-item">应收账款清单      
          </p>
          <img  v-if="itemShow" class="add-img" src="../../assets/icon_add.png"  @click="addReceives"/>
      </div>
      <ul class="bgcf">
        <li class="del-item-list" v-for="(item,index) in receivablesList" :key='index' @click="toDetail(item.acctCode,'finance',item)"> 
          <van-swipe-cell>
            <div class="receivables-lib">
                <div class=" item-receivables-line1">
                  <div>
                    <span class="receivables-name  ell2 word-break">{{item.draweeName}}</span>
                    <span class="receivables-no">{{item.tradeContractNo}}</span>
                  </div>
                </div>
                <div class="item-receivables-line2">
                  <span class="receivables-amount">{{item.contractAmt}}</span>
                </div>
                <div class="item-receivables-line3">
                  <span class="receivables-data">{{$utils.formatDay(item.paymentEndDate)}}</span>
                </div>
            </div>
            <template #right>
              <van-button square type="danger" text="删除" @click="del(index)" />
            </template>
          </van-swipe-cell>

        </li>
      </ul>

</div>
</template>

<script>
    import { SwipeCell,Button } from 'vant';

    export default {
        components: {
            [SwipeCell.name]: SwipeCell,
            [Button.name]: Button,
        },
        props:['itemShow','acctList'],
        computed: {},
        data() {
          return {
            receivablesList:[],
          }
        },
        created() {
            this.getRouteDate();
        },
        methods: {
          toDetail(num) {
            this.$router.push({
              path: this.$RM.ReceivablesDetail,
              query:{id: num}        
            })
          },
          //获取列表
          getRouteDate(){           
              if(sessionStorage.getItem('addReceivales')=='0'){//从应收账款转让跳转过来的
                  this.receivablesList = this.$store.state.addReceivablesApplyList
              }else{
                  this.receivablesList = this.$store.state.addReceivablesList
              }
          },

          addReceives(){
            //sessionStorage.setItem('addReceivales',0)//区别其他，设置addReceivales为0
            this.$router.push({
              path: this.$RM.AddReceivables
            }) 
          },
          del(index){
              console.log(index)            
              if(sessionStorage.getItem('addReceivales')=='0'){//从应收账款转让跳转过来的
                  this.$store.state.addReceivablesApplyList.shift(index)
              }else{
                  this.$store.state.addReceivablesList.shift(index)
              }
          },
        }
    }
</script>

<style scoped>
@import "../../css/common";
.van-button{
  height: 100%;
}

</style>
