<template>
  <div class="wish-counter">
    <img src="../assets/bottle.svg" />
    <div class="counter">{{ countTotal }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    countTotal() {
      return this.$store.state.countTotal;
    }
  }
};
</script>
