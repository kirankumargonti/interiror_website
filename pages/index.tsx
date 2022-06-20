//Components
import Footer from "../modules/footer/Footer"
import Header from "../modules/header/Header"
import Hero from "../modules/hero/Hero"
import Testimonial from "../modules/testimonial/Testimonial"
import { NextPage } from "next"
import Services from "../modules/services/Services"
import Contact from "../modules/contact/Contact"

const index: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default index
