import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = ({ chartData, chartOption }) => {
  return (
    <div>
      <Bar data={chartData} options={chartOption} />
    </div>
  );
};

export default BarChart;
