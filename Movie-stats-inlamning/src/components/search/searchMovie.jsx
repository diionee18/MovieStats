import React, { useState } from "react";
import documentariesData from "../../data/documentaries.json";
import featureFilmsData from "../../data/feature-films.json";
import specialsData from "../../data/specials.json";
import { useRecoilState } from "recoil";
import { isMovieHit, movieListFound } from "../../data/config/atom";
import "./searchMovie.css";

export default function SearchMovie() {
    const combinedAllMovies = [...documentariesData, ...featureFilmsData, ...specialsData];
    const [isThereMovie, setIsMovie] = useRecoilState(isMovieHit);
    const [movies, setFoundMovie] = useRecoilState(movieListFound);
    const [searchFound, setSearchFound] = useState(false);

    const findMovie = (e) => {
        const searchValue = e.target.value.toLowerCase();

        const foundMovies = combinedAllMovies.filter((movie) => {
            const movieTitle = movie.Title.toLowerCase();
            return movieTitle.includes(searchValue);
        });

        if (foundMovies.length > 0) {
            setIsMovie(true);
            setFoundMovie(foundMovies);
        } else {
            setIsMovie(false);
        }
        if (searchValue === "") {
            setFoundMovie([]);
            setIsMovie(false);
        }
    };

    return (
        <div className="input-continer">
            <input placeholder="Skriv in en film title här" type="text" onChange={findMovie} />
            {searchFound ? <p>Inga träffar hittades</p> : null}
        </div>
    );
}
