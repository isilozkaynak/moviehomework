<template>
  <BannerComponent></BannerComponent>
  <BlockComponent></BlockComponent>
  <router-view />
  <TrendingComponent></TrendingComponent>
  <NewReleasesComponent></NewReleasesComponent>
  <PopularComponent></PopularComponent>
  <router-view />
  <FavoritesComponent></FavoritesComponent>
  <router-view />
</template>

<script>
import BannerComponent from '../components/Banner.vue';
import BlockComponent from '../components/Block.vue';
import TrendingComponent from '../components/Trending.vue';
import NewReleasesComponent from '../components/NewReleases.vue';
import PopularComponent from '../components/Popular.vue';
import FavoritesComponent from '../components/Favorites.vue';

export default{
  components : {
    BannerComponent,
    BlockComponent,
    TrendingComponent,
    NewReleasesComponent,
    PopularComponent,
    FavoritesComponent,
  },
  setup(){

  },
};
</script>

<style>
</style>
