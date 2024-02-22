import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import HeroGallery from './components/HeroGallery'
import ContactButtons from "./components/ContactButtons";
import InteriorServices from './components/InterirorServices'
import BigHero from './components/BigHero'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <HeroGallery/>
    <Hero/>
    <BigHero/>
    <InteriorServices/>
    <ContactButtons/>
    <Footer/>
    </>
  )
}

export default App
