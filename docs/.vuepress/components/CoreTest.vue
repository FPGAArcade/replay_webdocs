<template>
  <div>
      <h2>All Platforms</h2>
      {{ platformList }}

      <h2>All Cores</h2>
      {{ coreList }}

      <h2>All Builds</h2>
      {{ buildList }}
  </div>
</template>

<style scoped>
</style>

<script>
export default {
    data() {
        return {
            platforms: null,
            cores: null,
            builds: null
        }
    },

    beforeMount() {
        this.testAPI();
    },

    computed: {
        platformList() {
            if (!this.platforms)
                return ""

            return this.platforms.map(item => item.name)
        },
        coreList() {
            if (!this.cores)
                return ""

            return this.cores.map(item => item.name)
        },
        buildList() {
            if (!this.builds)
                return ""

            return this.builds.map(item => item.downloadURL)
        },
    },

    methods: {
        async testAPI() {
            let res = await fetch(`${this.$themeConfig.replayAPI}/platforms/`)
            this.platforms = await res.json();

            res = await fetch(`${this.$themeConfig.replayAPI}/cores/`)
            this.cores = await res.json();

            res = await fetch(`${this.$themeConfig.replayAPI}/builds/`)
            this.builds = await res.json();
        }
    }
}
</script>
