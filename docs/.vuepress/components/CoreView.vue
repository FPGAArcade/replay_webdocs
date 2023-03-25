<template>
  <div>
    <CoreCard :core="this.core" :select-core="selectCore.selectCore" />
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
      core: {}
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
      let res = await fetch(`${this.$themeConfig.replayAPI}/builds?platforms=${platform}&buildType=core&platforms=${platform}&cores=${core}&limit=1`)
      console.log(res)
      // Just take the first one for now
      this.core = res[0]
    }
  }
}
</script>

<style scoped>
</style>
