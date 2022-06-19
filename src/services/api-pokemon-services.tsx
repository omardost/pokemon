import Pokemon from "../interfaces/Pokemon";

export class ApiPokemonServices {

    public async findPokemon(name: string): Promise<Pokemon>{
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        return await response.json();
    }

}
