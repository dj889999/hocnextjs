import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }

  const cookies = new Cookies(req, res)
  cookies.set('accessToken')

  res.status(200).json({ message: 'logout Successfully' })
}
