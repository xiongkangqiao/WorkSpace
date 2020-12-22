import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    interface:'http://192.168.83.122:39119',
    cover:1,
    top: 0,
    address: '山东省青岛市市南区南海路7号',
    postcode: '266071',
    copyright: '中国科学院海洋研究所',
    for_the_record: '370200206D875',
    img_QRcode: require('@/assets/img/QRcode.png'),
    img_bottom_address: require('@/assets/img/bottom_address.png'),
    img_bottom_postcode: require('@/assets/img/bottom_postcode.png'),
    bottom_text: '本站由中国科学院战略性先导科技专项（B类）"印太交汇区海洋物质能量中心形成演化过程与机制"提供资助',
  },
  mutations: {
    increment (state,top) {
      state.top=top;
    },
    coverChange (state,cover) {
      state.cover=cover;
    },
  }
});
export default store
