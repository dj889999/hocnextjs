import { Box, Button, Container, Stack } from '@mui/material'
import { ROUTE_LIST } from './routes'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from '@/pages/Link'

export default function HeaderDesktop() {
	const router = useRouter()
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => {
						return (
							<Link
								href={{
									pathname: route.path,
								}}
								key={route.path}
								sx={{
									'&.active': {
										color: 'primary.main',
									},
									mx: 1,
								}}
							>
								{route.label}
							</Link>
						)
					})}
				</Stack>
			</Container>
		</Box>
	)
}
