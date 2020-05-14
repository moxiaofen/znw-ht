<template>
<div>
 
    <div class='cont-sides'>
        <p class="cont-item">基础资产信息      
        </p>
    </div>
    <ul  class="bgcf">
      <li v-for="(item,index) in brokerList" :key='index' @click="toDetail(item)">
        <div class="receivables-lib bber">
            <div class=" item-receivables-line1">
              <div>
                <p class="receivables-name  ell2 word-break">{{item.custName}}</p>
                <p class="receivables-no">{{item.ABSNo}}</p>
              </div>
            </div>

            <div class="item-receivables-line2">
              <span class="receivables-amount">{{item.businessType}}</span>
            </div>
            <div class="item-receivables-line3">
              <span class="receivables-data">{{item.loanAmt}}</span>
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
        props:['tip','brokerList'],
        computed: {},
        data() {
          return {

          }
        },
        mounted() {
        },
        methods: {
          toDetail(item) {
            //this.$store.acctItem = item
            //this.$store.commit('setBrokerItem',item)
            sessionStorage.setItem('brokerItem',JSON.stringify(item))
            this.$router.push({
              path: this.$RM.BrokerDetail,
              //query:{data:JSON.stringify(num)}        
            })
          },

          formatDay(num){
            if(num){
                var fnum = ''+num.slice(0,4)+'-'+num.slice(4,6)+'-'+num.slice(6,8)
                return fnum;
            }
          }

        }
    }
</script>

<style scoped>
@import "../../css/common";


</style>
