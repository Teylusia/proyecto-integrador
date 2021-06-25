let fotuli = document.querySelector(".fotuli")
let datos = document.querySelector(".datos")



let favoritasSongs = localStorage.getItem("favoritasSongs") //obtengo canciones que usuario agregó al local storage
let canc = JSON.parse(favoritasSongs) //transformo array en obj literal

if(canc.lenght === 0){  //bloque if, bloque if else: condiciono que si no hay canciones (osea hay 0) en la pantalla el usuario vea la frase
    estado.innerHTML += 
    `
    No has seleccionado ninguna canción aún!
    `
}else{
    for(let i=0; i < canc.lenght; i++){  //si hay más de cero canciones, se producirá lo de abajo
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${canc}`) //Traigo API
        .then(respuesta =>{   
            return respuesta.json()  //promesa guardada en respuesta.json()
        })
        .then(infoTrack =>{      //data de promesa guardada en infoTrack para seleccionar datos que quiero que se muestren de la API
            console.log(infoTrack) 
            let track = infoTrack

            //interpolando funcion track con dato especifico que quiero me brinde la API para mostrarse en la pantalla del navegador
            
            fotuli.innerHTML += 
            `
            <img src="${track.album.cover_small}" alt=Album${canc[i]}></img> 
            `

            datos.innerHTML +=
            `
            <li><a href="detail-track.html?id=${track.id}">
                <h3>${track.title}</h3></a><li/>
            <li><a href="detail-album.html?id=${track.album.id}">${track.album.title}</a></li>

            `
        })
        
    }
}