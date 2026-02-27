import React, { useEffect, useState, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import type { ApexOptions } from 'apexcharts';

// Тип для точки данных
interface DataPoint {
  x: number;
  y: number;
}

const XAXISRANGE = 30000; // 30 секунд

const RealtimeChart: React.FC = () => {
  const dataRef = useRef<DataPoint[]>([]);
  const lastDateRef = useRef<number>(new Date().getTime());

  // Явно типизируем настройки
  const [options] = useState<ApexOptions>({
    chart: {
      id: 'realtime',
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE
    },
    yaxis: { max: 100, min: 0 },
    legend: { show: false }
  });

  // Типизируем серии данных
  const [series, setSeries] = useState<ApexAxisChartSeries>([{ data: [] }]);

  useEffect(() => {
    // 1. Предзаполнение данных
    const initialData: DataPoint[] = [];
    let time = new Date().getTime();
    
    for (let i = 0; i < 30; i++) {
      time += 1000;
      initialData.push({
        x: time,
        y: Math.floor(Math.random() * 80) + 10
      });
    }
    
    dataRef.current = initialData;
    lastDateRef.current = time;
    setSeries([{ data: initialData }]);

    // 2. Цикл обновления
    const interval = setInterval(() => {
      lastDateRef.current += 1000;
      const newDataPoint: DataPoint = {
        x: lastDateRef.current,
        y: Math.floor(Math.random() * 80) + 10
      };

      dataRef.current.push(newDataPoint);
      if (dataRef.current.length > 50) {
        dataRef.current.shift();
      }

      // Вызов через библиотеку с указанием ID чарта
      ApexCharts.exec('realtime', 'updateSeries', [{
        data: dataRef.current
      }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="chart">
      <ReactApexChart 
        options={options} 
        series={series} 
        type="line" 
        height={310} 
      />
    </div>
  );
};

export default RealtimeChart;

