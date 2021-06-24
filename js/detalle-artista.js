let objeto = new URLSearchParams(location.search);
let id = objeto.get('id');
let artista = objeto.get('artist');
let detalleArtista = document.querySelector('.detalle-artista')
let imagen = document.querySelector('.foto-artista');
let nombre= document.querySelector('.nombre-artista');
let albums = document.querySelector('.albums');

detalleArtista.innerHTML += artista

fetch( `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(response =>{
    return response.json()
})
.then (dataArtista =>{
    console.log(dataArtista);
    let contenedor = document.querySelector('.detalle-artista')
    contenedor.innerHTML +=
    `
    <img class="foto-artista" src="${artista.picture_big}" alt="${artista.name}"></img>
        <h2 class="nombre-artista">${artista.name}</h2>
    `}
})