import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../Tile/Tile'

const Grid = ({
  tiles,
}) => (
    <div className="container">
      <div className="me">
        <h3 className="h3 role grid-title">Projects</h3>
      </div>
      <ul className="folio cf">
        {tiles && tiles.map(
          (tile, index) => <Tile {...tile} key={index} />)
        }
      </ul>
    </div>
  )

Grid.propsTypes = {
  tiles: PropTypes.array.isRequired,
}

export default Grid     