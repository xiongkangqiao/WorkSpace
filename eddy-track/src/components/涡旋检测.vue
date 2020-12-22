<template>
  <div style="position: relative">
    <div id="map"></div>
    <div class="head">
      <div class="welcome">欢迎来到中尺度涡旋自动探测软件集成优化与可视化平台！</div>
      <div class="menu" :style="backgroundDiv">
        <router-link :to="{path:'/'}">
          <div>首页</div>
        </router-link>
        <router-link :to="{path:'/keshihua'}">
          <div>涡旋可视化</div>
        </router-link>
        <div class="this">涡旋检测</div>
        <router-link :to="{path:'/fuwu'}">
          <div>数据服务</div>
        </router-link>
      </div>
    </div>
    <div class="right">
      <div class="info">
        <div style="font-size: 18px;"><img :src="img_date" width="18px" alt=""> &nbsp时间</div>
        <hr>
        <div style="padding-top: 10px">
          <div style="float: left">时间</div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 228px;height: 30px;margin-left: 50px;padding-left: 20px">
            {{date_show}}
          </div>
        </div>
      </div>
      <div class="info">
        <div style="font-size: 18px;"><img :src="img_area" width="18px" alt=""> &nbsp区域</div>
        <hr>
        <div style="padding-top: 10px;display: flex;flex-wrap: wrap;justify-content: center;">
          <div style="width: 30px;text-align: center">W</div>
          <div style="background-color: rgba(255,255,255,0.5);width: 110px;height: 30px;margin-bottom: 10px">
            {{W_show}}
          </div>
          <div style="width: 30px;text-align: center">E</div>
          <div style="background-color: rgba(255,255,255,0.5);width: 110px;height: 30px;margin-bottom: 10px">
            {{E_show}}
          </div>
          <div style="width: 30px;text-align: center">S</div>
          <div style="background-color: rgba(255,255,255,0.5);width: 110px;height: 30px;margin-bottom: 10px">
            {{S_show}}
          </div>
          <div style="width: 30px;text-align: center">N</div>
          <div style="background-color: rgba(255,255,255,0.5);width: 110px;height: 30px;margin-bottom: 10px">
            {{N_show}}
          </div>
        </div>
      </div>
      <div class="info">
        <div style="font-size: 18px;"><img :src="img_data" width="18px" alt=""> &nbsp数据</div>
        <hr>
        <div style="padding-top: 10px">
          <div style="float: left">数据</div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 228px;height: 30px;margin-left: 50px;padding-left: 20px">
            {{data_type_show}}
          </div>
        </div>
      </div>
      <div class="info">
        <div style="font-size: 18px;"><img :src="img_number" width="18px" alt=""> &nbsp数量</div>
        <hr>
        <div style="padding-top: 10px">
          <div style="float: left">数量</div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 228px;height: 30px;margin-left: 50px;padding-left: 20px">
            {{number_show}}
          </div>
        </div>
      </div>
      <div class="info">
        <div style="padding-top: 10px">
          <div style="float: left;width: 45px;height: 10px;background: #C21A1A;margin-top: 10px"></div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 218px;height: 27px;margin-left: 60px;padding-left: 20px;padding-top: 3px">
            正向涡旋
          </div>
        </div>
        <div style="padding-top: 10px">
          <div style="float: left;width: 45px;height: 10px;background: #2323DE;margin-top: 10px"></div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 218px;height: 27px;margin-left: 60px;padding-left: 20px;padding-top: 3px">
            反向涡旋
          </div>
        </div>
        <div style="padding-top: 10px">
          <div style="float: left">中心点</div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 218px;height: 27px;margin-left: 60px;padding-left: 20px;padding-top: 3px">
            {{polygon_center}}
          </div>
        </div>
        <div style="padding-top: 10px">
          <div style="float: left">强度</div>
          <div
            style="background-color: rgba(255,255,255,0.5);width: 218px;height: 27px;margin-left: 60px;padding-left: 20px;padding-top: 3px">
            {{polygon_radius}}
          </div>
        </div>
      </div>
    </div>
    <div class="left-top">
      <div style="position: absolute;top: 125px;left:110px;z-index: 10">
        <el-button type="info" @click="a()">选择区域</el-button>
      </div>
    </div>
    <div
      style="width: 340px;height: 460px;position: absolute;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 10;padding: 20px 30px;color: white">
      <div style="font-weight: bold;text-align: center">文件</div>
      <hr>
      <el-table
        :data="tableData.data.records"
        style="width: 100%;background-color: rgba(0,0,0,0);"
        @current-change="handleCurrentChange"
        :show-header="false" height="400px" highlight-current-row>
        <el-table-column
          prop="fileName"
          label="日期"
          width="340px">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import * as L from "leaflet";


  export default {
    data() {
      return {
        tableData: {
          "status": 0,
          "data": {
            "records": [

            ],
            "total": 5,
            "size": 10,
            "current": 1,
            "orders": [],
            "searchCount": true,
            "pages": 1
          },
          "statusDesc": "成功"
        },
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/headbackground.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        options: [{
          value: '高度计1',
          label: '高度计'
        }, {
          value: '高度计2',
          label: '高度计'
        }],
        data_type: '',
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
        point: [39.90960456049752, 116.3972282409668],
        eddy_data: {
          // "status": 0,
          // "data": {
          //   "dateString": "20200815",
          //   "areaCoordinate": {
          //     "areaCenterLat": "22.0",
          //     "areaCenterLon": "118.0",
          //     "latMin": "2",
          //     "latMax": "42",
          //     "lonMin": "104",
          //     "lonMax": "132"
          //   },
          //   "lstEddies": [
          //     {
          //       "name": "track_579",
          //       "longitude": "131.52621",
          //       "latitude": "40.62422",
          //       "direction": 1,
          //       "radius": "74858.914",
          //       "shapeLons": [
          //         "131.125",
          //       ],
          //       "shapeLats": [
          //         "39.864620208740234",
          //       ]
          //     }
          //   ]
          // }
        },
        data: [],
        latMax: '',
        latMin: '',
        lonMax: '',
        lonMin: '',
        ncFileName: '',
        select: 0,
      };
    },
    created() {
      this.gettableData();


    },
    mounted() {
      this.initDate();  //初始化leaflet只能在挂载函数里
      // this.a();
    },
    methods: {

      handleCurrentChange(val) {
        this.select = 1;
        this.ncFileName = val.fileName;
      },

      a() {  //画框函数

        if (this.select === 0) {
          alert('请先选择左下角数据文件！')
        }

        let that = this;
        if (typeof that.rectangle != 'undefined') {  ////移除所有漩涡
          that.rectangle.remove();
        }
        if (that.polygon_yellow) {  //移除黄色漩涡
          that.map.removeLayer(that.polygon_yellow);
        }
        const latlngs = [];
        that.map.on('mousedown', onClick);    //点击地图
        that.map.on('mouseup', onDoubleClick);

        for (let k = 0; k < that.polygon.length; k++) {
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


      initDate() {
        this.map = L.map('map').setView(this.point, 5);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // L.latlngGraticule({
        //   showLabel: true,
        //   dashArray: [5, 5],
        //   zoomInterval: [
        //     {start: 2, end: 3, interval: 30},
        //     {start: 4, end: 4, interval: 10},
        //     {start: 5, end: 7, interval: 5},
        //     {start: 8, end: 10, interval: 1}
        //   ]
        // }).addTo(this.map);
      },

      getData() {
        for (let k = 0; k < this.polygon.length; k++) {
          this.map.removeLayer(this.polygon[k]);
        }
        let that = this;
        this.axios.post('http://192.168.83.122:8085/eddy/track?dataType=1&latMax=' + this.latMax + '&latMin=' + this.latMin + '&lonMax=' + this.lonMax + '&lonMin=' + this.lonMin + '&ncFileName=' + this.ncFileName)
          // this.axios.post('http://192.168.1.102:8072/eddy/track?ncFileName='+this.ncFileName)
          .then(function (response) {
            that.eddy_data = response.data;
            that.drawPolygon();
            that.showData();
            // let point = [that.eddy_data.data.areaCoordinate.areaCenterLat, that.eddy_data.data.areaCoordinate.areaCenterLon];
            // that.map.setView(point, 4);
          })
          .catch(function (error) {
            console.log(error);
            alert('暂无数据或数据请求错误！')
          });
      },

      gettableData(){
        let that=this;
        this.axios.post('http://192.168.83.122:8085/ncfile/list',{

          "currPage": 1,
          "pageSize": 10

        })
          .then(function (response) {
            that.tableData=response.data;
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

      drawVelocity() {
        let that = this;
        this.axios.get("/api/majorlist").then(function (response) {

          let data = response.data.data;
          //生成风场实例
          var velocityLayer = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: 'GBR Wind',
              displayPosition: 'bottomleft',
              displayEmptyString: 'No wind data'
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
          velocityLayer.addTo(that.map)
        })
          .catch(function (error) {
            console.log("出错喽：" + error);
          });
      },


      showData() {

        this.date_show = this.eddy_data.data.dateString;
        this.data_type_show = this.data_type;
        this.W_show = Math.round(this.eddy_data.data.areaCoordinate.lonMin);
        this.E_show = Math.round(this.eddy_data.data.areaCoordinate.lonMax);
        this.S_show = Math.round(this.eddy_data.data.areaCoordinate.latMin);
        this.N_show = Math.round(this.eddy_data.data.areaCoordinate.latMax);
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
  }

  /deep/ .el-picker-panel {
    background: rgba(0, 0, 0, 0.5);
  }

  /deep/ .el-table tr {
    background-color: #0000;
    color: white;
  }

  /deep/ .el-table td {
    border: 0;
  }

  /deep/ .el-table::before {
    height: 0;
  }

  /deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /deep/ .el-table__body tr.current-row > td {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
