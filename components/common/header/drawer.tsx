import React, { useState } from 'react'
import { Box } from '@mui/system'
import {
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	IconButton,
	Drawer,
} from '@mui/material'
import Link from 'next/link'
import { Menu as MenuIcon } from '@mui/icons-material'
import { ROUTE_LIST } from './routes'

export interface IDrawarProps {
	window?: () => Window
}
const drawerWidth = 240

export default function Drawar(props: IDrawarProps) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{ROUTE_LIST.map((item) => (
					<ListItem key={item.path} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link href={item.path} passHref>
								<ListItemText primary={item.label} />
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
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={{ mr: 2, display: { sm: 'none' } }}
			>
				<MenuIcon />
			</IconButton>
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
		</>
	)
}
