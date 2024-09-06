import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const CustomLineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
        return null;
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    backgroundColor: '#1a1a1a',
    colors: ['#00ff00'],    
    lineWidth: 3,            
    legend: 'none',          
    hAxis: {
      textStyle: { color: '#888' },
      gridlines: { color: 'transparent' },
    },
    vAxis: {
      textStyle: { color: '#888' }, 
      gridlines: { color: '#333' }, 
    },
    chartArea: {
      width: '100%',  
      height: '70%', 
      left: 50,      
      right: 20,
      top: 20,
    },
  };

  return (
    <div style={{padding:'20px', borderRadius: '10px', height: '400px', width: '600px' }}>
      <Chart
        chartType='LineChart'
        data={data}
        options={options}
        height='100%'
      />
    </div>
  );
};

export default CustomLineChart;
