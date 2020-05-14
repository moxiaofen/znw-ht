<template>
<div>
    <div class='cont-sides'>
        <p class="cont-item">基础资产信息      
        </p>
    </div>
    <ul class="bgcf">
      <li class="bber" v-for="(item,index) in refactoringList" :key='index' @click="toDetail(item)">
        <div class="receivables-lib">
            <div class=" item-receivables-line1">
              <div>
                <span class="receivables-name  ell2 word-break">{{item.custName}}</span>
                <span class="receivables-no">{{item.contractNo}}</span>
              </div>
            </div>

            <div class="item-receivables-line2">
              <span class="receivables-amount">{{item.loanAmt}}</span>
            </div>
            <div class="item-receivables-line3">
              <!-- <span class="receivables-data">{{formatStatus(item.status)}}</span> -->
              <span class="receivables-data">{{item.status}}</span>
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
        props:['tip','refactoringList'],
        computed: {},
        data() {
          return {
          }
        },
        mounted() {
        },
        methods: {
          toDetail(item) {
            //this.$store.commit('setRefactoringItem',item)
            sessionStorage.setItem('refactoringItem',JSON.stringify(item))
            this.$router.push({
              path: this.$RM.RefactoringDetail ,
              //query:{data:JSON.stringify(num)}        
            })
          },
          formatStatus(num){
            switch(num) {
                case "01":
                    return "未发起";
                    break;
                case "02":
                    return "退回修改";
                    break;
                case "03":
                    return "审批中";
                    break;
                case "04":
                    return "已通过";
                    break;
                case "05":
                    return "被否决";
                    break;
                case "06":
                    return "已归档";
                    break;
                default:
                  return ""
            } 
          },

        }
    }
</script>

<style scoped>
@import "../../css/common";

</style>
