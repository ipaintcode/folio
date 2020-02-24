import React from 'react'
import PropTypes from 'prop-types'

const Tile = ({
  link,
  heading,
  subHeading,
  image,
}) => (
  <li>
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3>
        {heading}
        {subHeading ? <span>{subHeading}</span> : ''}
      </h3>
    </a>
    <img src={image} alt={heading} />
  </li>
)

Tile.defaultProps = {}
Tile.propsTypes = {
  link: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}


export default Tile