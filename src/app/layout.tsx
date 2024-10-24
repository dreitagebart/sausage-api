import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { theme } from '~/styles/theme'

export const metadata: Metadata = {
	title: 'Sausage API',
	description: 'A curated list of fresh, delicious, german sausages'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<MantineProvider defaultColorScheme='light' theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}

export default RootLayout
