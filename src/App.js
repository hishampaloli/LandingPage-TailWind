import React from 'react'
import Analytics from './components/Analytics'
import Card from './components/Card'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLettter from './components/NewsLettter'

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Analytics />
    <NewsLettter />
    <Card />
    <Footer />
    </div>
  )
}

export default App
