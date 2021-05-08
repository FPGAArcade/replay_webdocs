<template>
  <ParentLayout>
    <template #page-bottom>
      <div>
        <img v-if="$site.themeConfig.poweredby"
             class="poweredby"
             :src="$withBase($site.themeConfig.poweredby)"
        >
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.poweredby {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>