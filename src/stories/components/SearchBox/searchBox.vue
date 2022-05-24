<template>
    <div>
        <input v-model="message" placeholder="Me edite">
        <button
        @click="$emit('changeSearch', message)"
        >enviar</button>
    </div>
</template>
<script>
export default {
  name: 'SearchBox',
  emits: ['changeSearch'],
  data: function() {
    return {
    message : ""
  };
  }
}
</script>