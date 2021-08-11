// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.//

const button=document.querySelector(".js_button");
const userName=document.querySelector(".js_name");
const resultName = document.querySelector(".js_result");


function showName() { 
    const saludo = (`Hola, ${userName.value}`);
    resultName.innerHTML+= saludo;}

button.addEventListener('click',showName);