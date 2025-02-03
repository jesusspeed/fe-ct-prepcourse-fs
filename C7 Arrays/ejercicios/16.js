function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let resultados = [];
  for(let i = 0; i < array.length; i++){
    resultados.push(array[i] * i)
  };
  return resultados
};


module.exports = multiplicarElementosPorIndice;
