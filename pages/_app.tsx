import axiosClient from '@/api-client/axios-client'
import { EmptyLayout } from '@/components/layouts'
import { AppPropsWithLayout } from '@/models'
import { createEmotionCache } from '@/utils'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { SWRConfig } from 'swr'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppPropsWithLayout {
	emotionCache?: EmotionCache
}

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout
	const theme = responsiveFontSizes(createTheme())
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
