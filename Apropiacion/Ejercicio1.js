export const procesarPedido = (pedido, ...extras) => {

          //Destructuracion del objeto
          const {cliente, producto, cantidad} = pedido;

          //Retornar objeto consolidado
          return { 
           cliente, 
           producto, 
           cantidad, 
           extras  };
};

