const libros1= document.querySelector(".libros")
const libros2 =document.getElementById("lib")
const libros3 =document.getElementById("lib1")
const libro4=document.querySelector(".s")

let f = `<table border=5><tr><th><td><p>"Mi nombre es Gregor Anastasio Cou. Soy escritor autonomo - e independiente. 
Entre mis obras se descatan los géneros literarios de ciencia ficción, y terror. 
de las cuales pueden acceder al link que se acompaña en el presente Curriculum Vitae. 
Suelo trabajar de forma individual y equipos y mantengo una proactividad amplia.
Y lo más importante tengo el elemento mas importante a destacar: La imaginación </p>
<a href="Amazon.com/librosdeGregor">-Mi página-</a><br><br></td></th></tr></table><br>` 


libros2.addEventListener("click", ()=> {


setTimeout(()=> { libros1.innerHTML = f; 
libros1.style.animation = "aparecer 1s forwards";
 }, 1000)

})   


lib1.onclick = function() { 

fetch("palabra.txt")
.then(res=> res.json())
.then(respuesta=>  setTimeout(()=> { libro4.innerHTML= Object.values(respuesta) 
libro4.style.animation = "aparecer 2s forwards"

 }), 1500) }
