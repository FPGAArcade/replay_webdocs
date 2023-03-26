<template>
  <div class="core-builds">
      <CoreBuild v-for="core in cores" :key="core.id" :core="core" />
  </div>
</template>

<script>
export default {
  props: {
    cores: {
      type: Array
    }
  },
  data() {
    return {
    }
  },

  beforeMount() {
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
