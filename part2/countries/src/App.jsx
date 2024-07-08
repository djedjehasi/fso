import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Display from './components/Display'
import countiresServices from './services/countires'


const  App = () => {
  const [search, setSearch] = useState('')
  const [countriesNamesList, setCountriesNamesList] = useState([])
  const [countryObject, setCountryObject] = useState([])
  const [result, setResult] = useState([])
  const [countryCardData, setCountryCardData] = useState(null)

  useEffect(() => {
    countiresServices
    .getName()
    .then(country => {
      setCountriesNamesList(country.map(country => {
        setCountryObject(prev => ({
          ...prev,
          [country.name.common]: country
        }))
         return country.name.common
      }))

    })
  },[])



  const getDisplayedData = (search) => {
    let nameList = countriesNamesList.filter(countryName => countryName.toLowerCase().startsWith(search.toLowerCase()))  
    if(nameList.length >= 10) {
      return ['too many countries']
    } else if (nameList.length == 1) {
      const currentCountry = countryObject[nameList[0]]
      setCountryCardData(currentCountry)
      setSearch(nameList[0])
    } else {
      return nameList
    }
  }

  const handleInputChange = (event) => {
    const newSearch = event.target.value.toLowerCase()
    setSearch(newSearch)
    setResult(getDisplayedData(newSearch))
  }

  



 return (
  <div>
    <Filter value={search}
     handleChange={handleInputChange} />
    <Display content={result} countryCard={countryCardData} searchValue={search}/>
  </div>
 )
}

export default App
