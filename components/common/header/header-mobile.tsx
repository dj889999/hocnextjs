import { Box } from '@mui/material'

export default function HeaderMobile() {
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'block', lg: 'none' }}>
			Header Mobile
		</Box>
	)
}
