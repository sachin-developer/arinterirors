import Navbar from './Navbar'
import Carousel from './Carousel'
import Hero from './Hero'
import HeroGallery from './HeroGallery'
import ContactButtons from "./ContactButtons";
import InteriorServices from './InterirorServices'
import BigHero from './BigHero'
import Footer from './Footer'

const HomePage=()=>{
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
export default HomePage;