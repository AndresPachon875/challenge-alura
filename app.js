// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let Amigos = document.getElementById('amigo').value.trim();

    if (Amigos) {
        listaAmigos.push(Amigos);
        mostrarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Ingrese un nombre valido");
    }
}

function mostrarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaHTML.appendChild(li);
    });
}

function sortearAmigo(){
    let seleccion = Math.floor(Math.random() * listaAmigos.length);

    let listaResultado = document.getElementById('resultado');

    let li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${listaAmigos[seleccion]}`;
    
    limpiarLista();
    listaResultado.appendChild(li);
}

function limpiarLista() {
    let limpiarListaAmigos = document.getElementById('listaAmigos');
    limpiarListaAmigos.innerHTML = "";
}

