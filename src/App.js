import React, { useState } from 'react'
import './index.css'

const api ={
    key: "53b094d03edd5e540f14e087c3943018",
    base: "https://api.openweathermap.org/data/2.5/"
  }

export default function App() {

    const [query, setQuery] = useState('')
    const [weather, setWheater] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWheater(result)
                setQuery('')
                console.log(result)
            })
        }
    }

    const dateBuilder = (d) => {
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"]
      
        let days = ["Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"]
      
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
      
        return `${day} ${date} ${month} ${year}`
      
      }

    return(
        <div className={(typeof weather.main != "undefined")  ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
        <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Pesquisar..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }