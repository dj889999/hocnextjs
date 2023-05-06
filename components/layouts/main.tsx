import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useEffect } from 'react'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounted')

		return () => {
			console.log('MainLayout unmounted')
		}
	}, [])

	return (
		<div>
			<h1>Main Layout</h1>

			<Link href="/" prefetch={false}>
				Home
			</Link>

			<Link href="/about" replace>
				About
			</Link>

			<Link href="/login" replace>
				Login
			</Link>

			<div>{children}</div>
		</div>
	)
}
