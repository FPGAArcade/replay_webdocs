<template>
  <div>
    <ul class="platform-filters">
      <li class="platform-filter" v-for="platform in platforms.platforms" :key="platform.id" @click="selectPlatform(platform.id)" data-id="platform.id" :active="selectedPlatform == platform.id">
        {{ platform.name }}
      </li>
    </ul>
    <PlatformView :selected-platform="selectedPlatform" :key="filterKey" :select-core="selectCore" />
  </div>
</template>

<script>
export default {
  props: {
    platforms: {
      type: Object
    },
    selectedPlatform: {
      type: String
    },
    selectPlatform: {
      type: Function
    },
    selectCore: {
      type: Function
    }
  },

  data() {
    return {
    }
  },

  beforeMount() {
  },

  computed: {
    filterKey() {
      return `filter-${this.selectedPlatform}`
    }
  },

  methods: {
  }
}
</script>

<style scoped>
.platform-filters {
  list-style-type: none;
  display: flex;
  padding-left: 0;

}

.platform-filter {
  margin-right: 1rem;
  padding: 0.6rem;
  border: 2px solid #eaecef;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.platform-filter:hover {
  cursor: pointer;
}

.platform-filter[active="true"] {
  color: #fff;
  background-color: #e7501e;
  border: 2px solid #e7501e;
}
</style>
