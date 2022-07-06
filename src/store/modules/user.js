import { getUserInfo } from '@/api/login'
export default {
  namespaced: true,
  state: () => ({
    authorization: '',
    menuList: [],
    userInfo: '',
    tagsList: []
  }),
  mutations: {
    setHeaders(state, authorization) {
      state.authorization = authorization
    },
    setMenuList(state, menu) {
      state.menuList = menu
    },
    setUserInfo(state, obj) {
      state.userInfo = obj
    },
    setTagsList(state, val) {
      // console.log(val)
      let flag = false
      state.tagsList.forEach((v) => {
        if (v.path === val.path) {
          flag = true
        }
      })
      if (!flag) {
        state.tagsList.push(val)
      }
    },
    delTag(state, i) {
      if (state.tagsList.length !== 1) {
        state.tagsList.splice(i, 1)
      }
    }
  },
  actions: {
    async getUser({ commit }) {
      const res = await getUserInfo()
      // console.log(res)
      commit('setUserInfo', res.data.data)
    },
    handleEdit({ commit }) {
      commit('setHeaders', '')
      commit('setUserInfo', '')
    }
  }
}
