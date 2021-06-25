let fotuli = document.querySelector(".fotuli")
let datos = document.querySelector(".datos")

let favoritasSongs = localStorage.getItem("favoritas")
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
            fotuli.innerHTML += 
            `
            
            `

            datos.innerHTML +=
            `

            `
        
        })
    }
}