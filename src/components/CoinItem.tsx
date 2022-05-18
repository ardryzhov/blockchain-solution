import React, { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { ICoinData, fetchCoinsData } from '../redux/coinsSlice'
import CoinChart from './CoinChart'

import { Box, Grid, Typography } from '@mui/material'
import PriceConverter from './PriceConverter'

const CoinItem: React.FC<ICoinData> = ({ name, prices, currentPrice }) => {
	const dispatch = useAppDispatch()
	// const coinsData = useAppSelector((state) => state.coinsData)

	// const [currentCoinCount, setCurrentCoinCount] = useState<number>(1)
	// const [otherCoinPrice, setOtherCoinPrice] = useState<number>(1)
	// const [usd, setUsd] = useState<number>(1)

	// const otherCoin: ICoinData = coinsData.filter(
	// 	(coin: ICoinData) => coin.name !== name
	// )[0]
	// const otherCoinCurrentPrice = otherCoin.currentPrice

	const title = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)

	useEffect(() => {
		dispatch(fetchCoinsData(name))
	}, [])

	// useEffect(() => {
	// 	convertPrice()
	// }, [otherCoin, currentCoinCount, currentPrice])

	// const convertPrice = () => {
	// 	const CoinToCoin = +(
	// 		(currentCoinCount * currentPrice) /
	// 		otherCoinCurrentPrice
	// 	).toFixed(3)
	// 	const CoinToUsd = +(currentPrice * currentCoinCount).toFixed(3)
	// 	// setOtherCoinPrice(CoinToCoin)
	// 	// setUsd(CoinToUsd)
	// }

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
