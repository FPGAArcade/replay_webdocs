<!--
Zoomable image wrapper
-->
<template>

  <img class="zoom-custom-img" :class="{'zoom-custom-img--border': !noborder}"
       :src="$withBase(src)"
       :data-zoom-src="$withBase(originalSrc)"
       :alt="alt" />

</template>

<style scoped>
.zoom-custom-img--border {
  border: solid 1px grey;
}
</style>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      default: '',
      type: String
    },
    thumbSuffix: {
      default: '_thumb',
      type: String
    },
    noborder: {
      default: false,
      type: Boolean
    }
  },

  computed: {
    originalSrc() {
     if (!this.thumbSuffix)
        return this.src

      const extIdx = this.src.lastIndexOf('.')
      const ext = this.src.slice(extIdx)
      const filename = this.src.slice(this.src.lastIndexOf('/'), extIdx)

      if (filename.endsWith(this.thumbSuffix))
        return this.src.slice(0, -(this.thumbSuffix.length+ext.length)) + ext

      return this.src
    }
  }
}
</script>