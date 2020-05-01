import React from 'react'

const Header = () => (
  <div className="container whoami">
    <div className="me">
      <h2 className="h2 name">Mark Learst</h2>
      <h3 className="h3 role">Remote User Interface Developer</h3>
    </div>
    <ul className="social cf">
      <li>
        <a href="https://twitter.com/ipaintcode" target="_blank" rel="noopener noreferrer" data-social="twitter">
          <img src="img/twitter.svg" alt="@iPAINTCODE" />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/ipaintcode/" target="_blank" rel="noopener noreferrer" data-social="codepen"><img src="img/codepen.svg" alt="CODEPEN.io" /></a>
      </li>
      <li>
        <a href="https://dribbble.com/ipaintcode" target="_blank" rel="noopener noreferrer" data-social="dribbble"><img src="img/dribbble.svg" alt="dribbble" /></a>
      </li>
      <li>
        <a href="https://github.com/ipaintcode" target="_blank" rel="noopener noreferrer" data-social="github"><img src="img/github.svg" alt="GitHub" /></a>
      </li>
      <li>
        <a href="https://linkedin.com/in/marklearst" target="_blank" rel="noopener noreferrer" data-social="linkedin"><img src="img/linkedin.svg" alt="LinkedIn" /></a>
      </li>
      <li>
        <a href="resume/mark_learst_resume.pdf" target="_blank" rel="noopener noreferrer" data-social="resume"><img src="img/resume.svg" alt="Resume" /></a>
      </li>
      <li>
        <a href="mailto:learst@me.com" data-social="email"><img src="img/quill.svg" alt="Email" /></a>
      </li>
    </ul>
  </div>
)

export default Header