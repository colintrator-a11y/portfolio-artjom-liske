import { useEffect } from 'react'

import About from './components/About'
import BackToTop from './components/BackToTop'
import ClickPulse from './components/ClickPulse'
import BackdropSolids from './components/BackdropSolids'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import { useContent } from './i18n/LanguageContext'
import usePointerDepth from './hooks/usePointerDepth'
import notifyVisit from './utils/notifyVisit'

export default function App() {
  const { ui } = useContent()

  // Publishes the pointer as --px/--py for every parallax layer below.
  usePointerDepth()

  // Announce the visit once per session. No-op in development.
  useEffect(() => {
    notifyVisit()
  }, [])

  return (
    <div className="app">
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__grid" />
        <BackdropSolids />
        <span className="backdrop__orb backdrop__orb--a" />
        <span className="backdrop__orb backdrop__orb--b" />
        <span className="backdrop__orb backdrop__orb--c" />
      </div>

      <a className="skip-link" href="#main">
        {ui.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
      </main>

      <Footer />
      <div className="cursorGlow" aria-hidden="true" />
      <ClickPulse />
      <BackToTop />
    </div>
  )
}
