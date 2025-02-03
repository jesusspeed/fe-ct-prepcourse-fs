function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
 
  const cleanString = string.replace(/\s+/g, "").toLowerCase();

  const reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
};

let string = "Anita lava la tina";
console.log(esPalindromo(string))

module.exports = esPalindromo;