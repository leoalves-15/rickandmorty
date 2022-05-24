<template>
  <div class="home">
    <HomeBanner :title="'API'"/>
    <div class="container-characters-home">
      <NewGrid :columns="'two-columns-small'">
      <CharacterCard 
        v-for="character in characters.results.slice(0,6)" :key="character.id"
        :image="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :origin="character.origin"
        :location="character.location"
        :episode="character.episode"
      />
    </NewGrid>
    </div>
  </div>
</template>

<script>
import './views-styles/Home.scss'
import gql from 'graphql-tag'
import HomeBanner from '@/stories/components/HomeBanner/HomeBanner.vue'
import NewGrid from '@/stories/components/NewGrid/NewGrid.vue'
import CharacterCard from '@/stories/components/CharacterCard/CharacterCard.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBanner,
    NewGrid,
    CharacterCard,
  },
   apollo: {
    characters: {
      query : gql`query{
      characters(page: 1){
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
    },
  },
}
</script>
