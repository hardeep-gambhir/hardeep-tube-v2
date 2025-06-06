import "@public/css/fonts.css"
import "@public/css/global.css"
import { Themes } from "@themes/index"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import useDarkMode from "use-dark-mode"
import Script from 'next/script'
import CustomCursor from '../src/components/CustomCursor/CustomCursor'

const App = ({ Component, pageProps, router }: AppProps) => {
	const { value } = useDarkMode(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	const content = () => {
		return (
			<div className={value ? "bp3-dark" : ""}>
				<Component {...pageProps} key={router.route} />
			</div>
		)
	}

	const body = (
		<>
			<Head>
				<title>Hardeep 🧠🫶</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0 viewport-fit=cover"
					lang="en"
				/>
			</Head>
			<ThemeProvider theme={value ? Themes.Dark : Themes.Light}>
				{content()}
				<CustomCursor />
			</ThemeProvider>
			<Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
		</>
	)

	if (!mounted) return <div style={{ visibility: "hidden" }}>{body}</div>
	else return body
}

export default App
