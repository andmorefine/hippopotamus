<template>
  <v-layout>
    <div>test {{ moge }}</div>
    <v-btn color="success" @click="greet">Success</v-btn>
  </v-layout>
</template>

<script>
export default {
  computed: {
    moge: {
      get: function() {
        return this.$store.getters.doneTodos
      }
    }
  },
  methods: {
    greet: function(event) {
      this.$store.dispatch('getIP')
    }
  }
}
</script>
