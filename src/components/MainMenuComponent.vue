<template>
  <nav>
    <router-link
      v-for="routeItem in visibleMenuItems"
      :key="routeItem.name"
      :to="{
        name: routeItem.name
      }"
      class="menu-link"
      >{{ routeItem.name }}</router-link
    >
  </nav>
</template>

<script setup>
import { computed } from 'vue'

import { routes } from '@/router'
import { isRouteAvailable } from '@/router/helpers.js'

function checkRoutesList(routeItems, menuItemsRoutes) {
  for (const routeItem of routeItems) {
    if (routeItem.children) checkRoutesList(routeItem.children, menuItemsRoutes)
    else if (routeItem.meta?.useInMenu && isRouteAvailable(routeItem)) {
      menuItemsRoutes.push({
        name: routeItem.name
      })
    }
  }
}

const visibleMenuItems = computed(() => {
  const menuItemsRoutes = []
  checkRoutesList(routes, menuItemsRoutes)
  return menuItemsRoutes
})
</script>

<style lang="scss" scoped>
.menu-link {
  margin: 16px;
}
</style>
