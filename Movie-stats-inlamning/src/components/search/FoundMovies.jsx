import React from "react";
import { useRecoilState } from "recoil";
import { movieListFound } from "../../data/config/atom";
import "./foundMovies.css"

export default function FoundMovies() {
    const [movies, setFoundMovie] = useRecoilState(movieListFound);

    return (
        <>
       <div className="movie-container">
                <ul className="movie-ul">
                    {movies.length < 2 ? (
                        movies.map((movie) => (
                            <li key={movie.Title}>
                              <span>Title:</span>  {movie.Title} 
                              <br />  
                              <span>Genre:</span> {movie.Genre || "Ospecificerad"}
                              <br />  
                              <span>Premiär:</span> {movie.Premiere}
                              <br />  
                              <span>Filmens längd:</span> {movie.Runtime}
                              <br />  
                              <span>Språk:</span> {movie.Language}
                            </li>
                        ))
                    ) : (
                        movies.map((movie) => (
                            <li key={movie.Title}>{movie.Title}</li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
}