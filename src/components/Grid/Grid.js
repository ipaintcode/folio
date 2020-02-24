import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../Tile/Tile'

const Grid = ({
  tiles,
}) => (
    <div className="container">
      <ul className="folio cf">
        {tiles && tiles.map(
          (tile, index) => <Tile {...tile} key={index} />)
        }
      </ul>
    </div>
  )

Grid.defaultProps = {}
Grid.propsTypes = {
  tiles: PropTypes.array.isRequired,
}

export default Grid