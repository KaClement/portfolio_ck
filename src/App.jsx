import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Technology from './components/technology/Technology.jsx'
import About from './components/about/About.jsx'
import MyInfo from './components/myInfo/myInfo.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Challenges from './components/challenges/Challenges.jsx'



const App = () => {
  
  return (
  <>
    
    <Header/>
    <MyInfo/>
    <About/>
    <Portfolio/>
    <Technology/>
    <Challenges/>
    <Technology/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App