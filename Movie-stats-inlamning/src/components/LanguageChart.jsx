import documentariesData from '../data/documentaries.json';
import featureFilmsData from '../data/feature-films.json';
import specialsData from '../data/specials.json';
import React, { useEffect, useState } from 'react';
import {Douch}

const LanguageChart = () => {
    const [movieData, setMovieData] = useState([])

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
    }, [])

    const chartData = {
        labels: movieData.labels,
        datasets: [
            {
                data: movieData.data,
                backgroundColor: [
                    '#FF5733',
                    '#FFD700',
                    '#36A2EB',
                    '#FF6384',
                    '#4BC0C0',
                  ],
            },
        ],
    };
    return(
        <div>
            <h2>Antal filmer per språk</h2>
            <Doughnut data={chartData}/>
        </div>
    )

}

export default LanguageChart;