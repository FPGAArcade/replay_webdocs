<template>
  <div class="core-tag">
    <div :class="releaseClassName">{{tagName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String
    },
  },
  data() {
    return {
    }
  },

  beforeMount() {
  },

  computed: {
    releaseClassName() {
      return `core-tag-release ${this.tagName}`
    },
    convertDateToLocale() {
      let date = new Date(this.tagDate).toLocaleString()
      return date
    }
  },

  methods: {
  }
}
</script>

<style scoped>
.core-tag {
  display: flex;
  align-content: center;
}

.core-tag-release {
  padding: 0.3rem;
  border: 1px solid #fff;
  min-width: 75px;
  text-align: center;
  margin-bottom: 0.6rem;
}

.core-tag-release.devel {
  background-color: #fef3d8;
  border: 1px solid #fef3d8;
  filter: drop-shadow(1px 1px 1px #ddc894);
}

.core-tag-release.testing {
  background-color: #DEDFFB;
  border: 1px solid #DEDFFB;
  filter: drop-shadow(1px 1px 1px #afb9ad);
}

.core-tag-release.stable {
  background-color: #cff3ca;
  border: 1px solid #cff3ca;
  filter: drop-shadow(1px 1px 1px #afb9ad);
}

.core-tag-date {
  padding: 0.5rem;
  font-size: 0.8rem;
}

</style>
