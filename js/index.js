let condicion

do {
    alert("Realiza tu consulta")
    const PRECIO = parseFloat(prompt("Ingrese el precio del producto: "))
    if (PRECIO > 0) {
        let formapago = prompt("Ingrese la forma de pago con las palabras transferencia/tarjeta: ")
        if (formapago == "tarjeta") {

            let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas 1/3/6/12: "))
            calcularCuotas(cuotas, PRECIO)

            if ((cuotas == 1) || (cuotas == 3) || (cuotas == 6) || (cuotas == 12)) {
                alert("El precio final con " + cuotas + " cuotas es: $" + preciofinal)
            }

        } else if (formapago == "transferencia") {
            calcularTransferencia(PRECIO)
        } else {
            alert("No se ingreso un metodo de pago valido")
        }

    } else {
        alert("El precio ingresado es invalido")
    }

    condicion = prompt("Desea realizar otro calculo si/no: ")

} while (condicion == "si")

alert("Gracias por utilizar el calculador de precio final")

// Funcion para calcular el precio en cuotas

function calcularCuotas(cuotas, PRECIO) {
    switch (cuotas) {
        case 1:
            preciofinal = PRECIO
            break
        case 3:
            preciofinal = PRECIO * 1.16
            break
        case 6:
            preciofinal = PRECIO * 1.33
            break
        case 12:
            preciofinal = PRECIO * 2.32
            break
        default:
            alert("La cantidad de cuotas ingresada no es valida.")
            break

    }

}

// Funcion para calcular el precio de transferencia

function calcularTransferencia(PRECIO) {
    preciofinal = PRECIO * 0.9
    alert("El precio con el descuento del 10% de transferencia es: $" + preciofinal)
}