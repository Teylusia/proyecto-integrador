let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

//traigo variables del HTML mediante document.querySelector
let foto = document.querySelector(".foto")
let cancion = document.querySelector(".cancion")
let artista = document.querySelector(".artista")
let disco = document.querySelector(".album")
let player = document.querySelector(".player")
let agregarFav = document.getElementById(".fav")
let favoritas = document.getElementById(".fav2")

//mediante fetch traigo API para seleccionar información especifica de la misma
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

.then(respuesta => {
    return respuesta.json() //me da una promesa, y su rta se guarda en respuesta.json()
})
.then(infoTrack => {  //esta data luego prosigue a la siguiente promesa o then. Declaro variable para toda esta data
    console.log(infoTrack)
    let track = infoTrack
    
    //interpolando funcion track (en query string) con dato especifico que quiero me brinde la API para mostrarse en la pantalla del navegador
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

//localStorage --> permite almacenar en el navegador sin tiempo de expiración

let onOff = document.getElementById('.fav') //capturo en variable el elemento fav del HTML
let favoritasSongs = [] //creo variable que contenga un array vacío que contendrá los datos que almacenaré en el localStorage

let almacenoCancFav  = localStorage.getItem('.fav') //utilizp método getItem de localStorage para traer los valores ya guardados del localStorage. Posee un parámetro con el nombre de la propiedad de la que quiero obtener el valor.
if (almacenoCancFav != null){  //con estos datos obtenidos creo condicion para verificar que los mismos no sean nulos (!= desigualdad abstracta). Si no lo es, pasará a transformarse de dato tipo string o JSON a objeto literal mediante JSON.parse
    favoritasSongs = JSON.parse(almacenoCancFav)
}
//utilizo addEventListener para poner en escucha el código. Cuando el usuario haga click (porque el evento es click),  se ejecuta preventDefault, para verificar que se cumpla la condicion realizada antes de que se mande la informacion)
onOff.addEventListener('click',function(event){
   event.preventDefault() 

//realizo condicion con bloques if y else para incluir el id dentro de una variable 
if(favoritasSongs.includes(id)){ 
    let songPosicion = favoritasSongs.indexOf(id) //indexOf para buscar elemento dentro del array
    favoritasSongs.splice(songPosicion,1) //splice para agregar el mismo en la posicion 1 en este caso dentro del mismo
    onOff.innerHTML =          //si esto se cumple, el usuario podra ver en su pantalla:
    ' Agregar a mis favoritas '

} else {                           //si no es asi, .push agregará al final del array el id
     favoritasSongs.push(id)
     onOff.innerHTML =      //usuario vera la siguiente frase
     ' Quitar de mis favoritas '
}

// utilizo el otro metodo de localStorage, setItem, con sus dos parámetros: el nombre de la propiedad y el valor que le quiero asignar. En este caso fue utilizado para para darle a lo que se transformó desde objeto a formato JSON string (mediante JSON.stringify) un nuevo valor de la variable declarada, y lograr almacenar al fin los string en el localStorage
let cargoDatos = JSON.stringify(favoritasSongs)
localStorage.setItem('fav', cargoDatos)
})

