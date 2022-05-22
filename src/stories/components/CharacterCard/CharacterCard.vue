<template>
  <article class="character-card-container">
    <div class="character-card-column-image">
        <img :src="image" alt="">
    </div>
    <div class="character-card-column-info">
        <div class="character-card-info">
            <h2 class="character-card-name">{{name}}</h2>
            <span class="character-card-status">{{status}} - {{species}}</span>
        </div>
        <div class="character-card-info">
            <span class="character-card-info-lable">Last known location:</span>
            <!-- <span class="character-card-info-value">{{location?.name}}</span> -->
        </div>
        <div class="character-card-info">
            <span class="character-card-info-lable">Origin:</span>
            <!-- <span class="character-card-info-value">{{origin?.name}}</span> -->
        </div>
    </div>
  </article>
</template>

<script>
import './CharacterCard.scss';

export default {
  name: 'CharacterCard',
  props: {
    image: String,
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
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
