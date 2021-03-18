import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'
import Footer from './components/Footer/Footer'
// import WakaGraph from './components/Waka/WakaGraph'

const App = () => {
  const [folio, setFolio] = useState()

  const fetchData = (api) => {
    axios
      .get(api)
      .then(response => setFolio(response.data.work))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData('./ipaintcode.json')
  }, [])

  return (
    <div className="container">
      <header className="hero-container">
        <h1 className="branding">
          <img src="/img/ipaintcode.svg" alt="iPAINTCODE" />
        </h1>
      </header>
      <div className="container p-container">
        <p>Working with open and modern web technologies. A deep passion for keeping my craft sharp along with a focused eye on aesthetics, nuances, CSS, JavaScript (ES6+), ReactJS, User Interface Development, and User Experience Interaction. Part-time Thinkful Mentor. All things Front-End.</p>
        <blockquote><strong>“All you need to paint is a few tools, a little instruction, and a vision in your mind.”</strong><cite> &mdash; Bob Ross</cite>
        </blockquote>
      </div>
      <Header />
      <Grid tiles={folio} />
      <Footer />
    </div>
  )
}

export default App
