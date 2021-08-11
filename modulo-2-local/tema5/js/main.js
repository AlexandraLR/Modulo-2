'use strict';

// Elementos de la página:

const inputNombre = document.querySelector('.js_nombre');
const inputApellido = document.querySelector('.js_apellido');
const elemResultado = document.querySelector('.js_result');
const buttonGenerate = document.querySelector('.js_button');

// Funciones

/**
 * Usa el input con la clase js_nombre del HTML para recoger el valor
 * del nombre "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del nombre
 */

function cogerNombre() {
  const nombre = inputNombre.value;
  return nombre;
}

/**
 * Usa el input con la clase js_apellido del HTML para recoger el valor
 * del apellido "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del apellido
 */

function cogerApellido() {
  return inputApellido.value;
}

/**
 * Toma un nombre y un apellido de la usuaria y forma un nuevo string
 * con el nombre completo, uniéndo el nombre con un espacio en blanco
 * y el apellido proporcionados.
 * 
 * @param {str} nombre Nombre de la usuaria
 * @param {str} apellido Apellido de la usuaria
 * @returns Un string con el nombre completo de la usuaria (nombre + apellido)
 */

function formarNombreCompleto(nombre, apellido) {
  const nombreCompleto = `${nombre} ${apellido}`;
  return nombreCompleto;
}

/**
 * Escribe en el documento HTML el texto del parámetro en el elemento con la clase
 * js_result (para mostrar el resultado del ejercicio).
 * 
 * @param {str} nombreCompleto Nombre a mostrar
 */

function escribirNombreCompleto(nombreCompleto) {
  elemResultado.innerHTML = nombreCompleto;
}

function generarNombre () {
// Se obtiene el nombre del input del HTML para usarlo más adelante.

const nombre = cogerNombre();

// Se obtiene el apellido del input del HTML para usarlo más adelante.

const apellido = cogerApellido();

// Con el nombre y el apellido obtenidos, se forma un nuevo string
// con el nombre completo.

const nombreCompleto = formarNombreCompleto(nombre, apellido);

// Se escribe el nombre completo generado en el documento HTML.

escribirNombreCompleto(nombreCompleto);
}

//   Operaciones principales
// ===========================

buttonGenerate.addEventListerner ('click', generarNombre);
inputNombre.addEventListener('keyup', generarNonbre);
inputApellido.addEventListener ('keyup', generarNombre);


/*
// Sintaxis de función arrow =>:

const cogerNombre = () => {
  const nombre = inputNombre.value;
  return nombre;
};

const cogerApellido = () => {
  return inputApellido.value;
}

const formarNombreCompleto = (nombre, apellido) => {
  const nombreCompleto = `${nombre} ${apellido}`;
  return nombreCompleto;
};

const escribirNombreCompleto = (nombreCompleto) => {
  elemResultado.innerHTML = nombreCompleto;
}
*/

/*
// Sintaxis de función anónima:

const cogerNombre = function() {
  const nombre = inputNombre.value;
  return nombre;
};
*/




/* const elemSaludo = document.querySelector('.js_saludo');

function ponerSaludoEnLaPagina(nombre) {
  elemSaludo.innerHTML += `
    <p>
      Hola
      <ul>
        <li>
          ${nombre}
        </li>
      </ul>
    </p>`;
}

ponerSaludoEnLaPagina('Ana');
ponerSaludoEnLaPagina('Clara');
ponerSaludoEnLaPagina('Daniela');
ponerSaludoEnLaPagina('Irene');
ponerSaludoEnLaPagina('Paloma'); */

