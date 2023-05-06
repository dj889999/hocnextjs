import axiosClient from '@/api-client/axios-client'
import { EmptyLayout } from '@/components/layouts'
import { AppPropsWithLayout } from '@/models'
import { SWRConfig } from 'swr'

function App({ Component, pageProps }: AppPropsWithLayout) {
	console.log('App rendered 1')

	const Layout = Component.Layout ?? EmptyLayout

	return (
		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}

export default App
