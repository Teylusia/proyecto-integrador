let buscador = document.querySelector(".buscador")
let barra   = document.querySelector(".barra")
buscador.addEventListener("submit", function(event){
    event.preventDefault();
    if ( barra.value < 3 ) {
        alert("Debes ingresar mas de 3 caracteres!");
    } else {
        this.submit()
    }
})