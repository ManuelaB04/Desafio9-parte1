//1. CREAR INDEX Y JS --> OK

//2. CREAR UN CONSTRUCTOR QUE RECIBA (TITULO, AUTOR) --> OK
function libro (titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
}
//CREAR UN LIBRO --> OK
let unLibro = new libro ('Ángeles y Demonios', 'Dan Brown')
console.log(unLibro);

//3.AGREGAR EN LIBRO EL MÉTODO mostrarDatosEnConsola() --> OK
function mostrarDatosEnConsola (){
   let titulo = unLibro.titulo;
   let autor = unLibro.autor.toUpperCase();
   console.log(titulo + ", de" + " " + autor)
}
mostrarDatosEnConsola()

//4.AGREGAR EN LIBRO EL MÉTODO mostrarDatosEnAlert() --> OK
function mostrarDatosEnAlert(){
    let titulo = unLibro.titulo;
    let autor = unLibro.autor.toUpperCase(); 
    alert(titulo + ", de" + " " + autor);
}
mostrarDatosEnAlert()

//5. AGREGAR EN LIBRO EL MÉTODO getTitulo() --> OK
let nuevoLibro = new libro ('Fuego y Sangre', 'George R. R. Martin')

function getTitulo(){
    let tituloDelNuevoLibro = nuevoLibro.titulo;
    alert(tituloDelNuevoLibro);
}
getTitulo()

//6. AGREGAR EN LIBRO EL MÉTODO mostrarDatos() --> OK
function mostrarDatos(){
    let tituloDelNuevoLibro = nuevoLibro.titulo;
    let autorDelNuevoLibro = nuevoLibro.autor.toUpperCase(); 
    console.log(tituloDelNuevoLibro + ", de" + " " + autorDelNuevoLibro);
    alert(tituloDelNuevoLibro + ", de" + " " + autorDelNuevoLibro);
}
mostrarDatos()
