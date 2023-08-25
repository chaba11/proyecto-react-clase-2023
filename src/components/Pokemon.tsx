import { useEffect, useState } from "react";

interface IPokemon {
    name: string;
    sprites: {
        front_default: string;
    };
}

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<IPokemon>({ name: "", sprites: { front_default: "" }});
    useEffect(() => {
        async function obtenerPokemon() {
            const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/1");
            const datos = await respuesta.json();
            setPokemon(datos);
        }
        obtenerPokemon();
    }, []);
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
    );
}

export { Pokemon };