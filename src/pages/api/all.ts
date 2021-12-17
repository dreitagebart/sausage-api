import { NextApiRequest, NextApiResponse } from 'next'

import data from '../../lib/data.json'

type Response = {
  result: Array<string>
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ result: data, count: data.length })
}
