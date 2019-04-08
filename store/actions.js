export default {
  async getContent({ state, commit }) {
    commit('increment')
    const content = await this.$axios.$get(
      `https://api.andmorefine.com/api/v1/one_hundred_people/${state.counter}`
    )
    commit('insert', content)
  },
  error({ commit }) {
    commit('increment')
  }
}
