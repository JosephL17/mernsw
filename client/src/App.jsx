import './App.css'
import Character from './components/character'

function App() {

  return (
    <>
      <div>
        <div>
          <h1>Star Wars Universe Lookup</h1>
          <label htmlFor="searchString">
            Who you looking for? <span className="small">(Regular expressions are cool here)</span>
          </label>
          <input id="searchString" 
          // onInput={filterCharacters}
           autoComplete="off" />
        </div>
        <section id="charactersList">
          <Character />
        </section>
      </div>
    </>
  )
  
}

export default App
