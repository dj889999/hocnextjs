import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '@/api-client'
import useSWR from 'swr'
import { LoginPayload } from '@/models'

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

	const loading = profile === undefined && error === undefined

	async function login(payload: LoginPayload) {
		await authApi.login(payload)

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
