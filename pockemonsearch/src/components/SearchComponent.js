import React, { useState } from  "react"

function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonData, setPokemonData] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    async function searchPokemon() {
        if(inputValue) {
            console.log(inputValue)
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
                const data = await response.json();
                setPokemonData(data);
              } catch (error) {
                console.error('Error fetching Pokemon data:', error);
              }
        }
        console.log(pokemonData)
    }
    return (
        <div className="App">
            <h1>Search your favourite Pokemon by Name</h1>
            <input type="text" value = {inputValue} onChange={handleInputChange} placeholder="Pokemon Name"/>
            <button className='btn btn-primary' onClick={searchPokemon}>Search</button>
        </div>
    );
}

export default SearchComponent;