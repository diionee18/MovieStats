import React from "react";
import LanguageChart from "../components/Language/LanguageChart";
import "./home.css";
import PrimiereChart from "../components/PremiereBar/PremiereBarChart";
import FilmLengthChart from "../components/FilmLength/FilmLengthChart";
import GenreChart from "../components/genre/GenreChart";
import SearchMovie from "../components/search/searchMovie";
import { useRecoilState } from "recoil";
import { isMovieHit } from "../data/config/atom";
import FoundMovies from "../components/search/FoundMovies";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Home() {
    const [isThereMovie, setIsMovie] = useRecoilState(isMovieHit);
    return (
        <div className="home-container">
            <SearchMovie />
            {isThereMovie ? (
                <FoundMovies />
            ) : (
                <>
                    <LanguageChart />
                    <PrimiereChart />
                    <FilmLengthChart />
                    <GenreChart />
                </>
            )}
        </div>
    );
}
