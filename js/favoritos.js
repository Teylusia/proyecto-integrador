let fotuli = document.querySelector(".fotuli")
let datos = document.querySelector(".datos")



let favoritasSongs = localStorage.getItem("favoritasSongs")
let arrayCanc = JSON.parse (favoritasSongs)

if(arrayCanc.lenght === 0){
    estado.innerHTML += 
    `
    No has seleccionado ninguna canción aún!
    `
}else{
    for(let i=0; i < arrayCanc.lenght; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCanc}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(infoTrack =>{
            console.log(infoTrack)

            fotuli.innerHTML += 
            `
            <img src="${infoTrack.album.cover_xl}" alt=Album${arrayCanc[i]}></img>
            `

            datos.innerHTML +=
            `
            <li><a href="detail-track.html?id=${infoTrack.id}"><h3>${infoTrack.title}</h3></a><li/>
            <li><a href="detail-album.html?id=${infoTrack.album.id}">${infoTrack.album.title}</a></li>

            `
        })
        
    }
}