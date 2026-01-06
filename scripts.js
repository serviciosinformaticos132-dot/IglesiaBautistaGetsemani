function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));

    document.getElementById(id).classList.add('activa');

    // Cerrar submenu de Recursos al seleccionar opción
    const submenu = document.getElementById("submenuRecursos");
    if (submenu) submenu.style.display = "none";
}

function toggleRecursos() {
    const submenu = document.getElementById("submenuRecursos");
    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
}

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
