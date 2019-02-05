<template>
  <div>
    <Header
      @toggle-sidebar="toggleSidebar"
      :sidebarVisible="sidebarVisible"
    ></Header>
    <div>
      <ul class="item-list mt-l" v-if="beers">
        <Beer
          v-on:addWish="addWishToList"
          v-for="beer in beers"
          :beer="beer"
          :key="beer.id"
        />
      </ul>
    </div>
    <Sidebar @toggle-sidebar="toggleSidebar" :sidebarVisible="sidebarVisible" />
  </div>
</template>

<script>
import Beer from "../components/Beer.vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import { getBeers } from "../mixins/getBeers.js";
export default {
  mixins: [getBeers],
  data() {
    return {
      sidebarVisible: false,
      title: "special beers",
      beers: []
    };
  },
  created() {
    this.getBeers();
  },
  methods: {
    addWishToList(beerId, amount) {
      alert(`${beerId}, ${amount}`);
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  },
  components: {
    Beer,
    Header,
    Sidebar
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.item-list {
  list-style: none;
}

.mt-l {
  margin-top: 100px;
}
</style>
