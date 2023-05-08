import Cookies from 'cookies'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') {
		res.status(405).json({ message: 'Method Not Allowed' })
		return
	}

	return new Promise((resolve) => {
		req.headers.cookie = ''

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = ''
			proxyRes.on('data', (data) => {
				body += data
			})
			proxyRes.on('end', () => {
				try {
					const isSuccessful =
						proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300

					if (!isSuccessful) {
						;(res as NextApiResponse).status(proxyRes.statusCode || 500).json(JSON.parse(body))
						return resolve(true)
					}
					const { accessToken, expiredAt } = JSON.parse(body)

					// set cookies here
					const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
					cookies.set('accessToken', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiredAt),
					})
					;(res as NextApiResponse).status(200).json({ message: 'login Successfully' })
				} catch (error) {
					;(res as NextApiResponse).status(500).json({ message: 'login Failed' })
				}

				resolve(true)
			})
		}

		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true,
			selfHandleResponse: true,
		})

		proxy.once('proxyRes', handleLoginResponse)
	})
}
