<template>
  <div class="image-grid">
    <router-link :to="item.link" v-for="item in gridArray" class="image-grid__item">
      <img :src="item.image" :alt="item.linkAlt || item.title" />
      <div>{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    gridArray: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-gap: 1em;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.image-grid__item {
  display: grid;
  grid-template-rows: 1fr min-content;

  justify-items: center;
  align-items: center;
}
</style>