import Head from "next/head";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
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
			<ContactForm />
			<Footer />
		</>
	);
}

export default MyApp;
