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


  </div>
</template>

<script>
  export default {
    name: "专项概况",
    watch: {
      '$route': function(to,from){
        document.body.scrollTop = this.$store.state.top;
        document.documentElement.scrollTop = this.$store.state.top;
      }
    },
    data() {
      return {
        img_logo: require('@/assets/img/logo.png'),
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/gaikuang', navItem: '专项概况'},
          {name: '/dongtai', navItem: '专项动态'},
          {name: '/chengguo', navItem: '亮点成果'},
          {name: '/pingtai', navItem: '共享平台'},
          {name: '/jiaoliu', navItem: '合作交流'},
          {name: '/guanli', navItem: '专项管理'},
        ],
        content_text: '中国科学院A类战略性先导科技专项“地球大数据科学工程”(“地球大数据”专项)于2018年1月1日正式立项,' +
          '执行期5年。专项汇集了中国科学院及国内外众多单位的优势资源，致力于构建包含资源、环境、生物、生态等多个领域的大' +
          '数据与云服务共享平台，重点开展数字-带-路、全景美丽中国、生物多样性与生态安全、三维信息海洋和时空三极环境等方面' +
          '的基础与应用研究,建设国际领先的数字地球科学平台，推动地球大数据领域的技术创新与地球系统科学的重大突破和科学发现' +
          '，实现全方位宏观决策支持和社会公众知识传播服务，为“一带一路”、“数字中国"、人类命运共同体和联合国可持续发展目标等' +
          '国内外重大战略提供科技支撑和决策支持。',
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/专项概况_背景图.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition:'center center'
        },
        img: require('@/assets/img/专项概况_背景图.png'),
      }
    },
    created() {
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
</style>
