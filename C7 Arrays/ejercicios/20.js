function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i = 1; i < array.length; i++){
    if(array[i] !== array[0]){
      return false
    };
  };
  return true
};
const num  = [2, 3, 4,];
const num1 = [2,2,2]
console.log(todosIguales(num))
console.log(todosIguales(num1))
module.exports = todosIguales;
