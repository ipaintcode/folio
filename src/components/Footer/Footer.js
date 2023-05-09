import React from "react"

const jsonVersion = require('../../../package.json');

const Footer = () => {

  return (
    <footer className="cf">
      <img src="img/ipaintcode-reverse.svg" alt="iPAINTCODE" />
      <span>2023 © iPAINTCODE, LLC</span>
      <span className="version">v{jsonVersion.version}</span>
    </footer>
  )
}

export default Footer