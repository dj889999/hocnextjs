import { LayoutProps } from '@/models'
import { Box, Stack, Typography } from '@mui/material'
import { Header, Footer } from '../common'

export function MainLayout({ children }: LayoutProps) {
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
