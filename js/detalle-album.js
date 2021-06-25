let objeto = new URLSearchParams(location.search);
let id = objeto.get("id")
console.log(id)
let detalleAlbum = document.querySelector(".detalle-album")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then( respuesta =>{
    return respuesta.json()
})
.then( dataAlbums =>{
    console.log(dataAlbums)
    let albums = dataAlbums

    detalleAlbum.innerHTML +=
    `
    <img class="portada-album" src="${albums.cover_xl}" alt="${albums.name}">
    <span class= "informacion">
        <h3>${albums.title}</h3>
        <h2><a href="detalle-artista.html?id=${albums.artist.id}">${albums.artist.name}</a></h2>
        <h4><a href="detalle-genero.html?id=${albums.genres_id}"></a></h4>
        <h5>${albums.release_date}</h5>
        </span>
   
    `
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`)
.then( respuesta =>{
    return respuesta.json()
})
.then( dataTracks =>{
    console.log(dataTracks)

    let tracks = dataTracks.data

    let playlist = document.querySelector(".playlist")
    for(i = 0; i < tracks.length; i++){
        let cancion = tracks[i]
        playlist.innerHTML +=

        `
        <h4 class="album-cancion"><a href="detalle-cancion.html?id=${cancion.id}">${cancion.title}</a></h4>
        `
    }
})