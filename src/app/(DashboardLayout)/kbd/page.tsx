'use client';
import { Typography } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import KbdUserList from '@/app/components/kbd-user-list/KbdUserList';

const Kbd = () => {
	return (
		<PageContainer>
			<KbdUserList />
		</PageContainer>
	);
};

export default Kbd;
