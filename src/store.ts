import { createStore } from 'vuex'

const state = {
  numbers: [1, 2, 3],
  userInfo: {},
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  SET_USERINFO(state, payload) {
    state.userInfo = payload;
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  setUserInfo(context, data) {
    context.commit('SET_USERINFO', data);
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getUserInfo(state) {
    return state.userInfo;
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
