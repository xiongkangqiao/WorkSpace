<template>
  <div>
    <div class="head">
      <div>海洋领域云应用发布平台</div>
    </div>


    <div class="body">
      <div style="height: 120px;padding: 20px 0;width: 1200px;border-bottom: 1px solid #ccc">
        <div style="width: 360px;height: 100px;float: left;font-size: 40px">App Gallery</div>
        <div style="padding: 20px 20px 20px 450px">
          海洋领域云应用发布平台
        </div>
      </div>

      <div style="height: 20px;padding: 30px 0;width: 1200px">
        <div style="font-size: 20px">All Apps ({{number}})</div>
      </div>

      <div style="min-height: 400px;display: flex;flex-wrap: wrap;">
        <div class="project" v-for="item in dataList.data.records" @click="jump(item.details)">
          <div class="img">
            <img :src=item.picUrl alt="" height="100%" style="display: block;margin: 0 auto">
            <div class="open">OPEN</div>
          </div>
          <div class="text">
            <div class="title">{{item.title|ellipsis_1}}</div>
          </div>
        </div>
      </div>
    </div>


    <div class="foot">
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    filters: {
      ellipsis_1(value) {
        if (!value) return '';
        if (value.length > 12) {
          return value.slice(0, 12) + '...'
        }
        return value
      }
    },
    data() {
      return {
        img_project1: require('@/assets/project_1.gif'),
        number: 8,
        dataList: {
          "code": "0",
          "msg": "请求成功",
          "data": {
            "records": [
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": require('@/assets/project_1.gif'),
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              }, {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },
              {
                "id": "71",
                "title": "中尺度涡旋检测",
                "picUrl": " http://127.0.0.1:8889/upload/20201103\\3\\9\\iap.png",
                "status": "未发布",
                "abstractDesc": "中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测中尺度涡旋检测",
                "details": "http://www.baidu.com",
                "updateAt": "2020-11-03 11:11:30"
              },

            ],
            "total": "1",
            "size": "10",
            "current": "1",
            "orders": [],
            "searchCount": true,
            "pages": "1"
          }
        },
      }
    },
    methods: {
      getData() {
        this.axios.get('http://192.168.83.122:8051/web/application/list')
          // this.axios.get('http://192.168.83.122:8051/web/application/list')
          .then(function (res) {
            //成功
            this.dataList = res.data;//此为后台响应回来的数据
            this.number = this.dataList.data.records.length;
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //失败
              console.log(err.response)
            }
          }.bind(this))
      },
      jump(url) {
        window.open(url, "_blank");
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .head {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #5dbcaf;
    z-index: 99999;
  }

  .head div {
    width: 1110px;
    margin: 0 auto;
    line-height: 60px;
    z-index: 99999;
    font-size: 15px;
  }

  .head div {
    width: 1110px;
    height: 50px;
  }

  .body {
    width: 1110px;
    margin: 0 auto;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    padding: 100px 0;
    min-height: 665px;
  }

  .body .project {
    height: 260px;
    width: 340px;
    margin: 20px 28px 20px 0;
    background-color: white;
    border: 1px solid #aaaaaa;
    cursor: pointer;
  }

  /*.body .project:hover {*/
  /*  box-shadow: 4px 4px 12px #aaa;*/
  /*}*/

  .project .img {
    position: relative;
    overflow: hidden;
    height: 182px;
    margin: 8px;
    border: 1px solid #EAEAEA;
    align-content: center;
    z-index: 1;
  }

  .project .img:hover .open {
    visibility: visible;
  }

  .open {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 10;
    line-height: 182px;
    text-align: center;
    font-size: 30px;
  }

  .project .text {
    height: 142px;
    padding: 4px 8px;
    overflow: hidden;
  }

  .project .text .title {
    height: 42px;
    font-size: 25px;
    line-height: 42px;
    color: #506784;
  }

  .text div {
    line-height: 1.7;
  }

  .project .address {
    height: 50px;
    background-color: #f8f9fa;
    text-align: center;
    line-height: 50px;
  }

  .project .address:hover {
    background-color: #e2e6ea;
  }

  .foot {
    width: 100%;
    height: 100px;
    background-color: #5dbcaf;
  }

  .foot div {
    width: 1110px;
    height: 100px;
  }
</style>
