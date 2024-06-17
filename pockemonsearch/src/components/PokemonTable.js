import React from 'react';

const PokemonTable = ({ pokemonData }) => {
    return (
        <table className="table" style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th scope="col" style={{ border: "1px solid black" }}>Employee Name</th>
                    <th scope="col" style={{ border: "1px solid black" }}>Height</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(pokemonData) && pokemonData.length > 0 ? (
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
    );
};

export default PokemonTable;
