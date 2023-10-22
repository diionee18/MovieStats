import React, { useEffect, useRef, useState } from "react";
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
import { motion, useInView, useAnimation } from "framer-motion";

const GenreChart = () => {
    const configGenre = getGenreconfig();
    const optionsGenre = genreOptions();
    const [chartSize, setChartSize] = useRecoilState(currentChartSize);
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])


    const changeSize = (event) => {
        event.preventDefault();
        if (chartSize === "small") {
            setChartSize("large");
        } else {
            setChartSize("small");
        }
    };

    return (
        <section ref={ref} className="genre-circle-container">
        <motion.div className="genre-circle"
            variants={{
                hidden: { opacity: 0, x: 255},
                visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 1, delay: .5}}
        >

                <div className="doughnut-genre">
                    <Doughnut data={configGenre} options={optionsGenre} />
                </div>
        </motion.div>
            </section>
    );
};

export default GenreChart;
