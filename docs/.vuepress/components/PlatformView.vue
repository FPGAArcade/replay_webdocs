<template>
  <div>
    <div v-if="hasCores">
      <CoreCard v-for="core in platformData" :key="core.id" :core="core" />
    </div>
    <div v-else-if="loading"></div>
    <div v-else>
      No Cores Available
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedPlatform: {
      type: String
    },
  },
  data() {
    return {
      platformData: [],
      hasCores: false,
      loading: true,
    }
  },

  beforeMount() {
    this.getForPlatform(this.selectedPlatform)
  },

  computed: {
  },

  methods: {
    async getForPlatform(platform) {
      let res = await fetch(`${this.$themeConfig.replayAPI}/builds?platforms=${platform}&buildType=core`)

      this.platformData = await res.json()
      if(this.platformData.length > 0) {
        this.hasCores = true
      } else {
        this.hasCores = false
      }
      
      this.loading = false
    }
  }
}
</script>
