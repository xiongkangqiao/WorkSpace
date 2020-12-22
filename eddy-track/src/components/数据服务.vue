<template>
  <div style="position: relative">
    <div class="head">
      <div class="welcome">欢迎来到中尺度涡旋自动探测软件集成优化与可视化平台！</div>
      <div class="menu" :style="backgroundDiv">
        <!--        <router-link :to="{path:'/'}">-->
        <!--          <div>首页</div>-->
        <!--        </router-link>-->
        <router-link :to="{path:'/'}">
          <div>涡旋可视化</div>
        </router-link>
        <!--        <router-link :to="{path:'/jiance'}">-->
        <!--          <div>涡旋检测</div>-->
        <!--        </router-link>-->
        <div class="this">数据服务</div>
      </div>
    </div>
    <div class="dataService" :style="backgroundDiv_1">
      <div style="padding-top: 10%">1</div>
      <div
        style="width: 640px;height: 560px;background-color: rgba(0,0,0,0.8);z-index: 10;padding: 20px 30px;color: #acb6c8;margin: 0 auto">
        <div style="font-weight: bold;text-align: center">文件</div>
        <hr>
        <div style="min-height: 450px">
          <div v-for="item in tableData.data.records" style="height: 30px;padding-top: 15px">
            {{item.fileName}}
            <a :href="item.dataServices[0].svUrl" style="margin-left: 50px">HTTPServer</a>
            <el-tooltip class="item" effect="dark" :content=item.dataServices[1].svUrl placement="top">
              <span style="margin-left: 50px;cursor:pointer">OPENDAP</span>
            </el-tooltip>
          </div>
        </div>
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
    </div>


  </div>
</template>

<script>
  export default {
    name: "数据服务",
    data() {
      return {
        // 默认显示第几页
        currentPage: 1,
        // 总条数，根据接口获取数据长度(注意：这里不能为空)
        totalCount: 0,

        tableData: {},
        backgroundDiv: {
          backgroundImage: 'url(' + require('@/assets/img/headbackground.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
        backgroundDiv_1: {
          backgroundImage: 'url(' + require('@/assets/img/dataService.png') + ')',
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center'
        },
      }
    },
    methods: {
      handleCurrentChange(val) {
        // 改变默认的页数
        this.currentPage = val
        // 切换页码时，要获取每页显示的条数
        this.getData(val)
      },
      getData(n1) {
        // 这里使用axios，使用时请提前引入
        this.axios.post('http://192.168.83.122:8085/ncfile/list', {
          "currPage": n1,
          // 显示第几页
          "pageSize": 10
          // 每页显示的条数
        })
          .then(function (res) {
            //成功
            this.tableData = res.data;
            this.totalCount = parseInt(this.tableData.data.total);
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))

      },
    },
    created() {
      this.getData(1)
    }
  }
</script>

<style scoped>
  .dataService {
    width: 100%;
    height: calc(100vh);
    z-index: 1;
  }

  /deep/ .el-table tr {
    background-color: #0000;
    color: white;
  }

  /deep/ .el-table td {
    text-align: center;
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
