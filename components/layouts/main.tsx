import { LayoutProps } from '@/models'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Header } from '../common'
import Footer from '../common/footer'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounted')

		return () => {
			console.log('MainLayout unmounted')
		}
	}, [])

	return (
		<Stack minHeight="100vh">
			<Header />

			<Box
				component="main"
				flexGrow={1}
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4" component="h1" gutterBottom color="primary.main">
					Welcom to Main Layout
				</Typography>

				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
