import About from "./components/About"
import ContactForm from "./components/footer-section/ContactForm"
import Footer from "./components/footer-section/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HorizontalScroll from "./components/utils/HorizontalScroll"
import Projects from "./components/projects/ProjectsContainer"
import Skills from "./components/skills/SkillContainer"
import UpArrow from "./components/utils/UpArrow"

function App() {
  return (
    <>
      <UpArrow />
      <Header />
      <div className="container">
        <Hero />
        <br /><br />
        <About />
        <Skills />
        <Projects />  
      </div>
      <HorizontalScroll />
      <div className="container">
        <ContactForm />
        <div className="hr"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
