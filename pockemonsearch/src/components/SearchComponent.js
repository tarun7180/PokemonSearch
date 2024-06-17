import React, { useState } from  "react"

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
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ border: "1px solid black" }}>Pokemon name</th>
                            <th scope="col" style={{ border: "1px solid black" }}>Pokemon Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemonData ? (
                            pokemonData.map((data) => (
                                <tr key={data.id}>
                                    <td style={{ border: "1px solid black" }}>{data.empName}</td>
                                    <td style={{ border: "1px solid black" }}>{data.height}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" style={{ border: "1px solid black", textAlign: "center" }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchComponent;