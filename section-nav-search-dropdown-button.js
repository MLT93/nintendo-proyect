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
  if (elementId.style.display === "none") {
    elementId.style.display = "block";
  } else {
    elementId.style.display = "none";
  }
}
