<template>
  <div id="app">
    <div>
      <Header @toggle-sidebar="toggleSidebar" />
      <div class="main-content">
        <ul class="main-list" v-if="beers">
          <Beer v-for="beer in beers" :beer="beer" :key="beer.id" />
        </ul>
      </div>
      <Sidebar :sidebarVisible="sidebarVisible" />
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Beer from "./components/Beer.vue";

export default {
  name: "app",
  data() {
    return {
      sidebarVisible: false,
      beers: []
    };
  },
  created() {
    this.getBeers();
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    getBeers() {
      const baseURI = `./beers.json`;
      this.$http.get(baseURI).then(result => {
        this.beers = result.data;
      });
    }
  },
  components: {
    Sidebar,
    Header,
    Beer
  }
};
</script>
<style lang="scss">
.main-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.main-content {
  margin-top: 60px;
}
</style>
