import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'


const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
 
 
  useEffect(() => {
    fetchCharacters()
  }, []);

  const fetchCharacters = async() => {
    const data = await fetch("http://localhost:3000/").then(res => res.json());
    setCharacters(data);
    // console.log(characters.name);
  }
  
  
  
  return (

      <div className="Character-container">
        {characters.map(character => {
          return <p className='Charcter-name' key={character.id}>{character.name}</p>
        })}
      </div>
    
  )
}

export default AllCharacters