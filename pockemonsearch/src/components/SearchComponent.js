import React, { useState } from  "react"

function SearchComponent() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    function searchPokemon() {
        console.log(inputValue)
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