export default {
  async getContent({ state, commit }) {
    commit('increment')
    console.log(state.counter)
    const content = await this.$axios.$get(
      `/api/v1/one_hundred_people/${state.counter}`
    )
    commit('insert', content)
  },
  error({ commit }) {
    commit('increment')
  }
}
