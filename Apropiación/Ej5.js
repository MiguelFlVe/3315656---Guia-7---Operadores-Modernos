// Exportación de la función
export const actualizarPerfil = (perfil, ...nuevosDatos) => {
  // Usamos reduce para combinar el perfil original con todos los objetos de nuevosDatos
  const perfilActualizado = nuevosDatos.reduce((acumulado, datoParcial) => {
    return {
      ...acumulado,
      ...datoParcial
    };
  }, { ...perfil });

  return perfilActualizado;
};