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
          <ul>
            <li v-for="(item, index) in contents" :key="index">
              {{ item.id }} - {{ item.kami }} {{ item.simo }}
            </li>
          </ul>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['counter', 'contents'])
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
