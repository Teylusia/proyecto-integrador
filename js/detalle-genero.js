let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let genre = objetoId.get('genre') 
let detalleGenero = document.querySelector (".genero2")
let nombre = document.getElementById ("nombre")
let imagen = document.getElementById ("imagen")
detalleGenero.innerText += genre
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)

.then(response =>{
    return response.json()
})
.then(dataGenero=>{
    console.log(dataGenero);

    let artista = dataGenero.data
    let contenedor = document.querySelector(".detallegenero")
    for(i = 0; i<9; i++){
        contenedor.innerHTML += 
     
    `
    
     <nav class="producto"> 
        <nav class="hola">
            <h3>${artista[i].name}</h3>
            <img class= fotuli src="${artista[i].picture_big}" alt="${artista[i].name}">
        </nav>
    `
    }
})