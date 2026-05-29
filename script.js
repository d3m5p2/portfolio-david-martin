// Menú móvil sencillo
const botonMenu = document.getElementById("botonMenu");
const enlacesMenu = document.getElementById("enlacesMenu");

botonMenu.addEventListener("click", () => {
  enlacesMenu.classList.toggle("abierto");
});

// Cerrar el menú al pulsar un enlace
const enlaces = document.querySelectorAll(".enlaces-menu a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    enlacesMenu.classList.remove("abierto");
  });
});
