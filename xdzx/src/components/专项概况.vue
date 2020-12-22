<template>
  <div class="child">
    <div style="height: 200px;width: 100%;position: absolute;top: 890px;z-index:-10;overflow: hidden;text-align: center"
         :style="backgroundDiv">
    </div>

    <div class="header_bottom" style="background-color: #004F9F;position: absolute;top:-100px;height:100px;z-index: 999;
transition: top 0.3s;
    -webkit-transition: top 0.3s;">
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

    <div class="center">
      <div>
        <el-menu :default-active="this.$route.path" router mode="horizontal" class="el-menu-demo"
                 background-color="#fafafa">
          <el-menu-item><a href="#zxgk/zxjj">专项简介</a></el-menu-item>
          <el-menu-item><a href="#zxgk/yjtd">研究团队</a></el-menu-item>
          <el-menu-item><a href="#zxgk/yjmb">研究目标</a></el-menu-item>
          <el-menu-item><a href="#zxgk/xmsz">项目设置</a></el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="content" style="margin-top: 0">
      <div class="zongti">
        <img id="zxgk/zxjj" :src="img_概况_简介_title" height="28px" alt="" style="margin-top: 0;padding-top: 80px">
        <img :src="img_概况_简介" height="376px" alt="">
        {{jianjie_text}}
      </div>

      <div class="tuandui" style="position: relative">
        <img id="zxgk/yjtd" :src="img_概况_团队_title" height="28px" alt=""
             style="margin-top:70px;padding-top: 80px">
        <div class="tuandui_nubmer">
          <div v-for="item in peopleList">
            <p class="name">{{item.name}}</p>
            <p>{{item.info}}<br v-if="item.info">{{item.address}}</p>
            <img :src=item.pic alt="" style="object-fit:cover;">
          </div>
        </div>
        <div class="show_all" style="text-align: center;"><span v-on:click="show_all()">{{show}}</span></div>
      </div>

      <div class="mubiao">
        <img id="zxgk/yjmb" :src="img_概况_目标_title" height="28px" alt="" style="padding-top: 80px">
        <div>
          <p class="title">专项总体目标：</p>
          <p>推动跨圈层重大理论和模式创新及多学科交叉集成</p>
        </div>
        <p>
          <img :src="img_概况_目标_bluepoint" alt="">
          阐明印太交汇区物质能量跨圈层交换过程机理
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>
        <p>
          <img :src="img_概况_目标_bluepoint" alt="">
          揭示印太交汇区典型俯冲带的构造演化特征及俯冲起始机制
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>
        <p>
          <img :src="img_概况_目标_bluepoint" alt="">
          解析印太交汇区海洋生物多样性中心形成和维持机制
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>
        <p>
          <img :src="img_概况_目标_bluepoint" alt="">
          构建能够反映印太交汇区物质能量中心形成的地球系统模式和区域高分辨率生态动力学模式
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>
        <p>
          <img :src="img_概况_目标_bluepoint" alt="">
          发起印太交汇区国际大科学计划，培育一支印太交汇区跨圈层研究国际化团队
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>
      </div>

      <div class="shezhi">
        <img id="zxgk/xmsz" :src="img_概况_设置_title" height="28px" alt="" style="padding-top: 80px">
        <div class="shezhi_shezhi">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div style="width: 100%;position: relative" :height="imgheight+'px'">
      <img :src="img_概况_map" width="100%" style="display: block" :height="imgheight+'px'" alt="">
      <img :src="img_概况_单位_title" width="143px" style="position: absolute;top: 13.29%;left: 18.75%" alt="">


      <div v-for="item in mapItem" class="mapPoint" :style="{bottom:item.bottom,right:item.right}">
        <img :src="img_专项概况_whitePoint" style="width: 100%;margin: 0" alt="">
        <div class="mapText" :style="backgroundDiv1">
          {{item.name}}
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
    name: "专项概况",
    watch: {
      '$route': function (to, from) {
        document.body.scrollTop = this.$store.state.top;
        document.documentElement.scrollTop = this.$store.state.top;
      }
    },
    data() {
      return {
        img_专项概况_whitePoint: require('@/assets/img/专项概况_whitePoint.png'),
        show: '展开全部',
        peopleList: [
          {name: '王凡', info: '中科院海洋大科学中心筹建工作组组长', address: '中科院海洋研究所所长', pic: require('@/assets/img/专项概况_团队_wf.png')},
          {name: '袁东亮', info: '研究员', address: '美国佛罗里达州立大学海洋学博士', pic: require('@/assets/img/专项概况_团队_ydl.png')},
          {name: '朱江', info: '研究员', address: '中国科学院大气物理研究所所长', pic: require('@/assets/img/专项概况_团队_zj.png')},
          {name: '高翔', info: '研究员', address: '2017年获得国家优秀青年科学基金（优青）', pic: require('@/assets/img/专项概况_团队_gx.png')},
          {name: '陈楠生', info: '研究员', address: '博士生导师', pic: require('@/assets/img/专项概况_团队_cns.png')},
          {name: '王春在', info: '', address: '中国科学院南海海洋研究所', pic: require('@/assets/img/专项概况_团队_wcz.png')},
          {name: '薛惠洁', info: '', address: '中国科学院南海海洋研究所', pic: require('@/assets/img/专项概况_团队_none.png')},
          {name: '于志强', info: '杰 青', address: '中国科学院广州地球化学研究所', pic: require('@/assets/img/专项概况_团队_yzq.png')},
          {name: '杨延涛', info: '', address: '北京大学', pic: require('@/assets/img/专项概况_团队_yyt.png')},
          {name: '李元龙', info: '', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_lyl.png')},
          {name: '丁瑞强', info: '优  青', address: '中国科学院大气物理研究所', pic: require('@/assets/img/专项概况_团队_drq.png')},
          {name: '王鑫', info: '优  青', address: '中国科学院南海海洋研究所', pic: require('@/assets/img/专项概况_团队_wx.png')},
          {name: '陈更新', info: '优  青', address: '中国科学院南海海洋研究所', pic: require('@/assets/img/专项概况_团队_cgx.png')},
          {name: '胡石建', info: '优  青', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_hsj.png')},
          {name: '李洪颜', info: '优  青', address: '中国科学院广州地球化学研究所', pic: require('@/assets/img/专项概况_团队_lhy.png')},
          {name: '刘传周', info: '优  青', address: '中国科学院地质地球物理研究所', pic: require('@/assets/img/专项概况_团队_lcz.png')},
          {name: '曾志刚', info: '杰  青', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_zzg.png')},
          {name: '赵  亮', info: '杰  青', address: '中国科学院地质地球物理研究所', pic: require('@/assets/img/专项概况_团队_zl.png')},
          {name: '陈华勇', info: '杰  青', address: '中国科学院广州地球化学研究所', pic: require('@/assets/img/专项概况_团队_chy.png')},
          {name: '张国良', info: '杰  青', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_zgl.png')},
          {name: '夏少红', info: '优  青', address: '中国科学院南海海洋研究所', pic: require('@/assets/img/专项概况_团队_xsh.png')},
          {name: '李忠海', info: '优  青', address: '中国科学院大学', pic: require('@/assets/img/专项概况_团队_lzh.png')},
          {name: '黄  力', info: '杰  青', address: '中国科学院微生物研究所', pic: require('@/assets/img/专项概况_团队_hl.png')},
          {name: '张琳琳', info: '泰山学者', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_zll.png')},
          {name: '郑  飞', info: '万人领军人才', address: '中国科学院大气物理研究所', pic: require('@/assets/img/专项概况_团队_zf.png')},
          {name: '刘传玉', info: '', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_lcy.png')},
          {name: '李熙晨', info: '', address: '中国科学院大气物理研究所', pic: require('@/assets/img/专项概况_团队_lxc.png')},
          {name: '柴  扉', info: '', address: '自然资源部第二海洋研究所', pic: require('@/assets/img/专项概况_团队_none.png')},
          {name: '张  鑫', info: '优  青', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_zx.png')},
          {name: '李晓峰', info: '', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_lxf.png')},
          {name: '栾振东', info: '中科院关键技术人才', address: '中国科学院海洋研究所', pic: require('@/assets/img/专项概况_团队_lzd.png')},
        ],
        imgheight: '',
        img_专项概况_团队_face: require('@/assets/img/专项概况_团队_face.png'),
        img_概况_简介_title: require('@/assets/img/child_概况_简介_title.png'),
        img_概况_简介: require('@/assets/img/child_概况_简介.png'),
        img_概况_map: require('@/assets/img/专项概况_map.png'),
        img_概况_map_bg: require('@/assets/img/专项概况_map_bg.png'),
        img_logo: require('@/assets/img/logo.png'),
        img_概况_团队: require('@/assets/img/专项概况_团队.png'),
        img_概况_团队_title: require('@/assets/img/专项概况_团队_title.png'),
        img_概况_目标_title: require('@/assets/img/专项概况_目标_title.png'),
        img_概况_设置_title: require('@/assets/img/专项概况_设置_title.png'),
        img_概况_单位_title: require('@/assets/img/专项概况_单位_title.png'),
        img_概况_目标_bluepoint: require('@/assets/img/专项概况_目标_bluepoint.png'),
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/专项概况_团队.png') + ')',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        backgroundDiv1: {
          backgroundImage: 'url(' + require('@/assets/img/专项概况_map_bg.png') + ')',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        mapItem:[{name: '中国科学院海洋研究所', bottom: '51%',right:'22%'},
          {name: '中国科学院地质与地球物理研究所', bottom: '60.4%',right:'25.4%'},
          {name: '中国科学院大气物理研究所', bottom: '61%',right:'25%'},
          {name: '中国科学院微生物研究所', bottom: '61.5%',right:'25.4%'},
          {name: '中国科学院烟台海岸带研究所', bottom: '54.5%',right:'21.4%'},
          {name: '中国科学院武汉病毒研究所', bottom: '34.0%',right:'26.7%'},
          {name: '中国科学院南海海洋研究所', bottom: '13.5%',right:'27.0%'},
          {name: '中国科学院广州地球化学研究所', bottom: '13.8%',right:'27.4%'},
          {name: '自然资源部第二海洋研究所', bottom: '34.3%',right:'21.5%'},
          {name: '北京大学', bottom: '61.5%',right:'25.9%'},
          {name: '中国科学院大学', bottom: '61.9%',right:'25.0%'},
          {name: '中国科学技术大学', bottom: '60.0%',right:'25.0%'},
          {name: '厦门大学', bottom: '20.3%',right:'21.9%'},],
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        navList_child: [
          {name: '/zxgk', navItem: '专项简介'},
          {name: '/zxgk', navItem: '研究内容'},
          {name: '/zxgk', navItem: '研究目标'},
          {name: '/zxgk', navItem: '项目设置'},
        ],
        jianjie_text: '印太交汇区是全球物质循环和能量交换最强烈的区域，该海域形成了全球海洋温度最高和面积最大的暖池区，' +
          '为驱动热带大气环流提供了主要的热源，同时，太平洋板块、欧亚板块与印澳板块在此俯冲汇聚，致使板块消亡、板内岩浆' +
          '活动和火山地震等构造活动极为活跃，也是全球生物多样性的研究热点区域。本专项将从地球系统科学视角出发，以物质能' +
          '量汇聚中心的形成和演变机制为核心，以其能量基础和物质基础为研究主线，围绕“海气汇聚的耦合动力过程及其生源要素' +
          '输运作用”、“板块俯冲的起始机制与过程及其对暖池起源演化的影响”、“海洋生物多样性中心形成与演变的多圈层机制' +
          '” 三个关键科学问题，在印太交汇区开展“跨圈层、跨领域、跨学科”综合研究，阐释印太交汇区物质能量跨圈层交换过程' +
          '机理，创建印太交汇区物质能量中心形成机制的理论框架，取得具有国际影响力的原创性成果，推动重大理论和模式创新，' +
          '占领国际学术制高点。',
      }
    },
    methods: {
      setSize() {
        let bili = 3840 / 1460;
        this.imgheight = document.body.clientWidth / bili; //这个比例是3840/1460
      },
      menu_change() {
        var isStopScroolTimer = null;
        var topValue = null;
        let menu = document.getElementsByClassName('header_bottom')[0];

        //获取滚动高度
        function getScrollTop() {
          var scrollTop = 0;
          if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
          } else if (document.body) {
            scrollTop = document.body.scrollTop;
          }
          return scrollTop;
        }

        function isStopScrool() {
          if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            menu.style.top = '-100px';


            // 判断此刻到顶部的距离是否和1秒前的距离相等
            if (getScrollTop() == topValue) {
              console.log('滑动结束' + '滑动高度：' + getScrollTop());
              clearInterval(isStopScroolTimer);
              isStopScroolTimer = null;
            } else if (getScrollTop() > topValue) {
              menu.style.position = 'fixed';
              menu.style.top = '0';
              topValue = getScrollTop();
            } else if (getScrollTop() < topValue) {
              console.log("向下滚动");
              topValue = getScrollTop();
            } else {
              topValue = getScrollTop();
            }
          }
        }

        document.onscroll = function () {
          if (isStopScroolTimer == null) {
            isStopScroolTimer = setInterval(function isStopScrool() {
              if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {


                // 判断此刻到顶部的距离是否和1秒前的距离相等
                if (getScrollTop() > topValue) {
                  menu.style.top = '-100px';

                  topValue = getScrollTop();
                } else if (getScrollTop() < topValue) {
                  menu.style.position = 'fixed';
                  menu.style.top = '0';
                  topValue = getScrollTop();
                } else {
                  topValue = getScrollTop();
                }
              }
            }, 100);
          }
        }
      },
      show_all() {
        let way = document.getElementsByClassName('tuandui_nubmer')[0];
        if (way.offsetHeight === 730) {
          way.style.height = '1440px';
          this.show = '收起';
        } else {
          way.style.height = '730px';
          this.show = '全部展开';
        }
      },
    },
    created() {
    },
    mounted() {
      window.addEventListener("resize", () => {
        this.setSize();
      }, false);

      this.menu_change();
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

  .zongti {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
  }

  .tuandui_nubmer {
    display: flex;
    flex-wrap: wrap;
    height: 730px;
    overflow: hidden;
    transition: height 0.3s;
    -webkit-transition: height 0.3s; /* Safari */
  }

  .tuandui_nubmer div {
    width: 290px;
    height: 150px;
    margin-right: 10px;
    margin-top: 30px;
    line-height: normal;
    transition: background-color 1.0s;
    -webkit-transition: background-color 0.5s; /* Safari */
  }

  .tuandui_nubmer div:hover {
    width: 290px;
    height: 150px;
    margin-right: 10px;
    margin-top: 30px;
    line-height: normal;
    background-color: #004F9F;
  }

  .tuandui_nubmer div:hover p {
    width: 149px;
    float: right;
    margin: 0;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
    padding-top: 10px;
  }

  .tuandui_nubmer div:hover .name {
    padding-top: 30px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
  }

  .tuandui_nubmer div img {
    width: 120px;
    height: 150px;
    margin: 0;
    display: inline;
  }

  .tuandui_nubmer div p {
    width: 149px;
    float: right;
    margin: 0;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    padding-top: 10px;
  }

  .tuandui_nubmer div .name {
    padding-top: 60px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    transition: padding-top 0.5s;
    -webkit-transition: padding-top 0.5s; /* Safari */
  }

  .mubiao p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-family: Microsoft YaHei;
    color: #333333;
  }

  .mubiao .title {
    float: left;
    font-weight: bold;
  }

  .mubiao div {
    width: 550px;
    margin: 0 auto;
  }

  .mubiao p img {
    position: relative;
    top: -4px;
    display: inline;
    height: 6px;
    margin: 0 5px 0 5px;
  }

  .shezhi_shezhi {
    display: flex;
    flex-wrap: wrap;
  }

  .shezhi_shezhi div {
    width: 590px;
    height: 200px;
    background-color: #666666;
    margin: 5px;
  }

  .show_all {
    width: 1200px;
    padding-top: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    align-content: center;
    cursor: pointer;
  }

  .mapPoint {
    position: absolute;

    width: 12px;
    height: 12px;
    margin: 0;
    cursor: pointer;
  }
  .mapPoint:hover .mapText{
    height: 86px;
  }

  .mapText {
    position: absolute;
    cursor: auto;
    bottom: 10px;
    right: -152px;
    width: 316px;
    height: 0;
    overflow: hidden;
    line-height: 86px;
    text-align: center;
    font-size: 18px;
    color: white;
    transition: height 0.3s;
    -webkit-transition: height 0.3s; /* Safari */
    z-index: 100;
  }
</style>
