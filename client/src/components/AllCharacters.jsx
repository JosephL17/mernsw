import React from 'react'
import { useState, useEffect } from 'react'


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
          return <a className='Charcter-name' href="" key={character.id}>{character.name}</a>
        })}
      </div>
    
  )
}

export default AllCharacters