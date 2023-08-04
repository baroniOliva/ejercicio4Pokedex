let lista = document.getElementById("lista")


const llamarPokemon = (id,num)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function(respuesta){
    respuesta.json().then(function(pokemon){
       
        crearPokemon(pokemon,num);
        
     })
    }
    )
}


const llamarPokemones = (id)=>{

    let primerPoke = Math.round(Math.random()*150)      
    let segundoPoke = Math.round(Math.random()*150)
    let tercerPoke = Math.round(Math.random()*150)      
    let cuartoPoke = Math.round(Math.random()*150)
    let quintoPoke = Math.round(Math.random()*150)      
    let sextoPoke = Math.round(Math.random()*150) 

    llamarPokemon(primerPoke, 1);
    llamarPokemon(segundoPoke, 2);
    llamarPokemon(tercerPoke, 3);
    llamarPokemon(cuartoPoke, 4);
    llamarPokemon(quintoPoke, 5);
    llamarPokemon(sextoPoke, 6);
    

}

function crearPokemon(pokemon,num){
let item = lista.querySelector(`#lista_poke${num}`);

let imagen = item.getElementsByTagName("img")[0];
imagen.setAttribute("src",pokemon.sprites.front_default);

let nombre = item.getElementsByTagName("p")[0];
nombre.textContent = pokemon.name;


let peso = item.getElementsByTagName("p")[1];
peso.textContent = pokemon.weight;

let numero = item.getElementsByTagName("p")[2];
numero.textContent = pokemon.id;
}



llamarPokemones()


