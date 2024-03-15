<template>
  <div class="container">
    <h2>
      Щось пішло не так!
    </h2>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="6x" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.mt-16 {
  margin-top: 16px;
}
.ml-16 {
  margin-left: 16px;
}
.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
