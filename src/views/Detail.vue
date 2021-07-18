<template>
  <section class="detail">
    <div class="detail-item">
      <img src="../assets/img/war.jpg" alt="" />
    </div>
    <div class="detail-item">
      <div class="detail-item__title">Tomorrow War</div>
      <div class="detail-item__overview">
        The world is stunned when a group of time travelers arrive from the year
        2051 to deliver an urgent message: Thirty years in the future, mankind
        is losing a global war against a deadly alien species. The only hope for
        survival is for soldiers and civilians from the present to be
        transported to the future and join the fight. Among those recruited is
        high school teacher and family man Dan Forester. Determined to save the
        world for his young daughter, Dan teams up with a brilliant scientist
        and his estranged father in a desperate quest to rewrite the fate of the
        planet.
      </div>
      <button class="detail-item__button">Watch Now</button>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>


<style lang="scss">
.detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  margin: 20px;
  padding: 20px;
  &-item {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 500px;
    min-height: 400px;
    max-width: 500px;
    max-height: 400px;
    &__title {
      color: $textcolor;
      font-size: 42px;
      color: $textcolor;
    }
    &__overview {
      color: $textcolor;
    }
    &__button {
      width: 210px;
      height: 60px;
      background-color: $buttoncolor;
      color: $textcolor;
    }
  }
}
</style>