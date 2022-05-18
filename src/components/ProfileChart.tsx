import React from 'react'

import { useAppSelector } from '../hooks'

import { Box, Typography } from '@mui/material'
import { Pie } from 'react-chartjs-2'

const ProfileChart: React.FC = () => {
	const currentCoins = useAppSelector((state) => state.currentCoins)

	const pieData: number[] = []
	currentCoins.filter((i) => pieData.push(i.count * i.price))

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				color: '#fff',
			}}
		>
			<Typography>
				<Pie
					data={{
						labels: currentCoins.map((i) => i.name),
						datasets: [
							{
								label: 'coins',
								data: pieData,
								backgroundColor: ['#f7931a', '#3c3c3d', '#2a593f'],
							},
						],
					}}
				/>
			</Typography>
		</Box>
	)
}

export default ProfileChart
