<template>
    <div class="search-container">
        <input v-model="searchTerm" placeholder="Digite aqui">
        <button
        @click="$emit('changeSearch', searchTerm)"
        >Buscar</button>
    </div>
</template>
<script>
import './searchBox.scss';
export default {
  name: 'SearchBox',
  emits: ['changeSearch'],
  data: function() {
    return {
    searchTerm : ""
  };
  }
}
</script>