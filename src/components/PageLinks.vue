<template>
	<ul>
		<li v-for="{node} in getPages" :key="node.id">
			<a :href="node.path">{{ node.title }}</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'PageLinks',
	computed: {
		getPages() {
			const pages = this.$static.allWordPressPage.edges;
			return pages.filter( ( { node } ) => {
				return node.path && node.path !== '/'
			} )
		}
	}
};
</script>

<static-query>
  query {
    allWordPressPage {
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
</static-query>
