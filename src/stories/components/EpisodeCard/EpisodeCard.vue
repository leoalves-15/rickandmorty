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
            <button>See all characters</button>
        </div>
    </div>
  </article>
</template>

<script>
import './EpisodeCard.scss';

export default {
  name: 'EpisodeCard',
  props: {
    id: Number,
    name: String,
    air_date: String,
    episode: String,
    characters: Array,
  },
};
</script>
