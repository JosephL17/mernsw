import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'


const AllCharacters = () => {
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    
        fetch('http://localhost:3000/api/character')
          .then((response) => response.json())
          .then((body) => setCharacters(body))
          .catch((err) => {
            throw new Error('Data could not be fetched!');
          });
  }, []);      

  console.log(characters);

  return (
    
      <div className="Character-container">
        {characters.map(character => {
          return <p className='Charcter-name' key={character.id}>{character.name}</p>
        })}
      </div>
      
    )
}   

export default AllCharacters;