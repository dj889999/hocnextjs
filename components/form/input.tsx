import { TextField, TextFieldProps } from '@mui/material'
import { Control, useController } from 'react-hook-form'

export type IInputFieldProps = TextFieldProps & {
	name: string
	control: Control<any>
}

export default function InputField({
	name,
	control,
	label,
	onChange: externalOnChange,
	onBlur: externalOnBlur,
	value: externalValue,
	ref: externalRef,
	...rest
}: IInputFieldProps) {
	const {
		field: { onBlur, onChange, value, ref },
		fieldState: { invalid, error },
	} = useController({ name, control })
	return (
		<TextField
			fullWidth
			margin="normal"
			variant="outlined"
			label={label}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			error={invalid}
			helperText={error?.message}
			inputRef={ref}
			{...rest}
		/>
	)
}
