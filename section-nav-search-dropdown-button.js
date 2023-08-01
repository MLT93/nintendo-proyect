/* función que me permite navegar por el dropdown del NavBar */
function nav(value) {
  if (value !== "") {
    location.href = value;
  }
  return location.href;
}

/* función para mostrar u ocultar información tramite un botón */
function myFunction() {
  let elementId = document.getElementById("src-dropdown_svg-path");
  if (elementId.style.display === "block") {
    elementId.style.display = "none";
  } else {
    elementId.style.display = "block";
  }
}
/* myFunction(); */

/* función para mostrar u ocultar zonas a través de botones, agregando o quitando clases (.toggle) según la necesidad */
/* window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM completamente cargado y procesado");

  const menuBtnAbrir = document.getElementById("menu-abrir");
  const menuBtnCerrar = document.getElementById("menu-cerrar");
  const hTynpQ = document.getElementById("menu-search-dropdown");
  const headerRight = document.querySelector("div.header-right"); */

/*menuBtnAbrir.addEventListener("click", (event) => {
    if (menuBtnAbrir.classList.toggle("open")) {
      hTynpQ.classList.toggle("visible"); */
/* hTynpQ.style.display = "block"; */
/*  headerRight.classList.toggle("no-visible"); */
/* headerRight.style.display = "none"; */
/*   menuBtnCerrar.classList.toggle("visible"); */
/* menuBtnCerrar.style.display = "block"; */
/*     }
  }); */

/*  menuBtnCerrar.addEventListener("click", (event) => {
    if (menuBtnCerrar.classList.toggle("close")) {
      hTynpQ.classList.toggle("no-visible"); */
/* hTynpQ.style.display = "none"; */
/*  headerRight.classList.toggle("visible"); */
/* headerRight.style.display = "block"; */
/*   }
  });
}); */

/* Otra opción: */

/* Esperamos a que se cargue el DOM antes de asignar eventos */
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM completamente cargado y procesado");

  /* Obtenemos referencias de los elementos del DOM */
  const menuBtnAbrir = document.getElementById("menu-abrir");
  const menuBtnCerrar = document.getElementById("menu-cerrar");
  const hTynpQ = document.getElementById("menu-search-dropdown");
  const headerRight = document.querySelector("div.header-right");
  
  /* Asignamos eventos a los botones */
  menuBtnAbrir.addEventListener("click", abrirMenu);
  menuBtnCerrar.addEventListener("click", cerrarMenu);

  /* Función para abrir el menú. Añadir al html onclick="abrirMenu()" para que el botón utilice la función */
  function abrirMenu() {
      menuBtnAbrir.classList.add("open");
      menuBtnCerrar.classList.add("visible");
      hTynpQ.classList.add("visible");
      headerRight.classList.add("no-visible");
  }

  /* Función para cerrar el menú. Añadir al html onclick="cerrarMenu()" para que el botón utilice la función */
  function cerrarMenu() {
    menuBtnAbrir.classList.remove("open");
    menuBtnCerrar.classList.remove("visible");
    hTynpQ.classList.remove("visible");
    headerRight.classList.remove("no-visible");
  }

  cerrarMenu();
  abrirMenu();
});
