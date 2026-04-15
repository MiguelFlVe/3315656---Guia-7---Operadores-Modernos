// Ejercicios de Apropiación
import { procesarPedido } from "./Apropiación/Ejercicio1.js";

import evaluar from './Apropiación/Ej7.js';

// Inicializar función prompt
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Objeto de secciones y ejercicios

const Aprop = {
    Ej1: "Gestión de pedidos con rest y destructuración",
    Ej7: "Evaluación de datos con try...catch + spread",
};

// Ejecución del programa
let condition = true;

while (condition) {
    const { Ej1, Ej7 } = Aprop;

    console.log("----------------------------------------");
    

    console.log("Desarrollo de la Guía 7 de javascript");
    
    console.log("Seleccione la sección a revisar: \n A. Apropiación \n B. Transferencia \n C. Salir \n (Por favor, ingrese la letra correspondiente a su selección, en mayúscula)");
    
    let sec = prompt();

    switch (sec) {
        case "A":
            console.log("----------------------------------------");

            console.log("Has seleccionado Apropiación");
            
            console.log(`Seleccione el ejercicio a revisar: \n 1. ${Ej1} \n 7. ${Ej7} \n 8. Salir`);
            
            let ej = prompt();

            switch (ej) {
                case "1":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${Ej1}`);

                    const pedido = {
                        cliente: "Oscar",
                        producto: "Gorra 5 paneles",
                        cantidad: 5
                    };

                    const resultado = procesarPedido(
                        pedido,
                        "envío gratis",
                        "descuento 20%"
                    );

                    console.log(resultado);

                    break;

                case "7":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${Ej7}`);
                    
                    let data = [];
                    
                    while (true) {
                        console.log("Ingrese un número:");
                        
                        let input = prompt();
                        
                        input = parseFloat(input);
                        
                        data.push(input);
                        
                        console.log("¿Desea ingresar otro número? (s/n)");

                        let more = prompt();
                        
                        if (more.toLowerCase() !== 's') {
                            break;
                        }
                    }
                    
                    evaluar(...data);
                    break;

                case "8":
                    console.log("----------------------------------------");

                    condition = false;
                    
                    break;

                default:
                    console.log("----------------------------------------");

                    console.log("Opción no válida, por favor intente de nuevo.");
                    
                    break;
            }

            break;
    
        case "C":
            console.log("----------------------------------------");

            console.log("Finalizando programa...");
            
            condition = false;
            
            break;

        default:
            console.log("----------------------------------------");
            
            console.log("Opción no válida, por favor intente de nuevo.");
            
            break;
    }
    
}