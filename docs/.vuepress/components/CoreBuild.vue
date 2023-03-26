<template>
  <div class="core-build">
    <div class="core-details">
      <div class="core-details-top">
        <div class="core-tag">
          <CoreTag :tag-name="getTagName" />
        </div>
        <div class="core-note">
          <div v-if="isDevel" class="core-warning">
            Warning: Development builds are bleeding edge, may not work, and could
  be dangerous to install without good reason.
          </div>
          <div v-else>
          </div>
        </div>
      </div>
      <div class="core-date">
        {{computedDate}}
      </div>
    </div>
    <div class="core-download">
      <a target="_blank" :href="core.downloadURL">
        <div class="core-download-download">Download</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    core: {
      type: Object
    }
  },
  data() {
    return {
    }
  },

  beforeMount() {
  },

  computed: {
    computedDate() {
      return new Date(this.core.buildDate).toLocaleString()
    },
    isDevel() {
      if(this.core.releaseTrain.includes("stable")) {
        return false
      } 
      if(this.core.releaseTrain.includes("testing")) {
        return false
      } 
      if(this.core.releaseTrain.includes("devel")) {
        return true
      } 
      return false
    },
    getTagName() {
      if(this.core.releaseTrain.includes("stable")) {
        return "stable"
      } 
      if(this.core.releaseTrain.includes("testing")) {
        return "testing"
      } 
      if(this.core.releaseTrain.includes("devel")) {
        return "devel"
      } 
    }
  },

  methods: {
  }
}
</script>

<style scoped>
.core-build {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #DDD;
}

.core-warning {
  padding: 0 2rem;
  color: #FD8A8A;
}

.core-details {
  display: flex;
  flex-direction: column;
}

.core-details-top {
  display: flex;
}

.core-date {
  font-size: 0.8rem;
  color: #AAA;
  margin: 1rem 0 0 0;
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
</style>
