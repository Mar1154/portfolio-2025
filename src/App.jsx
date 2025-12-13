import { useState } from 'react'
import SEO from './components/SEO'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SEO />
      <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen">
          <Navbar />
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
