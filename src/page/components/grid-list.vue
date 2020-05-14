<template>
<div>
    <ul class="gridBox">
      <li class="item" @click="toPage(grid.gridPage)" v-for="(grid,index) in gridList" :key='index'>
        <img class="img" :src="grid.src" alt="">
        <span class="text">{{grid.title}}</span>
      </li>
    </ul>
</div>
</template>

<script>

    export default {
        components: {
        },
        props:['gridList'],
        computed: {},
        data() {
          return {
          }
        },
        created() {
        },
        methods: {
            toPage(msg) {
                 this.$router.push({
                      path: this.$RM[msg]
                 })               
            },
        }
    }
</script>

<style scoped>
@import "../../css/common";

</style>
