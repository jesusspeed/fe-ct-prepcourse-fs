function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0; for (let i = 0; i < resultadosTest.length; i++) { suma += resultadosTest[i]; } return suma / resultadosTest.length; }
let num = [90, 80, 70, 85, 100];
console.log(promedioResultadosTest(num));

module.exports = promedioResultadosTest;
