<template>
  <div class="core-wrapper">
    <div class="core-details">
      <div class="core-name">
      {{ core.coreId }}
      </div>
    </div> 
    <div class="core-download">
      <a target="_blank" :href="core.downloadURL">
        <div class="core-download-download">Download</div>
        <div class="core-download-subtext">latest stable</div>
      </a>

      <div v-if="this.showDetails === true" class="core-other-builds">
        <span @click="selectCore(core.coreId)" href="">other builds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDetails: {
      type: Boolean
    },
    selectCore: {
      type: Function
    },
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
.core-download > a {
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
