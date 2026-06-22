import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Skill from './sections/Skill'
import Project from './sections/Project'

function App() {

  return (
    <>
      <Navbar />

      <main className="bg-bg pt-24">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
