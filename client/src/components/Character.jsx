import React from "react";
import "react-router-dom"

const Character = (prop) => {

    let [characters, setCharacters] = useState([])

    useEffect(() => {
  
      fetch(`http://localhost:3000/api/character/${prop.id}`)
        .then((response) => response.json())
        .then((body) => setCharacters(body))
        .catch((err) => {
          throw new Error('Data could not be fetched!');
        });
    }, []);

    return(

        <main>
            <h1 id="name"></h1>
            <section id="generalInfo">
            <p>Height: <span id="height"></span> cm</p>
            <p>Mass: <span id="mass"></span> kg</p>
            <p>Born: <span id="birth_year"></span></p>
            </section>
            <section id="planets">
            <h2>Homeworld</h2>
            <p><span id="homeworld"></span></p>
            </section>
            <section id="films">
            <h2>Films appeared in</h2>
            <ul></ul>
            </section>
            </section>
        </main>
    )

}

