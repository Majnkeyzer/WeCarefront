<template>
  <li class="product-item">
    <div class="product-information">
      <header class="product-title">{{ beer.title }}</header>
      <div>{{ beer.brewery }}</div>
      <div>{{ beer.city }}</div>
      <img class="product-image" :src="beer.img" />
    </div>
    <div class="add-container">
      <button class="btn btn-primary" @click="decrementAmount">-</button>
      <span>{{ number }}</span>
      <button class="btn btn-primary" @click="incrementAmount">+</button>
      <button class="btn btn-primary" @click="handleAddToWishList">
        Add to wishlist
      </button>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    beer: {}
  },
  data() {
    return {
      number: 0
    };
  },
  methods: {
    handleAddToWishList() {
      this.resetAmount();
    },
    resetAmount() {
      this.number = 0;
    },
    decrementAmount() {
      if (this.number > 0) {
        this.number--;
      }
    },
    incrementAmount() {
      this.number++;
    }
  }
};
</script>
