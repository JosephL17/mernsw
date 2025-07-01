import './App.css'
import AllCharacters from './components/AllCharacters'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from './components/Character';

function App() {

  return (
    <>
      <div className='app-continer'>
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
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<AllCharacters/>}/>
          <Route path='/character/:id' element={<Character/>}/>
          </Routes>
          </BrowserRouter>
        </section>
      </div>
    </>
  )
  
}

export default App
