const btnAgregar = document.getElementById('btn-agregar');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const partidoInput = document.getElementById('partido');
const imagenInput = document.getElementById('imagen');
const candidatosContainer = document.getElementById('candidatos');

const candidatos = [];

btnAgregar.addEventListener('click', () => {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const partido = partidoInput.value;
  const imagen = imagenInput.files[0];

  if (!nombre || !apellido || !partido || !imagen) {
    alert('Por favor, complete todos los campos');
    return;
  }

  const candidatoExistente = candidatos.find(
    (candidato) => candidato.nombre === nombre
  );

  if (candidatoExistente) {
    alert('El candidato ya ha sido agregado anteriormente');
    return;
  }

  const nuevoCandidato = {
    nombre,
    apellido,
    partido,
    imagen,
  };

  candidatos.push(nuevoCandidato);

  mostrarCandidatoEnPantalla(nuevoCandidato);

  alert('Candidato agregado correctamente');

  nombreInput.value = '';
  apellidoInput.value = '';
  partidoInput.value = '';
  imagenInput.value = '';
});

function mostrarCandidatoEnPantalla(candidato) {
  const candidatoDiv = document.createElement('div');
  candidatoDiv.classList.add('candidato');

  const imagenCandidato = document.createElement('img');
  imagenCandidato.src = URL.createObjectURL(candidato.imagen);
  imagenCandidato.alt = 'Imagen del candidato';

  const datosCandidatoDiv = document.createElement('div');
  datosCandidatoDiv.innerHTML = `
    <h3>${candidato.nombre} ${candidato.apellido}</h3>
    <p>Partido: ${candidato.partido}</p>
  `;

  candidatoDiv.appendChild(imagenCandidato);
  candidatoDiv.appendChild(datosCandidatoDiv);

  candidatosContainer.appendChild(candidatoDiv);
}