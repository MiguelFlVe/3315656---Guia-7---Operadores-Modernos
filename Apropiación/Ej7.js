// Evaluación de datos con try...catch + spread

const evaluar = (...valores) => {
    try {
        if (valores.length === 0) {
            throw new Error("No se han proporcionado valores para evaluar");
        }

        for (let valor of valores) {
            if (typeof valor !== 'number' || isNaN(valor)) {
                throw new Error(`El valor ${valor} no es un número`);
            }            
        }

        let valores_copy = [...valores];

        let sum = 0;

        for (let valor of valores_copy) {
            sum += valor;
        }

        let media = 0;
        media = sum / valores_copy.length;

        console.log(`El promedio de la lista de valores es ${media}.`);
        
    } catch (error) {
        console.error(error.message);
    }
};

export default evaluar;