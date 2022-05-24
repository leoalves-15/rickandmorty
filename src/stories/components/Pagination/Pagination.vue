<template>
    <div class="pagination-container">
      <div class="pagination-page">{{allpages[0]}}</div>
      <div class="pagination-page">...</div>
      <div v-for="page in showPages" :key="page" 
        :class="page == currentPage ? 'pagination-current-page' : 'pagination-page'"
      >
        {{page}}
      </div>
      <div class="pagination-page">...</div>
      <div class="pagination-page">{{allpages.length}}</div>
    </div>
</template>

<script>
import './Pagination.scss';

export default {
  name: 'NewPagination',
  data: () => ({
    showPages: []
  }),
  props: {
    allpages: Array,
    currentPage: Number
  },
  watch:{
    currentPage(){
      if( this.currentPage <= 3){
        this.showPages = this.allpages.slice(0, 5);
      }else{
        this.showPages = this.allpages.slice(this.currentPage - 3, this.currentPage - (-2));
      }
    }
  }
}
</script>