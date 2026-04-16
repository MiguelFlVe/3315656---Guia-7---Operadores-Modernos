//2. Control de inventario con inmutabilidad y spread

export const agregarInventario = (lista, nuevoItem) => {
    return [...lista, nuevoItem];
};