<template>
  <div class="child">
    <div class="header_bottom" style="background-color: #004F9F;">
      <div>
        <el-menu
          :default-active="1" router
          id="header_bottom_menu"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#004F9F"
          text-color="#fff"
          active-text-color="#000"
          style="height:100%;border: 0; background: rgba(15, 38, 69, 0.01);">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="header_bottom_logo">
        <router-link :to="{path:'/'}"><img :src="img_logo" style="height: 95px" alt=""></router-link>
      </div>
    </div>

    <div class="content" style="margin-top: 40px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/zxgl' }">专项管理</el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="min-height: 620px">
        <p style="font-size: 18px;font-weight: bold;text-align: center;padding-top: 20px">海洋专项管理细则</p>
        <p style="color: #999999;text-align: center">发布时间：2017-04-14</p>
        <p style="padding-top: 30px">
          &nbsp &nbsp &nbsp &nbsp 4月12日，全国人大环资委调研组到海洋研究所就《中华人民共和国深海海底区域资源勘探开发法》（以下简称《深海法》）贯彻实施情况进行检查调研，全国人大环资委副主任委员黄献中、国家海洋局副局长孙书贤、中国大洋协会办公室书记胡学东等参加检查调研。海洋 所所长王凡、党委书记王辉、副所长李超伦等参加调研座谈。
          <br>&nbsp &nbsp &nbsp &nbsp 座谈会上，孙书贤副局长简要介绍了开展本次检查调研活动的背景和主要内容。王凡所长向调研组介绍了海洋所历史沿革、园区拓展、发展定位、规划布局、人才队伍及能力建设等情况，重点汇报了近年来开展的深海科学研究工作、《深海法》的贯彻实施情况及相关建议。
          <br>&nbsp &nbsp &nbsp &nbsp 黄献中副主任委员对研究所在深海研究领域取得的重大进展和成果给予充分肯定，指出涉及深海领域的单位要深入理解《深海法》的内涵，《深海法》在规范和管控深海海底区域资源勘探、开发活动，有效保障责任单位及责任人的合法权益方面具有重要意义，在开展资源勘探开发活动的同时，要切实履行深海环境保护方面的各项义务。
          <br>&nbsp &nbsp &nbsp &nbsp 座谈结束后，调研组一行现场考察了研究所科技成果综合展厅、深海生物样品库、数据可视化系统等。
          <br>&nbsp &nbsp &nbsp &nbsp 4月12日，全国人大环资委调研组到海洋研究所就《中华人民共和国深海海底区域资源勘探开发法》（以下简称《深海法》）贯彻实施情况进行检查调研，全国人大环资委副主任委员黄献中、国家海洋局副局长孙书贤、中国大洋协会办公室书记胡学东等参加检查调研。海洋 所所长王凡、党委书记王辉、副所长李超伦等参加调研座谈。
          <br>&nbsp &nbsp &nbsp &nbsp 座谈会上，孙书贤副局长简要介绍了开展本次检查调研活动的背景和主要内容。王凡所长向调研组介绍了海洋所历史沿革、园区拓展、发展定位、规划布局、人才队伍及能力建设等情况，重点汇报了近年来开展的深海科学研究工作、《深海法》的贯彻实施情况及相关建议。
          <br>&nbsp &nbsp &nbsp &nbsp 黄献中副主任委员对研究所在深海研究领域取得的重大进展和成果给予充分肯定，指出涉及深海领域的单位要深入理解《深海法》的内涵，《深海法》在规范和管控深海海底区域资源勘探、开发活动，有效保障责任单位及责任人的合法权益方面具有重要意义，在开展资源勘探开发活动的同时，要切实履行深海环境保护方面的各项义务。
          <br>&nbsp &nbsp &nbsp &nbsp 座谈结束后，调研组一行现场考察了研究所科技成果综合展厅、深海生物样品库、数据可视化系统等。
        </p>
        <el-button round style="display:block;margin: 30px auto 0 auto;">&nbsp PDF下载 &nbsp</el-button>
      </div>
    </div>

    <div class="bottom">
      <div style="width: 1200px;margin: 0 auto">
        <div style="float: right;padding-top: 15px">
          <img :src="this.$store.state.img_QRcode" style="width: 90px" alt="">
        </div>
        <div style="padding-top: 35px">
          <img :src="this.$store.state.img_bottom_address" style="width: 16px" alt=""> {{this.$store.state.address}}
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <img :src="this.$store.state.img_bottom_postcode" style="width: 16px" alt=""> {{this.$store.state.postcode}}
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          版权所有 {{this.$store.state.copyright}}
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          备案号：{{this.$store.state.for_the_record}}
        </div>
        <div style="padding-top: 35px;text-align: center;font-size: 12px">
          {{this.$store.state.bottom_text}}
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <a href="http://192.168.83.122:39119/admin/login" style="color: white">管理员登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "专项管理_专家详情",
    data() {
      return {
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        img_logo: require('@/assets/img/logo.png'),
        img_专项管理_办法详情_download_blue: require('@/assets/img/专项管理_办法详情_download_blue.png'),
        img_专项管理_办法详情_download_write: require('@/assets/img/专项管理_办法详情_download_write.png'),
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/专项管理_专家详情_top.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition:'center center'
        },
      }
    }
  }
</script>

<style scoped>
  #header_bottom_menu {
    width: 50%;
    float: right;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
  }

  #header_bottom_menu .el-menu-item {
    font-size: 16px;
    height: 79px;
    padding-top: 9px
  }

  #header_bottom_menu .el-menu-item:hover {
    background: #dee7f0 !important;
    color: #000 !important;
  }

  #header_bottom_menu .el-menu-item.is-active {
    background: #dee7f0 !important;
  }
p{
  margin: 0;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
}
</style>
