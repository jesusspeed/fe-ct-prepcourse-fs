function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
   if(array === 0){
    return -1 
   };
   let indiceMayor = 0;
   let mayor = array[0];
   for(let i = 0; i < array.length; i++){
    if(array[i] > mayor){
      mayor = array[i];
      indiceMayor = i
    };
   };
return indiceMayor;
};


module.exports = encontrarIndiceMayor;
