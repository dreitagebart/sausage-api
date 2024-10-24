import { Button, Group, JsonInput, NumberInput, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import Axios from 'axios'
import { useCallback } from 'react'

import classes from './forms.module.css'

type FormState = {
	quantity: number
	result: string
}

export const RandomForm = () => {
	const { values, setFieldValue, errors, onSubmit } = useForm<FormState>({
		initialValues: {
			quantity: 1,
			result: ''
		}
	})
	const handleSubmit = useCallback(
		({ quantity }: FormState) => {
			Axios.get(`/api/random${quantity > 1 ? `/${quantity}` : ''}`).then(
				({ data }) => setFieldValue('result', JSON.stringify(data, null, 2))
			)
		},
		[setFieldValue]
	)

	return (
		<form onSubmit={onSubmit(handleSubmit)}>
			<section>
				<Text className={classes.subtitle}>Get random sausages</Text>
				<Group gap='sm' className={classes.route} mb='xl' mt='sm'>
					<Group className={classes.httpMethod}>GET</Group>
					<Text>{`/api/random${values.quantity > 1 ? `/${values.quantity}` : ''}`}</Text>
				</Group>
				<Text fw='bold'>Parameters</Text>
				<Group>
					<NumberInput
						maw={80}
						min={1}
						label='quantity'
						value={values.quantity}
						onChange={(value) => setFieldValue('quantity', Number(value))}
					/>
				</Group>
				<Group my='lg'>
					<Button type='submit'>Try it</Button>
				</Group>
				{values.result ? (
					<Group grow>
						<JsonInput
							maw={420}
							value={values.result}
							onChange={(value) => setFieldValue('result', value)}
							rows={8}
							formatOnBlur
						/>
					</Group>
				) : null}
			</section>
		</form>
	)
}
