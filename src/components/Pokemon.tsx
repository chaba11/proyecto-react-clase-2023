import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IPokemon {
    name: string;
    sprites: {
        front_default: string;
    };
}

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<IPokemon>({ name: "", sprites: { front_default: "" }});
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        async function obtenerPokemon() {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const datos = await respuesta.json();
            setPokemon(datos);
        }
        obtenerPokemon();
    }, [id]);
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
    );
}

export { Pokemon };