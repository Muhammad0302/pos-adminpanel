'use client';
import { Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PageContainer from '../components/container/PageContainer';
// components
import SalesOverview from '../components/dashboard/SalesOverview';
import YearlyBreakup from '../components/dashboard/YearlyBreakup';
import MonthlyEarnings from '../components/dashboard/MonthlyEarnings';
import AuthLogin from '../authentication/auth/AuthLogin';
const Dashboard = () => {
	const [hasCredentials, setHasCredentials] = useState(false);

	useEffect(() => {
		const storedCredentials = localStorage.getItem('credentials');
		if (storedCredentials) {
			setHasCredentials(true);
		} else {
			window.location.href = '/authentication/login';
		}
	}, []);
	return (
		<>
			<PageContainer title="Point of Sale" description="This is Dashboard">
				<Box>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={12}>
							<SalesOverview />
						</Grid>
						<Grid item xs={12} lg={12}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<YearlyBreakup />
								</Grid>
								<Grid item xs={12}>
									<MonthlyEarnings />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</PageContainer>
		</>
	);
};

export default Dashboard;
