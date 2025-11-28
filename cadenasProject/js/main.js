/**
 * Cadenas en JavaScript
 */
let carName1 = "Volvo XC60"; // Una cadena de texto con comillas dobles
let carName2 = 'Volvo XC60'; // Una cadena de texto con comillas simples
window.alert(carName1);

/**
 * Carecteres de escape
 */
let text = "We are the so-called \"Vikings\" from the north.";
window.alert(text);

let text2 = "S\tE\tN\tA";
window.alert(text2);

/**
 * Metodos de cadenas
*/
let text3 = "Apple, Banana, Kiwi";
//Extraer parte de una cadena de texto
let part = text3.slice(7, 13);
window.alert(part);

//Encontrar la longitud de una cadena de texto
let length = text.length;
window.alert(length);