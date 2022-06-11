//Components
import {NextPage} from 'next'
import Footer from '../modules/footer/Footer'
import Header from '../modules/header/Header'
import Hero from '../modules/hero/Hero'
import Services from '../modules/services/Services'

const index: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  )
}

export default index
