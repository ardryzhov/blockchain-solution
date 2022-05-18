import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export interface ICoinData {
	name: string
	currentPrice: number
	prices: number[][]
}

export interface ICurrentCoin {
	name: string
	price: number
	count: number
}

export interface ICoinState {
	loading: boolean
	error: boolean
	coinsData: ICoinData[]
	currentCoins: ICurrentCoin[]
	fetchPrice: boolean
	totalPrice: number
}

export const fetchCoinsData = createAsyncThunk(
	'coins/fetchCoinsData',
	async function (name: string, { dispatch }) {
		const responseData = await fetch(
			`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=14`
		)
		const responseCurrentPrice = await fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`
		)
		if (!responseData.ok || !responseCurrentPrice.ok) {
			throw new Error('Error')
		}
		const dataPrices = await responseData.json()
		const dataCurrentPrice = await responseCurrentPrice.json()
		const result: ICoinData = {
			name: name,
			currentPrice: dataCurrentPrice[`${name}`].usd,
			prices: dataPrices.prices,
		}
		dispatch(addCoin(result))
	}
)

export const fetchCurrentCoinPrice = createAsyncThunk(
	'coins/fetchCurrentCoinPrice',
	async function (name: string, { dispatch }) {
		if (name === 'USD') return
		const responseCurrentPrice = await fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`
		)
		if (!responseCurrentPrice.ok) {
			throw new Error('Error')
		}

		const dataCurrentPrice = await responseCurrentPrice.json()

		const res = {
			name: name,
			price: dataCurrentPrice[`${name.toLowerCase()}`].usd,
		}

		dispatch(fetchCurrrentPrice(res))
		dispatch(changeTotalPrice())
	}
)

const coinsSlice = createSlice({
	name: 'coins',
	initialState: {
		loading: true,
		error: false,
		coinsData: [
			{
				name: 'bitcoin',
				currentPrice: 1,
				prices: [
					[1, 2],
					[1, 2],
				],
			},
			{
				name: 'ethereum',
				currentPrice: 1,
				prices: [
					[1, 2],
					[1, 2],
				],
			},
		],
		currentCoins: [
			{ name: 'Bitcoin', count: 1, price: 1 },
			{ name: 'Ethereum', count: 1, price: 1 },
			{ name: 'USD', count: 1, price: 1 },
		],
		fetchPrice: true,
		totalPrice: 0,
	},
	reducers: {
		addCoin(state, action: PayloadAction<ICoinData>) {
			state.coinsData = state.coinsData.map((coin: ICoinData) => {
				if (coin.name === action.payload.name) {
					return action.payload
				}
				return coin
			})
		},
		fetchCurrrentPrice(
			state,
			action: PayloadAction<{ name: string; price: number }>
		) {
			const updatePrice = state.currentCoins.filter((coin) => {
				if (coin.name === action.payload.name) {
					coin.price = action.payload.price
				}
				return coin
			})
			state.currentCoins = updatePrice
		},
		changeCount(state, action: PayloadAction<ICurrentCoin>) {
			const newCount = state.currentCoins.filter((coin) => {
				if (coin.name === action.payload.name) {
					coin.count = action.payload.count
				}
				return coin
			})
			state.currentCoins = newCount
		},
		changeTotalPrice(state) {
			const updateTotalPrice = state.currentCoins.reduce((accum, value) => {
				return accum + value.count * value.price
			}, 0)
			state.totalPrice = updateTotalPrice
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCoinsData.pending, (state) => {
			state.error = false
			state.loading = true
		})
		builder.addCase(fetchCoinsData.fulfilled, (state) => {
			state.error = false
			state.loading = false
		})
		builder.addCase(fetchCoinsData.rejected, (state) => {
			state.error = true
			state.loading = false
		})
		builder.addCase(fetchCurrentCoinPrice.fulfilled, (state) => {
			state.fetchPrice = false
		})
	},
})

export const { addCoin, changeCount, fetchCurrrentPrice, changeTotalPrice } =
	coinsSlice.actions

export default coinsSlice.reducer
