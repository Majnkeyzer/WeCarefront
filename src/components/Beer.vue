<template>
  <li class="product-item">
    <div class="product-information">
      <header class="product-title">{{ beer.title }}</header>
      <div>{{ beer.city }}</div>
      <img class="product-image" :src="beer.img" />
    </div>
  </li>
</template>
<script>
export default {
  props: {
    beer: {}
  }
};
</script>
