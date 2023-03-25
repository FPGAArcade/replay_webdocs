<template>
  <div>
    <div v-if="hasVisibleCorePage">
      <PlatformFilter 
        :platforms={platforms} 
        :select-core="this.selectCore"
        :selected-platform="this.selectedPlatform"
        :select-platform="this.selectPlatform" 
      />
    </div>
    <div v-else>
      <div class="core-page-back-button" @click="this.disableCorePage">Back</div>
      <CoreView :show-details="false" :select-core="this.selectCore" :selected-platform="this.selectedPlatform" :selected-core="this.corePageSelectedCore" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['platforms'],

  data() {
    return {
      selectedPlatform: "R1",
      corePageVisible: false,
      corePageSelectedCore: "",
    }
  },

  beforeMount() {
  },

  computed: {
    hasVisibleCorePage() {
      return this.corePageVisible === false
    }
  },

  methods: {
    disableCorePage() {
      this.corePageVisible = false
      this.corePageSelectedCore = ""
    },
    selectPlatform(id) {
      this.selectedPlatform = id
    },
    selectCore(id) {
      this.corePageVisible = true
      this.corePageSelectedCore = id
    }
  }
}
</script>
<style scoped>

.core-page-back-button {
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #e7501e;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #d44617;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
