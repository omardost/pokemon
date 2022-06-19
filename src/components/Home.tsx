import Pokemon from '../interfaces/pokemon';
import { Card } from './card';
import { ApiPokemonServices } from '../services/api-pokemon-services';
import { useState, useEffect } from 'react';
import PaginationPokemon from '../interfaces/pagination-pokemon';
import ResultPagination from '../interfaces/result-pagination';
import { Footer } from './footer';

export const Home = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({});
    const [paginationPokemon, setPaginationPokemon] = useState<PaginationPokemon>({});

    const pokemonList: Pokemon[] = [
        { name: 'hola', id: 1 },
        { name: 'hola2', id: 2 }
    ];

    const apiPokemonService = new ApiPokemonServices();

    const findPokemon = async () => {
        const findPokemon = await apiPokemonService.findPokemon('ditto');
        setPokemon(findPokemon);
        console.log(findPokemon);

    }

    const pagination = async () => {

        const paginationPokemon = await apiPokemonService.findPokemonList(4, 1);
        setPaginationPokemon(paginationPokemon);

    }

    useEffect(
        () => {
            if (Object.keys(paginationPokemon).length === 0) {
                console.log('inicio');
                pagination();
            }
        }
    );

    return (
        <>
        
        <div className='bodyHome'>
            {(paginationPokemon.results) ?
                paginationPokemon.results.map((obj, idx) => {
                    return (
                        <Card key={idx} name={obj.name} id={idx} />
                    )
                }) : 'Vacío'
            }
            <Footer/>
        </div>
        </>
    );
}