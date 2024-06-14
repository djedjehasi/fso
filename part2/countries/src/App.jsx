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

  
  console.log(countriesList.map(item => item))

  const handleInputChange = (event) => {
    setSearch(event.target.value)
    setFilteredList(countriesList.filter(item => item.toLowerCase().includes(search)))
  }

  
console.log(countriesList)


 return (
  <div>
    <Filter value={search}
     handleChange={handleInputChange} />
      <Countires countriesList={countriesList} />
  </div>
 )
}

export default App
