<template>
  <section class="footer">
    <div class="footer-list">
      <div class="footer-list__title">
        Divi
        <div class="footer-list__title-movies">Movies</div>
      </div>
      <div class="footer-list__subtitle">Experience Movies</div>
    </div>
    <div class="footer-list">
      <ul>
        <li class="footer-list__item">ABOUT US</li>
        <li class="footer-list__item">CONTACT US</li>
        <li class="footer-list__item">FOLLOW US</li>
        <div class="footer-list__media">
          <li class="footer-list__media__item">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li class="footer-list__media__item">
            <svg viewBox="0 0 24 24">
              <path
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li class="footer-list__media__item">
            <svg viewBox="0 0 24 24">
              <path
                d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
        </div>
      </ul>
    </div>
    <div class="footer-list">
      <div class="footer-list__newslatter">Newsletter</div>
      <div class="footer-list__newslatter-text">
        Sign up to our newsletter and stay up to date.
      </div>
      <input
        type="text"
        class="footer-list__newslatter-input"
        placeholder="Enter your e-mail"
      />
    </div>
  </section>
</template>


<script>
export default {
  name: "MdiFacebook",
  name: "MdiInstagram",
  name: "MdiTwitterBox",
};
</script>

<style lang="scss">
.footer {
  background-image: url("../assets/img/footerbackground.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1220px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    margin-block-end: 10px;
    &__title {
      color: $footertitlecolor;
     @include font-size(58);
      max-width: 250px;
      margin-block-end: 20px;
      &-movies {
        color: $textcolor;
      }
    }
    &__subtitle {
      color: $footersubtitlecolor;
      @include font-size(14);
    }
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: $footertitlecolor;
      padding-block-end: 20px;
      @include font-size(14);
      cursor: pointer;
      list-style-type: none;
    }
    &__media {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: $footertextcolor;
        padding-inline: 5px;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }
    }

    &__newslatter {
      color: $footertitlecolor;
      @include font-size(38);
    }
    &__newslatter-text {
      margin-block-start: 20px;
      color: $footertextcolor;
      @include font-size(14);
    }
    &__newslatter-input {
      margin-block-start: 30px;
      border: 0px;
      border-bottom: 2px solid $footertextcolor;
      outline: 0;
      background: transparent;
      transition: border-color 0.2s;
      color: $footertitlecolor;
    }
  }
}
</style>