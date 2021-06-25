fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")

.then(response =>{
    return response.json()
})

.then (dataAlbum =>{
    console.log(dataAlbum)
    //let canciones = dataAlbum.tracks.data;
    let albums = dataAlbum.data;
    //let artists = dataAlbum.artists.data;

    /*let cancion = document.querySelector(".cancion")*/
    let album = document.querySelector(".album")
    /*let artista = document.querySelector(".artista")*/

    for(i = 1; i<10; i++){
        album.innerHTML +=
    `
        <nav class= "producto">
            <nav class="hola">
                <img class="fotuli" src= ${albums[i].cover_xl} alt = ${albums[i].title}>
                <h3><a class="titulo-album "href="detalle-album.html?id=${albums[i].id}" target="_blank">${albums[i].title}</a></h3>
                <a href="detalle-album.html?id=${albums[i].id}" target="_blank" class="ver-mas">Ver Mas...</a>
                </a>
            </nav>
        </nav>
    
    `
    }

    
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")

.then(response =>{
    return response.json()
})

.then (data =>{
    /*console.log(data)*/
    /*let canciones = data.tracks.data;
    let albums = data.albums.data;*/
    let artists = data.data;

    let cancion = document.querySelector(".cancion")
    let album = document.querySelector(".album")
    let artista = document.querySelector(".artista")

    for(i = 0; i<9; i++){
        artista.innerHTML +=
    `
        <nav class= "producto">
            <nav class="hola">
                <img class="fotuli" src= "${artists[i].picture_xl}" alt = "${artists[i].name}">
                <h3><a class="titulo-album "href="detalle-artista.html?id=${artists[i].id}" target="_blank">${artists[i].name}</a></h3>
                <a href="detalle-artista.html?id=${artists[i].id}" target="_blank" class="ver-mas">Ver Mas...</a>
                </a>
            </nav>
        </nav>
    
    `
    }

    
})
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")

.then(response =>{
    return response.json()
})

.then (dataSong =>{
    /*console.log(dataSong)*/
    let canciones = dataSong.data;
    //let albums = dataSong.data;
    //let artists = dataSong.artists.data;

    let cancion = document.querySelector(".cancion")
    let album = document.querySelector(".album")
    let artista = document.querySelector(".artista")

    for(i = 0; i<9; i++){
        cancion.innerHTML +=
    `
        <nav class= "producto">
            <nav class="hola">
                <img class="fotuli" src= ${canciones[i].album.cover_xl} alt = ${canciones[i].title}>
                <h3><a class="titulo-album "href="detalle-album.html" target="_blank">${canciones[i].title}</a></h3>
                <h4><a class="titulo-album "href="detalle-album.html" target="_blank">${canciones[i].artist.name}</a>
                <br>
                <a href="detalle-album.html" target="_blank" class="ver-mas">Ver Mas...</a>
            </nav>
        </nav>
    
    `
    }

    
})










