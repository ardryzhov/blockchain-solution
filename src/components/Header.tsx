import React from 'react'

import { Link } from 'react-router-dom'
import { AppBar, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const Header: React.FC = () => {
	const HeaderLink = styled(Link)(({ theme }) => ({
		fontSize: '2rem',
		margin: '1rem 0',
		color: '#e3c9a6',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
	}))
	return (
		<>
			<AppBar position='static' color='secondary'>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				>
					<HeaderLink to='/'>Главная</HeaderLink>
					<HeaderLink to='/profile'>Портфель</HeaderLink>
				</Container>
			</AppBar>
		</>
	)
}

export default Header
