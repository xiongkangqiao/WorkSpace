<template>
  <div style="position: relative">
    <div ref="imageDom">
    <div id="map" ></div>

    <div class="head">
      <div class="welcome">欢迎来到中尺度涡旋自动探测软件集成优化与可视化平台！</div>
      <div class="menu" :style="backgroundDiv">
        <div class="this">首页</div>
        <router-link :to="{path:'/keshihua'}"><div>涡旋可视化</div></router-link>
        <router-link :to="{path:'/jiance'}"><div>涡旋检测</div></router-link>
        <router-link :to="{path:'/fuwu'}"><div>数据服务</div></router-link>
      </div>
    </div>
    <div style="position: absolute;top: 300px;z-index: 11">
    <el-button  type="info" @click="clickGeneratePicture()">手选区域</el-button>
    <img :src="imgUrl" alt="" height="100px ">
    </div>
  </div>
  </div>
</template>

<script>
  import * as L from "leaflet";
  import html2canvas from "html2canvas"
  import chinaProvider from "leaflet.chinatmsproviders"


  import 'ih-leaflet-canvaslayer-field/dist/leaflet.canvaslayer.field'

  export default {
    data() {
      return {
        imgUrl:'',
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/headbackground.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        today:'',
        data_type: '',
        data_type_show: '',
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
        point: [39.90960456049752, 116.3972282409668],
        customBaselayer:'',
        eddy_data: {
          "status": 0,
          "data": {
            "dateString": "20200815",
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
                "name": "track_579",
                "longitude": "131.52621",
                "latitude": "40.62422",
                "direction": 1,
                "radius": "74858.914",
                "shapeLons": [
                  "131.125",
                ],
                "shapeLats": [
                  "39.864620208740234",
                ]
              }
            ]
          }
        },

      };
    },
    created() {

      this.getData();

    },
    mounted() {
      this.initDate();  //初始化leaflet只能在挂载函数里
    },
    methods: {
      clickGeneratePicture() {
        var url_u = "https://ihcantabria.github.io/Leaflet.CanvasLayer.Field/data/Bay_U.asc";
        var url_v = "https://ihcantabria.github.io/Leaflet.CanvasLayer.Field/data/Bay_V.asc";
        var urls = [url_u, url_v];
        var promises = urls.map(url => fetch(url).then(r => r.text()));
        Promise.all(promises).then(function (arrays) {
          let vf = L.VectorField.fromASCIIGrids(arrays[0], arrays[1]);
          let layer = L.canvasLayer.vectorFieldAnim(vf).addTo(map);
          map.fitBounds(layer.getBounds());

          layer.on('click', function(e) {
            if (e.value !== null) {
              let vector = e.value;
              let v = vector.magnitude().toFixed(2);
              let d = vector.directionTo().toFixed(0);
              let html = (`${v} m/s to ${d}&deg`);
              let popup = L.popup()
                .setLatLng(e.latlng)
                .setContent(html)
                .openOn(map);
            }
          });
        });
      },

      //http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}   灰色
      //http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}  青蓝
      //http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}  紫蓝
      //http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x} 暖

      initDate() {
        this.map = L.map('map').setView(this.point, 5);
        this.customBaselayer=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom: 18,
          minZoom: 1
        });
        this.map.addLayer(this.customBaselayer);


        var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map',{maxZoom:18,minZoom:1});

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
        var normalm = L.tileLayer.chinaProvider(
          'TianDiTu.Normal.Map',
          {
            key: '3bd04d49edc092df370712b3fada8d7b',
            maxZoom:18,
            minZoom:1,
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



        let that=this;
        d3.text('http://159.226.158.119:8888/upload/20201111/b/0/myGrid_u.asc', function (u) {
          d3.text('http://159.226.158.119:8888/upload/20201111/c/8/myGrid_v.asc', function (v) {
            let vf = L.VectorField.fromASCIIGrids(u, v);
            let layer = L.canvasLayer.vectorFieldAnim(vf, {
              paths: 10000,
              fade: 0.97,
              maxAge: 100,
              velocityScale: 1 / 3,
              color: 'rgba(255, 255, 255, 0.7)'
            }).addTo(that.map);
            // that.map.fitBounds(layer.getBounds());

            layer.on('click', function (e) {
              if (e.value !== null) {
                let vector = e.value;
                let v = vector.magnitude().toFixed(2);
                let d = vector.directionTo().toFixed(0);

                let popup = L.popup()
                  .setLatLng(e.latlng)
                  .setContent(html)
                  .openOn(that.map);
              }
            }); // {onClick: callback} inside 'options' is also supported when using layer contructor
          });
        });

      },

      getData() {
        this.getToday();
        let that = this;
        // this.axios.post('http://192.168.1.102:8072/eddy/records?dateString='+this.today)
        this.axios.post('http://192.168.83.122:8085/eddy/records')
          .then(function (response) {
            that.eddy_data = response.data;
            that.drawPolygon();
            let point = [that.eddy_data.data.areaCoordinate.areaCenterLat, that.eddy_data.data.areaCoordinate.areaCenterLon];
            that.map.setView(point, 5);
            that.showData();
          })
          .catch(function (error) {
            console.log(error);
          });
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
            this.polygon[j] = L.polygon(latlngs, {color: 'blue'}).addTo(this.map);  //创建蓝色多边形
          } else {
            this.polygon[j] = L.polygon(latlngs, {color: 'red'}).addTo(this.map);  //创建红色多边形
          }
          this.polygon[j].name = this.eddy_data.data.lstEddies[j].name;
          this.polygon[j].longitude = this.eddy_data.data.lstEddies[j].longitude;
          this.polygon[j].latitude = this.eddy_data.data.lstEddies[j].latitude;
          this.polygon[j].radius = this.eddy_data.data.lstEddies[j].radius;
          let that = this;

          this.polygon[j].on('click', function () {
            if (that.polygon_yellow) {
              that.map.removeLayer(that.polygon_yellow);
            }
            that.polygon_yellow = L.polygon(this._latlngs, {color: 'yellow'}).addTo(that.map);  //创建黄色多边形
            that.polygon_center = '(' + this.longitude + ',' + this.latitude + ')';
            that.polygon_radius = this.radius;
          });
        }
      },

      getToday(){
        let today=new Date();
        let month=today.getMonth()+1;
        this.today=today.getFullYear()+'-'+month+'-'+today.getDate();
      },
      showData() {

        // this.data_type_show = this.data_type;
        this.W_show = this.eddy_data.data.areaCoordinate.lonMin;
        this.E_show = this.eddy_data.data.areaCoordinate.lonMax;
        this.S_show = this.eddy_data.data.areaCoordinate.latMin;
        this.N_show = this.eddy_data.data.areaCoordinate.latMax;
        this.number_show = this.eddy_data.data.lstEddies.length;
        console.log(this.eddy_data.data.lstEddies.length)
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
</style>
