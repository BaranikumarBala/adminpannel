import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'white', 
        },
      },
      y: {
        ticks: {
          color: 'white', 
        },
      },
    },
    plugins: {
    legend: {
    position: 'top',
    fill:false,
    labels:{
      color:'white',
      fontSize:18,
      letterSpaccing:2,
    },
    },
    title: {
            display: true,
            text: 'Hits',
            color:'white',
            position:'left',
            },
},
}

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');

        const data = response.data.dasbhoardPage.latestHits;
        const labels = data.months;
        const lRange = data.latest;
        const fRange = data.featured;
        const pRange = data.popular;

        
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Latest',
              data: lRange,
              fill: false,
              borderColor: 'cyan',
              // backgroundColor: 'cyan',
            },
            {
              label: 'Popular',
              data: pRange,
              fill: false,
              borderColor: 'red',
              // backgroundColor: 'red',
            },
            {
                label: 'Featured',
                data: fRange,
                fill: false,
                borderColor: 'yellow',
                // backgroundColor: 'yellow',
              },

          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{width:450}} >
      <h1 style={{color:"#fff",fontSize:"18px"}}>Line Chart</h1>
      {chartData ? <Line options={options} data={chartData}/> : <p>Loading data...</p>}
    </div>
  );
};

export default LineChart;
