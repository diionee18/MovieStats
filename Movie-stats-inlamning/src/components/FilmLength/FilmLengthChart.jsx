import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement
);
import "./filmlength.css";
import { filmLengthChart, filmLengthChartOptions } from "../../data/config/filmLengthData";

const FilmLengthChart = () => {
    const chartData = filmLengthChart();
    const chartOptions = filmLengthChartOptions();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className="line-container" id="FilmLengthChart" ref={ref}>
            <motion.div
                className="line-wrapper"
                variants={{
                    hidden: { opacity: 0, x: -255 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2, delay: 0.25 }}
            >
                <Line data={chartData.data} options={chartOptions} />
            </motion.div>
        </div>
    );
};

export default FilmLengthChart;
