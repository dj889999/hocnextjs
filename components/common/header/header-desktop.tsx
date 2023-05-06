import { Box, Container, Stack } from '@mui/material'
import { ROUTE_LIST } from './routes'
import Link from '@/pages/Link'

export default function HeaderDesktop() {
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} mx={1}>
							{route.label}
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
