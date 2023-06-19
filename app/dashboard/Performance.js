import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = 
{
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    scales:
    {
        x: {
            ticks:{
                color:"white",
            }
        },
        y: {
            ticks: {
                color:"white",
            }
        },
    },
    plugins: {
      legend: {
        position: 'top',
        backgroundColor:'red',
      
      labels: {
        color:'white',
        FontSize:18,
        letterSpaccing:2,
      },
    },
      title: {
        display: true,
        text: 'Hits',
        position:'left',
        color:"white",
      },
    },
};

const BarChart = () =>
{
    const [chartData, setChartData] = useState(null);

    useEffect(() => 
    {
        const fetchData = async () => 
        {
            try {
                const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
                const data = response.data.dasbhoardPage.performance;
                // console.log(data);
                const labels = Object.keys(data);
                const range = Object.values(data);
                console.log(labels,range);
                const chartData =
                {
                    labels: labels,
                    datasets:
                    [{
                        label: '# of Hits',
                        data: range,
                        backgroundColor: labels.map((item)=>item),
                        barThickness:10,
                        // barPercentage:0.3,
                        
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
        <div style={{width:450}} >
          <h1 style={{color:"#fff",fontSize:"18px"}}>Performance</h1>
          {chartData ? <Bar options={options} data={chartData}/> : <p>Loading data...</p>}
        </div>
      );
    
}
export default BarChart;