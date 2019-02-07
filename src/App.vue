<template>
  <div id="app">
    <div>
      <Header @toggle-sidebar="toggleSidebar" />
      <div class="main-content">
        <h1>{{ title }}</h1>
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
      title: "special beers",
      beers: [
        {
          id: "1",
          brewery: "brouwerij Jopen",
          title: "Mooie Nel I.P.A.",
          city: "Haarlem",
          province: "Noord-Holland",
          percentage: 6.5,
          img:
            "https://www.jopenbier.nl/app/uploads/2014/05/jopen-mooie-nel-1.png"
        },
        {
          id: "2",
          brewery: "brouwerij Jopen",
          title: "Malle Babbe",
          city: "Haarlem",
          province: "Noord-Holland",
          percentage: 5.5,
          img:
            "https://www.jopenbier.nl/app/uploads/2014/05/jopen-malle-babbe.png"
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
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
  padding: 0;
  margin: 0;
}

.main-content {
  margin-top: 60px;
}
</style>
