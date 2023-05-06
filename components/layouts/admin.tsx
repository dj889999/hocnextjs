import { LayoutProps } from '@/models'
import Link from 'next/link'

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Main Layout</h1>
			<div>Sider Bar</div>

			<Link href="/">Home</Link>

			<Link href="/about">About</Link>

			<Link href="/login">Login</Link>

			<div>{children}</div>
		</div>
	)
}
