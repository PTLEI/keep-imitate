export const tst = (state, txt) => {
    if (txt) {
        console.log(txt, '1');
    }
}
export const userStatus = (state, user) => {
    if (user) {
        state.currentUser = user;
        state.isLogin = true;
    } else if (user === null) {
        // 登出时清空sessionStorage里内容
        sessionStorage.getItem("uesrName", null);
        state.currentUser = null;
        state.isLogin = false;
    }
}
export const exitUser = (state) => {
    state.currentUser = null;
    state.isLogin = false;
}