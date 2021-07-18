<template>
  <section class="favorites">
    <div class="favorites__first">
      <div class="favorites__first__title">All-Time Movie Favorites</div>
      <button class="favorites__first__button">Watch Now</button>
      <img
        src="../assets/img/12deepfeet.jpg"
        alt=""
        class="favorites__first__img"
      />
    </div>
    <div class="favorites__second">
      <img
        src="../assets/img/deepbluesea.jpg"
        alt=""
        class="favorites__second__img"
      />
      <img
        src="../assets/img/contract.jpg"
        alt=""
        class="favorites__second__img"
      />
    </div>
    <div class="favorites__third">
      <img
        src="../assets/img/closeencounters.jpg"
        alt=""
        class="favorites__third__img"
      />
    </div>
  </section>
</template>

<style lang="scss">

.favorites {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  &__first {
    margin-inline: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 400px;
    height: 800px;
    &__title {
      color: $textcolor;
      @include font-size(52);
      width: 300px;
      height: 200px;
    }
    &__button {
      color: $textcolor;
      @include font-size(14);
      font-weight: bold;
      min-width: 210px;
      min-height: 60px;
      background-color: $buttoncolor;
      margin-block-start: 20px;

      &:hover {
          background-color: $activecolor;
          cursor: pointer;
          box-shadow: 0px 0px 15px 4px #6d43ff;
      }
    }
    &__img {
      min-width: 250px;
      min-height: 380px;
      max-width: 250px;
      max-height: 380px;
    }
  }
  &__second {
    margin-inline: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 328px;
    height: 700px;
    &__img {
      min-width: 200px;
      min-height: 300px;
      max-width: 200px;
      max-height: 300px;
    }
  }
  &__third {
    margin-inline: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 700px;
    &__img {
      min-width: 350px;
      min-height: 500px;
      max-width: 350px;
      max-height: 500px;
    }
  }
}
</style>