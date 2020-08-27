<template>
    <div class="mainHome">
        <div class="mainHomeTitle">
            物联网技术研发，技术咨询，技术服务
        </div>
 <div class="block">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.mainHome{
    .mainHomeTitle{
        padding: 10px 0;
        font-size: 22px;
        font-weight: bold;
        text-indent: 2em;
        color: #666;
    }
     .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}
</style>