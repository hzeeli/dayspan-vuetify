import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={   //要设置的全局访问的state对象
  scheduleTypes: [],
  schedulePrioritys: [],
  scheduleReminder: [],
  departments: [],
  token: ''
  //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
  scheduleTypes(state) {  
    return state.scheduleTypes
  },
  schedulePrioritys(){  
    return state.schedulePrioritys
  },
  scheduleReminder(){  
    return state.scheduleReminder
  },
  departments() {
    return state.departments
  },
  token() {
    return state.token
  }
};
const mutations = {
  SET_SCHEDULETYPES: (state, val) => {
    state.scheduleTypes = val
  },
  SET_SCHEDULEPRIORITYS(state, val) {  
    state.schedulePrioritys = val;
  },
 SET_SCHEDULEREMINDER(state, val){ 
    state.scheduleReminder = val;
  },
  SET_DEPARTMENTS(state, val){
    state.departments = val;
  },
  SET_TOKEN(state, val) {
    state.token = val;
  }
};
const actions = {
  setScheduleTypes({ commit }, val) {
    commit('SET_SCHEDULETYPES', val)
  },
  setSchedulePrioritys({ commit }, val) {
    commit('SET_SCHEDULEPRIORITYS', val)
  },
  setScheduleReminder({ commit }, val) {  
    commit('SET_SCHEDULEREMINDER', val)
  },
  setDepartments({ commit }, val) {  
    commit('SET_DEPARTMENTS', val)
  },
  setToken({ commit }, val) {  
    commit('SET_TOKEN', val)
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store