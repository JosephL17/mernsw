import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import Character from './Character'
import {Link} from "react-router-dom";


const AllCharacters = () => {
  let [characters, setCharacters] = useState([])
  // const navigate = useNavigate();

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


    <div className="character-container">
      {characters.map(character => {
        return <div id='character-name' key={character._id}>
                  <Link to={`character/${character.id}`}>{character.name}
                  </Link>
                </div>
      })}
    </div>

  )
}

 

export default AllCharacters;