import Abilities from "./abilities";
import Sprites from "./sprites";
import Types from "./types";

interface Pokemon {
   name?: string,
   id?: number,
   sprites?: Sprites,
   types?:Types[],
   weight?:number,
   abilities?: Abilities[]

};

export default Pokemon;
