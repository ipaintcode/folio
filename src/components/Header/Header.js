import React, { useContext } from 'react'
import { DataContext } from '../../DataContext';

const Header = () => {

  const { data } = useContext(DataContext);

  return (
    <div className="container whoami">
      <div className="me">
        <h2 className="h2 name">{data.about.name}</h2>
        <h3 className="h3 role">{data.about.title}</h3>
      </div>
      <ul className="social cf">
        {data.social && data.social.map(
          (social, index) => (
            <li key={index}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" data-social={social.name}>
                <img src={social.img} alt={social.name} />
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Header