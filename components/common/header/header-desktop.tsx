import { Box, Button, Container, Stack } from '@mui/material'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'

export default function HeaderDesktop() {
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Button
							component={Link}
							key={route.path}
							href={route.path}
							sx={{
								mx: 1,
							}}
						>
							{route.label}
						</Button>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
