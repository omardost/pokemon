import Pokemon from '../interfaces/pokemon';
import { Card } from './card';
import { ApiPokemonServices } from '../services/api-pokemon-services';
import { useState, useEffect } from 'react';
import PaginationPokemon from '../interfaces/pagination-pokemon';
import ResultPagination from '../interfaces/result-pagination';
import { Footer } from './footer';

export const Home = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({});
    const [pokemonList, setPokemonList] = useState<(Pokemon|undefined)[]>([]);
    const [paginationPokemon, setPaginationPokemon] = useState<PaginationPokemon>({});
    const [inputText, setInputText] = useState<string>('');

    const apiPokemonService = new ApiPokemonServices();

    const findPokemon = async (event: any) => {
        setInputText(event.target.value);
        const findPokemon = await apiPokemonService.findPokemon(event.target.value);
        setPokemon(findPokemon);
        console.log(findPokemon, 'buscar');

    }

    const pagination = async () => {
        const paginationPokemon = await apiPokemonService.findPokemonList(4, 1);

        if (paginationPokemon.results) {

            const dataResult = paginationPokemon.results.map(async (pokemon) => {
                if (pokemon.url) {
                    return await apiPokemonService.findPokemonData(pokemon.url);
                }
            });

            const results = await Promise.all(dataResult);

            if(results !== undefined){
                setPokemonList(results);
            }

        }


    }

    useEffect(
        () => {
            if (pokemonList.length === 0) {
                console.log('inicio', pokemonList.length);
                pagination();
            }
        }
    );

    return (

        <div className='bodyHome'>
            <div style={{ width: '100%' }}>
                <input type="text" onChange={pagination} />
            </div>
            <div className='bodyCenter'>

                <div style={{ width: '50%', display: 'flex', 'flexWrap': 'wrap' }}>

                    {
                        (inputText) === '' ?

                            (pokemonList) ?
                                pokemonList.map((obj, idx) => {
                                    if(obj)
                                    return (
                                        <Card key={idx} name={obj.name} id={idx} 
                                        sprites={obj.sprites} />
                                    )
                                }) : 'Vacío'

                            :
                            <Card name={pokemon.name} />
                    }
                </div>

                <div style={{ width: '50%' }}>
                    big card
                </div>
            </div>

            <Footer />
        </div>

    );
}