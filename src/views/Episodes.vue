<template>
  <div class="home">
    <div>
      <NewGrid>
      <div v-for="episode in episodes.results" :key="episode.id">
        <EpisodeCard
          :id="episode.id"
          :name="episode.name"
          :air_date="episode.air_date"
          :episode="episode.episode"
          :characters="episode.characters"
        />
      </div>
      </NewGrid>
    </div>
    <NewPagination :allpages="pages" :currentPage="page" @changePage="handdlePagination"/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import EpisodeCard from '@/stories/components/EpisodeCard/EpisodeCard.vue'
import NewGrid from '@/stories/components/NewGrid/NewGrid.vue'
import NewPagination from '@/stories/components/Pagination/Pagination.vue'

export default {
  name: 'EpisodesPage',
  components: {
    EpisodeCard,
    NewGrid,
    NewPagination
  },
  data: () => ({
    page: 1
  }),
  computed:{
    pages(){
      const pagesAux = [];
      for(let i = 1; i <= this.episodes.info.pages; i++){
        pagesAux.push(i);
      }
      return pagesAux;
    },
    currentPage(){
      return 3
    }
  },
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
      handdlePagination(pageParm){
        this.page = pageParm;

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
              // results: [...previousResult.episodes.results, ...newEps]
              results: newEps
            },
          }
        },
      })
    }},
}
</script>
