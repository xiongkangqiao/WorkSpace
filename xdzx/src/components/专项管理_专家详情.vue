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
        <el-breadcrumb-item>专家详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="padding-top: 20px" :style="backgroundDiv">
        <div style="float: right;width: 960px;"  v-html="text_top">

                    <p style="font-weight: bold;font-size: 18px;font-family: Microsoft YaHei;color: #333333;margin: 0;">王凡</p>
                    <p style="padding-top: 5px;font-size: 14px;font-family: Microsoft YaHei;font-weight: 400;color: #333333;margin: 0;">1967年1月出生，理学博士、研究员、博士生导师。</p>
                    <p style="padding-top: 5px;font-size: 14px;font-family: Microsoft YaHei;font-weight: 400;color: #333333;margin: 0;">
                      国家人才推进计划—中青年科技创新领军人才入选者，973项目首席科学家。1985年至1995年就读于中国海洋大学物理海洋专
                      业，获理学博士学位； 1995年至1997年在中国科学院海洋研究所作博士后研究。2000年美国德克萨斯农工大学、2004年英国
                      国家海洋科学中心访问学者。1998年起在中国科学院海洋研究所工作，1999年起任研究员；2001年获得博士生导师资格；2001
                      年至2008年任中国科学院海洋研究所海洋环流与波动实验室主任；2008年起任中国科学院海洋与波动重点实验室主任；2007年
                      至2011年任中国科学院海洋研究所所长助理；2011年12月至2012年7月任中国科学院海洋研究所副所长、党委委员；2012年8月
                      至2013年5月任中国科学院资源环境科学与技术局副局长；2013年5月至2014年6月任中国科学院条件保障与财务局副局长；20
                      14年7月至2017年3月任中国科学院海洋研究所党委书记、副所长；2017年3月至今任中国科学院海洋研究所所长。
                    </p>

        </div>
        <div style="width: 190px;height: 220px;overflow: hidden;margin-right: 20px">
          <img :src="img_专项管理_专家_face" style="height: 220px;margin: 0" alt="">
        </div>
      </div>
      <div style="background-color: #EEF2F7;padding: 50px;margin-top: 70px;position: relative;min-height: 170px">
        <img :src="img_专项管理_专家详情_专家" style="position: absolute;top:-59px;left: 300px;height: 53px" alt="">
<div  v-html="text_center">
        <p style="font-weight: bold;font-size: 14px;font-family: Microsoft YaHei;color: #333333;margin: 0;">主要从事海洋环流动力学研究，在热带西太平洋和中国近海环流及中尺度过程、暖池热盐结构等研究方面取得了一些重要成果：</p>
        &nbsp &nbsp &nbsp &nbsp 1）热带西太平洋环流及中尺度过程方面，揭示了上层环流各主要分量的季节变化特征，披露了海面高度的半年变化、北赤道流分叉纬度的不规则季节变化，以及赤道逆流的年际变化特征及其机制，利用遥感和现场资料合成刻画了中尺度涡旋的三维结构及其空间演化特征；建立了次表层潜流的动力学概念模式，初步解释了大洋西边界潜流的生成机制；建立并求解了热带海洋余环流基本方程组，指出赤道波致
        Lagrange 余流是赤道环流中不可忽略的组成部分；
        <br>&nbsp &nbsp &nbsp &nbsp 2）热带西太平洋暖池次表层结构和变异方面，基于实测资料发现和命名了主体位于暖池内部的北太平洋热带次表层水(TSSW)，发现了年际变异信号的热带-热带外经向次表层传递通道；揭示了暖池内外不同性质的次表层水团之间存在交错嵌入现象——热盐入侵、指出其季节和年际变异及其与赤道流系的关系密切，揭示了暖池中北部次表层盐度的空间变化特征和南北反位相年际变异特征、指出其主要受环流动力过程控制；
        <br>&nbsp &nbsp &nbsp &nbsp 3）中国近海环流及中尺度过程方面，基于历史资料定量估算了过去40年海表温度的变化趋势，揭示了黄海暖流锋面对冬季黄海暖舌西偏的影响机制，阐明了中国近海温跃层和逆温跃层的分布、演化特征及机制，发现冬季南黄海西部N
        形锋面并解释了其成因。此外，还主持完成了863船载海洋环境探测系统示范建设，主持完成了中国科学院黄海和东海海洋科学观测研究网络建设。
        <br>&nbsp &nbsp &nbsp &nbsp 4)担任中国科学院战略性先导专项重点任务二“西太主流系观测网构建及在海洋环境和气候预报中的应用”负责人，带领开展热带西太平洋暖池变异及其气候效应的研究，进行了热带西太平洋潜标观测网的建设与维护，初步实现了潜标数据的实时化传输。
        <br>&nbsp &nbsp &nbsp &nbsp 自1998年以来，先后主持973项目、863重大项目课题、国家自然科学基金重大项目课题、面上项目、国家专项课题、中科院创新重要方向项目等科研课题20余项；发表论文140余篇（含SCI、EI论文60余篇），出版专著3部。入选首批国家人才推进计划——中青年科技创新领军人才，先后获得全国优秀科技工作者、山东青年五四奖章、山东省优秀青年知识分子标兵、青岛市青年科技奖，享受国务院政府特殊津贴。
        <br>&nbsp &nbsp &nbsp &nbsp IPCC第五次气候变化评估报告主要作者，北太平洋海洋科学组织（PICES）物理海洋与气候委员会委员、气候变化项目评估组成员，国际西北太平洋海洋环流与气候计划（NPOCE）科学指导委员会委员；中国海洋湖沼学会常务理事、海洋与气候分会理事长，中国海洋发展研究会常务理事，中国海洋湖沼学会计算物理海洋专业委员会、中国海洋学会海气相互作用专业委员会副主任委员，国际科技数据委员会（CODATA）中国全国委员会、中国海洋科学研究委员会（SCOR）、中国气候研究委员会（WCRP）委员；《海洋与湖沼》、《海洋科学》、《海洋科学集刊》编委；中国科学院大学教研室主任、岗位教授，中国海洋大学兼职教授。
</div>
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
        text_top: '',
        text_center:'',
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
        img_专项管理_专家_face: '',
        img_专项管理_专家详情_专家: require('@/assets/img/专项管理_专家详情_专家.png'),
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/专项管理_专家详情_top.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
      }
    },
    methods: {
      getData() {
        let that = this;
        let id = this.$route.query.id;
        this.axios.post(this.$store.state.interface+"/web/experts/list?id="+id)
          .then(function (res) {
            that.text_top = res.data.data.records[0].abstractDesc;
            that.text_center = res.data.data.records[0].details;
            that.img_专项管理_专家_face=res.data.data.records[0].picUrl;
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      }
    },
    created() {
      this.getData();
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

  p {
    /*font-size: 14px;*/
    /*font-family: Microsoft YaHei;*/
    /*font-weight: 400;*/
    /*color: #333333;*/
    /*margin: 0;*/
  }
</style>
