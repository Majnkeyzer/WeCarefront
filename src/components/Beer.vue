<template>
  <li class="product-item">
    <div class="product-information">
      <header class="product-title">{{ beer.title }}</header>
      <router-link :to="{ path: 'brewerydetail', params: { id: beer.id } }">
        {{ beer.brewery }}
      </router-link>
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
import { mapMutations } from "vuex";
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
    ...mapMutations(["addBeer", "incrementTotal"]),

    handleAddToWishList() {
      this.addBeer({ ...this.beer, number: this.number });
      this.incrementTotal(this.number);
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
<style lang="scss">
.product-image {
  max-width: 180px;
  max-height: 245px;
}
.product-item {
  display: inline-block;
  padding: 10px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 3px;
  color: #000;
}

a {
  color: #000;
}

a:hover {
  text-decoration: none;
}

.product-information {
  color: #000;
  text-align: center;
}
</style>
