import React, { useState, useEffect } from 'react'

import { useAppSelector } from '../hooks'
import { CustomBox, CustomText, CustomTextField } from './styled'
import { ICoinData } from '../redux/coinsSlice'

import { Box, Typography } from '@mui/material'

interface IPriceConverter {
	name: string
	title: string
	currentPrice: number
}

const PriceConverter: React.FC<IPriceConverter> = ({
	name,
	title,
	currentPrice,
}) => {
	const coinsData = useAppSelector((state) => state.coinsData)
	const [currentCoinCount, setCurrentCoinCount] = useState<number>(1)
	const [otherCoinPrice, setOtherCoinPrice] = useState<number>(1)
	const [usd, setUsd] = useState<number>(1)

	const otherCoin: ICoinData = coinsData.filter(
		(coin: ICoinData) => coin.name !== name
	)[0]

	const otherCoinName = otherCoin.name
	const otherCoinCurrentPrice = otherCoin.currentPrice

	useEffect(() => {
		convertPrice()
	}, [otherCoin, currentCoinCount, currentPrice])

	const convertPrice = () => {
		const CoinToCoin = +(
			(currentCoinCount * currentPrice) /
			otherCoinCurrentPrice
		).toFixed(3)
		const CoinToUsd = +(currentPrice * currentCoinCount).toFixed(3)
		setOtherCoinPrice(CoinToCoin)
		setUsd(CoinToUsd)
	}

	const changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value !== 0) {
			setCurrentCoinCount(Number(e.target.value))
		}
	}
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CustomBox
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '50%',
				}}
			>
				<CustomText>{title}: </CustomText>
				<CustomTextField
					type='number'
					value={currentCoinCount}
					onChange={(e) => changeCount(e)}
				/>
				<CustomText sx={{ textAlign: 'center' }}>To</CustomText>
			</CustomBox>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CustomBox sx={{ width: '150px', mb: 0.5 }}>
					<CustomText>{otherCoinName}: </CustomText>
					<Typography sx={{ ml: '10px' }}>{otherCoinPrice} </Typography>
				</CustomBox>
				<CustomBox sx={{ width: '150px' }}>
					<CustomText>USD: </CustomText>
					<Typography sx={{ ml: '10px' }}>{usd} </Typography>
				</CustomBox>
			</Box>
		</Box>
	)
}

export default PriceConverter
