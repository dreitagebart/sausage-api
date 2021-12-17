import { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../lib/data.json'

type Response = {
  result: Array<string>
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { term } = req.query

  if (!term) {
    return res.status(400)
  }

  const lowerTerm = String(term).toLowerCase()

  const result = data.filter((sausage) =>
    sausage.toLowerCase().includes(lowerTerm)
  )

  res.status(200).json({ result, count: result.length })
}
