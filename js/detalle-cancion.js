let objetoId = new URLSearchParams(location.search)
//let portada = document.querySelector(".")
let storage = window.localStorage
let preview = objetoId.get('preview')
let tituloCancion = document.querySelector(".reproductor")

fetch ("https://cors-anywhere.herokuapp.com/https://widget.deezer.com/widget/dark/track/3135556")
.then (response => {
   return response.json()
})
.then (track =>{
    console.log(track.title)

let cancion = track.title //guardo url de preview dentro de variable cancion
let artista = track.contributors[0].name //este es un array
let album = track.album.title //este es un objeto
let  = document.querySelector(".contenido")
   tituloCancion.innerHTML +=

    //abro comillas literal string para que pueda escribir lo que literalmente verá el usuario en la pagina

 ` <section> 
      <div>${cancion}</div>
      <div>${artista}</div>
      <div>${album}</div> 
      
   </section>

  //  `
})

let aPlaylist = window.localStorage
localStorage.set.

let agregarFavoritos = document.getElementById("agregarFavoritos")
agregarFavoritos.addEventListener("click", function(){  //guardo en una variable el valor del boton
    if (agregarFavoritos === "Agregar a mis favoritos"){
        alert("Se agregó a tus favoritos")
        document.getElementById ("agregarFavoritos").value = "Quitar de favoritos"
    }else {
        alert("Se quitó de tus favoritos")
        document.getElementById ("agregarFavoritos").value = "Agregar a mis favoritos"
    }
})


//buscar en la clase como cambiar de contenido de l funcion

//se investigó el error y no puedo acceder al servidor donde esta el JSON