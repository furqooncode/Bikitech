import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Products from './Products.jsx'
import Questions from './Questions.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

export default function Home(){
  return(
    <>
      <Header />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Service /></section>
      <section id="products"><Products /></section>
      <section id="faq"><Questions /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  )
}