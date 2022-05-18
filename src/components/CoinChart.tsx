import React from 'react'

import { Line } from 'react-chartjs-2'

interface ICoinChart {
	title: string
	prices: number[][]
}

const CoinChart: React.FC<ICoinChart> = ({ title, prices }) => {
	const getLabelDate = (num: number) => {
		const date = new Date(num)
		const day =
			date.getDate().toString().length === 1
				? `0${date.getDate()}`
				: date.getDate()
		const month =
			date.getMonth().toString().length === 1
				? `0${date.getMonth() + 1}`
				: date.getMonth() + 1
		const hours =
			date.getHours().toString().length === 1
				? `0${date.getHours()}`
				: date.getHours()
		const min =
			date.getMinutes().toString().length === 1
				? `0${date.getMinutes()}`
				: date.getMinutes()
		const res = `${day}.${month}.${date.getFullYear()}, ${hours}:${min}`
		return res
	}

	return (
		<Line
			data={{
				labels: prices.map((coin: number[]) => {
					let date = getLabelDate(coin[0])
					return date.toLocaleString()
				}),
				datasets: [
					{
						data: prices.map((coin: number[]) => coin[1]),
						label: `${title} in US Dollar`,
						borderColor: '#e3c9a6',
					},
				],
			}}
			options={{
				responsive: true,
				elements: {
					point: {
						radius: 1,
					},
				},
			}}
		/>
	)
}

export default CoinChart
