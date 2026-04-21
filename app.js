// Ejercicios de Apropiación

// Ejercicio 1: Gestión de pedidos con rest y destructuración
import { procesarPedido } from "./Apropiación/Ej1.js";
//Ejercicio 2: Control de inventario con inmutabilidad y spread
import { agregarInventario } from "./Apropiación/Ej2.js";
// Ejercicio 3: Registro de actividades con manejo de errores
import { registrarActividad } from "./Apropiación/Ej3.js";
// Ejercicio 7: Evaluación de datos con try...catch + spread
import evaluar from './Apropiación/Ej7.js';
// Ejercicio 8: Fusión de colecciones y validación final
import fusionarColecciones from './Apropiación/Ej8.js';

// Ejercicios de Transferencia
// Ejercicio 1: Sistema de registro académico
import { crearEstudiante } from "./Transferencia/Ej1.js";
// Ejercicio 2: Fusionar Catalogos
import { fusionarCatalogos } from "./Transferencia/Ej2.js";
// Ejercicio 5: Motor de configuración avanzada
import configFinal from './Transferencia/Ej5.js';

// Inicializar función prompt
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Objeto de secciones y ejercicios
const Aprop = {
    A1: "Gestión de pedidos con rest y destructuración",
    A2: "Control de inventario con inmutabilidad y spread",
    A3: "Registro de actividades con manejo de errores",
    A7: "Evaluación de datos con try...catch + spread",
    A8: "Fusión de colecciones y validación final"
};

const Transf = {
    T1: "Sistema de registro académico",
    T2: "Fusionar catalogos",
    T5: "Motor de configuración avanzada"
};

// Ejecución del programa
let condition = true;

while (condition) {
    // Llamamiento de los objetos de ejercicios
    // Ejercicios de Apropiación
    const { A1, A2, A3, A7, A8 } = Aprop;
    
    // Ejercicios de Transferencia
    const { T1, T2, T5 } = Transf;

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
            
            console.log(`Seleccione el ejercicio a revisar: \n 1. ${A1} \n 2. ${A2} \n 3. ${A3} \n 7. ${A7} \n 8. ${A8} \n 9. Salir`);
            
            let ej = prompt();

            switch (ej) {
                // Ejercicio 1: Gestión de pedidos con rest y destructuración
                case "1":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${A1}`);

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

                    console.log(`Has seleccionado el ejercicio ${A2}`); 

                    const inventario = ["cámara", "trípode", "micrófono"];

                    const nuevoInventario = agregarInventario(inventario, "luces LED");

                    console.log("\nNuevo inventario:", nuevoInventario);
                    console.log(`El inventario ahora tiene ${nuevoInventario.length} ítems`);

                    break

                // Ejercicio 3: Registro de actividades con manejo de errores    
                case "3":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${A3}`);

                    const actividad1 = {
                       nombre: "Entrenamiento",
                       fecha: "2026-04-15"
                              };

                    const actividad2 = {
                         nombre: "Reunión"
                          };

                    console.log(registrarActividad(actividad1));
                    console.log(registrarActividad(actividad2));
                    break

                // Ejercicio 7: Evaluación de datos con try...catch + spread
                case "7":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${A7}`);
                    
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

                    console.log(`Has seleccionado el ejercicio ${A8}`);

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

                    console.log("Volviendo al menú inicial");
                    
                    break;

                // Opción no válida
                default:
                    console.log("----------------------------------------");

                    console.log("Opción no válida, por favor intente de nuevo.");
                    
                    break;
            }

            break;

        case "B":
            // Selección del ejercicio a revisar en la sección de Transferencia
            console.log("----------------------------------------");

            console.log("Has seleccionado Transferencia");
            
            console.log(`Seleccione el ejercicio a revisar: \n 1. ${T1} \n 2. ${T2} \n 5. ${T5} \n 6. Salir`);

            let ejTransf = prompt();

            switch (ejTransf) {
               //Ejercicio 1: Sistema de registro académico
                case "1":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${T1}`);

                    const est = crearEstudiante("Oscar", 4, 3, 5);

                    console.log(est);

                    break
               // Ejercicio 2: Fusionar Catalogos
                case "2":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${T2}`);

                    const catalogoA = [
                     { id: 1, nombre: "Curso JavaScript", precio: 40 },
                     { id: 2, nombre: "Curso HTML", precio: 35 }
                                       ];

                    const catalogoB = [
                     { id: 3, nombre: "Curso CSS", precio: 30 }
                                     ];

                    try {
                      const resultado = fusionarCatalogos(catalogoA, catalogoB);
                      console.log(resultado);
                    } catch (error) {
                      console.error(error.message);
                      
                              }
                    break 
                            
                // Ejercicio 5: Motor de configuración avanzada
                case "5":
                    console.log("----------------------------------------");

                    console.log(`Has seleccionado el ejercicio ${T5}`);

                    const baseConfig = {
                        modo: "Producción",
                        lenguaje: "es",
                        nivel: 1
                    };

                    const extraConfig = {
                        nivel: 2,
                        tema: "oscuro"
                    };

                    configFinal(baseConfig, extraConfig);

                    break;

                // Salir del ejercicio
                case "6":
                    console.log("----------------------------------------");

                    console.log("Volviendo al menú inicial");
                    
                    break;
            }
    
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
