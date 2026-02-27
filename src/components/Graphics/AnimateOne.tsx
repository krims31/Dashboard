import type { ApexOptions } from 'apexcharts'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

interface DataPoint {
	x: number
	y: number
}

type ApexAxisChartSeries = {
	name: string
	data: DataPoint[]
}[]

const XAXISRANGE = 30000

const generateInitialData = (): DataPoint[] => {
	const now = Date.now()
	const data: DataPoint[] = []

	for (let i = 0; i < 30; i++) {
		data.push({
			x: now - (30 - i) * 1000,
			y: Math.floor(Math.random() * 80) + 10
		})
	}

	return data
}

const RealtimeChart: React.FC = () => {
	const [series, setSeries] = useState<ApexAxisChartSeries>([
		{
			name: 'Dynamic Data',
			data: generateInitialData()
		}
	])

	const options: ApexOptions = {
		chart: {
			id: 'realtime',
			type: 'line',
			animations: {
				enabled: true,
				dynamicAnimation: {
					enabled: true,
					speed: 1000
				}
			},
			toolbar: { show: false },
			zoom: { enabled: false }
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		xaxis: {
			type: 'datetime',
			range: XAXISRANGE,
			labels: {
				datetimeUTC: false
			}
		},
		yaxis: {
			min: 0,
			max: 100
		},
		legend: { show: false },
		grid: {
			strokeDashArray: 4
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setSeries(prev => {
				const lastData = prev[0].data
				const lastX = lastData[lastData.length - 1].x

				const newPoint: DataPoint = {
					x: lastX + 1000,
					y: Math.floor(Math.random() * 80) + 10
				}

				const updatedData = [...lastData, newPoint].slice(-50)

				return [
					{
						name: 'Dynamic Data',
						data: updatedData
					}
				]
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="w-full">
			<ReactApexChart
				options={options}
				series={series}
				type="line"
				height={300}
			/>
		</div>
	)
}

export default RealtimeChart
