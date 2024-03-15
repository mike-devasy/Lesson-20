<template>
  <div class="container">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <div class="main">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div class="footer">
      <slot name="footer">
        <router-link
          :to="{
            name: 'home'
          }"
        >
          На головну
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    height: 80px;
  }
  .main {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    height: 80px;
  }
}
</style>
