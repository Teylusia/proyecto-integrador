window.addEventListener("load", function(){
    let cancionesStorage = localStorage.getItem("playlist")
    let playlist = JSON.parse(cancionesStorage) //pasarlo a JSON para manipularla
    let listaCanciones = document.querySelector(".songname")

    if (playlist){
        playlist = []
        listaCanciones.innerHTML += 
        `
        <h1 class = "vacio"> No has seleccionado ninguna canción aún</h1>

        `
    }else{
        playlist.forEach(cancion =>{
            listaCanciones.innerHTML +=
            `
            <div class = "details">
            <div class = "numbername"> 
            <a href = "detalle-cancion.html?id=${cancion.id}"<

            <p class="num">${ca}



            `
        }
            
            
            )
    }

})
