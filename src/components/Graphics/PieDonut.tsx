import { pieData } from "../../data/datadonutname"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

export const SalesPieChart = () => {
  return (
    <div className="w-full h-40 -mt-8 -ml-45">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={45}
            outerRadius={65}
            paddingAngle={3}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
