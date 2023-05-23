<template>
  <div class="core-wrapper">
    <div class="core-details">
      <div class="core-name">
      {{ core.coreId }}
      </div>
    </div> 
    <div class="core-download" v-if="this.showDetails === true" >
      <div v-if="isStable">
        <a class="download-button" target="_blank" :href="core.downloadURL">
          <div class="core-download-download">Download</div>
          <div class="core-download-subtext">latest stable</div>
        </a>
      </div>
      <div v-else>
        <div class="download-button disabled">
          <div class="core-download-download">Download</div>
          <div class="core-download-subtext">&nbsp;</div>
        </div>
      </div>
      <div class="core-other-builds">
        <span @click="$emit('select-core', core.coreId)" href="">other builds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['select-core'],
  props: {
    showDetails: {
      type: Boolean
    },
    core: {
      type: Object
    },
  },
  computed: {
    isStable(core) {
      if(this.core.releaseTrain.includes("stable")) {
        return true
      } 
      return false
    },
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
.core-download .download-button {
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
}

.core-download .download-button.disabled {
  display: inline-block;
  font-size: 1rem;
  color: #ddd;
  background-color: #AAA;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #CCC;
  margin-bottom: 1rem;
}

.core-download {
  text-align: center;
}
.core-download-download {
  text-align: center;
}
.core-download-subtext {
  text-align: center;
  font-size: 0.6rem;
}

.core-other-builds {
  font-size: 0.8rem;
  text-decoration: underline;
  color: #222;
  cursor: pointer;
}

.core-other-builds > span {
  pointer: cursor;
  font-size: 0.8rem;
  text-decoration: underline;
  color: #222;
}

@media (max-width: 500px) {
  .core-wrapper {
    flex-direction: column;
  }
}
</style>
