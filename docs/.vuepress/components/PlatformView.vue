<template>
  <div>
    <div v-if="hasCores">
      <CoreCard v-for="core in platformData" :key="core.id" :core="core" :show-details="true" :select-core="selectCore" />
    </div>
    <div v-else-if="loading"></div>
    <div v-else>
      No Cores Available
    </div>
  </div>
</template>

<script>

const sortByBuildDate = (arr) => {
  return arr.sort(function(a,b){
    return new Date(b.buildDate) - new Date(a.buildDate)
  })
}

const getUniqBy = (arr, prop) => {
  const set = new Set;
  return arr.filter(o => !set.has(o[prop]) && set.add(o[prop]));
};

const sortByCoreName = (arr) => {
  return arr.sort(function(a, b) {
     return a.coreId.localeCompare(b.coreId);
  });
}

export default {
  props: {
    selectedPlatform: {
      type: String
    },
    selectCore: {
      type: Function
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
      let res = await fetch(`${this.$theme.replayAPI}/builds?platforms=${platform}&buildType=core`)


      let platformData = await res.json()
      platformData = sortByBuildDate(platformData)
      platformData = getUniqBy(platformData, "coreId")
      platformData = sortByCoreName(platformData)

      this.platformData = platformData

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
