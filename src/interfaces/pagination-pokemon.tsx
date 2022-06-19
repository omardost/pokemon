import ResultPagination from "./result-pagination";

interface PaginationPokemon {
    next?: string,
    previous?: string,
    results?: ResultPagination[]
 };
 
 export default PaginationPokemon;