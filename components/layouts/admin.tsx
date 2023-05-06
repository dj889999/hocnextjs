import { LayoutProps } from '@/models'
import Link from 'next/link'
import { AuthProtected } from '@/components/common'
import { useAuth } from '@/hooks'

export function AdminLayout({ children }: LayoutProps) {
	const { profile, logout } = useAuth()
	return (
		<AuthProtected>
			<h1>Admin Layout</h1>
			<div>Sider Bar</div>

			<div>{JSON.stringify(profile)}</div>

			<button onClick={() => logout()}>Logout</button>

			<Link href="/">Home</Link>

			<Link href="/about">About</Link>

			<Link href="/login">Login</Link>

			<div>{children}</div>
		</AuthProtected>
	)
}
