import React from 'react'
import Hero from './components/hero/Hero'
import VideoSection from './components/videosection/VideoSection'
import AboutSection from './components/about/AboutSection'
import ServicesSection from './components/services/ServicesSection'
import JoinSection from './components/join/JoinSection'
import ImpactSection from './components/impact/ImpactSection'
import Video from './components/videosection/Video'
import VisionSection from './components/vision/VisionSection'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Nav'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home"/>
      <VideoSection />
      <AboutSection id="about"/>
      <ServicesSection id="services"/>
      <JoinSection />
      <ImpactSection id="impact"/>
      <Video />
      <VisionSection />
      <Gallery id="gallery"/>
      <Contact id="contact"/>
      <Footer />
    </div>
  )
}

export default App
