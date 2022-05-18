import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomGridContainer = styled(Grid)(({ theme }) => ({
	paddingTop: '14rem',
	paddingBottom: '2rem',
	[theme.breakpoints.down('md')]: {
		paddingTop: '3rem',
	},
}))

export const CustomBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	color: '#fff',
})
export const CustomText = styled(Typography)({
	mr: 2,
	width: '85px',
})
export const CustomTextField = styled('input')({
	color: '#fff',
	width: '25%',
	outline: 'none',
	fontSize: '1.3rem',
	background: 'transparent',
	border: '2px solid rgba(227, 201, 166, 0.5)',
	borderRadius: '6px',
	padding: '10px 10px',
	'&:focus': {
		boxShadow: '0px 0px 8px 0px rgba(227, 201, 166, 0.5)',
	},
})

export const ProfileCustomBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	color: '#fff',
	justifyContent: 'center',
	margin: '.5rem 0',
})
