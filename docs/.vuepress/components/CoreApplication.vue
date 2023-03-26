<template>
  <div>
    <Platforms :platforms="platforms" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      platforms: [],
    }
  },

  beforeMount() {
    this.getPlatforms();
  },

  computed: {},

  methods: {
    async getPlatforms() {
      let res = await fetch(`${this.$theme.replayAPI}/platforms/`)      
      this.platforms = await res.json()
    },
  }
}
</script>
