'use client'

import {
	Button,
	Container,
	Flex,
	Group,
	Stack,
	Text,
	UnstyledButton
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { AllForm, RandomForm, SearchForm } from '~/components/forms'
import sausageImage from '~/images/sausage.png'

import { IconCode, IconHeartFilled } from '@tabler/icons-react'
import { patua_one } from '../styles/fonts'
import classes from './page.module.css'

const Page = () => {
	return (
		<Container className={classes.container} size='md' px='xl'>
			<Flex
				direction={{ base: 'column', sm: 'row' }}
				align='center'
				py='xl'
				className={classes.hero}
			>
				<Group>
					<Image
						src={sausageImage}
						alt='sausage'
						className={classes.sausageImage}
					/>
				</Group>
				<Stack flex={1} gap='xs'>
					<Text className={classes.heroTitle}>Sausage API</Text>
					<Text size='lg'>
						A curated list of fresh, delicious, german sausages
					</Text>
					<Group mt='md'>
						<Button variant='light' component={Link} href='#docs'>
							Learn more
						</Button>
						<Button
							component={Link}
							href='https://github.com/dreitagebart/sausage-api'
							rightSection={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='48'
									height='48'
									viewBox='0 0 24 24'
									fill='#ffffff'
								>
									<title>Github</title>
									<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
								</svg>
							}
						>
							Code on Github
						</Button>
					</Group>
				</Stack>
			</Flex>
			<Text pt='xl' id='docs' className={classes.title}>
				Documentation
			</Text>
			<Flex direction='column' gap='xl' pb='40px'>
				<AllForm />
				<RandomForm />
				<SearchForm />
				<Group my='xl' gap='4px' align='center' justify='flex-end'>
					<IconCode />
					<Text>with</Text>
					<IconHeartFilled color='#f03e3e' />
					<Text>by</Text>
					<UnstyledButton
						fw='bold'
						component={Link}
						href='https://dreitagebart.io'
					>
						dreitagebart
					</UnstyledButton>
				</Group>
			</Flex>
		</Container>
	)
}

export default Page
