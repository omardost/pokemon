import Pokemon from '../interfaces/Pokemon';
import { Card } from './Card';
import { ApiPokemonServices } from '../services/api-pokemon-services';
import { useState } from 'react';

export const Home = () => {
    const mystyle = {
        "display": "flex",
        "justifyContent": 'center'
    };

    const [pokemon, setPokemon] = useState<Pokemon>();

    const pokemonList: Pokemon[] = [
        { name: 'hola', id: 1 },
        { name: 'hola2', id: 2 }
    ];

    const apiPokemonService = new ApiPokemonServices();

    const findPokemon = async () => {
        const findPokemon = await apiPokemonService.findPokemon('ditto');
        setPokemon(findPokemon);
        //console.log(pokemon.name);
        
    }

    return (
        <div style={mystyle}>
            <button onClick={findPokemon}></button>
            {pokemonList.map((obj, idx) => {
                return (
                    <Card key={idx} name={obj.name} id={idx}/>
                )
            })}
        </div>
    );
}