import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '敲代码',
        complete: true
      }
    ]
  },
  getters: {},
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delete(state, payload) {
      // const arr = []
      // state.list.filters((item) => {
      //   if (item.title !== payload.title) {
      //     arr.push(item)
      //   }
      //   return arr
      // })
      // state.list = arr
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },
  actions: {},
  modules: {}
})

/* export default createStore({
  state: {
    name: 'jack'
  },
  getters: {},
  mutations: {
    setName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // store用来提交的，类似于vue2.0的this.$store
    async setName(store, params) {
      setTimeout(() => {
        store.commit('setName', params)
      }, 2000)
    }
  },
  // 模块化
  modules: {}
})
 */
