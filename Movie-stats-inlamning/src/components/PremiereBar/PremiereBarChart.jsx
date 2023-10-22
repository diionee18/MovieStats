import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);
import "./premiereBarChart.css";
import { premiereChartConfig, premiereChartOptions } from "../../data/config/premiereChartData";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const PrimiereChart = () => {
    const chartConfig = premiereChartConfig();
    const chartOptions = premiereChartOptions();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className="bar-container" ref={ref}>
            <motion.div
                className="bar-motion-container"
                variants={{
                    hidden: { opacity: 0, x: 255 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2, delay: 0.25 }}
            >
                <Bar data={chartConfig} options={chartOptions} />
            </motion.div>
        </div>
    );
};

export default PrimiereChart;
