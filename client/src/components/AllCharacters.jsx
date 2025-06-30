import React from 'react'
import { useState } from 'react'


const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async() => {
    const data = await fetch("http://localhost:3000/").then(res => res.json());
    console.log(data)
  }

  fetchCharacters();

  return (
    <>
      
    </>
  )
}

export default AllCharacters