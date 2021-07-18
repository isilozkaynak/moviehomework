<template>
  <section class="block">
    <router-link to="/movies" class="block__item">MOVIES</router-link>
    <router-link to="/tvshows" class="block__item">TV SERIES</router-link>
    <router-link to="/latest" class="block__item">NEW RELEASES</router-link>
  </section>
</template>

<style lang="scss">

body {
  background-color: $backgroundcolor;
}

.block {
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
  &__item {
    padding: 10px;
    margin: 20px;
    background-color: transparent;
    color: $textcolor;
    text-decoration: none;
    text-align: center;
    $width: 255px;
    $height: 55px;
    width: $width;
    height: $height;
    border: 1px solid $blockbordercolor;
    border-radius: $width * 0.06;
    @include font-size(18);
    &:hover {
      border: 2px solid $activecolor;
      background-color: $activecolor;
      cursor: pointer;
      box-shadow: 0px 0px 11px -1px rgba(109,67,255,0.8);
    }
  }
}
</style>