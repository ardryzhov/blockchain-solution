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
			<Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }}>
				{currentCoins.map((coin: ICurrentCoin) => (
					<ProfileCustomBox key={coin.name}>
						<ProfileCounter {...coin} />
					</ProfileCustomBox>
				))}
			</Box>
			<ProfileCustomBox sx={{ flexDirection: 'column', mt: 2 }}>
				<Typography variant='h5'>Общая стоимость портфеля: </Typography>
				{fetchPrice ? (
					<Typography>Loading...</Typography>
				) : (
					<Typography sx={{ my: 2, fontSize: '1.3rem' }}>
						{totalPrice} $
					</Typography>
				)}
			</ProfileCustomBox>
		</Box>
	)
}

export default Profile
