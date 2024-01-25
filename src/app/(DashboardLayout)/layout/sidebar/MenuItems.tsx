import {
	IconLayoutDashboard,
	IconLogin,
	IconMoodHappy,
	IconTypography,
	IconUserPlus,
} from '@tabler/icons-react';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

import { uniqueId } from 'lodash';

const Menuitems = [
	{
		id: uniqueId(),
		title: 'Dashboard',
		icon: IconLayoutDashboard,
		href: '/',
	},
	{
		id: uniqueId(),
		title: 'Paragon',
		icon: IconUserPlus,
		href: '/paragon',
	},
];

export default Menuitems;
