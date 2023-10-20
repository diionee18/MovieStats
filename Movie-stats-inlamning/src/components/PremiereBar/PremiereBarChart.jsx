import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);
import "./premiereBarChart.css"
import { premiereChartConfig, premiereChartOptions } from '../../data/premiereChartData';


const PrimiereChart = () =>{
    const chartConfig = premiereChartConfig()
    const chartOptions = premiereChartOptions()
    

    return(
        <div className='bar-container'>
            <Bar data={chartConfig} options={chartOptions} />
        </div>
    )
}

export default PrimiereChart