<template>
  <header class="header">
    <a class="header-logo" href="#">
      <h1 class="header-title">
        {{ title.toLocaleUpperCase() }}
        <img src="../assets/logo.svg" alt="logo wish beer" />
      </h1>
    </a>
  </header>
</template>
<style lang="scss" scoped>
@import "../styles/components/_header.scss";
</style>

<script>
export default {
  data() {
    return {
      title: "wish a beer"
    };
  },

  components: {}
};
</script>
