<template>
  <ParentLayout>
    <template #page-bottom>
      <div v-if="$site.themeConfig.poweredby" class="poweredby" >
        <span>Powered by</span>
        <a :href="$site.themeConfig.poweredbylink">
          <img class="poweredby__logo"
               :src="$withBase($site.themeConfig.poweredby)">
        </a>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.poweredby {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.poweredby__logo {
  margin-left: 1em;
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