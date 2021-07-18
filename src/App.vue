<template>
  <HeaderComponent></HeaderComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 1300px;
  height: auto;
}
</style>
