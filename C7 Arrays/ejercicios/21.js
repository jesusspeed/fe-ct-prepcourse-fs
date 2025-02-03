function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const meses = [];
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];

  for(let i = 0; i < array.length; i++){
    if(mesesBuscados.includes(array[i])){
      meses.push(array[i])
    };
  };
  if(meses.length !== mesesBuscados.length){
    return "No se encontraron los meses pedidos"
  }
  return meses;
};


module.exports = mesesDelAño;
