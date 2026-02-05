import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import type { TooltipContentProps } from 'recharts'

const data = [
  { day: 'Sunday', value: 320 },
  { day: 'Monday', value: 450 },
  { day: 'Tuesday', value: 380 },
  { day: 'Wednesday', value: 500 },
  { day: 'Thursday', value: 420 },
  { day: 'Friday', value: 610 },
  { day: 'Saturday', value: 720 },
]

const getIntroOfDay = (day?: string | number) => {
  switch (day) {
    case 'Monday':
      return 'Start of the work week'
    case 'Friday':
      return 'Weekend is close'
    case 'Saturday':
      return 'Relax and enjoy'
    case 'Sunday':
      return 'Rest & recharge'
    default:
      return 'Regular day'
  }
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipContentProps<string | number, string>) => {
  if (!active || !payload || !payload.length) return null

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      <p
        style={{
          fontWeight: 600,
          marginBottom: 6,
          color: '#333',
          fontSize: 14,
        }}
      >
        {label}
      </p>

      <p
        style={{
          margin: '4px 0',
          fontSize: 13,
          color: '#555',
        }}
      >
        Value:
        <span style={{ fontWeight: 600, marginLeft: 6 }}>
          {payload[0].value}
        </span>
      </p>

      <p
        style={{
          marginTop: 6,
          fontSize: 12,
          color: '#777',
        }}
      >
        {getIntroOfDay(label)}
      </p>
    </div>
  )
}

export const WeeklyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 50, right: 20, left: 0, bottom: -13 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#f0f0f0"
          vertical={false}
        />

        <XAxis
          dataKey="day"
          tick={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
          axisLine={{ stroke: '#ddd' }}
          tickLine={{ stroke: '#ddd' }}
        />

        <YAxis
          tick={{ fill: '#666', fontSize: 12 }}
          axisLine={{ stroke: '#ddd' }}
          tickLine={{ stroke: '#ddd' }}
        />

        <Tooltip content={CustomTooltip} />

        <Bar
          dataKey="value"
          fill="#6366f1"
          radius={[6, 6, 0, 0]}
          maxBarSize={36}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default WeeklyBarChart
