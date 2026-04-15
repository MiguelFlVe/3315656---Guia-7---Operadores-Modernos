//Ejercicio 1 de apropiación
import { procesarPedido } from "./Apropiacion/Ejercicio1.js";

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