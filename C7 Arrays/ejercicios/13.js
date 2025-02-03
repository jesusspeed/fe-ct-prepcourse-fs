function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const filtrar = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      filtrar.push(array[i])
    };
  };
  return filtrar;
};

module.exports = filtrarNumerosPares;
