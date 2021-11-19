
window.addEventListener('DOMContentLoaded', loadPokemons());

function detallePokemon(event) {

    let { value: poke } = event;
    let element = document.getElementById("pokemon_detail");

    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`, {
    }).then(res => res.json())
        .then(response => {
            let peso = response.weight;
            let altura = response.height;
            let nombre = response.name;
            element.innerHTML = response?.abilities[0]?.ability?.name;
        })
        .catch(error => console.error('Error - no se pudo obtener el pokemon', error));

}

function loadPokemons() {

    let element = document.getElementById("pokemon_list_row");
    let div = document.createElement("div"); 
    div.id = 'pokemon';         
    div.className = "pokemon_list_row"; 
    

    fetch(`https://pokeapi.co/api/v2/pokemon`, {
    }).then(response => response.json())
        .then(res => {
          
            for(let i=0; i < 10; i++) {  
        
                let span = document.createElement("span"); 
                const nombre = document.createTextNode(res.results[i].name); 
                span.textContent = JSON.stringify(nombre);
                div.appendChild(span);
            }
            
            element.appendChild(div);
         
        })
        .catch(error => console.error('Error - no se pudo traer los pokemones', error));
}


