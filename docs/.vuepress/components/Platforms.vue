<template>
  <div>
    <PlatformFilter :platforms={platforms} :selected-platform="this.selectedPlatform" :select-core="this.selectCore" />
  </div>
</template>

<script>
export default {
  props: ['platforms'],

  data() {
    return {
      selectedPlatform: "R1",
    }
  },

  beforeMount() {
  },

  computed: {
  },

  methods: {
    selectCore(id) {
      this.selectedPlatform = id
    }
  }
}
</script>
