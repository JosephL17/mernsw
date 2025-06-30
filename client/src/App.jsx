import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <h1>Star Wars Universe Lookup</h1>
    <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
        here)</span></label>
    <input id="searchString" oninput="filterCharacters()" autocomplete="off" />
  </div>
  <section id="charactersList">
  </section>
    </>
  )
}

export default App
