// Motor de configuración avanzada

const configFinal = (...configs) => {
    let configCombinada = {};
    
    try {
        for (const config of configs) {
            if (typeof config !== "object") {
                throw new Error(`Configuración inválida: se esperaba un objeto, pero se recibió ${typeof config}`);
            
            }
        }

        const configCombinada = Object.assign({}, ...configs, {validación: true});

        console.log(configCombinada);
        
        return configCombinada
        
    } catch (error) {
        let configError = Object.assign({}, ...configs, {validación: false, error: error.message});
        
        console.error("Error en la configuración:", configError);
        
    }
};

export default configFinal;