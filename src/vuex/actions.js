export const setUser = ({ commit }, user) => {
    commit("userStatus", user)
}
export const exitUser = (context) => {
    context.commit("exitUser");
}