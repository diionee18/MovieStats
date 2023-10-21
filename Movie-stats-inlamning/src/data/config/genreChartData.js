import React, { useState, useEffect } from "react";
import featureFilmsData from "../feature-films.json";
import specialsData from "../specials.json";
import generateRandomHexColors from "./colorGen.js";
import { useRecoilState } from "recoil";
import { currentChartSize } from "./atom";

export function getGenreconfig() {
    const [movieData, setMovieData] = useState({ labels: [], data: [] });
    const [backgroundColor, setBackgroundColor] = useState([]);

    useEffect(() => {
        const genreList = [
            "Action", "Crime", "Drama", "Fantasy", "Horror", 
            "Comedy", "Romance", "Science Fiction", "Sports", 
            "Thriller", "Mystery", "War", "Western", "Sports"
        ];
    
        const combinedAllMovies = [...featureFilmsData, ...specialsData];
    
        
        const filteredMovies = combinedAllMovies.filter((movie) => {
            const movieGenres = movie.Genre.split(" ");
            return movieGenres.some((genre) => genreList.includes(genre));
        });
    
      
        const genreCounts = new Map();
        filteredMovies.forEach((movie) => {
            const genre = movie.Genre;
            genreCounts.set(genre, (genreCounts.get(genre) || 0) + 1);
        });
    
        
        const labels = Array.from(genreCounts.keys());
        const data = labels.map((genre) => genreCounts.get(genre));
    
        setMovieData({ labels, data });
    
        const NewBackgroundColor = generateRandomHexColors(labels.length);
        setBackgroundColor(NewBackgroundColor);
    }, []);

    return {
        labels: movieData.labels,
        datasets: [
            {
                data: movieData.data,
                backgroundColor: backgroundColor,
            },
        ],
    };
}

export function genreOptions() {
    const [chartSize] = useRecoilState(currentChartSize);
    return {
        respnsive: true,
        plugins: {
            title:{
                display: true,
                text: "Genre",
                font:{
                    size: 25
                },
                position: "top"
            },
            layout:{
                autoPadding: true,
            },
            legend: {
                displayed: true,
                position: chartSize === "large" ? "left" : "bottom",
                labels: {
                    padding: 5,
                    boxWidth: 15,
                    boxHeight: 15,
                    font: {
                        size: 18,
                        weight: "bold",
                    },
                },
                rtl: true,
            },
        },
        hoverOffset: 15,
    };
}

