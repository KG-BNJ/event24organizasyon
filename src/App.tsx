import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { Seo } from './components/Seo'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Gallery } from './components/Gallery'
import { Services } from './components/Services'
import { Approach } from './components/Approach'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [booting, setBooting] = useState(true)
  const [ready, setReady] = useState(false)

  useLenis(!booting)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setBooting(false)
      setReady(true)
      return
    }

    const hide = window.setTimeout(() => setBooting(false), 2100)
    const unlock = window.setTimeout(() => setReady(true), 2450)
    return () => {
      window.clearTimeout(hide)
      window.clearTimeout(unlock)
    }
  }, [])

  return (
    <>
      <Seo />
      <AnimatePresence mode="wait">{booting && <Preloader />}</AnimatePresence>
      <div className={`site ${ready ? 'is-ready' : ''}`}>
        <Navbar ready={ready} />
        <main>
          <Hero ready={ready} />
          <Marquee />
          <Gallery />
          <Services />
          <Approach />
          <Contact />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
