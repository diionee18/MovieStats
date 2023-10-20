import React, { useState, useEffect } from 'react'
import documentariesData from './documentaries.json';
import featureFilmsData from './feature-films.json';
import specialsData from './specials.json';
import generateRandomHexColors from "./colorGen.js"

export function getLanguageconfig() {
    const [movieData, setMovieData] = useState({labels: [], data: [],})
    const [backgroundColor, setBackgroundColor] = useState([]);
    useEffect(() => {
        const combinedAllMovies = [...documentariesData ,
             ...featureFilmsData, ...specialsData]
             
        const languageCounter = {};
        combinedAllMovies.forEach((movie) => {
            const language = movie.Language;
            if(languageCounter[language]){
                languageCounter[language] +=1;
            }else{
                
                languageCounter[language] =1;
            }
        });
            const labels = Object.keys(languageCounter)
            const data = Object.values(languageCounter)
            setMovieData({labels, data})
            const NewBackgroundColor = generateRandomHexColors (labels.length)
            setBackgroundColor(NewBackgroundColor)
    }, [])
    
    
    return{
        labels: movieData.labels,
        datasets: [
            {
                data: movieData.data,
                backgroundColor: backgroundColor 
                  
            },
        ],
    };

}
