import { Box, Container, Stack } from '@mui/material'
import { ROUTE_LIST } from './routes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

export default function HeaderDesktop() {
	const router = useRouter()
	return (
		<Box component="header" textAlign="center" py={2} display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => {
						return (
							<Link
								key={route.path}
								href={route.path}
								passHref
								className={clsx({ active: route.path === router.pathname })}
								style={{
									textDecoration: 'none',
									color: 'inherit',
									marginRight: 10,
									fontWeight: 500,
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
