import Pokemon from '../interfaces/pokemon';
import { Card } from './card';
import { ApiPokemonServices } from '../services/api-pokemon-services';
import { useState, useEffect } from 'react';
import PaginationPokemon from '../interfaces/pagination-pokemon';
import ResultPagination from '../interfaces/result-pagination';
import { Footer } from './footer';
import { BigCard } from './big-card';

export const Home = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({});
    const [dataPokemon, setDataPokemon] = useState<Pokemon>({});
    const [page, setPage] = useState<number>(0);
    const [pokemonList, setPokemonList] = useState<(Pokemon | undefined)[]>([]);
    const [paginationPokemon, setPaginationPokemon] = useState<PaginationPokemon>({});
    const [inputText, setInputText] = useState<string>('');

    const apiPokemonService = new ApiPokemonServices();

    const findPokemon = async (event: any) => {
        try {
            setInputText(event.target.value);
            const findPokemon = await apiPokemonService.findPokemon(event.target.value);
            console.log(findPokemon);
            setPokemon(findPokemon);
        } catch (error) {
        }
    }

    const pagination = async () => {
        const pageCurrent = 4 * page;
        const paginationPokemon = await apiPokemonService.findPokemonList(4, pageCurrent);

        if (paginationPokemon.results) {

            const dataResult = paginationPokemon.results.map(async (pokemon) => {
                if (pokemon.url) {
                    return await apiPokemonService.findPokemonData(pokemon.url);
                }
            });

            const results = await Promise.all(dataResult);
            console.log(results);


            if (results !== undefined) {
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

    useEffect(() => {
        pagination();
    }, [page]);

    const changePokemon = (obj: Pokemon) => {
        console.log('change', obj);

        setDataPokemon(obj);
    };

    return (

        <div className='bodyHome'>
            <div style={{ width: '100%', justifyContent: 'center' }}><strong><h3>Listado de Pokemon</h3></strong></div>
            <div style={{ width: '100%', margin: '10px' }}>
                <input type="text" onChange={findPokemon} placeholder="Nombre de pokemon" style={{ height: "30px" }} />
            </div>
            <div className='bodyCenter'>

                <div style={{ width: '50%', display: 'flex', 'flexWrap': 'wrap' }}>

                    {
                        (inputText) === '' ?
                            pokemonList?.map((obj, idx) => {
                                if (obj)
                                    return (
                                        <div key={idx} onClick={() => changePokemon(obj)}>

                                            <Card key={idx} name={obj.name} id={obj.id}
                                                sprites={obj.sprites} />
                                        </div>
                                    )
                            })
                            :

                            (Object.keys(pokemon).length > 0) ?
                                <div onClick={() => changePokemon(pokemon)}>
                                    <Card key={pokemon.id} name={pokemon.name} id={pokemon.id}
                                        sprites={pokemon.sprites} />
                                </div>
                                : 'Sin resultado'
                    }
                </div>

                <div style={{ width: '50%' }}>

                    {
                        (Object.keys(dataPokemon).length > 0) ?
                            <BigCard key={dataPokemon.id} name={dataPokemon.name} id={dataPokemon.id}
                                sprites={dataPokemon.sprites} types={dataPokemon.types} weight={dataPokemon.weight}
                                abilities={dataPokemon.abilities} />
                            : ''
                    }

                </div>
            </div>

            <Footer setPage={setPage} page={page} />
        </div>

    );
}