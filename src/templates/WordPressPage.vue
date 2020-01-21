<template>
  <Layout>
    <h1 v-html="$page.wordPressPage.title"/>
    <img
      v-if="$page.wordPressPage.featuredMedia"
      :src="$page.wordPressPage.featuredMedia.sourceUrl"
      :width="$page.wordPressPage.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPage.featuredMedia.altText"
    />
    <div v-html="$page.wordPressPage.content"/>
  </Layout>
</template>

<page-query>
  query WordPressPage($id: ID!) {
    wordPressPage(id: $id) {
      title
      content
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title
    }
  }
}
</script>