<template>
  <div class="wish-counter">
    <img src="../assets/bottle.svg" />
    <div class="counter">{{ countTotal }}</div>
  </div>
</template>
<style>
.wish-counter {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.wish-counter:hover img,
.wish-counter:hover div {
  transform: scale(1.2);
}

.counter {
  top: 20px;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["countTotal"])
  }
};
</script>
