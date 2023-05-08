import { LoginPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../form/input'

export interface ILoginFormProps {
	onSubmit?: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: ILoginFormProps) {
	const schema = yup.object().shape({
		username: yup
			.string()
			.required('Please enter your username')
			.min(4, 'Username is too short - should be 4 chars minimum.'),
		password: yup
			.string()
			.required('Please enter your password')
			.min(6, 'Password is too short - should be 6 chars minimum.'),
	})

	const [showPassword, setShowPassword] = useState(false)

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: yupResolver(schema),
	})

	async function handleLoginFormSubmit(payload: LoginPayload) {
		await onSubmit?.(payload)
	}

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginFormSubmit)}>
			<InputField name="username" control={control} label="Username" />
			<InputField
				name="password"
				control={control}
				label="Password"
				type={showPassword ? 'text' : 'password'}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword(!showPassword)}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<Button
				type="submit"
				variant="contained"
				sx={{
					mt: 2,
				}}
				size="large"
				disabled={isSubmitting}
				startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null}
				fullWidth
			>
				Login
			</Button>
		</Box>
	)
}
