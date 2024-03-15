<script setup>
import { RouterView } from 'vue-router'
// import { useLocales } from './modulesHelpers/i18n'

// const { checkLocale } = useLocales()
// checkLocale()
</script>
<template>
  <RouterView />
</template>

<style scoped></style>
  <!-- <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/friends">Друзі</router-link> |
    <router-link to="/presents">Подарункі</router-link> |
    <router-link to="/assignments">Призначення подарунків</router-link>
    <router-link to="/users">Користувачі</router-link> |
  </nav>
  <router-view class="content"/> -->
<script setup>
</script>
<style lang="scss">
#app {
	display: flex;
 flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
 margin-bottom: 40px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content{
width: 700px;
}
</style>
 
