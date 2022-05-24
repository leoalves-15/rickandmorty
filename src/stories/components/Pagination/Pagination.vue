<template>
    <div class="pagination-container">
      <div v-show="first" class="pagination-page" @click="$emit('changePage', allpages[0])">{{allpages[0]}}</div>
      <div v-show="first" class="pagination-page">...</div>
      <div v-for="page in showPages" :key="page" 
        :class="page == currentPage ? 'pagination-current-page' : 'pagination-page'"
        aria-hidden="true"
        @click="$emit('changePage', page)"
      >
        {{page}}
      </div>
      <div v-show="last" class="pagination-page">...</div>
      <div v-show="last" class="pagination-page"
        @click="$emit('changePage', allpages.length)"
      >
      {{allpages.length}}
      </div>
    </div>
</template>

<script>
import './Pagination.scss';

export default {
  name: 'NewPagination',
  emits: ['changePage'],
  props: {
    allpages: Array,
    currentPage: Number
  },
  computed:{
    showPages() {
      if( this.currentPage <= 3){
        return this.allpages.slice(0, 5);
      }
     return this.allpages.slice(this.currentPage - 3, this.currentPage - (-2));
    },
    first(){
      return this.currentPage === 1 ? false : true; 
    },
    last(){
      return this.currentPage === this.allpages.length ? false : true; 
    }
  }
}
</script>