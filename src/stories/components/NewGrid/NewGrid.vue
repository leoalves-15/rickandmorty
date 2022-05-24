<template>
    <div :class="columns == 'two-columns' ? 'two-columns' :'four-columns'">
        <slot></slot>
    </div>
</template>

<script>
import './NewGrid.scss';

export default {
  name: 'NewGrid',
  props:{
    columns: {
      type:String,
      default: 'two-columns'
    }
  }
}
</script>