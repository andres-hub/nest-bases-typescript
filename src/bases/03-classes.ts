import axios from "axios";
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
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(data.moves[0].move.name)
        return data.moves
    }

}

export const charmander = new Pokemon(4, 'charmander')

console.log(charmander)
charmander.getMoves()
// console.log(charmander.getMoves())
charmander.scream()
// charmander.speak()