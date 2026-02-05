import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// Типы для данных
interface CountryData {
  name: string;
  gdp: number;
  exports: number;
  imports: number;
}

// Тип для пропсов тултипа
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color: string;
    payload: CountryData;
  }>;
  label?: string;
}

// Тип для пропсов оси
interface AxisTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string | number;
  };
}

// Данные по странам в миллиардах долларов
const countryData: CountryData[] = [
  {
    name: 'China',
    gdp: 17734,
    exports: 3360,
    imports: 2680,
  },
  {
    name: 'USA',
    gdp: 25463,
    exports: 1960,
    imports: 2910,
  },
  {
    name: 'EU',
    gdp: 17390,
    exports: 2780,
    imports: 2610,
  },
  {
    name: 'Canada',
    gdp: 2140,
    exports: 632,
    imports: 643,
  },
  {
    name: 'Japan',
    gdp: 4250,
    exports: 785,
    imports: 766,
  },
  {
    name: 'Germany',
    gdp: 4070,
    exports: 1810,
    imports: 1530,
  },
  {
    name: 'UK',
    gdp: 3080,
    exports: 870,
    imports: 893,
  },
];

// Кастомизированный тултип с форматированием в долларах
const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <p style={{ 
          fontWeight: 'bold', 
          marginBottom: '8px',
          color: '#333',
          fontSize: '14px'
        }}>
          {label}
        </p>
        {payload.map((entry, index) => (
          <p key={index} style={{ 
            color: entry.color, 
            margin: '4px 0',
            fontSize: '13px'
          }}>
            <span style={{ fontWeight: '500' }}>{entry.dataKey}:</span>
            <span style={{ 
              fontWeight: 'bold',
              marginLeft: '8px',
              color: '#333'
            }}>
              ${entry.value.toLocaleString()}B
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Кастомная метка оси Y с долларами
const CustomYAxisTick = ({ x = 0, y = 0, payload }: AxisTickProps) => {
  if (!payload) return null;
  
  return (
    <text
      x={x}
      y={y}
      dy={4}
      textAnchor="end"
      fill="#666"
      fontSize="12"
    >
      ${payload.value}B
    </text>
  );
};

// Кастомная метка оси X
const CustomXAxisTick = ({ x = 0, y = 0, payload }: AxisTickProps) => {
  if (!payload) return null;
  
  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor="middle"
      fill="#666"
      fontSize="12"
      fontWeight="500"
    >
      {payload.value as string}
    </text>
  );
};

// Тип для пропсов компонента
interface CountryAreaChartProps {
  isAnimationActive?: boolean;
}

export const CountryAreaChart = ({ isAnimationActive = true }: CountryAreaChartProps) => (
  <ResponsiveContainer width="100%" height={330}>
    <AreaChart
      data={countryData}
      margin={{ top: 25, right: 30, left: 20, bottom: 20 }}
    >
      <defs>
        <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorExports" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorImports" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff8042" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff8042" stopOpacity={0} />
        </linearGradient>
      </defs>
      
      <CartesianGrid 
        strokeDasharray="3 3" 
        stroke="#f0f0f0"
        vertical={false}
      />
      
      <XAxis 
        dataKey="name" 
        tick={<CustomXAxisTick />}
        axisLine={{ stroke: '#ddd' }}
        tickLine={{ stroke: '#ddd' }}
      />
      
      <YAxis 
        tick={<CustomYAxisTick />}
        axisLine={{ stroke: '#ddd' }}
        tickLine={{ stroke: '#ddd' }}
      />
      
      <Tooltip 
        content={<CustomTooltip />}
        formatter={(value: number | undefined) => [`$${(value || 0).toLocaleString()}B`]}
      />
      
      <Area
        type="monotone"
        dataKey="gdp"
        name="GDP"
        stroke="#8884d8"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorGdp)"
        isAnimationActive={isAnimationActive}
        dot={{ 
          r: 4, 
          strokeWidth: 2,
          stroke: '#8884d8',
          fill: 'white'
        }}
        activeDot={{ 
          r: 6, 
          strokeWidth: 2,
          stroke: '#8884d8',
          fill: 'white'
        }}
      />
      
      <Area
        type="monotone"
        dataKey="exports"
        name="Exports"
        stroke="#82ca9d"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorExports)"
        isAnimationActive={isAnimationActive}
        dot={{ 
          r: 4, 
          strokeWidth: 2,
          stroke: '#82ca9d',
          fill: 'white'
        }}
      />
      
      <Area
        type="monotone"
        dataKey="imports"
        name="Imports"
        stroke="#ff8042"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorImports)"
        isAnimationActive={isAnimationActive}
        dot={{ 
          r: 4, 
          strokeWidth: 2,
          stroke: '#ff8042',
          fill: 'white'
        }}
      />
      
      <RechartsDevtools />
    </AreaChart>
  </ResponsiveContainer>
);

export default CountryAreaChart;