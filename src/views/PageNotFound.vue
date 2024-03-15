<template>
  <simple-master-page>
    <div>Page not found</div>
    <router-link :to="{ name: 'home' }" />
  </simple-master-page>
</template>

<script setup>
import SimpleMasterPage from '@/masterpages/SimpleMasterPage.vue'
</script>

<style lang="scss" scoped></style>
