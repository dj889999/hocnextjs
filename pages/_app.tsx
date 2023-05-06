import axiosClient from '@/api-client/axios-client'
import { EmptyLayout } from '@/components/layouts'
import { AppPropsWithLayout } from '@/models'
import { SWRConfig } from 'swr'

import { createEmotionCache, theme } from '@/utils'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppPropsWithLayout {
	emotionCache?: EmotionCache
}

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
	console.log('App rendered 1')

	const Layout = Component.Layout ?? EmptyLayout

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	)
}

export default App
