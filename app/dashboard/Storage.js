import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as chartjs, ArcElement, Tooltip, Legend} from 'chart.js';


chartjs.register(ArcElement, Tooltip, Legend);

export const options =
{
    responsive: false,
    plugins: {
        legend: {
            position: 'top',        
        labels: {
            color:'White',
            // textSize:'18px',
          },
        },
    },
}
const PieChart = () =>
{
    const [chartData, setChartData] = useState(null);

    useEffect(() => 
    {
        const fetchData = async () => 
        {
            try {
                const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
                const data = response.data.dasbhoardPage.storage;
                console.log(data);
                const labels = Object.keys(data);
                const range = Object.values(data);
                console.log(labels,range);
                const chartData =
                {
                    labels: labels,
                    datasets:
                    [{
                        label: "Storage",
                        data: range,
                        backgroundColor:['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],                                               
                        borderColor: ['rgba(255, 99, 132, 1)' ,'rgba(54, 162, 235, 1)' ,'rgba(255, 206, 86, 1)'],
                    }],
                };
                setChartData(chartData);
                }
                catch (error) {
                    console.log('Error:', error);
                }
        };
                
        fetchData();
    }, []);

    return (
        <div style={{width:450}}>
          <h1 style={{color:"#fff",fontSize:"18px"}}>Storage Information</h1>
          {chartData ? <Pie options = {options} data={chartData}/> : <p>Loading data...</p>}
        </div>
      );
    
}
export default PieChart;