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
    
    foto.innerHTML += 
    `
    <img src="${track.album.cover_xl}">

    `
    cancion.innerHTML += 
    `
    ${track.title}

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


let onOff = document.querySelector('.fav') 
let favoritasSongs = []

let almacenoCancFav  = localStorage.getItem('favoritas')
if (almacenoCancFav != null){
    favoritasSongs = JSON.parse(almacenoCancFav)
}

if(favoritasSongs.includes(id)){
  fav.innerHTML =  'Quitar de mis favoritos'
}

onOff.addEventListener('click',function(e){
   e. preventDefault()

      if(favoritasSongs.includes(id)){
let songPosicion = favoritasSongs. indexOf(id)
favoritasSongs.splice(songPosicion,1)
fav.innerHTML = 'Agregar a mis favoritas'
} else {
     favoritasSongs.push(id)
     agregarSacar.innerHTML = 'Quitar de mis favoritas'
}

let cargoDatos = JSON.stringify(favoritasSongs)
localStorage.setItem('favoritas', cargoDatos)
})