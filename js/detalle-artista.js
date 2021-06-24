let objeto = new URLSearchParams (location.search);
let id = objeto.get("id");
console.log(id)
let nombre = objeto.get("name");
let  imagen = objeto.get("picture");
let  detalleArtista = document.querySelector(".detalle-artista");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id)
.then( respuesta=>{
   return respuesta.json()
})
.then(dataArtistas =>{
    console.log(dataArtistas)
    let artists = dataArtistas
    detalleArtista.innerHTML += 
    `
    <img class="imagen" src="${artists.picture_xl}" alt="${artists.name}">
        <h3 class="nombre">${artists.name}</h3>
    `
})