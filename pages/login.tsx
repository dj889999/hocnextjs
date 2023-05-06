import { authApi } from '@/api-client/auth-api'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { EmptyLayout } from '@/components/layouts'
import Link from 'next/link'

// export interface ILoginProps {}

export default function Login() {
	const { profile, loading, login, logout } = useAuth({
		revalidateOnMount: false,
	})

	async function handleLogin() {
		try {
			await login()
			console.log('Login success redirect to home page')
		} catch (error) {
			console.log(error)
		}
	}
	async function handleLogout() {
		try {
			await logout()
			console.log('Logout success redirect to home page')
		} catch (error) {
			console.log(error)
		}
	}
	async function handleGetUser() {
		try {
			const user = await authApi.getProfile()
			console.log('User', user)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<EmptyLayout>
			<h1>Login</h1>
			<Link href="/">Home</Link>
			<p>
				<strong>Profile:</strong> {JSON.stringify(profile || {}, null, 2)}
			</p>

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleGetUser}>Get Profile</button>
			<button onClick={handleLogout}>Logout</button>
		</EmptyLayout>
	)
}
