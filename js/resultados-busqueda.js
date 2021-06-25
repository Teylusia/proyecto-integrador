let objeto = new URLSearchParams (location.search);
let search = objeto.get("search");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search}`)
.then( respuesta =>{
    return respuesta.json()
})
.then( busqueda =>{
    console.log(busqueda)
    
    let resultados = busqueda.data
    let resultadosB = document.querySelector(".resultados")

    resultadosB.innerHTML +=

   ` <h2>Resultados de: ${search}</h2>`

    for( i= 0; i < resultados.length; i++){

    resultadosB.innerHTML +=
    
    `
        <h4><a href="detalle-cancion.html?id=${resultados[i].id}">${resultados[i].title}</a></h4>
    `
        }
})
