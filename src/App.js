import React from 'react'

const api ={
  key: "53b094d03edd5e540f14e087c3943018",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Pesquisar..." />
          
        </div>
      </main>
    </div>
  );
}

export default App;
