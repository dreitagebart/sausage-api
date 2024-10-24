import { Button, Group, JsonInput, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import Axios from 'axios'
import { useCallback } from 'react'

import classes from './forms.module.css'

type FormState = {
	query: string
	result: string
}

export const SearchForm = () => {
	const { onSubmit, values, setFieldValue, errors } = useForm<FormState>({
		initialValues: {
			query: '',
			result: ''
		}
	})
	const handleSubmit = useCallback(
		({ query }: FormState) => {
			Axios.post('/api/search', { query }).then(({ data }) =>
				setFieldValue('result', JSON.stringify(data, null, 2))
			)
		},
		[setFieldValue]
	)

	return (
		<form onSubmit={onSubmit(handleSubmit)}>
			<section>
				<Text className={classes.subtitle}>Search for sausages</Text>
				<Group gap='sm' className={classes.route} mt='sm' mb='xl'>
					<Group className={classes.httpMethod}>POST</Group>
					<Text>/api/search</Text>
				</Group>
				<Text fw='bold'>Parameters</Text>
				<Group grow>
					<TextInput
						maw={240}
						error={errors.query}
						label='query'
						value={values.query}
						onChange={(e) => setFieldValue('query', e.target.value)}
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
							rows={12}
							formatOnBlur
						/>
					</Group>
				) : null}
			</section>
		</form>
	)
}
