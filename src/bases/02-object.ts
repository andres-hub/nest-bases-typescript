
export const pokemonIds= [1,20,30,31,66]

pokemonIds.push(+'1')

console.log(pokemonIds)

interface Pokemon{
    id: number,
    name: string
}

export const bulbasor: Pokemon = {
    id: 1,
    name: 'Bulbasor'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}

export const pokemons:Pokemon[] = []

pokemons.push(charmander, bulbasor)

console.log(bulbasor, charmander, pokemons)

