import documentariesData from "./documentaries.json";
import featureFilmsData from "./feature-films.json";
import specialsData from "./specials.json";
import generateRandomHexColors from "./colorGen.js";
import React, { useState, useEffect } from "react";


export function premiereChartConfig() {
    const [movieData, setMovieData] = useState({ labels: [], data: [] });
    const [backgroundColor, setBackgroundColor] = useState([]);

    useEffect(() => {
        const months = Array.from({length: 12}, (_, i) => i + 1 )

        const combinedAllMovies = [...documentariesData, ...featureFilmsData, ...specialsData];
        const premiereData = months.map((month) =>{
            const premiereCount = combinedAllMovies.filter((movie) =>{
                const premiereDate = new Date(movie.Premiere)
                return premiereDate.getMonth() + 1 === month
            }).length
            return {
                month: month,
                premiereCount: premiereCount,
            };
        })

        const monthNames = [
            "Januari", "Februari", "Mars", "April", "Maj", "Juni",
            "Juli", "Augusti", "September", "Oktober", "November", "December"
        ];

        const sortedPremiereData = premiereData.slice().sort((a, b) => {
            return monthNames.indexOf(a.month) - monthNames.indexOf(b.month);
        });
        

        const labels = sortedPremiereData.map((data) => monthNames[data.month - 1])
        const data = sortedPremiereData.map((data) => data.premiereCount)
        setMovieData({labels, data})

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


export function premiereChartOptions() {
  return {
      respnsive: true,
    plugins: {
        title:{
            display: true,
            text: "Antal premiere detta år",
            font:{
                size: 50,
            }
        },
        legend:{
            display: false
        }
    },
    hoverOffset: 15,

  }
}


