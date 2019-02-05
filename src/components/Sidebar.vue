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
<style>
.close {
  width: 24px;
  height: 24px;
  opacity: 0.5;
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}

.close:hover {
  opacity: 1;
}

.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 24px;
  width: 2px;
  background-color: #333;
}

.close:before {
  transform: rotate(45deg);
}

.close:after {
  transform: rotate(-45deg);
}

.clear-button {
  display: block;

  margin: 10px auto;
}
</style>
