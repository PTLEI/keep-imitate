import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    // 状态定义
    state: {
        currentUser: null,
        isLogin: false,
    },
    getters: {
        currentUser: state => { state.currentUser },
        isLogin: state => { state.isLogin }
    },
    mutations: {
        userStatus = (state, user) => {
            if (user) {
                state.currentUser = user;
                state.isLogin = true;
            } else if (user === null) {
                // 登出时清空sessionStorage里内容
                sessionStorage.getItem("uesrName", null);
                state.currentUser = null;
                state.isLogin = false;
            }
        },
        exitUser = (state) => {
            state.currentUser = null;
            state.isLogin = false;
        }
    },
    actions: {
        setUser = ({ commit }, user) => {
            commit("userStatus", user)
        },
        exitUser = (context) => {
            context.commit("exitUser");
        }
    }
})
export default store