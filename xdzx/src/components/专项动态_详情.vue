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

    <div class="content" style="padding: 40px 30px 40px 30px;background-color: #e3eef5">
      <div style="background-color: white;padding: 40px;position: relative;-ms-box-shadow: 0 1px 5px 0px rgba(38, 77, 112, 0.2);
-o-box-shadow: 0 1px 5px 0 rgba(38, 77, 112, 0.2);
-moz-box-shadow: 0 1px 5px 0 rgba(38, 77, 112, 0.2);
-webkit-box-shadow: 0 1px 5px 0 rgba(38, 77, 112, 0.2);
box-shadow: 0 1px 5px 0 rgba(38, 77, 112, 0.2);">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="position: absolute;top: -25px;left: 0">
          <el-breadcrumb-item :to="{ path: jump }">{{jumpName}}</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div style="font-size: 30px;text-align: center">{{articleTitle}}</div>
        <div style="font-size: 13px;text-align: center;color: #909399">{{articleTime}}
          <span style="padding-left: 30px">来源：{{articleData.data.originSource}}</span>
          <span style="padding-left: 30px">{{articleData.data.visits}}次访问</span>
        </div>

        <div id="article" style="min-height: 400px" v-html="text">
          {{text}}
        </div>

        <div v-if="show">
          <div style="font-size: 16px;font-weight: bold">附件下载：</div>
          <div v-for="item in articleData.data.lstAttachement"><a :href="item.fileUrl">{{item.fileName}}</a></div>
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
        jump: '/zxdt',
        jumpName: '专项动态',
        articleTitle: '',
        articleTime: '',
        show:false,
        articleData: {
          "code": "0",
          "msg": "请求成功",
          "data": {
            "title": "20201103测试",
            "tagStr": "实时动态",
            "details": "<p>范德萨发萨芬打发大水发打发打发发打发打发打发打发四大发顺丰打发大师傅打发打发打发打发打发</p>",
            "publishTime": "",
            "originSource": "",
            "visits": null,
            "lstAttachement": [
              {
                "fileName": "iap_temp.png",
                "fileUrl": null
              },
              {
                "fileName": "daiminhan.png",
                "fileUrl": null
              },
              {
                "fileName": "myGrid_u.asc",
                "fileUrl": null
              }
            ]
          }
        },
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        text: '<div style="text-align: center;padding: 100px"></div>',
        img_logo: require('@/assets/img/logo.png'),

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
        let subject = this.$route.query.subjectType;
        this.axios.post(this.$store.state.interface+"/web/news/detail", {"newsId": id, "subject": subject})
          .then(function (res) {
            that.articleData = res.data;
            that.text = res.data.data.details;
            that.articleTitle = that.articleData.data.title;
            that.articleTime = that.articleData.data.publishTime;
            if(that.articleData.data.lstAttachement.length){
              that.show=true

            }else {
              that.show=false
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      },
      getData_zhuanxiang() {
        let that = this;
        let id = this.$route.query.id;
        let subject = this.$route.query.subjectType;
        this.axios.post(this.$store.state.interface+"/web/managemethod/detail", {"newsId": id, "subject": subject})
          .then(function (res) {
            that.articleData = res.data;
            that.text = res.data.data.details;
            that.articleTitle = that.articleData.data.title;
            that.articleTime = that.articleData.data.publishTime;
            if(that.articleData.data.lstAttachement.length){
              that.show=true

            }else {
              that.show=false
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      },
      hit() {
        let that = this;
        let id = this.$route.query.id;
        let subject = this.$route.query.subjectType;
        this.axios.post(this.$store.state.interface+"/web/news/hit", {"newsId": id, "subject": subject})
          .then(function (res) {

          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      },
      showJump() {
        let subject = this.$route.query.subjectType;
        let jumpName;
        let jump;
        switch (subject) {
          case '0':
            jumpName = '专项动态';
            jump = '/zxdt';
            break;
          case '1':
            jumpName = '亮点成果';
            jump = '/ldcg';
            break;
          case '2':
            jumpName = '合作交流';
            jump = '/hzjl';
            break;
          case '3':
            jumpName = '专项管理';
            jump = '/zxgl';
            break;
        }
        this.jump = jump;
        this.jumpName = jumpName;
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
      }
    },
    created() {
      if(this.$route.query.subjectType==3){
        this.getData_zhuanxiang()
      }else{
      this.getData();
      }
    },
    mounted() {
      this.hit();
      this.showJump();
      // this.menu_change();
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

  /deep/ img {
    max-width: 1100px !important;
    margin: 0 auto !important;
  }
  /*/deep/ #article {*/
  /*  font-size: 16px;*/
  /*}*/
</style>
