import { Button, Group, JsonInput, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import Axios from 'axios'

import { useCallback } from 'react'
import classes from './forms.module.css'

type FormState = {
	result: string
}

export const AllForm = () => {
	const { values, onSubmit, setFieldValue } = useForm<FormState>({
		initialValues: {
			result: ''
		}
	})
	const handleSubmit = useCallback(() => {
		Axios.get('/api/all').then(({ data }) =>
			setFieldValue('result', JSON.stringify(data, null, 2))
		)
	}, [setFieldValue])

	return (
		<form onSubmit={onSubmit(handleSubmit)}>
			<section>
				<Text className={classes.subtitle}>Get all sausages</Text>
				<Group gap='sm' className={classes.route} mt='sm'>
					<Group className={classes.httpMethod}>GET</Group>
					<Text>/api/all</Text>
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
							rows={20}
							formatOnBlur
						/>
					</Group>
				) : null}
			</section>
		</form>
	)
}
