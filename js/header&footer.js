let buscador = document.querySelector(".buscador")
let barra   = document.querySelector(".barra")
buscador.addEventListener("submit", function(event){
    event.preventDefault();
    if ( barra.value == 0) {
        alert("No puedes dejar la casilla en blanco!");
    } else if ( barra.value.length <= 3) {
        alert("Debes escribir mas de 3 letras")
    }else{
        buscador.submit()
    }
})
