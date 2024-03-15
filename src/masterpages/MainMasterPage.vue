<template>
  <div class="container">
    <div class="header">
      <slot name="header">
        <div>
          <main-menu-component />
          <!-- <h1>{{ currentRoute.name }}</h1> -->
        </div>
        <div class="right-section">
          <!-- <div>
            <span
              :class="{
                selected: locale == 'ua'
              }"
              @click="setLocale('ua')"
              >UA</span
            >
            <span
              :class="{
                selected: locale == 'en'
              }"
              @click="setLocale('en')"
            >
              EN</span
            >
          </div> -->
          <div v-if="user" class="user-section">
            <img v-if="user.photoURL" :src="user.photoURL" class="ml-16" />
            <font-awesome-icon v-else :icon="['fas', 'user']" size="2x" class="ml-16" />
            <span class="ml-16">{{ user.displayName ?? user.email }}</span>

            <button class="ml-16" @click="onLogout"> Вийти </button>
          </div>
          <button v-else @click="onLogin">Увійти</button>
        </div>
      </slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
    <div class="main">
      <loading-page v-if="isLoading" />
      <error-page v-else-if="hasError" />
      <template v-if="!hasError">
        <slot></slot>
      </template>
    </div>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script setup>
import MainMenuComponent from '@/components/MainMenuComponent.vue'
import LoadingPage from '@/components/LoadingPage.vue'
import ErrorPage from '@/components/ErrorPage.vue'

import { computed } from 'vue'

// import { useLocales } from '@/modulesHelpers/i18n.js'
// const { locale, setLocale } = useLocales()

import { useGeneralStore } from '@/stores/general'
import { storeToRefs } from 'pinia'
const generalStore = useGeneralStore()

const { isLoading, hasError } = storeToRefs(generalStore)

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const currentRoute = computed(() => useRoute())

function onLogin() {
  router.push({
    name: 'login'
  })
}

function onLogout() {
  authStore.logOut()
  router.push({
    name: 'login'
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu-link {
      margin: 16px;
    }
    .user-section {
      display: flex;
      align-items: center;
      img {
        height: 40px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .right-section {
      display: flex;
      align-items: center;
      span {
        cursor: pointer;
      }
    }
  }
  .selected {
    border: 2px solid green;
  }
  .ml-16 {
    margin-left: 16px;
  }
}
</style>
