import SEO from './components/SEO'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
// import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          {/* <Services /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
