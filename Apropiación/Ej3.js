// Ejercicio 3: Registro de actividades con manejo de errores

export const registrarActividad = (actividad) => {
    try {
        const { nombre, fecha } = actividad;

        if (!nombre || !fecha) {
            throw new Error("La actividad no es válida: faltan datos");
        }

        return `Actividad "${nombre}" registrada para la fecha ${fecha}`;
        
    } catch (error) {
        return error.message;
    }
};