import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Tile from '../Tile/Tile'
import { DataContext } from '../../DataContext';

const Grid = () => {

  const { data } = useContext(DataContext);

  return (
    <div className="container">
      <div className="me">
        <h3 className="h3 role grid-title">Projects</h3>
      </div>
      <ul className="folio cf">
        {data.work && data.work.map(
          (tile, index) => <Tile {...tile} key={index} />)
        }
      </ul>
    </div>
  )
}

Grid.propsTypes = {
  tiles: PropTypes.array.isRequired,
}

export default Grid