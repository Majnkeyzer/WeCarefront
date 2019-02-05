<template>
  <div id="app">
    <div>
      <Header />
      <div>
        <ul class="main-list" v-if="beers">
          <li class="product-item" v-for="beer in beers" :key="beer.id">
            <div class="product-information">
              <header class="product-title">{{ beer.title }}</header>
              <div>{{ beer.city }}</div>
              <img class="product-image" :src="beer.img" />
            </div>
          </li>
        </ul>
      </div>
      <Sidebar :sidebarVisible="sidebarVisible" />
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
export default {
  name: "app",
  data() {
    return {
      sidebarVisible: true,
      title: "special beers",
      beers: [
        {
          id: "1",
          brewery: "brouwerij Jopen",
          title: "Mooie Nel I.P.A.",
          city: "Haarlem",
          rovince: "Noord-Holland",
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
  components: {
    Sidebar,
    Header
  }
};
</script>
<style lang="scss">
.main-list {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 100px;
}
</style>
