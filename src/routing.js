import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './views/Home.vue';
import LatestComponent from './views/Latest.vue';
import MoviesComponent from './views/Movies.vue';
import PopularHeaderComponent from './views/PopularHeader.vue';
import TVShowsComponent from './views/TVShows.vue';
import DetailComponent from './views/Detail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/latest',
        name: 'latest',
        component: LatestComponent
    },
    {
        path: '/movies',
        name: 'movies',
        component: MoviesComponent
    },
    {
        path: '/popularheader',
        name: 'popularheader',
        component: PopularHeaderComponent
    },
    {
        path: '/tvshows',
        name: 'tvshows',
        component: TVShowsComponent
    },
    {
        path: '/detail',
        name: 'detail',
        component: DetailComponent
    }
]

const routing = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default routing;