import React, { useState, useEffect } from 'react'
import axios from 'axios'


import CountryMatcher from './components/CountryMatcher'

//import "./styles.css";

const App = () => {

  const [countryText, setCountryText] = useState('a')
  const [allData, setAllData] = useState('[]')
  const [chosenCountry, setChosenCountry] = useState('')


  const hook = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log('promise doned')
        //const countryArray = response.data
        setAllData(response.data)
      })
  }

  useEffect(hook, [])

  // const Menu = () => {
  //   return (
  //     <div>
  //       <div> find countries
  //       <input
  //           value={countryText}
  //           onChange={getCountryText} />
  //       </div>
  //       <CountryMatcher countries={countryList} />
  //     </div>
  //   )
  // }

  const getCountryText = (event) => {
    console.log('countryText changed!')
    setCountryText(event.target.value)
    setChosenCountry('')
  }

  const searchFilter = (country) => {
    if (country.name === undefined) {
      return false
    }
    return country.name.toLowerCase().match(countryText.toLowerCase())

  }
  //country.name === countryText


  const countryList = Object.values(allData).filter(searchFilter)


  // return (
  //   <div>
  //     <Menu />
  //   </div>
  // )

  return (
    <div>
      <div> find countries
        <input
          value={countryText}
          onChange={getCountryText} />
      </div>
      <CountryMatcher countries={countryList}
        countryState={chosenCountry}
        changeCountryState={setChosenCountry} />
    </div>
  )
}

export default App
