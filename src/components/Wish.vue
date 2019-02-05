<template>
  <li class="wish-item">
    <div>{{ wish.number }} x</div>
    <div class="wish-information">
      <header class="wish-title">{{ wish.title }}</header>
      <span>{{ wish.brewery }}</span>
    </div>
    <img class="wish-image" :src="wish.img" />
  </li>
</template>
<script>
export default {
  props: {
    wish: {}
  }
};
</script>
<style lang="scss">
.wish-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.wish-item:nth-child(1) {
  border-top: 1px solid rgb(236, 236, 236);
}

.wish-information {
  display: flex;
  flex-direction: column;
}

.wish-item img {
  width: 50px;
  height: 90px;
}
</style>
