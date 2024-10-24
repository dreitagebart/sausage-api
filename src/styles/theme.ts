import { createTheme } from '@mantine/core'
import { patua_one } from './fonts'

export const theme = createTheme({
	primaryColor: 'red',
	primaryShade: 9,
	headings: {
		fontFamily: patua_one.style.fontFamily
	}
})
