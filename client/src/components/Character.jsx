import React from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Character = () => {

    let [character, setCharacter] = useState([])
    let { id } = useParams()
    useEffect(() => {
  
      fetch(`http://localhost:3000/api/character/${id}`)
        .then((response) => response.json())
        .then((body) => setCharacter(body))
        .catch((err) => {
          throw new Error('Data could not be fetched!');
        });
    }, []);

    console.log(character);

    return(

        <main>
            <h1 id="name"></h1>
            <section id="generalInfo">
            <p>Height: <span id="height">{character.height}</span> cm</p>
            <p>Mass: <span id="mass">{character.mass}</span> kg</p>
            <p>Born: <span id="birth_year">{character.birth_year}</span></p>
            </section>
            <section id="planets">
            <h2>Homeworld</h2>
            <p><span id="homeworld">{character.homeworld}</span></p>
            </section>
            <section id="films">
            <h2>Films appeared in</h2>
            <ul></ul>
            </section>
        </main>
    )

}

export default Character

