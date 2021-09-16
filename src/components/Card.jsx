import React from 'react'
import './Card.css'
import Location from './Location'
import Search from './Search'
import Weather from './Weather'

export default function Card() {
    return(
        <div className="App">
      <main>
        <Search />
        <Location />
        <Weather />
      </main>
    </div>
    )
}