// script.js

document.getElementById('update-cases').addEventListener('click', function () {
    // Simulamos la actualización de casos con un número aleatorio
    const nuevosCasos = Math.floor(Math.random() * 1000 + 1);
    document.getElementById('case-count').textContent = nuevosCasos.toLocaleString();
});
