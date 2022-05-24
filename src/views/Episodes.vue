<template>
  <div class="home">
    <div>
      <SearchBox @changeSearch="(Term) => {this.shearchTerm = Term; handdlePagination(1)}"/>
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
    <NewPagination v-if="pages.length > 1" :allpages="pages" :currentPage="episodes.info.next ? episodes.info.next - 1 : episodes.info.pages" @changePage="handdlePagination"/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import SearchBox from '@/stories/components/SearchBox/searchBox.vue'
import EpisodeCard from '@/stories/components/EpisodeCard/EpisodeCard.vue'
import NewGrid from '@/stories/components/NewGrid/NewGrid.vue'
import NewPagination from '@/stories/components/Pagination/Pagination.vue'

export default {
  name: 'EpisodesPage',
  components: {
    EpisodeCard,
    NewGrid,
    SearchBox,
    NewPagination
  },
  data: function() {
  return {
    shearchTerm : ""
  };
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
      query : gql`query episodes($page: Int!, $searchName: String){
      episodes(page: $page, filter: {name: $searchName}){
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
      page: 1,
      searchName: ''
    },
    },
  },

   methods:{
      handdlePagination(pageParm){
        this.$apollo.queries.episodes.fetchMore({
        variables: {
          page: pageParm,
          searchName: this.shearchTerm
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
      window.scrollTo(0,0);
    }},
}
</script>
