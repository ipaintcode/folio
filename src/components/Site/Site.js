import React, { useContext } from 'react'
import Header from '../Header/Header'
import Grid from '../Grid/Grid'
import Footer from '../Footer/Footer'
import { DataContext } from '../../DataContext'

const jsonVersion = require('../../../package.json');

const Site = () => {

  const { data } = useContext(DataContext);

  return (
    <div className="container">
      <header className="hero-container" version={`v${jsonVersion.version}`}>
        <h1 className="branding">
          <img src="/img/ipaintcode.svg" alt="iPAINTCODE" />
        </h1>
      </header>
      <div className="container p-container">
        {data.about.bio.map((paragraph, index) =>
          <p key={index}>{paragraph}</p>
        )}
        <blockquote>
          <strong>{data.about.quote}</strong>
          <cite> &mdash; {data.about.author}</cite>
        </blockquote>
      </div>
      <Header />
      <Grid />
      <Footer />
    </div>
  )
}

export default Site
