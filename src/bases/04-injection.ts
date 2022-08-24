import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon{
    get imagenUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }
    // public id: number;
    // public name: string;
    constructor(
        public readonly id: number,
        public name: string, 
        private readonly http: HttpAdapter
        // public imagenUrl: string
        ){
        // this.id = id,
        // this.name = name,
        // this.imagenUrl = imagenUrl
    }

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
        this.speak()
    }

    private speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{
        // const moves = 10;
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4 `);
        console.log(data.moves[0].move.name)
        return data.moves
    }

}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'charmander', pokeApiFetch)

console.log(charmander)
charmander.getMoves()
// console.log(charmander.getMoves())
charmander.scream()
// charmander.speak()