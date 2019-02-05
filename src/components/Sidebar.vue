<template>
  <aside class="wish-list" :class="{ open: sidebarVisible }">
    <div class="wish-list-header">
      <h2>Your Wishes</h2>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    sidebarVisible: Boolean
  }
};
</script>
