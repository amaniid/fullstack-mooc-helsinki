import React from 'react'
import { Map, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import GetPictures from "./GetPictures"

const CountryInfo = ({ country }) => {

    const Currency = ({ country }) => {
        if (country.currencies.length > 1) {
            return (
                <h3>Currencies</h3>
            )
        }

        return (
            <h3>Currency</h3>
        )
    }

    const flag = new Icon({
        iconUrl: country.flag,
        iconSize: [20, 20]
      })

    return (
        <div>
            <h2>{country.name}</h2>
            <h3>{country.nativeName}</h3>
            <img alt="flag" className="photo" src={country.flag} />

            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>

            <h3>Languages</h3>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>)}
            </ul>

            <Currency country={country} />
            <ul>
                {country.currencies.map(currency =>
                    <li key={currency.name}>{currency.name}, {currency.symbol}</li>)}
            </ul>

            <Map center={[country.latlng[0], country.latlng[1]]} zoom={4}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    key={country.name}
                    position={[
                        country.latlng[0],
                        country.latlng[1]
                    ]}
                    icon={flag}
                />
            </Map>
            <GetPictures lat={country.latlng[0].toFixed(2)} long={country.latlng[1].toFixed(2)} />
        </div>

    )

}

export default CountryInfo