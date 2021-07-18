<template>
  <section class="container">
    <div class="container-title">Latest Movies</div>
    <ul class="container__list">
      <!-- <li class="container__list__item">
          <img
            class="container__list__item-img"
          />
        </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  name: "IcBaselineAdd",
  name: "MdiPlay",
  setup() {
    const API_KEY = "api_key=004b9391792f157cbcdb9b7124abbb5f";
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL =
      BASE_URL +
      "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
      API_KEY;
    const IMG_URL = "https://image.tmdb.org/t/p/w500";

    const element = document.getElementsByClassName("container__list");

    getMovies(API_URL);

    function getMovies(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          showMovies(data.results);
          //console.log(data.results);
        });
    }

    function showMovies(data) {
      element.innerHTML = "";
      data.forEach((movie) => {
        const { title, poster_path } = movie;
        const movieElement = document.createElement("li");
        movieElement.classList.add("container__list__item");
        movieElement.innerHTML = `
             <img class="container__list__item-img" src="${
               poster_path
                 ? IMG_URL + poster_path
                 : "http://via.placeholder.com/255x400"
             }" alt="${title}">
                   <button class="container__list__item container__list__item--add">
        <svg width="3em" height="3em" viewBox="0 0 24 24">
          <path
            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      
      <button class="container__list__item container__list__item--btn">
        <svg width="25px" height="25px" viewBox="0 0 24 24">
          <path d="M8 5.14v14l11-7l-11-7z" fill="currentColor"></path>
        </svg>
        Learn More
      </button>
        `;
        element[0].appendChild(movieElement);
      });
    }
  },
};
</script>


<style lang="scss">
@include style();
</style>