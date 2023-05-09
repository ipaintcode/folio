import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Site from './components/Site/Site'
import { DataContext } from './DataContext'
import './App.css'

const App = () => {

  const [data, setData] = useState()

  const fetchData = (api) => {
    axios
      .get(api)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData('./ipaintcode.json')
  }, [])

  return data
    ? (
      <DataContext.Provider value={{ data, setData }}>
        <Site />
      </DataContext.Provider>
    ) : null
}

export default App
