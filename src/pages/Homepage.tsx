import React from 'react'

import { ICoinData } from '../redux/coinsSlice'
import { useAppSelector } from '../hooks'
import CoinItem from '../components/CoinItem'
import { CustomGridContainer } from '../components/styled'

const Homepage: React.FC = () => {
	const coinsData = useAppSelector((state) => state.coinsData)

	return (
		<>
			<CustomGridContainer container sx={{ pt: 14, pb: 2 }}>
				{coinsData.map((coin: ICoinData) => (
					<CoinItem
						key={coin.name}
						name={coin.name}
						prices={coin.prices}
						currentPrice={coin.currentPrice}
					/>
				))}
			</CustomGridContainer>
		</>
	)
}

export default Homepage
