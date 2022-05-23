<template>
  <div class="home">
    <div>
    <div v-for="episode in episodes.results" :key="episode.id">{{episode}}</div>
    </div>
    <button @click="handdlePagination">teste</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'


export default {
  name: 'EpisodesPage',
  components: {
  },
  data: () => ({
    page: 1
  }),
  apollo: {
    episodes: {
      query : gql`query episodes($page: Int!){
      episodes(page: $page){
        info{
          pages,
          count,
          next, 
          prev
        }
        results{
          id,
          name,
          air_date,
          episode,
          characters{
            name,
            id
          }
        }
      }
    }`,
    variables: {
      page: 1
    },
    },
  },

   methods:{
      handdlePagination(){
        this.page++;
        console.log(this.page)

        this.$apollo.queries.episodes.fetchMore({
        variables: {
          page: this.page,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEps = fetchMoreResult.episodes.results

          return {
            episodes: {
              __typename: previousResult.episodes.__typename,
              info: previousResult.episodes.info,
              results: [...previousResult.episodes.results, ...newEps]
            },
          }
        },
      })
    }},
}
</script>
