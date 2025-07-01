import React from 'react'
import { useState, useEffect } from 'react'
import Character from './character'


const AllCharacters = () => {
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    
        fetch('http://localhost:3000/api/character')
          .then((response) => response.json())
          .then((body) => setCharacters(body))
          // .catch((err) => {
          // //   throw new Error('Data could not be fetched!');
          // });
  }, []);      

  console.log(characters);

  return (
    <>
      {characters.map((character) => (
        <Character key={character._id} data={character} />
      ))}
    </>
  );
};


export default AllCharacters;