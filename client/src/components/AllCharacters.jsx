import React from "react";

const Character = () => {
    return()

    async function getCharacters() {
      
    
      try {
        const fetchedCharacters = await fetch(url)
          .then(res => res.json())
        characters.push(...fetchedCharacters);
      }
      catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
      console.log("All the characters are ", characters)
      renderCharacters(characters);
    }
        
      
      
      
      



}