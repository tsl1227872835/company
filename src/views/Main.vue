<template>
  <div class="main">
  <el-container>
  <el-header>
    <el-menu :default-active="this.$route.path" class="el-menu-demo" active-text-color="#0091ea" text-color="#333" mode="horizontal" @select="handleSelect" router>
  <h1 class="headLogo"><img src="../assets/imgs/company.jpeg"></h1>
  <el-submenu index="8" class="topIcon">
    <template slot="title"><i class="el-icon-phone"></i></template>
    <el-menu-item index="8-1">选项1</el-menu-item>
    <el-menu-item index="8-2">选项2</el-menu-item>
    <el-menu-item index="8-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/main/top_product">产品</el-menu-item>
  <el-menu-item index="3">客户案例</el-menu-item>
  <el-submenu index="/main/co">
    <template slot="title">公司介绍</template>
    <el-menu-item index="5-1">公司信息</el-menu-item>
    <el-menu-item index="/main/co_map">公司地址</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">加入我们</template>
    <el-menu-item index="5-1">招聘信息</el-menu-item>
  </el-submenu>
   <el-submenu index="6">
    <template slot="title">售后</template>
  </el-submenu>
  <el-row class="topLogin">
  <el-button>登录</el-button>
  <el-button type="success">注册</el-button>
</el-row>
</el-menu>
<div class="line"></div>
</el-header>
 <el-main><router-view/></el-main>
 <el-footer> 

<div class="footerLeft" v-for="item in foot" :key="item.name">
<p>地&emsp;址:&emsp;{{item.name}}</p>
<p>电&emsp;话:&emsp;邮箱:&emsp;{{item.email}}</p>
<p>
  <router-link to="#">蜀ICP备</router-link>
  <router-link to="#">蜀公网安备</router-link>
</p>
</div>
<div class="footerMid">
<p>官方微博:</p>
<img src="#" alt=""><br>

</div>
<div class="footerRight">
<p>官方微信:</p>
<img src="#" alt="">
</div>
    </el-footer>
</el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex: '1',
        activeIndex2: '1',
foot: [{ name: '成都市天府新区华府大道蓝润置地广场2号楼', email: 'ganwukeji@163.com', icp: '',internet:''}]
        
    };
  },
methods:{
  handleSelect(key, keyPath) {

        console.log(key, keyPath);

      }
}
}
</script>
<style lang="less" scoped>
.main{
  .el-header{
    padding: 0;
 height: 100%!important;
.el-menu-demo{
   display: flex;
padding-top: 10px;
  flex:1;
  justify-content: space-around;
  .topIcon{
margin-right: 60px;
 .el-icon-phone{
   font-size: 40px;
 }
  }

  .headLogo{
  img{
 width: 200px;
  height: 90px;
  margin: 0 10px 0 100px;
  }
}
.topLogin{
  margin-top: 16px;
  margin-left: 20px;
}
}
  }
  .el-main{
    padding: 0;
  }
  .el-footer{
    padding: 0;
  }
  .el-footer{
    display: flex;
    justify-content: space-around;
      padding: 30px;
  background-color: #f8f8f8;
  height: 100%!important;
    .footerLeft{
      line-height: 46px;
    }
  }
}
</style>
