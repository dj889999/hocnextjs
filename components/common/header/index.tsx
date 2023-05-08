import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

import {
	AppBar,
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Fab,
	IconButton,
	InputBase,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
	window?: () => Window
}

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))

const StyledFab = styled(Fab)({
	position: 'absolute',
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: '0 auto',
})
export function Header(props: Props) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = useState(false)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const [isUser, setIsUser] = useState(false)

	const handleUserClick = () => {
		setIsUser((prevState) => !prevState)
	}

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link href={`/${item.toLowerCase()}`} passHref>
								<ListItemText primary={item} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
	const container = window !== undefined ? () => window().document.body : undefined
	return (
		<>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						Checkeraz
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
					</Search>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: '#fff' }}>
								{item}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
				<Toolbar>
					<IconButton color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>
					<StyledFab color="secondary" aria-label="add">
						<AddIcon />
					</StyledFab>
					<Box sx={{ flexGrow: 1 }} />
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<IconButton color="inherit">
						<MoreVertOutlinedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	)
}
