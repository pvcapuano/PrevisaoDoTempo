import React from 'react'
import './Location.css'

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

export default function Location() {
    return(
        <div className="location-box">
          <div className="location">Rio De Janeiro, BR</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
    )
}