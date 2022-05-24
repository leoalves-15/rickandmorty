<template>
    <div :class="columns">
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