// import { pokemonIds, bulbasor } from './bases/02-object';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';

import { charmander } from './bases/06-decorator2';
import './style.css'



// import { name, age } from './bases/01.types'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<h1>Hola ${charmander.name}</h1>
<h1>Hola</h1>
`

