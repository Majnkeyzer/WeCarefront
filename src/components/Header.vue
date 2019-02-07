<template>
  <header class="header">
    <a class="header-logo" href="#">
      <h1 class="header-title">
        {{ title.toLocaleUpperCase() }}
        <img src="../assets/logo.svg" alt="logo wish beer" />
      </h1>
    </a>
    <WishCounter @click.native="toggleSidebar" />
  </header>
</template>
<style lang="scss" scoped>
@import "../styles/components/_header.scss";
</style>

<script>
import WishCounter from "./WishCounter.vue";

export default {
  data() {
    return {
      title: "wish a beer"
    };
  },
  props: {
    sidebarVisible: Boolean
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    }
  },
  components: { WishCounter }
};
</script>
