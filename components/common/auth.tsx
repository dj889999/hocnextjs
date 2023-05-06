import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

export interface AuthProtectedProps {
	children: any
}

export function AuthProtected({ children }: AuthProtectedProps) {
	const router = useRouter()
	const { profile, loading, error } = useAuth()

	useEffect(() => {
		if (!loading && !profile?.username) router.push('/login')
	}, [profile, loading, error, router])

	if (!profile?.username) return <div>loading...</div>

	return <div>{children}</div>
}
