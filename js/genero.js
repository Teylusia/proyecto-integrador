fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then(response =>{
    return response.json()
})

.then (dataGenero =>{
    console.log(dataGenero);

    let generos = dataGenero.data;
    let genero = document.querySelector(".genero")

    for(i = 1; i<7; i++){
        genero.innerHTML +=
    `
        <nav class= "producto">
            <nav class="hola">
                <img class="fotuli" src= ${generos[i].picture_xl} alt = ${generos[i].name}>
                <h3><a class="titulo-album "href="detalle-genero.html?id=${generos[i].id}&genre=${generos[i].name}" target="_blank">${generos[i].name}</a></h3>
                <a href="detalle-genero.html?id=${generos[i].id}&genre=${generos[i].name}" target="_blank" class="ver-mas">Ver Mas...</a>
                </a>
            </nav>
        </nav>
    
    `
    }
})