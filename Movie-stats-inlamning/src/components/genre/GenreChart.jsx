import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./genreChart.css";
import { useRecoilState } from "recoil";
import { currentChartSize } from "../../data/config/atom";
import { genreOptions, getGenreconfig } from "../../data/config/genreChartData";

const GenreChart = () => {
    const configGenre = getGenreconfig();
    const optionsGenre = genreOptions();
    const [chartSize, setChartSize] = useRecoilState(currentChartSize);

    const changeSize = (event) => {
        event.preventDefault();
        if (chartSize === "small") {
            setChartSize("large");
        } else {
            setChartSize("small");
        }
    };

    return (
        <section className="genre-circle-container">
            <div className="genre-circle">
                <button className="change-size-btn" onClick={changeSize}>
                    Ändra storlek
                </button>
                <div className={chartSize}>
                    <Doughnut data={configGenre} options={optionsGenre} />
                </div>
            </div>
        </section>
    );
};

export default GenreChart;
