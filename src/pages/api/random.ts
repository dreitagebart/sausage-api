import { NextApiRequest, NextApiResponse } from 'next'

import data from '../../lib/data.json'

type Response = { name: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const index = Math.floor(Math.random() * data.length)

  res.status(200).json({ name: data[index] })
}
