<template>
  <aside class="wish-list header" :class="{ open: sidebarVisible }">
    <div class="wish-list-header">
      <a class="close" @click="toggleSidebar" />
      <h2>Your Wishes</h2>
    </div>
    <div class="flex-center">
      <button
        v-if="wishedBeers.length > 0"
        class="btn btn-primary"
        @click="clearAllWishedBeers"
      >
        Clear all wishes
      </button>
    </div>
    <ul class="wishes">
      <Wish v-for="wish in wishedBeers" :wish="wish" :key="wish.id" />
    </ul>
  </aside>
</template>
<script>
import { toggleSidebar } from "../mixins/toggleSidebar.js";
import { mapGetters, mapMutations } from "vuex";
import Wish from "./Wish.vue";
export default {
  mixins: [toggleSidebar],
  methods: {
    ...mapMutations(["clearAllWishedBeers"])
  },
  computed: {
    ...mapGetters(["wishedBeers"])
  },
  components: {
    Wish
  }
};
</script>
<style>
.wishes {
  padding-left: 0;
  margin-top: 20px;
}

.wish-list {
  position: fixed;
  right: -300px;
  height: 100%;
  top: 60px;
  background: #fff;
  transition: right 0.5s ease-in-out;
  width: 300px;
  overflow-y: auto;
}

.wish-list.open {
  right: 0;
  box-shadow: 1px 0 3px 0 #000;
}

.wish-list-header {
  display: flex;
  align-items: center;
}

.wishes {
  padding-bottom: 55px;
}

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
