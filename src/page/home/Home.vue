<template>
  <div class="bg">
    <mt-swipe :auto="4000" style="height: 200px" class="mt-swipe">
      <mt-swipe-item :key="item.id" v-for="item in imgList">
        <img :src="item.img" alt=""  style="height: 200px;width:100%">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 引入九宫格组件 -->
    <grid-list :gridList='gridList'></grid-list>

    <ul>
      <li class="dflex product-list"  @click="toBusyApply(item)" v-for="(item,index) in productLists" :key='index'>
        <div class="product-left">
            <img class="product-bgimg" :src="formatSrc(item.itemIntroduceAttNo) " alt="">
            <div class="wrap-mask"></div>
            <div class="product-left-desc">
              <p class="product-title">{{item.projectName}}</p>
              <p class="product-desc">{{item.projectDesc}}</p>
            </div>
        </div>
        <div class="flex1 product-detail">
            <p class="product-more" v-show='item.maxFinaceAmt'>最高可借(¥)</p>
            <p v-show='item.maxFinaceAmt'><span class="product-num">{{item.maxFinaceAmt}}</span><i class="arr"></i></p>
            <p class="product-time">最长{{item.maxFinaceTerm}}个月</p>
        </div>
      </li>
    </ul>   

  </div>
</template>

<script>
  import gridList from '../components/grid-list'

    export default {
        name: "home",
        components: {
          gridList
        },
        computed: {},
        data() {
            return {
                activeGuid: null,
                products:[],
                imgList: [
                    {
                        id: 1,
                        img: require('../../assets/bg_first.png')
                    },
                    {
                        id: 2,
                        img: require('../../assets/bg_second.png')
                    },
                    {
                        id: 3,
                        img: require('../../assets/bg_third.png')
                    },
                    {
                        id: 4,
                        img: require('../../assets/bg_fourth.png')
                    },
                    {
                        id: 5,
                        img: require('../../assets/bg_fifth.png')
                    },
                ],
                gridList: [
                    {
                        gridPage: 'LoginPage',
                        src: require('../../assets/icon_login.png'),
                        title: "登录/注册"
                    },
                    {
                        gridPage: 'ContractPage',
                        src: require('../../assets/icon_recomment.png'),
                        title: "合同管理"
                    },
                    {
                        gridPage: 'FianancingEOI',
                        src: require('../../assets/icon_progress.png'),
                        title: "融资意向"
                    },
                    {
                        gridPage:'Receivables',
                        src: require('../../assets/icon_pay.png'),
                        title: "业务办理"
                    }
                    
                ],
                productLists:[                  
                ], 

            }
        },
        mounted() {
            this.queryProductList(); 
            //身份认证返回，清除保存的页面数据
            // sessionStorage.setItem('keepAliveFlag',0)      
        },
        methods: {           
            toBusyApply(item){
                this.$store.commit( 'setBusinessApply',item)//vuex数据
                this.$router.push({
                    path: this.$RM.BusinessApplyChange
                })
            },
            //获取产品列表
            queryProductList() {
                //开始请求登录接口
                const url = this.$api.ROOT + this.$Constants.QUERY_PRODUCT_LIST;
                this.$http.post(url,{factoringProduct : {businessCategory:'03'}})
                    .then(function (res) {
                        console.log(res)
                        const data = JSON.parse(res.data);
                        this.productLists = data.product;
                        
                    })
                    .catch(function () {
                        this.$toast(this.$ERRCODE.STATIC_ERRORCDDE.EXCEPTION);
                    });
            },
            formatSrc(str){
              return 'http://113.105.121.204:8104/factoring-pre/znw/contract/download/'+ str
            },


        }
    }
</script>
<style >
 .mt-swipe .mint-swipe-indicator.is-active{
    background: #fec901 !important;
  }
  .mint-swipe-indicator{
    opacity: 1;
    background:rgba(0, 0, 0, 0.3)
  }
</style>
<style scoped>
@import "../../css/common";
.banner{
  width: 100%;
}
  .cardBox .item{
    padding: 8px 0;
  }

.cardBox .item{
   text-align: center;
   margin-top: 5px;
}

/* 产品信息 */


.product-list{
  margin: 15px;
  box-shadow: 1px 1px 5px #ddd;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
}
.product-left{
    width: 220px;
    height: 100px;
    text-align: center;
    color: #fff;
    position: relative; 
    overflow: hidden;
}
.product-bgimg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;   
}
.product-left-desc{
   height: 100%;
   padding-top: 15px;
   position: relative;
   z-index: 2;
}
.wrap-mask:after{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    width: 100%;
    height: 100%;
}
.product-title{
  font-size: 20px;
}
.product-desc{
  line-height: 1.5;
}
.product-detail{
    padding-right: 15px;
    text-align: right;
    color: #333;
    line-height: 1.8;
}

.product-more{
  font-size: 13px;
}
.product-num{
  font-size: 18px;
  color: red;
  margin-right: 15px;
}


.arr{
  position: relative;
}
.arr:after,.arr:before {
  border: 7px solid transparent;
  border-left: 7px solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: -5px;
  content: ' '
}

.arr:before {
  border-left-color: #333;
  right: -6px;
}




.product-time{
  font-size: 12px;
}
.product-arr{
  font-size: 14px;
}




</style>
