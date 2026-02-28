const entrada = document.getElementById('entrada');
const boton = document.getElementById('botonAgregar');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');
const formulario = document.querySelector('form');

let tareas = 0;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (entrada.value.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${entrada.value} 
        <button class="borrar">borrar</button>
    `;

    li.querySelector('.borrar').addEventListener('click', () => {
        li.remove();
        tareas--;
        contador.innerText = tareas;
    });

    lista.appendChild(li);
    entrada.value = "";
    
    tareas++;
    contador.innerText = tareas;
});