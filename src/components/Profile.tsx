import React from 'react'

import { ProfileCustomBox } from './styled'
import ProfileCounter from './ProfileCounter'
import { useAppSelector } from '../hooks'
import { ICurrentCoin } from '../redux/coinsSlice'

import { Box, Typography } from '@mui/material'

const Profile: React.FC = () => {
	const currentCoins = useAppSelector((state) => state.currentCoins)
	const totalPrice = useAppSelector((state) => state.totalPrice)
	const fetchPrice = useAppSelector((state) => state.fetchPrice)
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				color: '#fff',
			}}
		>
			<Typography variant='h4'>Ваш порфтель</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				{currentCoins.map((coin: ICurrentCoin) => (
					<ProfileCustomBox key={coin.name}>
						<ProfileCounter {...coin} />
					</ProfileCustomBox>
				))}
			</Box>
			<ProfileCustomBox sx={{ flexDirection: 'column' }}>
				<Typography variant='h5'>Total price: </Typography>
				{fetchPrice ? (
					<Typography>Loading...</Typography>
				) : (
					<Typography>{totalPrice} $</Typography>
				)}
			</ProfileCustomBox>
		</Box>
	)
}

export default Profile
