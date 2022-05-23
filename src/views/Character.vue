<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag'

export default {
  name: 'CharacterPage',
  components: {
  },
  apollo: {
    characters: gql`query {
      characters(page: 2, filter: { name: "rick" }) {
        results {
          name,
        }
      }
    }`,
  },
}
</script>
