import type { NextRequest } from 'next/server'

import data from '../../../../../public/data.json'

type Params = Promise<{ quantity: Array<string> }>

const uniqueNumbers = (quantity: number) => {
	if (quantity > data.length) {
		throw new Error('Requested numbers higher than total amount of sausages')
	}

	const numbers: Array<number> = []

	while (numbers.length < quantity) {
		const randomNumber = Math.floor(Math.random() * data.length)

		if (!numbers.includes(randomNumber)) {
			numbers.push(randomNumber)
		}
	}

	return numbers
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
	const result: Array<string> = []
	const quantity = Number((await params).quantity) || 1

	uniqueNumbers(quantity).map((i) => {
		result.push(data[i])
	})

	return Response.json({ result, count: result.length })
}
