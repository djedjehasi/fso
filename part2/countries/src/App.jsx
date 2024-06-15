import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countires from './components/Countires'
import countiresServices from './services/countires'


const  App = () => {
  const [search, setSearch] = useState('')
  const [countriesList, setcountriesList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    countiresServices
    .getName()
    .then(country => {
      setcountriesList(country.map(country => country.name.common))
    })
  },[])


  const handleInputChange = (event) => {
    const newSearch = event.target.value.toLowerCase()
    setSearch(newSearch)
    setFilteredList(countriesList.filter(country => country.toLowerCase().includes(newSearch)))
  }

  



 return (
  <div>
    <Filter value={search}
     handleChange={handleInputChange} />
      <Countires countriesList={filteredList} />
  </div>
 )
}

export default App
