<template>
  <div style="position: relative;">
    <div id="map"></div>
    <div class="head">
      <div class="welcome">欢迎来到中尺度涡旋自动探测软件集成优化与可视化平台！</div>
      <div class="menu" :style="backgroundDiv">
        <!--        <router-link :to="{path:'/'}">-->
        <!--          <div>首页</div>-->
        <!--        </router-link>-->
        <div class="this">涡旋可视化</div>
        <!--        <router-link :to="{path:'/jiance'}">-->
        <!--          <div>涡旋检测</div>-->
        <!--        </router-link>-->
        <router-link :to="{path:'/fuwu'}">
          <div>数据服务</div>
        </router-link>
      </div>
    </div>

    <div id="bFather">
      <el-button class="options" type="info" @click="clickMenu(0)">查询</el-button>
      <div></div>
      <el-button class="options" type="info" @click="clickMenu(1)" style="top: 160px">动画</el-button>
      <div></div>
      <el-button class="options" type="info" @click="clickMenu(2)" style="top: 210px">流场</el-button>
    </div>
    <el-button class="options" type="info" @click="" style="top: 110px;left: auto;right: 15px">表格</el-button>

    <div v-if="ifQuery">
      <!--      <div class="right">-->
      <!--        <div class="info">-->
      <!--          <div style="font-size: 18px;"><img :src="img_area" width="18px" alt=""> &nbsp区域</div>-->
      <!--          <hr>-->
      <!--          <div class="quyu" style="padding-top: 10px;display: flex;flex-wrap: wrap;justify-content: center;">-->
      <!--            <div>-->
      <!--              <el-input style="width: 100px;" v-model="N_show" placeholder="请输入内容"></el-input>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <el-input style="width: 100px;" v-model="W_show" placeholder="请输入内容"></el-input>-->
      <!--              <el-input style="width: 100px;" v-model="E_show" placeholder="请输入内容"></el-input>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <el-input style="width: 100px;" v-model="S_show" placeholder="请输入内容"></el-input>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <el-button type="info" @click="a()">手选区域</el-button>-->
      <!--              <el-button type="info" @click="cancel()">取消选择</el-button>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--    <div style="position: absolute;top: 225px;left:450px;z-index: 10">-->
      <!--      <el-select v-model="map_type" placeholder="请选择" @change="changeMap">-->
      <!--        <el-option-->
      <!--          v-for="item in map_options"-->
      <!--          :key="item.value"-->
      <!--          :label="item.label"-->
      <!--          :value="item.value">-->
      <!--        </el-option>-->
      <!--      </el-select>-->
      <!--    </div>-->

      <div style="position: absolute;top: 110px;left:170px;z-index: 10">
        <el-date-picker
          v-model="date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div style="position: absolute;top: 110px;left:400px;z-index: 10;width: 200px">
        <el-select v-model="data_type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="position: absolute;top: 110px;left:610px;z-index: 10">
        <el-button type="info" @click="getData()">查询</el-button>
      </div>
    </div>

    <div v-if="ifAnimation">

      <div v-if="animationbg" class="animationbg"
           style="position: absolute;top: 110px;left: 550px;width: 500px;height:480px;z-index: 10">
        <div id="animation" style="width: 100%;height: 100%"></div>
      </div>

      <!--        <div class="quyu"-->
      <!--             style="display: flex;flex-wrap: wrap;justify-content: center;width: 300px">-->
      <div style="position: absolute;top: 110px;left: 170px;z-index: 10">
        <el-date-picker
          v-model="value1"
          type="daterange"
          @change="selectDate"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <!--          <div>-->
      <!--            <el-input style="width: 100px;" v-model="N_show" placeholder="请输入内容"></el-input>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <el-input style="width: 100px;" v-model="W_show" placeholder="请输入内容"></el-input>-->
      <!--            <el-input style="width: 100px;" v-model="E_show" placeholder="请输入内容"></el-input>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <el-input style="width: 100px;" v-model="S_show" placeholder="请输入内容"></el-input>-->
      <!--          </div>-->
      <!--        </div>-->
      <div style="position: absolute;top: 170px;left: 450px;z-index: 10">
        <el-button type="info" @click="getAnimationImg()">播放</el-button>
        <!--        <el-button type="info" @click="closeAnimation()" style="margin-left: 100px">关闭</el-button>-->
      </div>
    </div>

    <div v-if="ifField"
         style="width: 230px;position: absolute;top: 110px;left: 170px;background-color: rgba(0,0,0,0.5);padding: 15px 20px;z-index: 10">
      <el-radio v-model="radio" label="1" @change="changeField">显示</el-radio>
      <el-radio v-model="radio" label="2" @change="changeField">不显示</el-radio>
    </div>

    <div
      style="width: 640px;height: 560px;background-color: rgba(0,0,0,0.5);z-index: 10;color: #acb6c8;position: absolute;top: 120px;right: 100px;padding: 30px;overflow: auto">
      <div style="display: flex;flex-wrap: wrap">
        <div>序号</div>
        <div style="width: 170px;text-align: center;">中心点</div>
        <div style="width: 100px;text-align: center;">大小</div>
        <div style="width: 300px;text-align: center;">经纬度</div>
      </div>
      <div style="height: 520px;overflow: auto;margin-top: 10px">
        <div class="tableItem" v-for="item in eddy_data.data.lstEddies" style="padding: 5px 0;display: flex;flex-wrap: wrap">
          <div>序号</div>
          <div style="width: 170px;text-align: center;">({{item.longitude|ellipsis_1}}°,{{item.latitude|ellipsis_1}}°)</div>
          <div style="width: 100px;text-align: center;">{{item.radius}}m</div>
          <div style="width: 300px;text-align: center;">({{item.shapeLons[0]|ellipsis_1}}°,{{item.shapeLats[0]|ellipsis_1}}°)
            ({{item.shapeLons[1]|ellipsis_1}}°,{{item.shapeLats[1]|ellipsis_1}}°)...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as L from "leaflet";


  export default {
    filters: {
      ellipsis_1(value) {
        if (!value) return '';
        let num= parseFloat(value);
        return num.toFixed(2);
      },
    },
    data() {
      return {
        value1: '',
        radio: '2',
        ifField: false,
        ifQuery: false,
        ifAnimation: false,
        animationbg: false,
        customBaselayer: '',
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/headbackground.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        options: [{value: '高度计1', label: '高度计'}, {value: '高度计2', label: '高度计'}],
        data_type: '高度计1',
        map_options: [{value: '基础', label: '基础'}, {value: '灰色', label: '灰色'},
          {value: '青蓝', label: '青蓝'}, {value: '紫蓝', label: '紫蓝'}, {value: '暖色', label: '暖色'},],
        map_type: '基础',
        data_type_show: '',
        date: '',
        date_show: '请选择日期',
        W_show: '0',
        E_show: '0',
        S_show: '0',
        N_show: '0',
        number_show: '0',
        polygon: [],
        polygon_center: '请选择左侧涡旋',  //漩涡中心点
        polygon_radius: '请选择左侧涡旋',  //漩涡半径
        polygon_white: '',
        img_date: require('@/assets/img/date.png'),
        img_area: require('@/assets/img/area.png'),
        img_data: require('@/assets/img/data.png'),
        img_number: require('@/assets/img/number.png'),
        map: "",
        point: [17.883392, 130.90785],
        eddy_data: {
          "status": 0,
          "data": {
            "dateString": "2020-11-23",
            "areaCoordinate": {
              "areaCenterLat": "22.0",
              "areaCenterLon": "118.0",
              "latMin": "2",
              "latMax": "42",
              "lonMin": "104",
              "lonMax": "132"
            },
            "lstEddies": [
              {
                "name": null,
                "longitude": "124.0629",
                "latitude": "9.382177",
                "direction": 1,
                "radius": "30551.264",
                "shapeLons": [],
                "shapeLats": []
              }
            ]
          }
        },
        data: [],
        mousePosition: '',
        velocityLayer: '',
        time1: '',
      };
    },
    created() {

    },
    mounted() {
      this.initDate();  //初始化leaflet只能在挂载函数里
      this.getTodayData();
    },
    methods: {
      selectDate() {
        this.animationbg = true;
        this.axios.post('http://192.168.83.122:8085/eddy/image', {
          "endTime": this.value1[1],
          "startTime": this.value1[0]
        })
          .then(function (response) {
            let imgList = response.data.data.url;
            var head = document.getElementById("animation");//获取DIV对象
            // head.style.background="url(http://192.168.83.122:8085/"+imgList[0]+")";   //设置图片的初始图片为该路径的图片
            // head.style.backgroundSize="cover";
            let bg = document.getElementsByClassName('animationbg')[0];
            // bg.style.background='#fff';
            head.style.background = "url(http://192.168.83.122:8085/" + imgList[0] + ")";
            head.style.backgroundSize = "cover";
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      // closeAnimation(){
      //   this.ifAnimation=false;
      //   document.getElementsByClassName('options')[1].style.width='70px'
      // },
      clickMenu(n) {
        let bFather = document.getElementById('bFather');
        let options = bFather.getElementsByTagName('button');
        for (let i = 0; i < options.length; i++) {
          options[i].style.width = '70px';
        }
        options[n].style.width = '100px';
        if (n === 0) {
          this.ifQuery = true;
          this.ifAnimation = false;
          this.ifField = false;
          this.animationbg = false;
        } else if (n === 1) {
          this.ifQuery = false;
          this.ifAnimation = true;
          this.ifField = false;

        } else if (n === 2) {
          this.ifQuery = false;
          this.ifAnimation = false;
          this.ifField = true;
          this.animationbg = false;
        } else {
          this.ifQuery = false;
          this.ifAnimation = false;
          this.ifField = false;
        }
      },

      initDate() {
        this.map = L.map('map').setView(this.point, 5);
        this.customBaselayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.map.addLayer(this.customBaselayer);

        L.latlngGraticule({
          showLabel: true,
          dashArray: [0, 0],
          zoomInterval: [
            {start: 2, end: 3, interval: 30},
            {start: 4, end: 4, interval: 10},
            {start: 5, end: 7, interval: 10},
            {start: 8, end: 10, interval: 1}
          ]
        }).addTo(this.map);

        this.mousePosition = L.control.mousePosition().addTo(this.map);

        var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {maxZoom: 18, minZoom: 1});
        var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
          maxZoom: 18,
          minZoom: 1
        });
        var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
          maxZoom: 18,
          minZoom: 1
        });
        var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
          maxZoom: 18,
          minZoom: 1
        });

        /**
         * 天地图内容
         */
        var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
            key: '3bd04d49edc092df370712b3fada8d7b',
            maxZoom: 18,
            minZoom: 1,
          }),
          normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
            maxZoom: 18,
            minZoom: 1
          }),
          imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            maxZoom: 18,
            minZoom: 1
          }),
          imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 1
          });

        var normal = L.layerGroup([normalm, normala]);

        /**
         * 高德地图
         */
        var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
          maxZoom: 18,
          minZoom: 1
        });
        var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
          maxZoom: 18,
          minZoom: 1
        });
        var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
          maxZoom: 18,
          minZoom: 1
        });
        var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);


        var baseLayers = {
          "智图地图": normalm1,
          "智图午夜蓝": normalm3,
          "智图灰色": normalm4,
          "智图暖色": normalm5,
          "天地图": normal,
          "高德地图": Gaode,
          "高德影像": Gaodimage,
        }

        L.control.layers(baseLayers, null).addTo(this.map);
      },

      changeMap(value) {
        let that = this;
        that.map.removeLayer(that.customBaselayer);
        switch (value) {
          case '基础':
            that.customBaselayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            break;
          case '灰色':
            that.customBaselayer = L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            break;
          case '青蓝':
            that.customBaselayer = L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            break;
          case '紫蓝':
            that.customBaselayer = L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            break;
          case '暖色':
            that.customBaselayer = L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            break;
        }
        that.map.addLayer(that.customBaselayer);
      },

      cancel() {
        let that = this;
        this.map.off('mousedown');
        this.map.off('mouseup');
        this.map.dragging.enable();
        if (typeof that.rectangle != 'undefined') {
          that.rectangle.remove();
        }

      },

      a() {  //画框函数
        let that = this;
        if (typeof that.rectangle != 'undefined') {
          that.rectangle.remove();
        }
        if (that.polygon_yellow) {  //移除黄色漩涡
          that.map.removeLayer(that.polygon_yellow);
        }
        const latlngs = [];
        that.map.on('mousedown', onClick);    //点击地图
        that.map.on('mouseup', onDoubleClick);

        for (let k = 0; k < that.polygon.length; k++) {  ////移除所有漩涡
          that.map.removeLayer(this.polygon[k]);
        }

        function onClick(e) {
          // that.map.removeLayer(that.rectangle1)

          //左上角坐标
          latlngs[0] = [e.latlng.lat, e.latlng.lng];
          //开始绘制，监听鼠标移动事件
          that.map.on('mousemove', onMove);

        }

        function onMove(e) {
          //取消地图的拖拽方式
          that.map.dragging.disable();
          //
          latlngs[1] = [e.latlng.lat, e.latlng.lng];
          //删除临时矩形
          if (typeof that.tmprect != 'undefined') {
            that.tmprect.remove();
          }
          //添加临时矩形
          that.tmprect = L.rectangle(latlngs, {dashArray: 5}).addTo(that.map);
          // console.log(that.tmprect, 'tmprect1')
        }

        function onDoubleClick(e) {
          //矩形绘制完成，移除临时矩形，并停止监听鼠标移动事件
          // console.log(that.tmprect, 'tmprect2')
          that.tmprect.remove();
          that.map.off('mousemove');
          //右下角坐标
          latlngs[1] = [e.latlng.lat, e.latlng.lng];
          that.rectangle = L.rectangle(latlngs, {
            color: '#6c54e8',
            fillOpacity: .2,
            weight: 3
          })
          that.rectangle.addTo(that.map);

          that.map.off('mousedown');
          that.map.off('mouseup');
          that.map.dragging.enable();

          if (latlngs[0][1] > latlngs[1][1]) {
            that.lonMax = latlngs[0][1];
            that.lonMin = latlngs[1][1];
          } else {
            that.lonMax = latlngs[1][1];
            that.lonMin = latlngs[0][1];
          }
          if (latlngs[0][0] > latlngs[1][0]) {
            that.latMax = latlngs[0][0];
            that.latMin = latlngs[1][0];
          } else {
            that.latMax = latlngs[1][0];
            that.latMin = latlngs[0][0];
          }

          that.getData();

          // if (that.polygon[0]) {
          //   for (let i = 0; i < that.polygon.length; i++) {
          //     if ((that.polygon[i].longitude < latlngs[0][1] && that.polygon[i].longitude < latlngs[1][1]) || (that.polygon[i].longitude > latlngs[0][1] && that.polygon[i].longitude > latlngs[1][1]) || (that.polygon[i].latitude < latlngs[0][0] && that.polygon[i].latitude < latlngs[1][0]) || (that.polygon[i].latitude > latlngs[0][0] && that.polygon[i].latitude > latlngs[1][0])) {
          //       that.map.removeLayer(that.polygon[i]);
          //     }
          //   }
          // }
        }
      },

      getTodayData() {
        let that = this;
        // this.axios.post('http://192.168.1.102:8072/eddy/records?dateString='+this.today)
        this.axios.post('http://192.168.83.122:8085/eddy/records')
          .then(function (response) {
            that.eddy_data = response.data;
            that.drawPolygon();
            let point = [that.eddy_data.data.areaCoordinate.areaCenterLat, that.eddy_data.data.areaCoordinate.areaCenterLon];
            that.map.setView(point, 5);
            that.showData();
            that.date = that.eddy_data.data.dateString;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      getData() {
        for (let k = 0; k < this.polygon.length; k++) {
          this.map.removeLayer(this.polygon[k]);
        }
        if (this.polygon_yellow) {
          this.map.removeLayer(this.polygon_yellow);
        }
        let that = this;
        this.axios.post('http://192.168.83.122:8085/eddy/records?dateString=' + that.date)
          .then(function (response) {
            that.eddy_data = response.data;
            if (that.eddy_data.data) {
              that.drawPolygon();
              that.showData();
            }


            // let point = [that.eddy_data.data.areaCoordinate.areaCenterLat, that.eddy_data.data.areaCoordinate.areaCenterLon];
            // that.map.setView(point, 5);
            console.log(that.radio)
            if (that.radio == 1) {
              that.changeField(1)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      getAnimationImg() {
        this.animationbg = true;
        let that = this;
        let imgList = [];
        this.axios.post('http://192.168.83.122:8085/eddy/image', {
          "endTime": this.value1[1],
          "startTime": this.value1[0]
        })
          .then(function (res) {
            //成功
            imgList = res.data.data.url;
            var head = document.getElementById("animation");//获取DIV对象
            // head.style.background="url(http://192.168.83.122:8085/"+imgList[0]+")";   //设置图片的初始图片为该路径的图片
            // head.style.backgroundSize="cover";
            let bg = document.getElementsByClassName('animationbg')[0];
            // bg.style.background='#fff';

            window.clearTimeout(that.time1)

            for (var i = 0; i < imgList.length; i++) {
              (function (i) {
                that.time1 = setTimeout(function () {
                  head.style.background = "url(http://192.168.83.122:8085/" + imgList[i] + ")";
                  head.style.backgroundSize = "cover";
                }, i * 1000);
              })(i);
            }


          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
        // var imgs =["head0.jpg", "head1.jpg", "head2.jpg"];    //（设定想要显示的图片）


      },

      drawPolygon() {
        for (let j = 0; j < this.eddy_data.data.lstEddies.length; j++) {
          let latlngs = [];
          let polygon;

          for (let i = 0; i < this.eddy_data.data.lstEddies[j].shapeLons.length; i++) {
            let b = [this.eddy_data.data.lstEddies[j].shapeLats[i], this.eddy_data.data.lstEddies[j].shapeLons[i]];
            latlngs.push(b);
          }
          if (this.eddy_data.data.lstEddies[j].direction === 1) {
            this.polygon[j] = L.polygon(latlngs, {color: 'red'}).addTo(this.map);  //创建蓝色多边形
          } else {
            this.polygon[j] = L.polygon(latlngs, {color: 'blue'}).addTo(this.map);  //创建红色多边形
          }
          this.polygon[j].name = this.eddy_data.data.lstEddies[j].name;
          this.polygon[j].longitude = this.eddy_data.data.lstEddies[j].longitude;
          this.polygon[j].latitude = this.eddy_data.data.lstEddies[j].latitude;
          this.polygon[j].radius = this.eddy_data.data.lstEddies[j].radius;


          let LeafIcon = L.Icon.extend({
            options: {
              shadowUrl: '',
              iconSize: [0, 0],
              // shadowSize:   [50, 64],
              iconAnchor: [0, 0],
              // shadowAnchor: [4, 62],
              popupAnchor: [0, -10]
            }
          });

          let greenIcon = new LeafIcon({iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'});


          let that = this;
          this.polygon[j].on('click', function () {

            L.marker([this.latitude, this.longitude], {icon: greenIcon}).addTo(that.map)
              .bindPopup('纬度：' + this.latitude + '°<br>经度：' + this.longitude + '°<br>半径：' + this.radius + 'm')
              .openPopup();

            that.polygon_center = '(' + this.longitude + ',' + this.latitude + ')';
            that.polygon_radius = this.radius;
          });
        }
      },

      drawVelocity() {
        let that = this;
        // this.axios.get("/api/majorlist")
        this.axios.post("http://192.168.83.122:8085/eddy/current?dateString=" + that.date)
          .then(function (response) {
            let data = response.data.data;
            //生成风场实例
            if (data) {
              that.velocityLayer = L.velocityLayer({
                displayValues: true,
                displayOptions: {
                  velocityType: 'GBR flow',
                  displayPosition: 'bottomleft',
                  displayEmptyString: 'No flow data'
                },
                data: response.data.data,//风场数据
                minVelocity: -5, //Velocity：速率
                maxVelocity: 5,
                velocityScale: 1 / 2,

                particleAge: 100,  // 粒子在再生之前绘制的最大帧数
                particleMultiplier: 1 / 50,//粒子的数量
                lineWidth: 1,                     //粒子的粗细
                frameRate: 5,                      //定义每秒执行的次数,流速
                colorScale: ['#ffffff']
              });

              //添加风场样式至地图中

              // 风场实例添加到地图上
              that.velocityLayer.addTo(that.map)
            }
          })

          .catch(function (error) {
            console.log("出错喽：" + error);
          });
      },

      changeField(val) {
        if (this.velocityLayer) {
          this.map.removeLayer(this.velocityLayer);
        }
        if (val == 1) {
          this.drawVelocity();
        }
      },

      showData() {

        this.date_show = this.date;
        this.data_type_show = this.data_type;
        this.W_show = this.eddy_data.data.areaCoordinate.lonMin;
        this.E_show = this.eddy_data.data.areaCoordinate.lonMax;
        this.S_show = this.eddy_data.data.areaCoordinate.latMin;
        this.N_show = this.eddy_data.data.areaCoordinate.latMax;
        this.number_show = this.eddy_data.data.lstEddies.length;
      },


    }
  };
</script>

<style scoped>
  #map {
    width: 100%;
    height: calc(100vh);
    z-index: 1;
  }

  /deep/ .el-input__inner {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: 0;
  }

  /deep/ .el-picker-panel {
    background: rgba(0, 0, 0, 0.5);
  }

  /deep/ .leaflet-container a.leaflet-popup-close-button {
    display: none;
  }

  /deep/ .el-range-input {
    background: rgba(0, 0, 0, 0);
    color: white;
  }

  /deep/ .el-radio {
    color: white;
  }

  /deep/ .el-date-editor .el-range-separator {
    color: white;
  }

  .options {
    position: absolute;
    width: 70px;
    top: 110px;
    left: 60px;
    overflow: hidden;
    z-index: 11;
    transition: width 0.3s;
    -webkit-transition: width 0.3s; /* Safari */
  }

  .options:hover {
    width: 100px;
  }

  .animationbg {
    background-color: #fff;
  }

  .tableItem:hover{
    background-color: rgba(255,255,255,0.5);
    color: white;
  }
</style>
