import Head from "next/head";
import Footer from "../components/footer";
//import logRoutes from "../components/hooks/logRoutes";
import Nav from "../components/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	
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
