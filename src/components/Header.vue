<template>
  <nav class="header">
    <div class="header-pages">
      <router-link to="/" class="header-pages__item">DIVI</router-link>
      <router-link to="/" class="header-pages__item"
        >Home</router-link
      >
      <router-link to="/tvshows" class="header-pages__item"
        >TV Shows</router-link
      >
      <router-link to="/movies" class="header-pages__item">Movies</router-link>
      <router-link to="/latest" class="header-pages__item">Latest</router-link>
      <router-link to="/popularheader" class="header-pages__item"
        >Popular</router-link
      >
    </div>

    <div class="header-icons">
      <a class="header-icons__item" href="">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            fill="currentColor"
          ></path></svg
      ></a>
      <a class="header-icons__item" href=""
        ><svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
            fill="currentColor"
          ></path></svg
      ></a>

      <a class="header-icons__item" href="">Sign In</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "IcRoundSearch",
  name: "MdiBell",
};
</script>

<style lang="scss">
.header {
  background-color: $headerBackgroundcolor;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  &-pages {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
    width: calc(100% / 2);
    &__item {
      color: $headernavbuttoncolor;
      margin-inline-end: 15px;
      text-decoration: none;
    }
  }

  &-icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    width: calc(100% / 3);
    &__item {
      color: $headernavbuttoncolor;
      margin-inline-start: 15px;
      text-decoration: none;
    }
  }
}

.router-link-active {
  color: $headernavactivebuttoncolor;
  text-decoration: none;
  margin-inline-end: 15px;
}
</style>