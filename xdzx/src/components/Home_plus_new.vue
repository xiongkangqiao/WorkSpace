<template margin="0">
  <el-container style="width: 100%">
    <el-header id="el_header">
      <div id="header_max">

        <div class="header_bottom">
          <div>
            <el-menu
              :default-active="2" router
              id="header_bottom_menu"
              class="el-menu-demo"
              mode="horizontal"

              text-color="#fff"
              active-text-color="#000"
              style="height:100%;border: 0; background: rgba(15, 38, 69, 0);">
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                {{ item.navItem }}
              </el-menu-item>
            </el-menu>
          </div>
          <div class="header_bottom_logo">
            <a href=""><img :src="img_logo" style="height: 90%" alt=""></a>
          </div>
        </div>
      </div>
    </el-header>

    <div id="mainBanner">
      <el-carousel trigger="click" height="442px" interval=3000 :height="bannerheight+'px'">
        <el-carousel-item :height="bannerheight+'px'" v-for="item in imgList" :key="item.id">
          <div style="height: 100%;width: 100%;position: relative">
            <img :src="item.picUrl" width="100%" height="100%" alt="" style="object-fit:cover;">
            <!--          <p class="tishi" style="margin: 0">{{item.createAt}}</p>-->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>


    <el-main>

      <div id="main_notice">
        <div id="main_notice_width">
          <img :src="img_notice" height="100%" alt="" style="float: left;height: 20px;padding:14px 15px 0 0;">

          <img :src="img_arrow_right" style="height: 13px;float: right;cursor:pointer;margin:18px 0 0 18px"
               v-on:click="next_img()" alt="">
          <img :src="img_arrow_left" style="height: 13px;float: right;cursor:pointer;margin:18px 0 0 18px"
               v-on:click="last_img()" alt="">
          <el-carousel height="50px" direction="horizontal" :autoplay="true" indicator-position="none" arrow="never"
                       interval="7000"
                       ref="banner_notice" id="banner_notice" style="overflow: hidden">
            <!--          <el-carousel height="50px" direction="vertical" :autoplay="true" indicator-position="none" ref="banner_notice">-->
            <el-carousel-item v-for="item in textBanner">
              <router-link :to="{path:'/zxdt/xq', query:{subjectType:0,id:item.id}}">
                <p class="main_notice_width_content"> &nbsp<a>{{item.title}}</a></p>
              </router-link>
            </el-carousel-item>
          </el-carousel>

        </div>
      </div>

      <div id="main_content">
        <div class="empty"></div>
        <div class="empty"></div>
        <div id="main_content_div1">
          <div id="main_content_div1_zhxw">
            <div id="main_content_div1_zhxw_top">
              <img :src="img_zhxw" height="100%" alt="" style=" width: 82px;height: 20px;float: left;">
              <router-link :to="{path:'/zxdt'}" class="a_more">更多></router-link>
            </div>
            <div id="main_content_div1_zhxw_text">
              <el-divider id="line1"></el-divider>
              <el-divider id="line2"></el-divider>
              <ul class="content">
                <li class="li_strong" v-for="item in generalNews_strong"><img :src="img_red_point"
                                                                              style="height: 70%;padding:5px 5px 0 0"
                                                                              alt="">
                  <router-link :to="{path:'/zxdt/xq', query:{subjectType:item.subjectType,id:item.id}}">
                    <div :title="item.title">{{item.title| ellipsis_3}}</div>
                    <p class="p">{{item.publishTime}}</p></router-link>
                </li>
                <li v-for="item in generalNews"><img :src="img_red_point" style="height: 70%;padding:5px 5px 0 0"
                                                     alt="">
                  <router-link :to="{path:'/zxdt/xq', query:{subjectType:item.subjectType,id:item.id}}">
                    <div :title="item.title">{{item.title| ellipsis_3}}</div>
                    <p class="p">{{item.publishTime}}</p></router-link>
                </li>
              </ul>
            </div>
          </div>
          <div id="main_content_div1_banner">
            <div class="scale-img">
              <el-carousel trigger="click" height="270px" interval=3000 ref="banner_news">
                <el-carousel-item v-for="item in imgList1" :key="item.id">
                  <div style="height: 270px;width: 430px;position: relative">
                    <router-link :to="{path:'/zxdt/xq', query:{subjectType:item.subjectType,id:item.id}}">
                      <img :src="item.picUrl" width="100%" height="100%" alt="" style="object-fit:cover;">
                      <p class="tishi" style="margin: 0">{{item.title|ellipsis_1}}</p>
                    </router-link>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div style="height:20px"></div>


        <div id="main_content_div2">
          <div id="main_content_div2_left">
            <div class="main_content_div2_left">

              <div class="main_content_div_top_title" :style="background_1">
                <div class="main_content_div_top_title_img"><img :src="img_ldcg_title" height="100%"></div>
                <!--                <div class="main_content_div_top_title_img" style="line-height: 45px;border-left: #105abe solid 6px;-->
                <!--                width: 120px;height: 50px;font-size: 21px;font-weight: 700;color: #00226f;text-align: center;">亮点成果</div>-->
                <router-link :to="{path:'/ldcg'}" class="a_more">更多></router-link>
                <!--                <div class="main_content_div_top_title_english">Scientific research results</div>-->
              </div>

              <div class="main_content_div2_left_text">

                <ul class="content_text">
                  <li v-for="item in home_data.data.sciResearchRltNews"><img :src="img_blue_point"
                                                                             style="height: 70%;padding-top: 5px">
                    <router-link :to="{path:'/zxdt/xq', query:{subjectType:1,id:item.id}}" :title="item.title">
                      {{item.title|ellipsis_2}}
                      <p class="p">{{item.publishTime}}</p></router-link>
                  </li>
                </ul>
                <!--                <div class="content_img">-->
                <!--                  <div class="scale-img"><img :src="img_img_ldcg" height="100%"></div>-->
                <!--                </div>-->
              </div>
            </div>

            <div class="empty" style="height:20px"></div>
            <div class="main_content_div2_left">

              <div class="main_content_div_top_title" :style="background_1">
                <div class="main_content_div_top_title_img"><img :src="img_zxdt_title" height="100%" alt=""></div>
                <router-link :to="{path:'/zxdt'}" class="a_more">更多></router-link>
                <!--                <div class="main_content_div_top_title_english">Special dynamic</div>-->
              </div>

              <div class="main_content_div2_left_text">

                <ul class="content_text">
                  <li v-for="item in home_data.data.specialDynamicNews"><img :src="img_blue_point"
                                                                             style="height: 70%;padding-top: 5px">
                    <router-link :to="{path:'/zxdt/xq', query:{subjectType:0,id:item.id}}" :title="item.title">
                      {{item.title|ellipsis_2}}
                      <p class="p">{{item.publishTime}}</p></router-link>
                  </li>
                </ul>
                <!--                <div class="content_img">-->
                <!--                  <div class="scale-img"><img :src="img_img_ldcg" height="100%" alt="">-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
          <div id="main_content_div2_right">
            <div class="main_content_div_top_title" :style="background_2">
              <div class="main_content_div_top_title_img"><img :src="img_tzgg_title" height="100%" alt=""></div>
              <router-link :to="{path:'/zxdt', query:{menu:3}}" class="a_more">更多></router-link>
              <!--              <div class="main_content_div_top_title_english">Notification announcement</div>-->
            </div>

            <ul class="content_text" style="width: 390px;height: 280px">
              <li v-for="item in home_data.data.noticeNews">
                <router-link :to="{path:'/zxdt/xq', query:{subjectType:0,id:item.id}}" :title="item.title">
                  <img :src="img_blue_point" style="height: 70%;padding-top: 5px">
                  <div>{{item.title|ellipsis_1}}</div>
                  <p class="p">{{item.publishTime}}</p></router-link>
              </li>
            </ul>

            <div style="height: 170px;width: 390px;padding: 0 20px"><img :src="img_img_tzgg" style="width: 100%"></div>
          </div>
        </div>
        <div class="empty" style="height:20px"></div>

        <div style="height:250px;width: 100%">
          <div style="height: 100%;width: 750px;float: left;border:1px solid #d4d6d9">


            <div class="main_content_div_top_title">
              <img :src="img_xsgw" height="100%" style="width: 88px;height: 28px;float: left;padding:10px 0 0 10px">
            </div>

            <div style="height:200px;width: 100%;overflow:hidden;position:relative;left:0"
                 v-on:mouseover="button_show('button_left','button_right')"
                 v-on:mouseout="button_dis('button_left','button_right')"
                 v-on:mouseleave="fugai_dis('fugai_1','fugai_2','fugai_3','fugai_4','fugai_5','fugai_6','fugai_7','fugai_8','fugai_9','fugai_10',
                 'fugai_11','fugai_12','fugai_13','fugai_14','fugai_15','fugai_16',)">
              <div id="race_notice_s"
                   style="position:absolute;left:0; top:0;float: left;width: 3500px;display: flex;flex-wrap: wrap">

                <div class="face" v-for="item in guwen" style="position: relative">
                  <router-link :to="{path:'/zxgl/zjxq', query:{id:item.id}}">
                    <img :src=item.img alt="" width="130px" height="150px">
                    <div class="fugai">
                      <ul style="padding-left: 15px;margin: 0;font-size: 16px;font-weight: bold;">
                        <li>{{item.name}}</li>
                      </ul>
                      <div style="width: 100px;word-break:break-all;padding-top: 10px;font-size: 14px;">
                        {{item.info|ellipsis_4}}
                      </div>
                    </div>
                  </router-link>
                </div>

                <div class="face" v-for="item in guwen" style="position: relative">
                  <router-link :to="{path:'/zxgl/zjxq', query:{id:item.id}}">
                    <img :src=item.img alt="" width="130px" height="150px">
                    <div class="fugai">
                      <ul style="padding-left: 15px;margin: 0;font-size: 16px;font-weight: bold;">
                        <li>{{item.name}}</li>
                      </ul>
                      <div style="width: 100px;word-break:break-all;padding-top: 10px;font-size: 14px;">
                        {{item.info|ellipsis_4}}
                      </div>
                    </div>
                  </router-link>
                </div>

              </div>
              <div id="button_left"><p style="margin: 0;cursor:pointer;padding-top: 13px" v-on:click="button_left()">
                <</p></div>
              <div id="button_right"><p style="margin: 0;cursor:pointer;padding-top: 13px" v-on:click="button_right()">
                ></p></div>
            </div>

          </div>
          <div style="height: 100%;width: 430px;float: right;border:1px solid #d4d6d9">
            <div class="main_content_div_top_title" style="background-color: #005AA1">
              <img :src="img_glgz_title" height="100%"
                   style="height: 20px;width: 80px;padding: 15px 0 0 18px;float: left">
              <router-link :to="{path:'/zxgl'}" class="a_more">更多></router-link>
              <!--              <div class="main_content_div_top_title_english">Management rules</div>-->
            </div>

            <div class="wayFather" style="width: 430px;height: 180px;position: relative">
              <ul class="content_text" style="width: 390px;">
                <li v-for="item in home_data.data.managementRuleNews">
                  <router-link :to="{path:'/zxdt/xq', query:{subjectType:3,id:item.id}}" :title="item.title">
                    <img :src="img_blue_point" style="height: 70%;padding-top: 5px">
                    <div>{{item.title|ellipsis_1}}</div>
                    <p class="p">{{item.publishTime}}</p></router-link>
                </li>
              </ul>
              <div v-if="this.$store.state.cover" class="cover" style="line-height: 180px">
                仅向管理人员提供，查看请先
                <el-button type="primary" size="mini" @click="dialogFormVisible = true" round>登录</el-button>
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

          </div>
        </div>
        <div class="empty" style="height:20px"></div>
        <div style="height:315px;width: 100%">
          <div style="height: 100%;width: 750px;float: left">
            <div class="main_content_div_top_title" style=";border:1px solid #d4d6d9">
              <img :src="img_cydw_title" height="50%"
                   style="width: 88px;height: 28px;float: left;padding:10px 0 0 10px">

            </div>

            <div style="height:310px;width: 752px;">
              <el-carousel indicator-position="none">
                <el-carousel-item v-for="item in danwei" :key="item">
                  <div style="width: 760px;display: flex;flex-wrap: wrap;margin-top: 1px">
                    <div class="company" v-for="index in item">
                      <a :href="index.address" target="_blank"><img :src="index.img" alt="" height="90px"></a>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>


          </div>
          <div style="height: 100%;width: 430px;float: right;border:1px solid #d4d6d9">
            <div class="main_content_div_top_title" style="background-color: #005AA1">
              <img :src="img_hcdt_title" height="100%"
                   style="height: 20px;width: 80px;padding: 15px 0 0 18px;float: left">
              <router-link :to="{path:'/zxdt', query:{menu:4}}" class="a_more">更多></router-link>
              <!--              <div class="main_content_div_top_title_english">Voyage dynamics</div>-->
            </div>


            <ul class="content_text" style="width: 390px">
              <li v-for="item in home_data.data.voyageDynamicNews">
                <router-link :to="{path:'/zxdt/xq', query:{subjectType:0,id:item.id}}" :title="item.title">
                  <img :src="img_blue_point" style="height: 70%;padding-top: 5px">
                  <div>{{item.title|ellipsis_1}}</div>
                  <p class="p">{{item.publishTime}}</p></router-link>
              </li>
            </ul>

          </div>
        </div>
        <div class="empty" style="height:40px"></div>
        <div style="height: 420px">

          <div :style="backgroundDiv" style="height:180px;width: 140px;color:white;float: left">
            <p style="margin: 0;width:40px;height:20px;font-size:20px;font-family:Microsoft YaHei;
              font-weight:bold;color:rgba(255,255,255,1);line-height:20px;padding-top: 23px;padding-left: 23px">专项</p>
            <p style="margin: 0;width:64px;height:16px;font-size:16px;font-family:Microsoft YaHei;
              font-weight:bold;color:rgba(255,255,255,1);line-height:20px;padding-top: 19px;padding-left: 23px">研究项目</p>
            <p style="margin: 0;width:82px;height:32px;font-size:16px;font-family:Microsoft YaHei;
              font-weight:400;color:rgba(255,255,255,1);line-height:20px;padding-top: 20px;padding-left: 23px">
              RESEARCH<br>PROJECT</p>
            <p style="text-align: right;font-weight: bolder;padding-right: 22px">></p></div>

          <div style="width: 1040px;float:right;font-size:14px;font-family:Microsoft YaHei;
            color:rgba(51,51,51,1);line-height:24px;">{{text}}
          </div>

          <div style="display: flex;float:right;width: 1040px;padding-top: 40px;">
            <div class="zhuanxiang" v-for="item in zx">
              <img :src=item.img style="width: 240px;height: 180px;display: block;object-fit:cover;">
              <div
                style="height: 40px;padding: 15px;background-color: white;font-size: 16px;font-weight: bold;border-top:1px solid #d4d6d9">
                {{item.name}}
              </div>
              <div class="xiangmu">
                {{item.number}}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div
        style="height: 360px;width: 100%;position: absolute;bottom: 0;z-index:-10;overflow: hidden;text-align: center;background-color: #3c86e2">
        <img :src="img_bottom" height="100%">
      </div>

      <!--      <div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 1250px;height: 1900px;margin:auto;background-color: #acdbee;z-index: -11"></div>-->
    </el-main>

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
  </el-container>
