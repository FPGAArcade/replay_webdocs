<template>
  <div>
    <ul class="platform-filters">
      <li class="platform-filter" v-for="platform in platforms" :key="platform.id" @click="$emit('select-platform', platform.id)" data-id="platform.id" :active="selectedPlatform == platform.id">
        {{ platform.name }}
      </li>
    </ul>
    <PlatformView :selected-platform="selectedPlatform" @select-core="$event => $emit('select-core', $event)" />
  </div>
</template>

<script>
export default {
  emits: ['select-core', 'select-platform'],
  props: {
    platforms: {
      type: Array,
      required: true
    },
    selectedPlatform: {
      type: String
    },
  },
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
