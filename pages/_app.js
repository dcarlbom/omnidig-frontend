import '../styles/globals.css'
import GlobalStyle from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
