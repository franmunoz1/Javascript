# Javascript

En este repositorio se desarrolla la entrega final del proyecto de la comisión *49810* de JavaScript.

## Contenido del sitio

Este sitio web es una simulación de una tienda de pádel, donde encontrarás 3 categorías de productos: pelotas, bolsos y palas. Se le da al usuario la posibilidad de filtrar los productos según la marca o el tipo de producto. Además, se le da la opción al usuario de ordenar los productos por precio, ya sea de manera ascendente o descendente.

## Compra de productos

Cuando el usuario visualice todos los productos de la tienda y quiera comprar uno, deberá primero agregarlo al carrito, el cual almacenará los productos hasta que sean comprados o quitados del mismo. Se pueden agregar todos los productos que se deseen. Los precios de los productos se encuentran en DÓLARES debido a la alta inflación en Argentina, por lo que se consume una API para obtener la cotización del dólar blue al instante y así los usuarios puedan visualizar el precio de los productos actualizados en tiempo real. Una vez decidido a realizar el pago, se debe pulsar el botón de "Pagar" dentro del carrito, y mostrará una alerta mediante la utilización de la librería SweetAlert, la cual le preguntará al usuario si realmente está seguro de realizar el pago. Una vez confirmado, se muestra una alerta informando el precio pagado y la cantidad de productos que el usuario adquirió.
