document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    var nombreInput = document.getElementById("nombre");
    var fechaInput = document.getElementById("fecha");
    var fecha2Input = document.getElementById("fecha2");
    var eleccionList = document.getElementById("eleccion-list");
    var tipoEleccionList = document.getElementById("tipoEleccion-list");
    var cancelButton = document.getElementById("button");
    var submitButton = document.getElementById("button2");

    // Manejador de evento para el botón Cancelar
    cancelButton.addEventListener("click", function() {
      // Restablecer los valores del formulario
      nombreInput.value = "";
      fechaInput.value = "";
      fecha2Input.value = "";
      eleccionList.selectedIndex = 0;
      tipoEleccionList.selectedIndex = 0;
    });

    // Manejador de evento para el formulario
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();

      // Obtener los valores del formulario
      var nombre = nombreInput.value;
      var fechaInicial = fechaInput.value;
      var fechaFinal = fecha2Input.value;
      var tipoEleccion = eleccionList.value;
      var estadoEleccion = tipoEleccionList.value;

      // Realizar validación de campos (opcional)
      if (nombre == "" || fechaInicial == "" || fechaFinal == "" || tipoEleccion == "" || estadoEleccion == "") {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Crear un objeto con los datos del formulario
      var eleccion = {
        nombre: nombre,
        fechaInicial: fechaInicial,
        fechaFinal: fechaFinal,
        tipoEleccion: tipoEleccion,
        estadoEleccion: estadoEleccion
      };

      // Enviar los datos a través de AJAX o realizar alguna otra acción con el objeto eleccion

      // Restablecer los valores del formulario
      nombreInput.value = "";
      fechaInput.value = "";
      fecha2Input.value = "";
      eleccionList.selectedIndex = 0;
      tipoEleccionList.selectedIndex = 0;

      // Mostrar mensaje de éxito
      alert("La elección se ha creado correctamente.");
    });
  });
