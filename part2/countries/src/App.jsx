import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countires from './components/Countires'


const  App = () => {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }
useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/name/finland')
    .then(response => setName(response.data.name.common))
  },[])

  console.log(name)

 return (
  <div>
    <Filter value={search} handleChange={handleInputChange} />
      <Countires filter={name}/>
  </div>
 )
}

export default App
