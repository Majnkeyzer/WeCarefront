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
@import "../styles/scoped-styles/_header.scss";
</style>

<script>
import WishCounter from "./WishCounter.vue";
import { toggleSidebar } from "../mixins/toggleSidebar.js";

export default {
  mixins: [toggleSidebar],
  data() {
    return {
      title: "wish a beer"
    };
  },

  components: {
    WishCounter
  }
};
</script>
