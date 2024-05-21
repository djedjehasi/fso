import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'

function App() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }
useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/name/finland')
    .then(response => setName(response.data.name.common))
  },[])

 return (
  <div>
    <Search value={search} handleChange={onChange} />
      <div>{name}</div>
  </div>
 )
}

export default App
