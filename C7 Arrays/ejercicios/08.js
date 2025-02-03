function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      if(num === array[i]){
         return i;
      };
   };
   return - 1
};
const numeros = [30, 60, 90, 120]
console.log(encontrarElemento(120, numeros))



module.exports = encontrarElemento;
