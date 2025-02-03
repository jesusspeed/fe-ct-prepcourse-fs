function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === "string"){
      result.push(array[i].toUpperCase());
    }else{
      result.push(array[i])
    };
  };
  return result
};



module.exports = convertirStringAMayusculas;
