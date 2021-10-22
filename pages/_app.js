import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import Nav from '../components/nav';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <ContactForm />
      <Footer />
    </>
    )
}

export default MyApp
