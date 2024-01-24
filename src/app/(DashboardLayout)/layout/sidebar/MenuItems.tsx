import {
	IconAperture,
	IconCopy,
	IconLayoutDashboard,
	IconLogin,
	IconMoodHappy,
	IconTypography,
	IconUserPlus,
} from '@tabler/icons-react';

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
		title: 'Sample Page',
		icon: IconAperture,
		href: '/sample-page',
	},
];

export default Menuitems;
