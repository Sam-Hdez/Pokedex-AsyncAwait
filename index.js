//Usamos https://pokeapi.co/

//Con el Endpoint https://pokeapi.co/api/v2/pokemon/ hacemos la consulta + el id desde un metodo de nuestra clase

//Debemos tambien utilizar una función normal que recibirá como parametro 
//una instacia de nuestra clase pokemon service, en estaa funcion haremos la logica para rederizar  
//nuestro pokemon EN EL DOM

//y tenemos que lograra que nos quede como la imágen de la captura.

//En éste caso vamos a hacer el ejercicio utilizando UNA CLASE, async await

//Utilizamos manejo de DOM para mostrar los datos obtenidos, ayudita abajo!

let pokeDiv = document.getElementById('pokeDiv');

class PokemonService {
    constructor(url, id) {
        this.url = url + id;
        //console.log(this.url)
    }

    async getPokemon() {
        let pokemonUrl = await fetch(this.url);
        let pokeRespuesta = await pokemonUrl.json();
        return pokeRespuesta;
    }
}

async function getPokeService(PokemonService) {
    const pokemonResultado = await PokemonService.getPokemon();
    console.log(pokemonResultado)

    //Se crea un div para que tome el style #pokeDiv div
    let divPokemon = document.createElement('div');
    divPokemon.setAttribute('id', 'divPokemon')
    pokeDiv.appendChild(divPokemon);

    //Se obtienen los datos de nombre y id para mostrar
    let namePokemon = document.createElement('h1');
    namePokemon.textContent = `${pokemonResultado.name} #${pokemonResultado.id}`;

    //Se obtiene la imagen del pokemon, los sprites son usados en videojuegos para crear los gráficos.
    let photoPokemon = document.createElement('img');
    photoPokemon.setAttribute('src', pokemonResultado.sprites.front_default);
    photoPokemon.style.width = '200px';

    //Se añaden los elementos al div divPokemon
    divPokemon.appendChild(namePokemon)
    divPokemon.appendChild(photoPokemon)
}

//Valores entre 1 y 807
const valorRandomId = Math.floor(Math.random() * 806 + 1);

const newPokemon = new PokemonService('https://pokeapi.co/api/v2/pokemon/', valorRandomId);

getPokeService(newPokemon);