import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/workexperience/workexperience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/education/education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from './components/education/education'
import Workexpereince from './components/workexperience/workexperience'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Education />
    <Workexpereince/>
    <Portfolio />
   
    {/* <Contact />  */}
    <Footer /> 
    </>
  )
}

export default App