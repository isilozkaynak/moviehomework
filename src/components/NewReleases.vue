<template>
  <section class="new">
    <div class="new-title">New Releases</div>
    <div class="new-films">
      <ul class="new-films__list">
        <li class="new-films__list__item">
          <img
            class="new-films__list__item-img"
            src="../assets/img/conj.jpg"
            alt=""
          />
        </li>
        <li class="new-films__list__item">
          <img
            class="new-films__list__item-img"
            src="../assets/img/man.jpg"
            alt=""
          />
        </li>
        <li class="new-films__list__item">
          <img
            class="new-films__list__item-img"
            src="../assets/img/luca.jpg"
            alt=""
          />
        </li>
        <li class="new-films__list__item">
          <img
            class="new-films__list__item-img"
            src="../assets/img/girl.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.new {
  margin: 20px;
  padding: 20px;
  &-title {
    color: $textcolor;
    @include font-size(36);
    margin-block-end: 50px;
  }
  &-films {
    &__list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      &__item {
        &-img {
          min-width: 255px;
          min-height: 400px;
          max-width: 255px;
          max-height: 400px;
        }
        &:hover {
          border: 2px solid $activecolor;
          cursor: pointer;
          -webkit-box-shadow: 0px 0px 15px 4px #6d43ff;
          box-shadow: 0px 0px 15px 4px #6d43ff;
        }
      }
    }
  }
}
</style>