import React from "react";

const Character = () => {
    return()

    async function getCharacter(id) {
        let character;
        try {
          character = await fetchCharacter(id)
          character.homeworld = await fetchHomeworld(character)
          character.films = await fetchFilms(character)
        }
        catch (ex) {
          console.error(`Error reading character ${id} data.`, ex.message);
        }
        renderCharacter(character);
      
      }

      async function fetchCharacter(id) {
        // let characterUrl = `${baseUrl}/characters/${id}`;
        // return await fetch(characterUrl)
        //   .then(res => res.json())
      
        
      }
      
      async function fetchHomeworld(character) {
        const url = `${baseUrl}/planets/${character?.homeworld}`;
        const planet = await fetch(url)
          .then(res => res.json())
        return planet;
      }
      
      async function fetchFilms(character) {
        const url = `${baseUrl}/characters/${character?.id}/films`;
        const films = await fetch(url)
          .then(res => res.json())
        return films;
      }



}