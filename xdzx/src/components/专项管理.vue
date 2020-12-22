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

    <div class="center" style="">
      <div style="width: 840px">
        <el-menu :default-active="this.$route.path" router mode="horizontal" class="el-menu-demo"
                 background-color="#fafafa">
          <el-menu-item><a href="#zxgl/zxztz">专项总体组</a></el-menu-item>
          <el-menu-item><a href="#zxgl/zxbgs">专项办公室</a></el-menu-item>
          <el-menu-item><a href="#zxgl/glbf">专项管理办法</a></el-menu-item>
          <el-menu-item><a href="#zxgl/gywm">关于我们</a></el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="content">
      <div class="tuandui" style="position: relative">
        <img id="zxgl/zxztz" :src="img_专项管理_总体_title" height="28px" alt="" style="margin-top: 0;padding-top: 80px">
        <div class="tuandui_nubmer">
          <div v-for="item in peopleList">
            <router-link :to="{path:'/zxgl/zjxq', query:{id:item.id}}">
              <img :src=item.pic alt="">
              <p class="name">{{item.name}}</p>
              <p>{{item.job1}}<br>{{item.job2}}</p>
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mubiao">
        <img id="zxgl/zxbgs" :src="img_专项管理_办公室_title" height="28px" alt="" style="padding-top: 80px">
        <p class="title">职能</p>
        <p v-for="item in dutyList">
          <img :src="img_概况_目标_bluepoint" alt="">
          {{item.info}}
          <img :src="img_概况_目标_bluepoint" alt="">
        </p>


        <div :style="backgroundDiv" class="peoples">
          <div class="people" style="top:26px;left: 220px">{{office_people[0].name}}<br>{{office_people[0].job}}
            <div class="info" style="height: 160px">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;left: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 39px;left: 116px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_0" height="30px" width="110px"
                      style="position: absolute;top: 44px;left:12px;"></canvas>
              <div style="top:5px;left:113px;">{{office_people[0].info}}</div>
            </div>
          </div>
          <div class="people" style="top:80px;left: 355px">{{office_people[1].name}}<br>{{office_people[1].job}}
            <div class="info" style="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;left: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 39px;left: 116px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_1" height="30px" width="110px"
                      style="position: absolute;top: 44px;left:12px;"></canvas>
              <div style="top:5px;left:113px;">{{office_people[1].info}}</div>
            </div>
          </div>
          <div class="people" style="top:90px;left: 78px">{{office_people[2].name}}<br>{{office_people[2].job}}
            <div class="info" style="right: 50px;left: auto">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;right: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 39px;right: 126px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_2" height="30px" width="120px"
                      style="position: absolute;top: 44px;right:12px"></canvas>
              <div style="top:5px;right:123px;left: auto">{{office_people[2].info}}</div>
            </div>
          </div>
          <div class="people" style="top:223px;left: 422px">{{office_people[3].name}}<br>{{office_people[3].job}}
            <div class="info" style="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;left: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 39px;left: 106px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_3" height="30px" width="100px"
                      style="position: absolute;top: 44px;left:12px;"></canvas>
              <div style="top:5px;left:103px;">{{office_people[3].info}}</div>
            </div>
          </div>
          <div class="people" style="top:233px;left: 20px">{{office_people[4].name}}<br>{{office_people[4].job}}
            <div class="info" style="right: 50px;left: auto">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;right: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 39px;right: 126px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_4" height="30px" width="120px"
                      style="position: absolute;top: 44px;right:12px"></canvas>
              <div style="top:5px;right:123px;left: auto">{{office_people[4].info}}</div>
            </div>
          </div>
          <div class="people" style="top:366px;left: 351px">{{office_people[5].name}}<br>{{office_people[5].job}}
            <div class="info" style="top: -16px">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;left: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 109px;left: 126px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_5" height="30px" width="120px"
                      style="position: absolute;top: 86px;left:12px;"></canvas>
              <div style="top:5px;left:123px;">{{office_people[5].info}}</div>
            </div>
          </div>
          <div class="people" style="top:366px;left: 86px">{{office_people[6].name}}<br>{{office_people[6].job}}
            <div class="info" style="top: -16px;right: 50px;left: auto">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;right: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 109px;right: 126px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_6" height="30px" width="120px"
                      style="position: absolute;top: 86px;right:12px"></canvas>
              <div style="top:5px;right:123px;left: auto">{{office_people[6].info}}</div>
            </div>
          </div>
          <div class="people" style="top:425px;left: 223px">{{office_people[7].name}}<br>{{office_people[7].job}}
            <div class="info" style="top: -16px;right: 50px;left: auto">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 74px;right: 0;width: 12px;margin: 0" alt="">
              <img :src="img_专项管理_办公室_point" style="position: absolute;top: 109px;right: 126px;width: 12px;margin: 0"
                   alt="">
              <canvas id="canvas_7" height="30px" width="120px"
                      style="position: absolute;top: 86px;right:12px"></canvas>
              <div style="top:5px;right:123px;left: auto">{{office_people[7].info}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="banfa">
        <img id="zxgl/glbf" :src="img_专项管理_办法_title" height="28px" alt="" style="padding-top: 80px">
        <div class="wayFather" style="width: 1200px;height: 346px;position: relative">
          <div class="banfa_banfa">
            <div v-for="item in methodList.data.records">
              <router-link :to="{path:'/zxdt/xq', query:{subjectType:3,id:item.id}}">
                <p class="time">发布时间：{{item.publishTime}}</p>
                <p class="title">{{item.title|ellipsis_1}}</p>
                <hr>
                <p class="download">PDF下载</p>
              </router-link>
            </div>
          </div>
          <div class="show_all" style="text-align: center;"><span v-on:click="show_all()">{{show}}</span></div>
          <div v-if="this.$store.state.cover" class="cover">
            仅向管理人员提供，查看请先
            <el-button type="primary" size="mini" @click="dialogFormVisible = true" round>登录</el-button>
          </div>
        </div>
      </div>

      <el-dialog title="登录" :visible.sync="dialogFormVisible" width="400px" style="margin-top: calc(15vh)">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" style="width: 200px" show-password></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="login">登 录</el-button>
        </div>
      </el-dialog>

      <div class="guanyu">
        <img id="zxgl/gywm" :src="img_专项管理_关于_title" height="28px" alt="" style="padding-top: 70px">
        <div class="guanyu_guanyu">
          <div>
            <img :src="img_专项管理_关于_地址" height="52px" alt="">
            地址：青岛市市南区南海路7号
          </div>
          <div>
            <img :src="img_专项管理_关于_邮编" height="52px" alt="">
            邮编：266071
          </div>
          <div>
            <img :src="img_专项管理_关于_邮箱" height="52px" alt="">
            邮箱：XDB42@qdio.ac.cn
          </div>
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
    filters: {
      ellipsis_1(value) {
        if (!value) return '';
        if (value.length > 15) {
          return value.slice(0, 15) + '...'
        }
        return value
      },
    },
    data() {
      return {
        dutyList: [
          {info: '负责协助专项领衔科学家进行专项的整体管理'},
          {info: '组织编报年度计划、年度预算、年度总结、中期总结、验收等过程管理工作'},
          {info: '组织召开专项学术交流与年度工作会议'},
          {info: '负责人员、各级任务的调整与变更上报等相关管理细则的制定与落实'},
          {info: '负责统筹协调相关资源，保障专项顺利实施'},
        ],
        methodList: {
          "code": "0",
          "msg": "请求成功",
          "data": {
            "records": [
              {
                "id": "7",
                "title": "《印太交汇区海洋物质能量中心形成演化过程与机制》专项数据管理办法",
                "abstractDesc": "",
                "newsType": null,
                "picUrl": null,
                "publishTime": null
              }
            ],
            "total": "2",
            "size": "100",
            "current": "1",
            "orders": [],
            "searchCount": true,
            "pages": "1"
          }
        },
        peopleList: [
          {
            id: 1,
            name: '王凡',
            pic: require('@/assets/img/专项管理_总体_wf.png'),
            job1: '中科院海洋大科学中心筹建工作组组长',
            job2: '中科院海洋研究所所长'
          },
          {id: 2, name: '胡敦欣', pic: require('@/assets/img/专项管理_总体_hdx.png'), job1: '著名物理海洋学家', job2: '中科院院士'},
          {id: 3, name: '戴民汉', pic: require('@/assets/img/专项管理_总体_dmh.png'), job1: '化学海洋学家', job2: '中科院院士'},
          {
            id: 4,
            name: '朱江',
            pic: require('@/assets/img/专项管理_总体_zj.png'),
            job1: '中科院大气物理研究所所长',
            job2: '全球海洋资料同化试验(GODAE)科学委员会成员'
          },
          {id: 5, name: '高翔', pic: require('@/assets/img/专项管理_总体_gx.png'), job1: '研究员', job2: '俯冲带地球动力学领域杰出青年科学家'},
          {id: 6, name: '陈楠生', pic: require('@/assets/img/专项管理_总体_cns.png'), job1: '加拿大西蒙菲沙大学终身正教授', job2: '研究员'},
          {id: 7, name: '孙卫东', pic: require('@/assets/img/专项管理_总体_swd.png'), job1: '海洋所深海研究中心主任', job2: '理学博士'},
          {id: 8, name: '徐奎栋', pic: require('@/assets/img/专项管理_总体_xkd.png'), job1: '研究员', job2: '博士生导师'},
          {id: 9, name: '尹宝树', pic: require('@/assets/img/专项管理_总体_ybs.png'), job1: '研究员', job2: '博士生导师'},
          {id: 10, name: '曾志刚', pic: require('@/assets/img/专项管理_总体_zzg.png'), job1: '研究员', job2: '国家973项目首席科学家'},
          {id: 11, name: '王春在', pic: require('@/assets/img/专项管理_总体_wcz.png'), job1: '研究员', job2: '全球地学领域Top1%高引用科学家'},
        ],
        show: '全部展开',
        img_概况_简介: require('@/assets/img/child_概况_简介.png'),
        img_logo: require('@/assets/img/logo.png'),
        img_概况_团队: require('@/assets/img/专项概况_团队.png'),
        img_专项管理_总体_title: require('@/assets/img/专项管理_总体_title.png'),
        img_专项管理_办公室_title: require('@/assets/img/专项管理_办公室_title.png'),
        img_专项管理_办公室_point: require('@/assets/img/专项管理_办公室_point.png'),
        img_专项管理_办法_title: require('@/assets/img/专项管理_办法_title.png'),
        img_专项管理_关于_title: require('@/assets/img/专项管理_关于_title.png'),
        img_概况_目标_bluepoint: require('@/assets/img/专项概况_目标_bluepoint.png'),
        img_专项管理_关于_地址: require('@/assets/img/专项管理_关于_地址.png'),
        img_专项管理_关于_邮编: require('@/assets/img/专项管理_关于_邮编.png'),
        img_专项管理_关于_邮箱: require('@/assets/img/专项管理_关于_邮箱.png'),
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/专项管理_办公室.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        office_people: [{
          name: '赵君 (男)',
          job: '主任',
          info: '全面负责先导专项办公室的运行与专项的管理工作；负责联系主管业务局；负责联系专家委员会等。',
        }, {
          name: '赵君 (女)',
          job: '综合业务主管',
          info: '负责提交专项的年度计划、年度预算、年度总结报告等全过程管理工作；配合财务部门对经费下拨、预算执行等财务工作；负责专项和项目成果的汇总等相关文书工作以及主任交办的其他工作。',
        }, {
          name: '王坤晶',
          job: '财务主管',
          info: '负责专项经费外协、外拨、科目调账等财务管理工作。',
        }, {
          name: '尹慧洁',
          job: '资产主管',
          info: '负责协助专项管理大型设备的采购、验收以及大型设备预算的执行。',
        }, {
          name: '王永强',
          job: '样品主管',
          info: '负责专项和项目采集的各类样品的统计及保管。',
        }, {
          name: '杨风帆',
          job: '国际合作主管',
          info: '负责专项航次外事申报及相关国际合作事务协调等工作。',
        }, {
          name: '姜秋富',
          job: '航次主管',
          info: '负责协助进行航次设计及航次相关事务的协调，负责样本、数据的统计汇总与移交。',
        }, {
          name: '郑双强',
          job: '数据主管',
          info: '负责专项数据的汇交和管理，形成专项数据集。',
        }],
        navList: [
          {name: '/', navItem: '首页'},
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          password: '',
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      initCanvas() {
        var canvas_0 = document.getElementById("canvas_0");
        var ctx_0 = canvas_0.getContext("2d");
        ctx_0.setLineDash([5, 5]);
        ctx_0.moveTo(0, 30);
        ctx_0.lineTo(40, 1);
        ctx_0.lineTo(110, 1);
        ctx_0.strokeStyle = "#004F9F";
        ctx_0.stroke();
        var canvas_1 = document.getElementById("canvas_1");
        var ctx_1 = canvas_1.getContext("2d");
        ctx_1.setLineDash([5, 5]);
        ctx_1.moveTo(0, 30);
        ctx_1.lineTo(40, 1);
        ctx_1.lineTo(110, 1);
        ctx_1.strokeStyle = "#004F9F";
        ctx_1.stroke();
        var canvas_2 = document.getElementById("canvas_2");
        var ctx_2 = canvas_2.getContext("2d");
        ctx_2.setLineDash([5, 5]);
        ctx_2.moveTo(120, 30);
        ctx_2.lineTo(80, 1);
        ctx_2.lineTo(0, 1);
        ctx_2.strokeStyle = "#004F9F";
        ctx_2.stroke();
        var canvas_3 = document.getElementById("canvas_3");
        var ctx_3 = canvas_3.getContext("2d");
        ctx_3.setLineDash([5, 5]);
        ctx_3.moveTo(0, 30);
        ctx_3.lineTo(40, 1);
        ctx_3.lineTo(100, 1);
        ctx_3.strokeStyle = "#004F9F";
        ctx_3.stroke();
        var canvas_4 = document.getElementById("canvas_4");
        var ctx_4 = canvas_4.getContext("2d");
        ctx_4.setLineDash([5, 5]);
        ctx_4.moveTo(120, 30);
        ctx_4.lineTo(80, 1);
        ctx_4.lineTo(0, 1);
        ctx_4.strokeStyle = "#004F9F";
        ctx_4.stroke();
        var canvas_5 = document.getElementById("canvas_5");
        var ctx_5 = canvas_5.getContext("2d");
        ctx_5.setLineDash([5, 5]);
        ctx_5.moveTo(0, 0);
        ctx_5.lineTo(40, 29);
        ctx_5.lineTo(120, 29);
        ctx_5.strokeStyle = "#004F9F";
        ctx_5.stroke();
        var canvas_6 = document.getElementById("canvas_6");
        var ctx_6 = canvas_6.getContext("2d");
        ctx_6.setLineDash([5, 5]);
        ctx_6.moveTo(120, 0);
        ctx_6.lineTo(80, 29);
        ctx_6.lineTo(0, 29);
        ctx_6.strokeStyle = "#004F9F";
        ctx_6.stroke();
        var canvas_7 = document.getElementById("canvas_7");
        var ctx_7 = canvas_7.getContext("2d");
        ctx_7.setLineDash([5, 5]);
        ctx_7.moveTo(120, 0);
        ctx_7.lineTo(80, 29);
        ctx_7.lineTo(0, 29);
        ctx_7.strokeStyle = "#004F9F";
        ctx_7.stroke();
      },
      show_all() {
        let way = document.getElementsByClassName('banfa_banfa')[0];
        let wayFather = document.getElementsByClassName('wayFather')[0];
        if (this.show === '全部展开') {
          wayFather.style.height = 'auto';
          way.style.height = 'auto';
          this.show = '收起';
        } else {
          wayFather.style.height = '346px';
          way.style.height = '316px';
          this.show = '全部展开';
        }
      },

      get_data() {
        this.axios.post(this.$store.state.interface + '/web/managemethod/list', {
          "newsType": 1,
          "pageNumber": 1,
          "pageSize": 100
        })
          .then(function (res) {
            //成功
            this.methodList = res.data;//此为后台响应回来的数据

          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
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
      login() {
        let that = this;
        this.axios.post(this.$store.state.interface + '/web/user/login', {
          "username": this.form.name,
          "password": this.form.password,

        })
          .then(function (res) {
            //成功
            if (res.data.code == 0) {
              that.$store.commit("coverChange", 0);
              that.openSuccess();
              that.dialogFormVisible = false;
            } else {
              that.openError()
            }

          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      },

      openSuccess() {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      },
      openError() {
        this.$message.error('用户名或密码错误');
      }
    },
    created() {
      this.get_data()
    },
    mounted() {
      this.initCanvas();
      this.menu_change()

    },
    updated() {
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
  }

  .tuandui_nubmer div {
    width: 367px;
    height: 170px;
    margin-right: 30px;
    margin-top: 20px;
    line-height: normal;
    border: 1px solid #d4d6d9;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s; /* Safari */
  }

  .tuandui_nubmer div:hover {
    background-color: #E9EDF5;
  }

  .tuandui_nubmer div span {
    position: absolute;
    bottom: 0;
    left: 110px;
    width: 60px;
    height: 30px;
    background-color: #004F9F;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    line-height: 30px;
  }

  .tuandui_nubmer div img {
    width: 150px;
    height: 170px;
    margin: 0;
    display: block;
    float: left;
  }

  .tuandui_nubmer div p {
    width: 190px;
    float: right;
    margin: 0;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #343434;
  }

  .tuandui_nubmer div .name {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .mubiao p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-family: Microsoft YaHei;
    color: #333333;
  }

  .mubiao .title {
    font-weight: bold;
  }

  .mubiao .peoples {
    width: 512px;
    height: 512px;
    margin: 60px auto 0 auto;
    position: relative;
  }

  .mubiao .peoples img {
    z-index: 10;
  }

  .mubiao .peoples canvas {
    z-index: 10;
  }

  .mubiao .peoples .people {
    position: absolute;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    text-align: center;
    cursor: pointer;
  }

  .mubiao .peoples .people .info {
    position: absolute;
    width: 0;
    height: 180px;
    top: -80px;
    left: 50px;
    overflow: hidden;
    transition: width 0.4s;
    z-index: 5;
    -webkit-transition: width 0.4s; /* Safari */
    cursor: default;
  }

  .info div {
    position: absolute;
    top: 0;
    left: 150px;
    width: 305px;
    height: 130px;
    padding: 10px 20px;
    color: #333333;
    line-height: 1.5;
    text-align: left;
    background-color: white;
    box-shadow: -5px 0 5px -1px #F3F3F3 /*左边阴影*/,
    0 -5px 5px -1px #F3F3F3 /*顶部阴影*/,
    0 5px 5px -1px #F3F3F3 /*底部阴影*/,
    5px 0 5px -1px #F3F3F3 /*右边阴影*/;
  }

  .mubiao .peoples .people:hover {
    color: #004F9F;
    font-weight: bold;
  }

  .mubiao .peoples .people:hover .info {
    width: 485px;
    font-weight: 400;
  }

  .mubiao p img {
    position: relative;
    top: -4px;
    display: inline;
    height: 6px;
    margin: 0 5px 0 5px;
  }

  .banfa_banfa {
    display: flex;
    flex-wrap: wrap;
    height: 316px;
    overflow: hidden;
    transition: height 0.3s;
    -webkit-transition: height 0.3s; /* Safari */
  }

  .banfa_banfa div {
    width: 577px;
    height: 136px;
    background-color: white;
    border: 1px solid #EAEAEA;
    margin: 10px;
    cursor: pointer;
  }

  .banfa_banfa div:hover {
    box-shadow: -5px 0 5px -1px #F3F3F3 /*左边阴影*/,
    0 -5px 5px -1px #F3F3F3 /*顶部阴影*/,
    0 5px 5px -1px #F3F3F3 /*底部阴影*/,
    5px 0 5px -1px #F3F3F3 /*右边阴影*/;
  }

  .banfa_banfa div:hover .title {
    color: #004F9F;
  }

  .banfa_banfa div:hover .download {
    color: #004F9F;
  }

  .banfa_banfa div .title {
    margin: 0;
    padding-top: 20px;
    padding-left: 40px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }

  .banfa_banfa div .time {
    margin: 0;
    float: right;
    padding-top: 25px;
    padding-right: 40px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
  }

  .banfa_banfa div .download {
    margin: 0;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    text-align: center;
  }


  hr {
    margin: 15px 40px;
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
    border: none;
  }

  .show_all {
    width: 1200px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    align-content: center;
    cursor: pointer;
  }

  .guanyu_guanyu {
    display: flex;
    margin-bottom: 100px;
  }

  .guanyu_guanyu div {
    width: 397px;
    height: 140px;
    margin-right: 3px;
    background: #ECF0F7;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    text-align: center;
  }

  .guanyu_guanyu div img {
    margin: 0 auto;
    padding: 26px 0 5px 0;
  }
</style>
