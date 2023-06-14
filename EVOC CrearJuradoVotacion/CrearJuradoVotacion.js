const formulario = document.getElementById('formulario');
const juradosContainer = document.getElementById('jurados');
const jurados = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const MesaVotacion = document.getElementById('MesaVotacion').value;

  if (id && nombre && apellido && telefono && email) {
    console.log('Jurado creado:');
    console.log('ID:', id);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Correo Electrónico:', email);
    console.log('Mesa Votacion', MesaVotacion);

    // Crear objeto jurado y agregarlo a la lista
    const jurado = {
      id,
      nombre,
      apellido,
      telefono,
      email,
      MesaVotacion
    };
    jurados.push(jurado);

    // Mostrar los jurados en pantalla
    mostrarJurados();

    // Mostrar ventana emergente
    alert('El jurado ha sido creado correctamente.');

    // Limpiar el formulario
    formulario.reset();
  } else {
    alert('Por favor, complete todos los campos del formulario.');
  }
});

function mostrarJurados() {
  // Limpiar la lista de jurados
  juradosContainer.innerHTML = '';

  // Recorrer la lista de jurados y mostrar cada uno en pantalla
  for (let i = 0; i < jurados.length; i++) {
    const jurado = jurados[i];
    const li = document.createElement('li');
    li.textContent = `ID: ${jurado.id}, Nombre: ${jurado.nombre}, Apellido: ${jurado.apellido}, Teléfono: ${jurado.telefono}, Correo Electrónico: ${jurado.email}, Mesa Votacion: ${jurado.MesaVotacion}`;
    juradosContainer.appendChild(li);
  }
}