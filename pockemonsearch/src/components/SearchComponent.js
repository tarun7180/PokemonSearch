import React, { useState } from  "react"
import PokemonTable from './PokemonTable';

function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonData, setPokemonData] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    async function searchPokemon() {
        if(inputValue) {
            console.log(inputValue)
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
                const data = await response.json();
                const formattedData = [{
                    id: data.id,
                    empName: data.name,
                    height: data.height
                }];
                setPokemonData(formattedData);
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
            <br/> <br/>
            {pokemonData.length > 0 && <PokemonTable pokemonData={pokemonData} />}
        </div>
    );
}

export default SearchComponent;