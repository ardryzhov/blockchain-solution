import React, { useEffect } from 'react'

import { useAppDispatch } from '../hooks'
import { ICoinData, fetchCoinsData } from '../redux/coinsSlice'
import CoinChart from './CoinChart'

import { Box, Grid, Typography } from '@mui/material'
import PriceConverter from './PriceConverter'

const CoinItem: React.FC<ICoinData> = ({ name, prices, currentPrice }) => {
	const dispatch = useAppDispatch()

	const title = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)

	useEffect(() => {
		dispatch(fetchCoinsData(name))
	}, [])

	return (
		<>
			{prices && (
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							width: '90%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Typography variant='h4' sx={{ color: '#fff' }}>
							{title}
						</Typography>
						<CoinChart prices={prices} title={title} />
					</Box>
					<Box sx={{ display: 'flex', my: 2, justifyContent: 'center' }}>
						<Typography sx={{ color: '#E3C9A6', mr: 2 }}>
							Текущая цена:
						</Typography>
						<Typography sx={{ color: '#fff' }}>{currentPrice} $</Typography>
					</Box>
					<PriceConverter
						name={name}
						title={title}
						currentPrice={currentPrice}
					/>
				</Grid>
			)}
		</>
	)
}

export default CoinItem