</template>

<script>
  export default {
    name: 'Home_plus_new',
    filters: {
      ellipsis_1(value) {
        if (!value) return '';
        if (value.length > 17) {
          return value.slice(0, 17) + '...'
        }
        return value
      },
      ellipsis_2(value) {
        if (!value) return '';
        if (value.length > 32) {
          return value.slice(0, 32) + '...'
        }
        return value
      },
      ellipsis_3(value) {
        if (!value) return '';
        if (value.length > 34) {
          return value.slice(0, 34) + '...'
        }
        return value
      },
      ellipsis_4(value) {
        if (!value) return '';
        if (value.length > 22) {
          return value.slice(0, 22) + '...'
        }
        return value
      }
    },
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          password: '',
        },
        formLabelWidth: '120px',
        textBanner: '',
        generalNews_strong: [
          {
            "subjectType": "1",
            "subjectName": "亮点成果",
            "id": "16",
            "title": "获奖-01专项支持的热含量论文在著名国际期刊发表",
            "picUrl": null,

            "publishTime": "2020-09-29"
          },
        ],
        generalNews: [
          {
            "subjectType": "1",
            "subjectName": "亮点成果",
            "id": "16",
            "title": "获奖-01专项支持的热含量论文在著名国际期刊发表",
            "picUrl": null,

            "publishTime": "2020-09-29"
          },
        ],
        activeIndex2: '1',
        guwen: [
          {id: 1, name: '王凡', img: require('@/assets/img/专项管理_总体_wf.png'), info: '1967年1月出生，理学博士、研究员、博士生导师。'},
          {id: 2, name: '胡敦欣', img: require('@/assets/img/专项管理_总体_hdx.png'), info: '男，著名物理海洋学家，1936年10月出生，山东省即墨人'},
          {
            id: 3,
            name: '戴民汉',
            img: require('@/assets/img/专项管理_总体_dmh.png'),
            info: '1965年4月25日出生于浙江杭州，籍贯浙江萧山，化学海洋学家，中国科学院院士'
          },
          {
            id: 4,
            name: '朱江',
            img: require('@/assets/img/专项管理_总体_zj.png'),
            info: '中国科学院大气物理研究所所长，全球海洋资料同化试验（GODAE）科学委员会成员'
          },
          {
            id: 5,
            name: '高翔',
            img: require('@/assets/img/专项管理_总体_gx.png'),
            info: '男，1984年7月出生，山东莱阳人，中共党员，2007年于中国海洋大学获学士学位'
          },
          {
            id: 6,
            name: '陈楠生',
            img: require('@/assets/img/专项管理_总体_cns.png'),
            info: '研究员，博士生导师。中国科学院百人计划（A类），获泰山学者特聘专家特等奖'
          },
          {id: 7, name: '孙卫东', img: require('@/assets/img/专项管理_总体_swd.png'), info: '中国科学院海洋研究所深海研究中心主任，理学博士。'},
          {
            id: 8,
            name: '徐奎栋',
            img: require('@/assets/img/专项管理_总体_xkd.png'),
            info: '中国科学院海洋研究所海洋生物分类与系统演化实验室主任，研究员，博士生导师'
          },
          {
            id: 9,
            name: '尹宝树',
            img: require('@/assets/img/专项管理_总体_ybs.png'),
            info: '中国科学院海洋研究所海洋环流与波动重点实验室主任，研究员，博士生导师。'
          },
          {
            id: 10,
            name: '曾志刚',
            img: require('@/assets/img/专项管理_总体_zzg.png'),
            info: '中国科学院海洋研究所海洋地质与环境重点实验室主任，一直从事海底热液活动研究。'
          },
          {
            id: 11,
            name: '王春在',
            img: require('@/assets/img/专项管理_总体_wcz.png'),
            info: ' 博士，现受聘于中国科学院南海海洋研究所。主要从事研究海洋-大气相互作用在全'
          },
        ],
        danwei: [[
          {
            id: 1,
            name: '中国科学院地质与地球物理研究所',
            img: require('@/assets/img/中国科学院地质与地球物理研究所_logo.png'),
            address: 'http://www.igg.cas.cn/'
          },
          {
            id: 1,
            name: '中国科学院大气物理研究所',
            img: require('@/assets/img/中国科学院大气物理研究所_logo.png'),
            address: 'http://www.iap.cas.cn/'
          },
          {
            id: 1,
            name: '中国科学院微生物研究所',
            img: require('@/assets/img/中国科学院微生物研究所_logo.png'),
            address: 'http://www.im.cas.cn/'
          },
          {
            id: 1,
            name: '中国科学院烟台海岸带研究所',
            img: require('@/assets/img/中国科学院烟台海岸带研究所_logo.png'),
            address: 'http://www.yic.ac.cn/'
          },
          {
            id: 1,
            name: '中国科学院武汉病毒研究所',
            img: require('@/assets/img/中国科学院武汉病毒研究所_logo.png'),
            address: 'http://www.whiov.ac.cn/'
          },
          {
            id: 1,
            name: '中国科学院南海海洋研究所',
            img: require('@/assets/img/中国科学院南海海洋研究所_logo.png'),
            address: 'http://www.scsio.ac.cn/'
          },
          {
            id: 1,
            name: '中国科学院广州地球化学研究所',
            img: require('@/assets/img/中国科学院广州地球化学研究所_logo.png'),
            address: 'http://www.gig.ac.cn/'
          },
          {
            id: 1,
            name: '自然资源部第二海洋研究所',
            img: require('@/assets/img/自然资源部第二海洋研究所_logo.png'),
            address: 'http://www.sio.org.cn/'
          },],
          [
            {id: 1, name: '北京大学', img: require('@/assets/img/北京大学_logo.png'), address: 'https://www.pku.edu.cn/'},
            {id: 1, name: '中国科学院大学', img: require('@/assets/img/中国科学院大学_logo.png'), address: 'https://www.ucas.ac.cn/'},
            {
              id: 1,
              name: '中国科学技术大学',
              img: require('@/assets/img/中国科学技术大学_logo.png'),
              address: 'https://www.ustc.edu.cn/'
            },
            {id: 1, name: '厦门大学', img: require('@/assets/img/厦门大学_logo.png'), address: 'https://www.xmu.edu.cn/'},
          ]],
        navList: [
          {name: '/zxgk', navItem: '专项概况'},
          {name: '/zxdt', navItem: '专项动态'},
          {name: '/ldcg', navItem: '亮点成果'},
          // {name: '/pingtai', navItem: '共享平台'},
          {name: '/hzjl', navItem: '合作交流'},
          {name: '/zxgl', navItem: '专项管理'},
        ],
        zx: [{number: '项目一', name: '印太交汇区海洋物质能量循环与跨圈层交换过程', img: require('@/assets/img/项目一.png')},
          {number: '项目二', name: '印太交汇区板块汇聚过程及物质循环', img: require('@/assets/img/项目二.png')},
          {number: '项目三', name: '印太交汇区海洋生物多样性中心形成演化过程', img: require('@/assets/img/项目三.png')},
          {number: '项目四', name: '印太交汇区地球系统模式及观测体系', img: require('@/assets/img/项目四.png')},],
        input1: '',
        welcome: '欢迎来到中国科学院B类战略性先导科技专项“印太交汇区海洋物质能量中心形成演化过程与机制”',
        imgList: [{id: 1, picUrl: require('@/assets/img/banner_new.png')}],
        imgList1: [],
        textList:
          [{id: 1, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'},
            {id: 2, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'},
            {id: 3, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'}],
        img_logo: require('@/assets/img/logo.png'),
        img_img_tzgg: require('@/assets/img/img_tzgg.png'),
        img_blue_point: require('@/assets/img/img_blue_point.png'),
        img_red_point: require('@/assets/img/red_point.png'),
        img_img_ldcg: require('@/assets/img/img_ldcg.png'),
        img_xsgw: require('@/assets/img/xsgw_title.png'),
        img_首页_专项: require('@/assets/img/首页_专项.png'),
        img6: require('@/assets/img/6.png'),
        img_notice: require('@/assets/img/notice.png'),
        img_zhxw: require('@/assets/img/zhxw.png'),
        img_ldcg_title: require('@/assets/img/ldcg_title.png'),
        img_zxdt_title: require('@/assets/img/zxdt_title.png'),
        img_tzgg_title: require('@/assets/img/tzgg_title.png'),
        img_glgz_title: require('@/assets/img/glgz_title.png'),
        img_hcdt_title: require('@/assets/img/hcdt_title.png'),
        img_cydw_title: require('@/assets/img/cydw_title.png'),
        img_xsgw_face: require('@/assets/img/xsgw_face.png'),
        img_bottom: require('@/assets/img/bottom.png'),
        img_arrow_left: require('@/assets/img/arrow_left.png'),
        img_arrow_right: require('@/assets/img/arrow_right.png'),
        item: 'cctv13：[午间新闻]我国首次海底观测西太平洋我国首次海底观测西太平洋太平洋太平洋',
        time: '2014-04-24',
        text: '中国科学院战略性先导科技专项“印太交汇区海洋物质能量中心形成演化过程与机制”（编号：XDB42000000）' +
          '，从地球系统科学视角出发，以物质能量汇聚中心的形成和演变机制为核心，以其能量基础和物质基础为研究主线，在印' +
          '太交汇区开展“跨圈层、跨领域、跨学科”综合研究，催生重大原创性理论成果和模式创新，显著提升我国在该区域的国际话语权。',
        banner_move: null,
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/zx.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        background_1: {
          backgroundImage: 'url(' + require('@/assets/img/首页_background_1.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        background_2: {
          backgroundImage: 'url(' + require('@/assets/img/首页_background_2.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        bannerheight: "",
        home_data: {
          "code": "0",
          "msg": "请求成功",
          "data": {
            "generalNews": [
              {
                "subjectType": "1",
                "subjectName": "亮点成果",
                "id": "16",
                "title": "获奖-01专项支持的热含量论文在著名国际期刊发表",
                "picUrl": null,
                "publishTime": null,
                "updateAt": "2020-09-29"
              },
            ],
            "sciResearchRltNews": [
              {
                "id": "6",
                "title": "论文-03专项支持的热含量论文在著名国际期刊发表",
                "newsType": null,
                "picUrl": "",
                "publishTime": "2020-09-29"
              },
            ],
            "noticeNews": [
              {
                "id": "52",
                "title": "通知公告-01专项召开会议",
                "newsType": null,
                "picUrl": "",
                "publishTime": "2020-09-29 10:09:42"
              },
            ],
            "specialDynamicNews": [
              {
                "id": "33",
                "title": "海平面温度持续升高",
                "newsType": null,
                "picUrl": "http://159.226.158.119:8888/upload/20200825/c/3/fengmian.png",
                "publishTime": "2020-09-29 07:09:33"
              },
            ],
            "managementRuleNews": [],
            "voyageDynamicNews": [
              {
                "id": "60",
                "title": "航次动态-01科学号考察船启航赴印度尼西亚海域开展调查作业",
                "newsType": null,
                "picUrl": "",
                "publishTime": "2020-09-29 10:09:42"
              },
            ]
          }
        },
      };
    },
    methods: {
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
      },


      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      button_show(id) {
        for (id of arguments) {
          document.getElementById(id).style.visibility = 'visible';
        }
        clearInterval(this.banner_move);
      },
      button_dis(id) {
        for (id of arguments) {
          document.getElementById(id).style.visibility = 'hidden';
        }
        this.banner_to_left();
      },
      button_left() {
        var speed = -159;
        //var race_notice_p = document.getElementById('race_notice_p');
        var race_notice_s = document.getElementById('race_notice_s');
        var p = race_notice_s.getElementsByTagName('div')[0];
        var length = p.offsetWidth;
        if (race_notice_s.offsetLeft < -1748) {
          race_notice_s.style.left = 0;
          const a = 1;
          console.log(1);
        } else if (race_notice_s.offsetLeft >= -1748) {
          race_notice_s.style.left = race_notice_s.offsetLeft + speed + 'px';
          console.log('race_notice_s.offsetLeft=' + race_notice_s.offsetLeft);
          console.log('-length=' + length);
        }
      },
      button_right() {
        var speed = 159;
        //var race_notice_p = document.getElementById('race_notice_p');
        var race_notice_s = document.getElementById('race_notice_s');
        var p = race_notice_s.getElementsByTagName('div')[0];
        var length = p.offsetWidth;
        if (race_notice_s.offsetLeft >= 0) {
          const a = 1;
        } else if (race_notice_s.offsetLeft >= -1748) {
          race_notice_s.style.left = race_notice_s.offsetLeft + speed + 'px';
          console.log('race_notice_s.offsetLeft=' + race_notice_s.offsetLeft);
          console.log('-length=' + length);
        }
      },
      banner_to_left() {
        clearInterval(this.banner_move);
        var speed = -10;
        var race_notice_s = document.getElementById('race_notice_s');
        var p = race_notice_s.getElementsByTagName('div')[0];
        var p1 = race_notice_s.getElementsByTagName('div')[1];
        var length = p.offsetWidth;

        function move() {
          if (race_notice_s.offsetLeft < -1748) {
            race_notice_s.style.left = 0;
          } else if (race_notice_s.offsetLeft >= -1748) {
            race_notice_s.style.left = race_notice_s.offsetLeft + speed + 'px';
          }
        }

        this.banner_move = setInterval(move, 100);
      },
      setSize() {
        let bili = 1920 / 900;
        this.bannerheight = document.body.clientWidth / bili; //这个比例是1920/900
      },
      getJsonLength(jsonData) {
        let length = 0;
        for (let ever in jsonData) {
          length++;
        }
        return length;
      },
      handleScroll() {
        let top = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset;
        if (document.getElementById('el_header') === null) {
          //啥事不干
        } else {
          if (top > 510) {
            document.getElementById('el_header').style.background = 'rgba(16, 39, 70, 1)';
          } else {
            document.getElementById('el_header').style.background = 'rgba(15, 38, 69, 0)';
          }
        }
      },
      last_img() {
        this.$refs.banner_notice.prev();
        let a = this.$refs.banner_notice.$children[0];
        console.log(a);
      },
      next_img() {
        this.$refs.banner_notice.next();
        let a = this.$refs.banner_notice.$children[0];
        console.log(a);
      },
      get_home_data() {
        this.axios.get(this.$store.state.interface + '/web/home/data')
          .then(function (res) {
            //成功
            this.home_data = res.data;//此为后台响应回来的数据
            let generalNews_strong = [];
            let generalNews = [];
            for (let i = 0; i < res.data.data.generalNews.length; i++) {
              if (i < 3) {
                generalNews_strong.push(res.data.data.generalNews[i])
              } else {
                generalNews.push(res.data.data.generalNews[i])
              }
            }
            this.generalNews_strong = generalNews_strong;
            this.generalNews = generalNews;

          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      },
      getBannerList() {
        this.axios.get(this.$store.state.interface + '/web/banner/list')
          .then(function (res) {
            //成功
            this.imgList = res.data.data.lstBanner;//此为后台响应回来的数据


          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      },
      getBannerList1() {
        this.axios.get(this.$store.state.interface + '/web/home/picture')
          .then(function (res) {
            //成功
            this.imgList1 = res.data.data.lstPictureNews;//此为后台响应回来的数据


          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      },
      getTextBanner() {
        this.axios.get(this.$store.state.interface + '/web/home/scrollnotice')
          .then(function (res) {
            //成功
            this.textBanner = res.data.data.lstNews;//此为后台响应回来的数据


          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      }
    },
    created() {
      this.setSize();
      this.get_home_data();
      this.getBannerList();
      this.getBannerList1();
      this.getTextBanner();
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
      window.addEventListener("resize", () => {
          this.setSize();
        }, false
      );
    },
    updated() {
      this.banner_to_left();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/public.css"></style>
<style scoped>


  #race_notice_s {
    transition: left 0.1s;
    -webkit-transition: left 0.1s; /* Safari */
  }

  .zhuanxiang {
    width: 240px;
    height: 250px;
    margin-right: 27px;
    background-color: white;
  }

  .xiangmu {
    height: 25px;
    background-color: #1763C7;
    text-align: center;
    font-size: 14px;
    color: white;
    padding-top: 5px;
  }

  .zhuanxiang:hover .xiangmu {
    background-color: #0d366c;
  }

  #race_notice_s img {
    width: 130px;
    height: 150px;
    padding: 25px 14px 25px 15px;
  }

  .fugai {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 25px;
    left: 15px;
    padding: 25px 15px;
    background: rgba(0, 0, 0, 0.7);
    visibility: hidden;
    color: white;
  }

  .face:hover .fugai {
    visibility: visible;
  }

  /deep/ #main_content_div1_banner .el-carousel__indicators--horizontal {
    left: 88% !important;
  }

  /deep/ #main_content_div1_banner .el-carousel__button {
    width: 8px;
    height: 8px;
  }

  /deep/ #mainBanner .el-carousel__arrow {
    width: 72px;
    height: 72px;
    font-size: 24px;
  }

  .company {
    width: 180px;
    height: 120px;
    background: #ffffff;
    border: 1px solid #d4d6d9;
    margin-right: 8px;
    margin-top: 10px;
    text-align: center;
  }

  .company img {
    padding-top: 15px;
  }

  .company:hover {
    border: 1px solid #3c86e2
  }

  .scale-img {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .scale-img img {
    -webkit-object-fit: cover;
    object-fit: cover;
    transition: .1s all linear;
    -ms-transition: .1s all linear; /* IE 9 */
    -moz-transition: .1s all linear; /* Firefox */
    -webkit-transition: .1s all linear; /* Safari 和 Chrome */
    -o-transition: .1s all linear; /* Opera */
  }

  .scale-img:hover img {
    transform: scale3d(1.1, 1.1, 1.1);
    -ms-transform: scale3d(1.1, 1.1, 1.1);
    -moz-transform: scale3d(1.1, 1.1, 1.1);
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    -o-transform: scale3d(1.1, 1.1, 1.1);
  }

  /*/deep/ .el-input__inner {*/
  /*  width: 100px;*/
  /*  height: 20px;*/
  /*  font-size: 12px;*/
  /*  font-family: Microsoft YaHei;*/
  /*}*/

  /*/deep/ .el-input__icon {*/
  /*  line-height: 30px;*/
  /*}*/

  .el-header {
    width: 100%;
    height: 111px !important;
    color: white;
    padding: 0;
    background: rgba(15, 38, 69, 0);
    position: fixed;
    z-index: 99999
  }

  #header_max {
    width: 100%;
    max-width: 1250px;
    min-width: 1100px;
    height: 100%;
    margin: 0 auto
  }

  #header_top {
    height: 31px;
    width: 100%;
  }

  #header_top_welcome {
    float: left;
    height: 100%;
    width: 45%;
    padding-left: 5%;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
  }

  #header_top_ul {
    float: right;
    height: 100%;
    width: 40%;
    padding: 0 5% 0 0;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    list-style-type: none;
    margin: 0;
  }


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

  .el-divider {
    margin: 0;
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.4;
  }

  .el-main {
    height: 1980px;
    width: 100%;
    color: #333;
    padding: 0;
    margin: 0 auto;
    position: relative;
  }

  #main_notice {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    background: #EBEEF5;
  }

  #main_notice_width {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .main_notice_width_content {
    margin: 0;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding-top: 13px;
  }

  .main_notice_width_content span {
    float: right;
    padding-right: 20px;
    font-weight: lighter;
  }

  #main_content {
    width: 1200px;
    margin: 0 auto;
    height: 1900px
  }

  .empty {
    height: 14px;
  }

  #main_content_div1 {
    height: 270px;
    width: 100%;
  }

  #main_content_div1_zhxw {
    width: 750px;
    height: 270px;
    float: left;
  }

  #main_content_div1_zhxw_top {
    width: 100%;
    height: 30px
  }


  div div .a_more {
    float: right;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 28px;
  }

  #main_content_div1_zhxw_text {
    height: 240px;
    width: 100%
  }

  .content {
    width: 730px;
    float: left;
    list-style-type: none;
    padding: 0;
    margin: 0;

    letter-spacing: 1px
  }

  .content li {
    height: 18px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    color: rgba(51, 51, 51, 1);
    padding-top: 19px;
    margin: 0;
  }

  .content .li_strong div {
    margin: 0;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    height: 18px
  }

  div ul li .p {
    text-align: right;
    float: right;
    margin: 0;
    color: rgba(0, 0, 0, 0.3)
  }

  ul li div {
    float: left;
  }

  ul li img {
    float: left;
  }

  #main_content_div1_banner {
    float: right;
    height: 270px;
    width: 430px;
    position: relative;
  }

  #main_content_div2 {
    height: 520px;
    width: 100%
  }

  #main_content_div2_left {
    height: 100%;
    width: 750px;
    float: left;
  }

  .main_content_div2_left {
    height: 250px;
    width: 100%;
    border: 1px solid #d4d6d9
  }

  .main_content_div_top_title {
    width: 100%;
    height: 50px;
    background: #eef0f4;
  }

  .main_content_div_top_title_img {
    width: 140px;
    height: 50px;
    float: left;
  }

  .main_content_div_top_title_english {
    width: 200px;
    height: 11px;
    font-size: 14px;
    font-family: SJnenglianghei;
    font-weight: 400;
    color: rgba(189, 192, 196, 1);
    line-height: 28px;
    padding-left: 140px;
    padding-top: 10px;
  }

  .main_content_div2_left_text {
    height: 200px;
    width: 100%;
  }

  .content_text {
    width: 710px;

    float: left;
    padding: 0 20px;
    list-style-type: none;
    margin: 0;
  }

  .content_text li {
    height: 20px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    color: rgba(51, 51, 51, 1);
    padding-top: 15px;
  }

  .content_img {
    height: 160px;
    width: 230px;
    padding: 20px 20px 20px 0;
    float: right;
  }

  #main_content_div2_right {
    height: 100%;
    width: 430px;
    float: right;
    border: 1px solid #d4d6d9;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: white;

    padding: 0;
  }

  #top_ul {
    list-style-type: none;
    float: right;
    height: 30px;
    padding: 0;
    margin: 0;
  }

  .top_li {
    padding: 0 3px;
    list-style-type: none;
    float: right;
    height: 30px;
    margin: 0;
  }

  .el-menu {
    background-color: #000569;
  }


  a {
    text-decoration: none;
    letter-spacing: 1px;
  }

  a:link {
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    color: dodgerblue;
  }


  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 30px;
    margin: 0;
  }

  .tishi {
    position: absolute;
    bottom: -30px;
    background: rgba(0, 0, 0, 0.7);
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    width: 100%;
    color: white;
    font-size: 16px;
    transition: bottom 0.2s;
    -webkit-transition: bottom 0.2s; /* Safari */
  }

  .scale-img:hover .tishi {
    bottom: 0;
  }

  #button_left {
    position: absolute;
    top: 37%;
    left: 2px;
    background: rgba(0, 0, 0, 0.7);
    height: 25%;
    width: 3%;
    color: white;
    text-align: center;
    visibility: hidden;
  }

  #button_right {
    position: absolute;
    top: 37%;
    right: 2px;
    background: rgba(0, 0, 0, 0.7);
    height: 25%;
    width: 3%;
    color: white;
    text-align: center;
    visibility: hidden;
  }

  #line1 {
    background: red;
    height: 2px;
    float: left;
    width: 11%;
  }

  #line2 {
    margin-top: 1px;
    background: black;
    height: 1px;
    float: right;
    width: 89%;
  }

  /deep/ .el-menu--horizontal > .el-menu-item{
    float: right;
  }
</style>
