import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '@/api-client'
import useSWR from 'swr'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		revalidateOnFocus: false,
		dedupingInterval: 60 * 60 * 1000,
		...options,
	})

	const loading = !profile && !error

	async function login() {
		await authApi.login({
			username: 'admin',
			password: 'admin123123',
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()

		mutate({}, false)
	}

	return {
		profile,
		loading,
		error,
		login,
		logout,
	}
}
