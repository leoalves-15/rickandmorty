<template>
  <div class="home">
    <HomeBanner :title="'Personagens'"/>
    <SearchBox @changeSearch="(Term) => {this.shearchTerm = Term; handdlePagination(1)}"/>
    <NewGrid :columns="'two-columns'">
      <CharacterCard 
        v-for="character in characters.results" :key="character.id"
        :image="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :origin="character.origin"
        :location="character.location"
        :episode="character.episode"
      />
    </NewGrid>
    <NewPagination v-if="pages.length > 1" :allpages="pages" :currentPage="characters.info.next ? characters.info.next - 1 : characters.info.pages" @changePage="handdlePagination"/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import HomeBanner from '@/stories/components/HomeBanner/HomeBanner.vue'
import NewGrid from '@/stories/components/NewGrid/NewGrid.vue'
import CharacterCard from '@/stories/components/CharacterCard/CharacterCard.vue'
import NewPagination from '@/stories/components/Pagination/Pagination.vue'
import SearchBox from '@/stories/components/SearchBox/searchBox.vue'

export default {
  name: 'CharacterPage',
  components: {
    HomeBanner,
    NewGrid,
    CharacterCard,
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
      for(let i = 1; i <= this.characters.info.pages; i++){
        pagesAux.push(i);
      }
      return pagesAux;
    },
  },
  apollo: {
    characters: {
      query : gql`query characters($page: Int!, $searchName: String ){
      characters(page: $page, filter: {name: $searchName}){
        info{
          pages,
          next
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
      page: 1,
      searchName: ''
    },
    },
  },
  methods:{
      handdlePagination(pageParm){
        this.$apollo.queries.characters.fetchMore({
        variables: {
          page: pageParm,
          searchName: this.shearchTerm
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newCharacter = fetchMoreResult.characters.results
          const newInfo = fetchMoreResult.characters.info

          return {
            characters: {
              __typename: previousResult.characters.__typename,
              info: newInfo,
              results: newCharacter
            },
          }
        },
      })
      window.scrollTo(0,0);
    }
    },
}
</script>
