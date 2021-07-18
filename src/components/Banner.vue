<template>
  <section class="banner">
    <h1 class="banner__title">INCEPTION</h1>

    <div class="banner__genre">
      <ul class="banner__genre-list">
        <li class="banner__genre-list__item">ACTION</li>
        <li class="banner__genre-list__item">ADVENTURE</li>
        <li class="banner__genre-list__item">SCI-FIC</li>
      </ul>
    </div>

    <div class="banner__buttons">
      <button class="banner__buttons__learn">Learn More</button>
      <button class="banner__buttons__add">
        <svg width="3em" height="3em" viewBox="0 0 24 24">
          <path
            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "MdiPlus",
};
</script>

<style lang="scss">
.banner {
  background-image: url("../assets/img/inception.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-inline-start: 20px;
  &__title {
    color: $bannertitlecolor;
    @include font-size(64);
    margin-block: 20px;
  }
  &__genre {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    color: $bannergenrecolor;
    &-list {
      list-style-type: none;
      list-style: none;
      padding: 10px;
      &__item {
        display: inline;
        margin-inline-end: 20px;
        @include font-size(18);
      }
    }
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-block: 30px;
    &__learn {
      text-align: center;
      color: $bannerbuttontextcolor;
      background-color: $bannerlearnbuttoncolor;
      width: 210px;
      height: 60px;
      margin-inline-end: 20px;
      font-size: 18px;
      @include font-size(18);
      cursor: pointer;
      &:hover {
        background-color: $activecolor;
        -webkit-box-shadow: 0px 0px 15px 4px #6d43ff;
        box-shadow: 0px 0px 15px 4px #6d43ff;
      }
    }
    &__add {
      background-color: $banneraddbuttoncolor;
      opacity: 0.71;
      color: $bannerbuttontextcolor;
      width: 60px;
      height: 60px;
      &:hover {
        background-color: $headernavactivebuttoncolor;
        cursor: pointer;
        color: $textcolor;
        -webkit-box-shadow: 0px 0px 15px 4px #c5c5c5;
        box-shadow: 0px 0px 15px 4px #c5c5c5;
      }
    }
  }
}
</style>