import React from 'react'

import Profile from '../components/Profile'
import ProfileChart from '../components/ProfileChart'
import { CustomGridContainer } from '../components/styled'

import { Grid } from '@mui/material'

const ProfilePage: React.FC = () => {
	return (
		<CustomGridContainer container sx={{ pt: 14, pb: 2 }}>
			<Grid item xs={12} md={6}>
				<Profile />
			</Grid>
			<Grid item xs={12} md={6}>
				<ProfileChart />
			</Grid>
		</CustomGridContainer>
	)
}

export default ProfilePage
