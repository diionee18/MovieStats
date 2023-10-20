import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./languageChart.css"
import {getLanguageconfig } from "../../data/config.js"

const LanguageChart = () => {
    const [movieData, setMovieData] = useState({labels: [], data: [],})
    const [chartSize, setChartSize] = useState("small");

    const changeSize = (event) =>{
        event.preventDefault()
        if(chartSize === "small"){
            setChartSize("large")
        }else{
            setChartSize("small")
            
        }

    }

    const configLang = getLanguageconfig()


    const chartOptions = {
        respnsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = movieData.labels[context.dataIndex];
                        const data = movieData.data[context.dataIndex];
                        return `${label}: ${data}`;
                    },
                },
            },
            legend:{
                displayed: true,
                position: chartSize === "large" ? 'left' : 'bottom' ,
                labels: {
                    padding:10,
                    boxWidth:15,
                    boxHeight:15,
                    font:{
                        size: 18,
                        weight: 'bold',
                    }
                },
                rtl:true,
            }
        },
        hoverOffset:15,
    };



    return(
        <div className='circle-container'>
            <h2>Antal filmer per språk</h2>
            <button className='change-size-btn' onClick={changeSize}>Ändra storlek</button>
            <div className={chartSize}>
                <Doughnut data={configLang} options={chartOptions}  />
            </div>
        </div>
    )

}

export default LanguageChart;