export const ROUTE_LIST = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'About',
		path: '/about',
	},
	{
		label: 'Dasboard',
		path: '/dashboard',
		requireAuth: true,
	},
]

export const ROUTE_USER = [
	{
		label: 'Profile',
		path: '/profile',
	},
	{
		label: 'Account',
		path: '/account',
	},
	{
		label: 'Dashboard',
		path: '/dashboard',
	},
	{
		label: 'Logout',
	},
]
