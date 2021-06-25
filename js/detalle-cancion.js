let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

let foto = document.querySelector(".foto")
let cancion = document.querySelector(".cancion")
let artista = document.querySelector(".artista")
let disco = document.querySelector(".disco")
let player = document.querySelector(".player")
let agregarFav = document.querySelector(".fav")
let favoritas = document.querySelector(".fav2")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

.then(respuesta => {
    return respuesta.json()
})
.then(infoTrack => {
    console.log(infoTrack)
    let track = infoTrack
    
    foto.innerHTML += 
    `
    <img src="${track.album.cover_xl}">

    `
    cancion.innerHTML += 
    `
    ${track.title}
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${track.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>


    `
    artista.innerHTML += 
    `
    <a href="detail-artist.html?id= ${track.artist.id}"> ${track.artist.name}</a>

    `
    disco.innerHTML += 
    `
    <a href="detail-album.html?id= ${track.album.id}">${track.album.title} </a>
    
    `
})



let onOff = document.getElementById('.fav') 
let favoritasSongs = []

let almacenoCancFav  = localStorage.getItem('.fav')
if (almacenoCancFav != null){
    favoritasSongs = JSON.parse(almacenoCancFav)
}

if(favoritasSongs.includes(id)){
  fav.innerHTML =  'Quitar de mis favoritos'
}

onOff.addEventListener('click',function(){
   function preventDefault()

if(favoritasSongs.includes(id)){
    let songPosicion = favoritasSongs.indexOf(id)
    favoritasSongs.splice(songPosicion,1)
    fav.innerHTML = 'Agregar a mis favoritas'
} else {
     favoritasSongs.push(id)
     agregarSacar.innerHTML = 'Quitar de mis favoritas'
}

let cargoDatos = JSON.stringify(favoritasSongs)
localStorage.setItem('favoritas', cargoDatos)
})