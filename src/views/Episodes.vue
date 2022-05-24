<template>
  <div class="home">
    <div>
      <NewGrid :columns="four-columns">
        <EpisodeCard
          v-for="episode in episodes.results" :key="episode.id"
          :id="episode.id"
          :name="episode.name"
          :air_date="episode.air_date"
          :episode="episode.episode"
          :characters="episode.characters"
        />
      </NewGrid>
    </div>
    <NewPagination :allpages="pages" :currentPage="episodes.info.next ? episodes.info.next - 1 : episodes.info.pages" @changePage="handdlePagination"/>
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
  computed:{
    pages(){
      const pagesAux = [];
      for(let i = 1; i <= this.episodes.info.pages; i++){
        pagesAux.push(i);
      }
      return pagesAux;
    },
  },
  apollo: {
    episodes: {
      query : gql`query episodes($page: Int!){
      episodes(page: $page){
        info{
          pages,
          next
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
        this.$apollo.queries.episodes.fetchMore({
        variables: {
          page: pageParm,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEps = fetchMoreResult.episodes.results
          const newInfo = fetchMoreResult.episodes.info

          return {
            episodes: {
              __typename: previousResult.episodes.__typename,
              info: newInfo,
              results: newEps
            },
          }
        },
      })
    }},
}
</script>
