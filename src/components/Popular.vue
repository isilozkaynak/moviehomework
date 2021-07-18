<template>
  <section class="popular-section">
    <div class="popular">
      <div class="popular__title">Most Popular Movie</div>
      <div class="popular__item">
        <img class="popular__item-img" src="../assets/img/war.jpg" alt="" />
      </div>
      <div class="popular__info">
        <p class="popular__info__item">ACTION</p>
        <p class="popular__info__item">ADVENTURE</p>
        <p class="popular__info__item">SCI-FIC</p>
        <p class="popular__info__item">2021</p>
         <router-link to="/detail" class="popular__info__button">Learn More</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.popular-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px;
}

.popular {
  margin: 40px;
  padding: 30px;
  max-width: 1220px;
  max-height: 400px;
  border: 1px solid $blockbordercolor;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  &__title {
    margin: 20px;
    width: 500px;
    color: $textcolor;
    @include font-size(56);
    font-weight: bold;
  }
  &__item {
    margin: 20px;
    &-img {
      min-width: 190px;
      min-height: 300px;
      max-width: 190px;
      max-height: 300px;
    }
  }
  &__info {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 304px;
    width: 210px;
    &__item {
      color: $textcolor;
      @include font-size(14);
    }
    &__button {
      color: $textcolor;
      @include font-size(14);
      font-weight: bold;
      width: 210px;
      height: 60px;
      background-color: $buttoncolor;
      margin-block-start: 20px;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: $activecolor;
        cursor: pointer;
        box-shadow: 0px 0px 15px 4px #6d43ff;
      }
    }
  }
  &:hover {
    border: 1px solid $activecolor;
  }
}
</style>