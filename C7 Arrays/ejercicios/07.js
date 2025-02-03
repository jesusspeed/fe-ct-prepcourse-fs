function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  for(let i = 0; i< array.length; i++){
    for(let j = 0; j < array.length - 1; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array [j] = array[j+1];
        array[j+1] = temp
      }
    }
  }
  return array;
};
let num = [9,6,3,1,2]
console.log(ordenarArray(num))

module.exports = ordenarArray;
