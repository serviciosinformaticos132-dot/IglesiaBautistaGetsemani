function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));

    document.getElementById(id).classList.add('activa');
}

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
