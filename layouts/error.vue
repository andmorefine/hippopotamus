<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return { statusCode: 200 }
      }
    }
  },
  layout: 'blog' // エラーページ用のカスタムレイアウトを指定できます
}
</script>
