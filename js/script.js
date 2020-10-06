let boton=document.getElementById("boton");/* Este guarda la etiqueta como tal*/
 boton.addEventListener("click", function(){
let cancion=document.getElementById("cancion").value;/* Este guarda el texto dentro de la etiqueta*/
var lista=document.getElementById("lista");
/*Guardamos la eqyiqueta, indenteficando donde se deben insertar las nuevas etiquetas*/
var etiquetaNueva=document.createElement("li")/*Creamos una nueva etiqueta nueva*/
etiquetaNueva.textContent=cancion;/*Dentro de la etiqueta nueva le decimos que le vamos agregar un texto en este caso la cancion que se inserto en el input*/
lista.appendChild(etiquetaNueva);/*Como agregar un hijo o una subunidad, etiqueta nueva*/
 })
lista.addEventListener("dblclick",function(e){
console.log(e.target);/*target identifica la etiqueta*/
let cancionEliminar=e.target;/*Aqui esta identificada la etiqueta a la que se le dio click*/
lista.removeChild(cancionEliminar);/*Se elimina una subnidad a la unidad mayor, una etiqueta*/
})
 

 