//Ejercicio 1: Sistema de registro académico

export const crearEstudiante = (nombre, ...notas) => {
  try {
    // Validar notas
    for (let nota of notas) {
      if (typeof nota !== "number") {
        throw new Error("Todas las notas deben ser números");
      }
    }

    // Desestructuración
    const [primeraNota, ...resto] = notas;

    // Promedio
    let promedio = 0;

    if (resto.length > 0) {
      let suma = 0;
      for (let n of resto) {
        suma += n;
      }
      promedio = suma / resto.length;
    }

    // Objeto inmutable
    const estudiante = Object.freeze({
      nombre,
      primeraNota,
      promedio,
      totalNotas: notas.length
    });

    return estudiante; // 👈 NECESARIO
  } catch (error) {
    throw error;
  }
};

