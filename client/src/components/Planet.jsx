import React from 'react'
import { useState, useEffect } from 'react'

const planet = (data) => {
    const [planet, setPlanet] = useState([]);

    const fetchPlanets = async() => {
        try {
        const data = await fetch(`http://localhost:3000/api/planets/${data.id}`).then(res => res.json());
        setPlanet(data);
        } catch (err) {
            console.log('ERROR: ', err);
        }
    }


  return (
    <div>
        <h1 id="planetName">{planet.name}</h1>
        <section id="planetInfo">
            <p>Diameter: <span id="diameter">{planet.diameter}</span> km</p>
            <p>Climate: <span id="climate">{planet.climate}</span></p>
            <p>Population: <span id="population">{planet.population}</span></p>
        </section>
        <section id="characters">
            <h2>Characters</h2>
            <ul id="characterList"></ul>
        </section>
        <section id="films">
            <h2>Films</h2>
            <ul id="filmList"></ul>
        </section>
    </div>
  )
}

export default planet



    
