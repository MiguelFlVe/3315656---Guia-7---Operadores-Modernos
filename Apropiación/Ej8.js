// Fusión de colecciones y validación final

const fusionarColecciones = (lista1, lista2) => {
    try {
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Ambas entradas deben ser arrays");
        }

        const listaFusionada = [...lista1, ...lista2];

        return listaFusionada;
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

export default fusionarColecciones;