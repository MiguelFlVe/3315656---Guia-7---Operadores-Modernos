// Ejercicios de Apropiación

// Ejercicio 1: Gestión de pedidos con rest y destructuración
import { procesarPedido } from "./Apropiación/Ej1.js";
//Ejercicio 2: Control de inventario con inmutabilidad y spread
import { agregarInventario } from "./Apropiación/Ej2.js";
// Ejercicio 7: Evaluación de datos con try...catch + spread
import evaluar from './Apropiación/Ej7.js';
// Ejercicio 8: Fusión de colecciones y validación final
import fusionarColecciones from './Apropiación/Ej8.js';

// Inicializar función prompt
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Objeto de secciones y ejercicios
const Aprop = {
    Ej1: "Gestión de pedidos con rest y destructuración",
    Ej2: "Control de inventario con inmutabilidad y spread",
    Ej7: "Evaluación de datos con try...catch + spread",
    Ej8: "Fusión de colecciones y validación final"
};

// Ejecución del programa
let condition = true;

while (condition) {
    const { Ej1, Ej2, Ej7, Ej8 } = Aprop;

    // Selección de la sección a revisar
    console.log("----------------------------------------");

    console.log("Desarrollo de la Guía 7 de javascript");
    
    console.log("Seleccione la sección a revisar (Por favor, ingrese la letra correspondiente a su selección, en mayúscula): \n A. Apropiación \n B. Transferencia \n C. Salir");
    
    let sec = prompt();

    switch (sec) {
        case "A":
            // Selección del ejercicio a revisar en la sección de Apropiación
            console.log("----------------------------------------");

            console.log("Has seleccionado Apropiación");
            
            console.log(`Seleccione el ejercicio a revisar: \n 1. ${Ej1} \n 2. ${Ej2} \n 7. ${Ej7} \n 8. ${Ej8} \n 9. Salir`);
            
            let ej = prompt();

            switch (ej) {
                // Ejercicio 1: Gestión de pedidos con rest y destructuración
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

                //Ejercicio 2: Control de inventario con inmutabilidad y spread   
                case "2":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${Ej2}`); 

                    const inventario = ["cámara", "trípode", "micrófono"];

                    const nuevoInventario = agregarInventario(inventario, "luces LED");

                    console.log("\nNuevo inventario:", nuevoInventario);
                    console.log(`El inventario ahora tiene ${nuevoInventario.length} ítems`);

                    break

                // Ejercicio 7: Evaluación de datos con try...catch + spread
                case "7":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${Ej7}`);
                    
                    let data = [];
                    
                    while (true) {
                        console.log("Ingrese un número (deje en blanco para finalizar):");
                        
                        let input = prompt();
                        
                        if (input === "") {
                            break;
                        }
                        
                        input = parseFloat(input);
                        
                        data.push(input);
                        
                    }
                    
                    evaluar(...data);
                    break;

                // Ejercicio 8: Fusión de colecciones y validación final
                case "8":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${Ej8}`);

                    const lista1 = [];

                    const lista2 = [];

                    while (true) {
                        console.log("Ingrese los elementos de la primera lista (deje en blanco para finalizar):");

                        let input1 = prompt();

                        if (input1 === "") {
                            break;
                        }

                        lista1.push(input1);
                    }

                    while (true) {
                        console.log("Ingrese los elementos de la segunda lista (deje en blanco para finalizar):");

                        let input2 = prompt();

                        if (input2 === "") {
                            break;
                        }

                        lista2.push(input2);
                        
                    }

                    const fusionada = fusionarColecciones(lista1, lista2);

                    console.log("Lista fusionada:", fusionada);

                    break;

                // Salir del ejercicio
                case "9":
                    console.log("----------------------------------------");

                    condition = false;
                    
                    break;

                // Opción no válida
                default:
                    console.log("----------------------------------------");

                    console.log("Opción no válida, por favor intente de nuevo.");
                    
                    break;
            }

            break;
    
        // Opción para salir del programa
        case "C":
            console.log("----------------------------------------");

            console.log("Finalizando programa...");
            
            condition = false;
            
            break;

        // Opción no válida para la sección
        default:
            console.log("----------------------------------------");
            
            console.log("Opción no válida, por favor intente de nuevo.");
            
            break;
    }
    
}