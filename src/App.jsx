import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";
import './App.css'
import {
  PreLoader,
  Navbar,
  Hero,
  About,
  Skills,
  Work,
  Contact,
  Footer,
} from './components'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <PreLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className='relative z-0'>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
