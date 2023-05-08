import { Box } from '@mui/material'
import AppBarFooter from './app-bar-footer'

export function Footer() {
	return (
		<>
			<Box
				component="footer"
				py={2}
				textAlign="center"
				sx={{ display: { xs: 'none', sm: 'block' } }}
			>
				Footer
			</Box>
			<AppBarFooter />
		</>
	)
}
