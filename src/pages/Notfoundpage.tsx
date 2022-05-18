import React from 'react'

import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Notfoundpage: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '70vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#e3c9a6',
			}}
		>
			<Typography sx={{ fontSize: '3rem' }}>Oops! 404</Typography>
			<Typography sx={{ fontSize: '1.5rem' }}>
				<Link to='/'>Go back?</Link>
			</Typography>
		</Box>
	)
}

export default Notfoundpage
