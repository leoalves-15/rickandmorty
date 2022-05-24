<template>
  <article class="episode-card-container">
    <div class="episode-card-column-info">
        <div class="episode-card-info">
            <h2 class="episode-card-name">{{name}}</h2>
            <span class="episode-card-status">{{episode}}</span>
        </div>
        <div class="episode-card-info">
            <span class="episode-card-info-lable">{{air_date}}</span>
        </div>
        <div class="episode-card-info">
            <button @click="()=>{this.flagModal = !this.flagModal}">See all characters</button>
        </div>
    </div>
    <ModalList @closeModal="()=>{this.flagModal = !this.flagModal}" v-if="flagModal" :title="`Personagens que participaram do EP. (${name})`" :list="characters"/>
  </article>
</template>

<script>
import './EpisodeCard.scss';
import ModalList from '../Modal/Modal.vue'

export default {
  name: 'EpisodeCard',
  components: {
    ModalList,
  },
  data:function() {
  return {
    flagModal: false
  };
  },
  props: {
    id: Number,
    name: String,
    air_date: String,
    episode: String,
    characters: Array,
  },
};
</script>
