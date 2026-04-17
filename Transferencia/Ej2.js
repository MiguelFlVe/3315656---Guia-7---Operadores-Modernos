// fusionarCatalogos

export function fusionarCatalogos(a, b) {
    try {
        // Validar que ambos sean arreglos
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos válidos");
        }

        // Fusionar con spread (sin modificar originales)
        const fusion = [...a, ...b];

        // Ordenar por precio ascendente
        const ordenado = fusion.sort((x, y) => x.precio - y.precio);

        // Retornar objeto inmutable
        return Object.freeze(ordenado);

    } catch (error) {
        throw new Error("Error en fusionarCatalogos: " + error.message);
    }
}
