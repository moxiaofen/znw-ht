<template>
<div>
 
    <div class='cont-sides'>
        <p class="cont-item">应收款清单列表      
        </p>
        <img  v-if="itemShow" class="add-img" src="../../assets/icon_add.png"  @click="addReceives" />
    </div>
    <ul class="bgcf">
      <!-- <li v-for="(item,index) in acctList" :key='index' @click="toDetail(item.acctCode,'finance',item)"> -->
      <li class="bber" v-for="(item,index) in acctList" :key='index' @click="toDetail(item)">
        <div class="receivables-lib">
            <div class=" item-receivables-line1">
              <div>
                <p class="receivables-name ell2 word-break">{{item.draweeName}}</p>
                <p class="receivables-no">{{item.tradeContractNo}}</p>
              </div>
            </div>

            <div class="item-receivables-line2">
              <span class="receivables-amount">{{item.contractAmt}}</span>
            </div>
            <div class="item-receivables-line3">
              <span class="receivables-data">{{$utils.formatDay(item.paymentEndDate)}}</span>
            </div>
        </div>
      </li>
    </ul>
    <div v-if='tip' class="tip">暂无更多数据</div>

</div>
</template>

<script>
    export default {
        components: {
        },
        props:['itemShow','acctList','tip'],
        computed: {},
        data() {
          return {
          }
        },
        created() {
        },
        methods: {
          toDetail(item) {
            //this.$store.acctItem = item
            //this.$store.commit('setAcctItem',item)
            sessionStorage.setItem('acctItem',JSON.stringify(item))
            this.$router.push({
              path: this.$RM.ReceivablesDetail    
            })
          },
          addReceives(){
            this.$router.push({
              path: this.$RM.AddReceivables
            }) 
          },

        }
    }
</script>

<style scoped>
@import "../../css/common";

</style>
