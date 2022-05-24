<template>
  <article class="character-card-container">
    <div class="character-card-column-image">
        <img :src="image" alt="">
    </div>
    <div class="character-card-column-info">
        <div class="character-card-info">
            <h2 class="character-card-name" @click="()=>{this.flagModal = !this.flagModal}">{{name}}</h2>
            <span class="character-card-status">{{status}} - {{species}}</span>
        </div>
        <div class="character-card-info">
            <span class="character-card-info-lable">Last known location:</span>
            <span class="character-card-info-value">{{location.name}}</span>
        </div>
        <div class="character-card-info">
            <span class="character-card-info-lable">Origin:</span>
            <span class="character-card-info-value">{{origin.name}}</span>
        </div>
    <ModalList @closeModal="()=>{this.flagModal = !this.flagModal}" v-if="flagModal" :title="`Personagens que participaram do EP. (${name})`" :list="episode"/>
    </div>
  </article>
</template>

<script>
import './CharacterCard.scss';
import ModalList from '../Modal/Modal.vue'

export default {
  name: 'CharacterCard',
  components: {
    ModalList,
  },
  data:function() {
  return {
    flagModal: false
  };
  },
  props: {
    image: String,
    id: Number,
    name: String,
    status: String,
    species: String,
    origin: {
      type: Object,
      name: String,
    },
    location: {
      type: Object,
      name: String,
    },
    episode: Array,
  },
};
</script>
