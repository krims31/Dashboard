import { pieData } from './datadonutname'

export const PieLegend = () => {
  return (
    <div className="flex flex-col gap-2 text-sm -mt-28 ml-0">
      {pieData.map(item => (
        <div key={item.name} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600">{item.name}</span><br />
          </div>
          <span className="font-medium text-gray-800">
            ${item.value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  )
}
