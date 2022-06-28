import Head from "next/head";
import Footer from "../components/footer";
import * as ga from '../lib/ga'
import Nav from "../components/nav";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange)
	
		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	
	return (
		
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
