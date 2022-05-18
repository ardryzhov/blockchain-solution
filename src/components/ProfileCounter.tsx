import React, { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { CustomTextField, CustomText } from './styled'
import {
	fetchCurrentCoinPrice,
	ICurrentCoin,
	changeCount,
	changeTotalPrice,
} from '../redux/coinsSlice'

const ProfileCounter: React.FC<ICurrentCoin> = ({ name, count }) => {
	const dispatch = useAppDispatch()
	const currentCoins = useAppSelector((state) => state.currentCoins)

	const [counter, setCounter] = useState<number>(count)
	const { price } = currentCoins.filter((i) => i.name === name)[0]

	const changeCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value >= 0) {
			setCounter(+e.target.value)
		}
	}

	useEffect(() => {
		dispatch(fetchCurrentCoinPrice(name))
	}, [])

	useEffect(() => {
		dispatch(changeCount({ name, price, count: counter }))
		dispatch(changeTotalPrice())
	}, [counter])

	return (
		<>
			<CustomText>{name}:</CustomText>
			<CustomTextField
				type='number'
				value={counter}
				onChange={(e) => changeCountHandler(e)}
			/>
		</>
	)
}

export default ProfileCounter
