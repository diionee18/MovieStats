import { useState, useEffect } from "react";
import documentariesData from "../documentaries.json";
import featureFilmsData from "../feature-films.json";
import specialsData from "../specials.json";
import generateRandomHexColors from "./colorGen.js";

export function filmLengthChart() {
    const [filmLengthData, setFilmLengthData] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState([]);
    
    
    useEffect(() => {
        const combinedAllMovies = [...documentariesData, ...featureFilmsData, ...specialsData];
        // Konvertera längden från text till minuter
        const filmLengthsInMinutes = combinedAllMovies.map((movie) => {
            const runtime = movie.Runtime;
            return calculateLength(runtime)
        });
    
        // Sortera längderna stigande
        const sortedFilmLengthData = filmLengthsInMinutes.sort((a, b) => a - b);

        const newBackgroundColor = generateRandomHexColors(sortedFilmLengthData.length);
    
        // const displayedData = sortedFilmLengthData.slice(0, 170);
        setFilmLengthData(sortedFilmLengthData);
        setBackgroundColor(newBackgroundColor);
    }, []);

    
    
    
    return {
        data: {
            labels: filmLengthData.map((_, ) => "" ),
            datasets: [
                {
              data: filmLengthData,
              backgroundColor: backgroundColor,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              label: "Film Length"
            },
        ],
    }
}

}

const calculateLength = (runtime) =>{
    const splitArry = runtime.split(" ")
    let hour = 0
    let min = 0
    if(splitArry[1] === "h"){
        hour = Number(splitArry[0])
    } 
    else{
        min = Number(splitArry[0])
    }
    if(splitArry.length === 4){
        min = Number(splitArry[2])
    }

    return hour * 60 + min
}



export function filmLengthChartOptions() {
    const chartData = filmLengthChart()
    return {
        data: chartData.data,
        plugins: {
            transitions: {
                show:{
                    animations:{
                        x: {
                            from: 10,
                            to: 0
                        },
                        y: {
                            from: 10,
                            to: 0
                        }
                    }
                },
                hide:{
                    
                    animations:{
                        x: {
                            from: 0,
                        },
                        y: {
                            from: 0,
                        }
                    }
                }
            },
            title: {
                display: true,
                text: 'Filmernas längd (i minuter)',
                font:{
                    size: 25
                }
            },
        },
        scales: {

            y: {
                title: {
                    display: true,
                    text: 'Längd (minuter)',
                    font:{
                        size: 25
                    }
                },
            },
        },
    };
}







