let objeto = new URLSearchParams (location.search);
let id = objeto.get("id");
console.log(id)
let  detalleArtista = document.querySelector(".detalle-artista");
let albumsArtista = document.querySelector(".albums");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id)
.then( respuesta=>{
   return respuesta.json()
})

.then(dataArtistas =>{
    console.log(dataArtistas)
    let artists = dataArtistas
    detalleArtista.innerHTML += 
    `
    <img class="imagen-artista" src="${artists.picture_xl}" alt="${artists.name}">
        <h3 class="nombre">${artists.name}</h3>
    `
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
.then( respuesta =>{
    return respuesta.json()
})

.then(dataArtistasAlbums =>{
    console.log(dataArtistasAlbums)
    
    let albums = dataArtistasAlbums.data

    for( i = 0; i < 3; i++){

    albumsArtista.innerHTML +=
    `

        <img class="foto-album" src= ${albums[i].cover_xl} alt = ${albums[i].title}>
        <h3><a class="album-nombre" href="detalle-album.html" target="_blank">${albums[i].title}</a></h3>
    `
    }
})