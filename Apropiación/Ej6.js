
export const calcularTotalPrimerProducto = ([{ detalles: { precio, unidades } }]) => {
  return precio * unidades;
};