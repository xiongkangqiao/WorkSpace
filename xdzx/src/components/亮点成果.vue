<template>
  <div class="child">
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
      <div class="menuChild" v-for="item in menuChild" @click="clickMenu(item.newsType)">
        {{item.name}}
      </div>
    </div>
    <div class="content" style="margin-top: 10px">
      <el-table :data="tableData.data.records" style="width: 100%;min-height: 580px;" :show-header="false" @row-click="clickNews">
        <el-table-column prop="title" label="" width="1000"></el-table-column>
        <el-table-column prop="updateTime" label="" width="200"></el-table-column>
      </el-table>

      <div class="tabListPage" style="text-align: center;padding-top: 20px">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="10"
                       :total="totalCount"
                       layout="total, prev, pager, next, jumper">
        </el-pagination>
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
    data() {
      return {
        // 默认显示第几页
        currentPage: 1,
        // 总条数，根据接口获取数据长度(注意：这里不能为空)
        totalCount: 0,

        tableData:{
          "code": "0",
          "msg": "请求成功",
          "data": {
            "records": [
              {
                "id": "8",
                "title": "国内交流-03再青岛阿拉蕾的放大及时反馈数量大幅收到啊",
                "newsType": "实时动态",
                "picUrl": "",
                "updateTime": "2020-09-29"
              },
              {
                "id": "7",
                "title": "国内交流-02再青岛阿拉蕾的放大及时反馈数量大幅收到啊",
                "newsType": "实时动态",
                "picUrl": "",
                "updateTime": "2020-09-29"
              },
              {
                "id": "6",
                "title": "国内交流-01再青岛阿拉蕾的放大及时反馈数量大幅收到啊",
                "newsType": "实时动态",
                "picUrl": "",
                "updateTime": "2020-09-29"
              }
            ],
            "total": "3",
            "size": "10",
            "current": "1",
            "orders": [],
            "searchCount": true,
            "pages": "1"
          }
        },

        img_logo: require('@/assets/img/logo.png'),
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        menuChild: [
          {name: '论文',newsType:0},
          {name: '专利',newsType:1},
          {name: '学术报告',newsType:2},
          {name: '获奖',newsType:3},
          {name: '其他',newsType:4}
        ],
        newsType:0,
      }
    },
    methods: {
      clickNews(row){
        this.$router.push({path:'/zxdt/xq',query: {id: row.id, subjectType: '1'}});
        // this.$router.push({path:'/home',query: {id:'1'}})
      },
      // 将页码，及每页显示的条数以参数传递提交给后台
      getData(n1) {
        // 这里使用axios，使用时请提前引入
        this.axios.post(this.$store.state.interface+'/web/sci/list',{
          "newsType": this.newsType,
          //新闻类型
          "pageNumber": n1,
          // 显示第几页
          "pageSize": 10
          // 每页显示的条数
        })
          .then(function (res) {
            //成功
            this.tableData=res.data;
            this.totalCount=parseInt(this.tableData.data.total);
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))

      },

      // 分页
      // 每页显示的条数
      // handleSizeChange(val) {
      //   // 改变每页显示的条数
      //   this.PageSize = val
      //   // 点击每页显示的条数时，显示第一页
      //   this.getData(val, 1)
      //   // 注意：在改变每页显示的条数时，要将页码显示到第一页
      //   this.currentPage = 1
      // },
      // 显示第几页
      handleCurrentChange(val) {
        // 改变默认的页数
        this.currentPage = val
        // 切换页码时，要获取每页显示的条数
        this.getData(val)
      },

      clickMenu(newsType){
        let center=document.getElementsByClassName('center')[0];
        let menuDiv=center.getElementsByTagName('div');
        for(let i=0;i<menuDiv.length;i++){
          menuDiv[i].className='menuChild';
        }
        document.getElementsByClassName('menuChild')[newsType].className='this';
        this.newsType=newsType;
        this.getData(1);
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
    created: function () {

    },
    mounted() {
      this.clickMenu(0);
      this.menu_change();
    },
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

  /deep/ .el-table::before {
    height: 0;
  }

  /deep/ .el-table .cell{
    cursor: pointer;
  }
</style>
