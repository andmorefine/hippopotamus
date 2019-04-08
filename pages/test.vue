<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>test {{ counter }}</div>
        </v-card-title>
        <v-card-actions>
          <v-btn round color="success" @click="greet">Success</v-btn>
          <v-btn round color="warning" @click="push">push</v-btn>
          <v-btn round color="error" @click="clear">clear</v-btn>
        </v-card-actions>
        <div>
          <draggable v-model="contents">
            <transition-group>
              <div v-for="item in contents" :key="item.id">
                {{ item.id }} - {{ item.kami }} {{ item.simo }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  computed: {
    ...mapState(['counter']),
    contents: {
      get() {
        return this.$store.state.contents
      },
      set(value) {
        this.$store.commit('updateContents', value)
      }
    }
  },
  methods: {
    greet: function(event) {
      this.$store.dispatch('getContent')
    },
    ...mapMutations({
      push: 'increment',
      clear: 'clear'
    })
  }
}
</script>
