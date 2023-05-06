import { Box, Container, Stack, Link as MUILink } from '@mui/material'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'

export default function HeaderDesktop() {
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path}>
							<MUILink mx={1}>{route.label}</MUILink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
