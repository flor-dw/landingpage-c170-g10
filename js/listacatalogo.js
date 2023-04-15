//API => Apication Programing Interface => Nos sirve para traer datos externos
//Ya lo usuamos? google fonts(usamos la api), bootstrap Icons
//Para que lo usariamos desde JS, para traer datos externos
//JSON => Javascript Object Notation
// const URL_API = "https://swapi.dev/api/people/"
const contenedorHTML = document.getElementById("contenedorcatalogo")
/* fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        for(const personaje of data.results){
            contenedorHTML.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Fecha de nacimiento ${personaje.birth_year}</p>
                <p>Peso: ${personaje.mass}kg</p>
                <hr>
            </div>
            `
        }
        
    
    }) */

fetch("db/catalogo.json")

        //------------------------------------------
    .then(response => response.json())
    .then(data => {
        for(product of data){
            contenedorHTML.innerHTML += `
            <div class="card">
            <a href="">
                <img src=${product.url}/>
                <h2>${product.destination}</h2>
                <p>Precio: ${product.price}$ARS</p>
            </a>    
                </div>`            
            }           
        })
                //------------------------------------------
        .catch(error => console.log(error))




