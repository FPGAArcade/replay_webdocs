<!--
Zoomable image wrapper
-->
<template>

    <img class="zoom-custom-img"
         :src="$withBase(src)"
         :data-zoom-src="$withBase(originalSrc)"
         :alt="alt" />

</template>

<style scoped>
.zoom-custom-img {
  border: solid 1px grey;
}
</style>

<script>
import * as path from 'path'

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
    }
  },

  computed: {
    originalSrc() {
      if (!this.thumbSuffix)
        return this.src

      const ext = path.extname(this.src)
      const filename = path.basename(this.src, ext)
      if (filename.endsWith(this.thumbSuffix))
        return path.join(path.dirname(this.src),
                         path.basename(this.src, ext).slice(0,-this.thumbSuffix.length) + ext)

      return this.src
    }
  }
}
</script>