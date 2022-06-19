import PaginationPokemon from "../interfaces/pagination-pokemon";
import Pokemon from "../interfaces/pokemon";

export class ApiPokemonServices {

    public async findPokemon(name: string): Promise<Pokemon> {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        return await response.json();
    }

    public async findPokemonList(limit = 4, offset = 0): Promise<PaginationPokemon> {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        return await response.json();
    }

    public async findPokemonData(url: string): Promise<Pokemon> {
        const response = await fetch(url);
        return await response.json();
    }

}
