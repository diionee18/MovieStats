import {atom, selector,} from 'recoil';

const currentChartSize = atom({
    key: 'chartSize',
    default:"small",
})
const isMovieHit = atom({
    key: 'searched',
    default:false,
})
const movieListFound = atom({
    key: 'MovieListFound',
    default:[],
})

export {currentChartSize, isMovieHit, movieListFound} 