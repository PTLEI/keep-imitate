export const test = ({ commit }, text) => {
    commit('tst', text);
    console.log("In Action", text);
}
export const setUser = ({ commit }, user) => {
    commit("userStatus", user)
}
export const exitUser = (context) => {
    context.commit("exitUser");
}