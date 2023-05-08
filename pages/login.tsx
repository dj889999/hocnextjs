import { LoginForm } from '@/components/auth'
import { useAuth } from '@/hooks/useAuth'
import { LoginPayload } from '@/models'
import { Container, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'

// export interface ILoginProps {}

export default function Login() {
	const router = useRouter()
	const { login } = useAuth({
		revalidateOnMount: false,
	})

	async function handleLoginOnSubmit(payload: LoginPayload) {
		try {
			await login(payload)
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container maxWidth="xs">
			<Paper
				elevation={4}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					m: 'auto',
					mt: 8,
					p: 4,
				}}
			>
				<Typography variant="h4" component="h1">
					Login To Your Account
				</Typography>
				<LoginForm onSubmit={handleLoginOnSubmit} />
			</Paper>
		</Container>
	)
}
