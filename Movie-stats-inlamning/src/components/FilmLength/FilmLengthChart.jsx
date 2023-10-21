import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement);
import "./filmlength.css"
import { filmLengthChart, filmLengthChartOptions } from '../../data/config/filmLengthData';


const FilmLengthChart = () => {
    const configLength = filmLengthChart()
    const optionsLength = filmLengthChartOptions()

    return(
            
            <div className='line-container' >
                <div className='line-wrapper'>
                <Line data={configLength} options={optionsLength}  />

                </div>
            </div>

    )

}

export default FilmLengthChart;