import React from 'react'
import { Box } from '@mui/system'
import { Button, Stack } from '@mui/material'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { UserInfo } from './user-menu'

export default function TopMenu() {
	const { profile, logout } = useAuth()
	const isUser = Boolean(profile?.username)

	const renderTopMenu = ROUTE_LIST.filter((item) => !item.requireAuth || isUser)

	return (
		<Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
			{renderTopMenu.map((item) => (
				<Button key={item.path} sx={{ color: '#fff' }} href={item.path} component={Link}>
					{item.label}
				</Button>
			))}

			{!isUser && (
				<Button sx={{ color: '#fff' }} href="/login" component={Link}>
					Login
				</Button>
			)}

			{isUser && <UserInfo />}
		</Stack>
	)
}
