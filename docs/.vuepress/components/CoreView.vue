<template>
  <div>
    <CoreCard :core="core" :select-core="selectCore.selectCore" />
    <CoreBuilds :cores="cores" />
  </div>
</template>

<script>
export default {
  props: {
    selectCore: {
      type: Function
    },
    selectedCore: {
      type: String
    },
    selectedPlatform: {
      type: String
    }
  },

  data() {
    return {
      core: {},
      cores: []
    }
  },

  beforeMount() {
    this.getCore()
  },

  computed: {
  },

  methods: {
    async getCore() {
      let platform = this.selectedPlatform
      let core = this.selectedCore
      let res = await fetch(`${this.$theme.replayAPI}/builds?platforms=${platform}&buildType=core&cores=${core}&desc=true`)
      let json = await res.json()
      console.log(json)
      // Just take the first one for now
      this.core = json[0]
      this.cores = json
    }
  }
}
</script>

<style scoped>
</style>
