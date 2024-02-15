'use client';
import { Typography } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import ParagonUserList from '@/app/components/paragon-user-list/ParagonUserList';

const Paragon = () => {
	return (
		<PageContainer
			title="Point of Sale"
			description="This is a point of sale system"
		>
			{/* <DashboardCard title="Sample Page"> */}
			{/* <Typography>This is a sample page</Typography> */}
			<ParagonUserList />
			{/* </DashboardCard> */}
		</PageContainer>
	);
};

export default Paragon;
