import '../styles/globals.css'
import GlobalStyle from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
