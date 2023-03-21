import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(){
      return this.state.count ++;
    }
  }
})
