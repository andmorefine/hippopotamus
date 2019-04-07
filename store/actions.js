export default {
  async getIP({ commit }) {
    const ip = await this.$axios.$get('/api/v1/one_hundred_people/1')
    console.log(ip)
    commit('increment')
  }
}
