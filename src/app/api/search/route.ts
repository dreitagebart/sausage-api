import type { NextRequest } from 'next/server'

import data from '../../../../public/data.json'

export const POST = async (req: NextRequest) => {
	const body = await req.json()

	const query = body.query.toLowerCase() || ''

	const result = data.filter((sausage) => sausage.toLowerCase().includes(query))

	return Response.json({
		result,
		count: result.length
	})
}
