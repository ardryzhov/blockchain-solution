import React from 'react'
import './App.css'
import ProfilePage from './pages/ProfilePage'
import Homepage from './pages/Homepage'
import Notfoundpage from './pages/Notfoundpage'
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
)

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
