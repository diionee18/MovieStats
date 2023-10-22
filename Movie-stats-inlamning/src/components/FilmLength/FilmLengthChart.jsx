import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement, );
import "./filmlength.css"
import { filmLengthChart, filmLengthChartOptions } from '../../data/config/filmLengthData';


const FilmLengthChart = () => {
    const chartData = filmLengthChart();
    const chartOptions = filmLengthChartOptions()
  
    return (
      <div>
        <div className="chart-title">
        </div>
        <Line data={chartData.data} options={chartOptions} />
      </div>
    );
  };

export default FilmLengthChart;