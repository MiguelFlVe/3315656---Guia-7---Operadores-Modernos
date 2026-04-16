//1. Sistema de registro académico

export const crearEstudiante = (nombre, ...notas) => {
  try {
    // Validar que todas las notas sean números
    for (let nota of notas) {
      if (typeof nota !== "number") {
        throw new Error("Las notas deben ser números");
      }
    }

    // Desestructurar
    const [primeraNota, ...resto] = notas;

    // Promedio del resto
    let promedio = 0;
    if (resto.length > 0) {
      let suma = 0;
      for (let n of resto) {
        suma += n;
      }
      promedio = suma / resto.length;
    }

    // Retornar objeto inmutable
    return Object.freeze({
      nombre,
      primeraNota,
      promedio,
      totalNotas: notas.length
    });

  } catch (error) {
    throw error;
  }
};