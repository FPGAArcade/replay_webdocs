<template>
  <div class="core-wrapper">
    <div class="core-details">
      <div class="core-name">
      {{ core.coreId }}
      </div>
      <div class="core-tags">
        <CoreTag v-for="release in core.releaseTrain" :tag-name="release" :tag-date="getTagDate(release)" />
      </div>
    </div> 
    <div class="core-download">
      <a target="_blank" :href="core.downloadURL">
        download
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    core: {
      type: Object
    },
  },
  data() {
    return {
    }
  },

  beforeMount() {
  },

  computed: {
  },

  methods: {
    getTagDate(release) {
      return this.core.releaseDate[release]
    }
  }
}
</script>

<style scoped>
.core-name {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}
.core-wrapper {
  border: 1px solid #eaecef;
  background: #eaecef;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}
.core-download a {
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #e7501e;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #d44617;
}


@media (max-width: 500px) {
  .core-wrapper {
    flex-direction: column;
  }
  .core-download {
    text-align: right;
  }
}
</style>
