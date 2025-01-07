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

const App = () => {
  return (
    <div>
      <Hero />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <JoinSection />
      <ImpactSection />
      <Video />
      <VisionSection />
      <Gallery />
    </div>
  )
}

export default App
