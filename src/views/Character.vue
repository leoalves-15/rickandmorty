<template>
  <div class="home">
    <NewGrid :columns="'two-columns'">
      <CharacterCard 
        v-for="character in characters.results" :key="character.id"
        :image="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :origin="character.origin"
        :location="character.location"
      />
    </NewGrid>
    <NewPagination :allpages="pages" :currentPage="page" @changePage="handdlePagination"/>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag'
import NewGrid from '@/stories/components/NewGrid/NewGrid.vue'
import CharacterCard from '@/stories/components/CharacterCard/CharacterCard.vue'
import NewPagination from '@/stories/components/Pagination/Pagination.vue'

export default {
  name: 'CharacterPage',
  components: {
    NewGrid,
    CharacterCard,
    NewPagination
  },
  data: () => ({
    page: 1
  }),
  computed:{
    pages(){
      const pagesAux = [];
      for(let i = 1; i <= this.characters.info.pages; i++){
        pagesAux.push(i);
      }
      return pagesAux;
    },
  },
  apollo: {
    characters: {
      query : gql`query characters($page: Int!){
      characters(page: $page){
        info{
          pages
        }
           results{
             id,
             name,
             status,
             species,
             origin{
               name
             },
             image,
             location{
               name
             },
             episode{
               name
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

        this.$apollo.queries.characters.fetchMore({
        variables: {
          page: this.page,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEps = fetchMoreResult.characters.results

          return {
            characters: {
              __typename: previousResult.characters.__typename,
              info: previousResult.characters.info,
              results: newEps
            },
          }
        },
      })
    }},
}
</script>
