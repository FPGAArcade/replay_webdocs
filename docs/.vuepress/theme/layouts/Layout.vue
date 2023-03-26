<template>
  <ParentLayout>
    <template #page-bottom>
      <div v-if="$theme.poweredby" class="poweredby" >
        <span>Powered by</span>
        <a :href="$theme.poweredbylink">
          <img class="poweredby__logo"
               :src="$withBase($theme.poweredby)">
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
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>