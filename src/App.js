import React from 'react'

const api ={
  key: "53b094d03edd5e540f14e087c3943018",
  base: "https://api.openweathermap.org/data/2.5/"
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

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Pesquisar..." />
        </div>

        <div className="location-box">
          <div className="location">Rio De Janeiro, BR</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            15 graus
          </div>
          <div className="weather">
            Verão
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
