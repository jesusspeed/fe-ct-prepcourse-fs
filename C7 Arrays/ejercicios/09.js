function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let elementoRandom = Math.floor(Math.random()* array.length)
   return array[elementoRandom];
};
const animal = ["Perro", "Gato", "Elefante", "Burro"]
console.log(obtenerElementoAleatorio(animal))


module.exports = obtenerElementoAleatorio;
