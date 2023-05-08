import { useAuth } from '@/hooks'
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ROUTE_USER } from './routes'

export function UserInfo() {
	const { logout } = useAuth()
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/94482004?v=4" />
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
				{ROUTE_USER.map((route) => (
					<MenuItem key={route.path} onClick={!route.path ? logout : handleCloseUserMenu}>
						<Typography textAlign="center">{route.label}</Typography>
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
