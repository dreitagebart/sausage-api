import data from '../../../../public/data.json'

export const GET = async () => {
	return Response.json({ result: data, count: data.length })
}
