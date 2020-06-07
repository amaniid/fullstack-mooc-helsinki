import React from 'react'
import CountryInfo from './CountryInfo'



const CountryMatcher = ({ countries, countryState, changeCountryState
}) => {
    const filterFun = (condition) => {
        return function(element) {
            return element.name === condition
        }
    }

    if (countryState !== '') {
        //const chosenCountry = countries.filter(country => country.name === countryState)
        const chosenCountry = countries.filter(filterFun(countryState))

        console.log(chosenCountry[0].capital)
        return (
            <div>
                <CountryInfo country={chosenCountry[0]} />
            </div>
        )
    }

    if (countries.length === 1) {
        return (
            <div>
                <CountryInfo country={countries[0]} />
            </div>
        )
    }

    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter.</div>
        )
    }

    if (countries.length > 1) {
        const buttonHandler = (e) => {
            console.log('hei från plööh', e.target.id)
            changeCountryState(e.target.id)

        }

        return (
            countries.map(country =>
                <div key={country.name}>{country.name}
                    <button id={country.name}
                    onClick={e => buttonHandler(e)} >show</button>
                </div>
            )
        )
    }

    if (countries.length === 0) {
        return (
            <div>No countries named like this.</div>
        )
    }

}

export default CountryMatcher
