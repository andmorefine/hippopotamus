export default {
  increment(state) {
    state.counter++
  },
  insert(state, contents) {
    state.contents.push(contents)
  },
  updateContents(state, contents) {
    state.contents = contents
  },
  clear(state) {
    state.counter = 0
    state.contents = []
  }
}
