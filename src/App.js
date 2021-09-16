import React from 'react'
import Card from './components/Card'

const api ={
  key: "53b094d03edd5e540f14e087c3943018",
  base: "https://api.openweathermap.org/data/2.5/"
}

// const dateBuilder = (d) => {
//   let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto",
//   "Setembro", "Outubro", "Novembro", "Dezembro"]

//   let days = ["Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"]

//   let day = days[d.getDay()]
//   let date = d.getDate()
//   let month = months[d.getMonth()]
//   let year = d.getFullYear()

//   return `${day} ${date} ${month} ${year}`

// }

export default function App() {
  return (
    <>
    <Card />
    </>
  );
}
