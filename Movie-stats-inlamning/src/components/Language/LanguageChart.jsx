import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./languageChart.css"
import {getLanguageconfig, languageOptions } from "../../data/langaugeChartData"
import { useRecoilState } from 'recoil';
import { currentChartSize } from '../../data/atom';

const LanguageChart = () => {
    const configLang = getLanguageconfig()
    const optionsLang = languageOptions()
    const [chartSize, setChartSize] = useRecoilState(currentChartSize);

    const changeSize = (event) =>{
        event.preventDefault()
        if(chartSize === "small"){
            setChartSize("large")
        }else{
            setChartSize("small")
            
        }

    }

    return(
        <div className='circle-container'>
            
            <button className='change-size-btn' onClick={changeSize}>Ändra storlek</button>
            <div className={chartSize}>
                <Doughnut data={configLang} options={optionsLang}  />
            </div>

        </div>
    )

}

export default LanguageChart;