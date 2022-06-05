import type {AppProps} from 'next/app'
import '../styles/index.scss'
import Script from 'next/script'
import 'swiper/scss';
import 'swiper/scss/autoplay';
import "swiper/scss/effect-coverflow";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src='https://cdn.jsdelivr.net/gh/frankeno/xsalert@main/src/xsalert.js' />
    </>
  )
}

export default MyApp
