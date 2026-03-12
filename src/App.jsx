import './App.css'
import CertifiedSection from './components/CertifiedSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServicesSection from './components/Services'
import WhyChooseSection from './components/WhyChooseSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CertifiedSection/>
      <ServicesSection/>
      <WhyChooseSection/>
      <FrequentlyAskedQuestions/>
      <ContactUs/>
      <Footer/>
    </>

  )
}

export default App