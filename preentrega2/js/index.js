let opcion;
const PRODUCTOS = [
    { marca: "Nox", precio: 3000 },
    { marca: "Head", precio: 2400 },
    { marca: "Babolat", precio: 2700 }
]

function mostrarProductos(PRODUCTOS) {
    console.log(PRODUCTOS)
}

let carrito = []

let precioAscendente = PRODUCTOS.sort((a, b) =>
    a.precio - b.precio
)

// console.log(precioAscendente)

// carrito.push(PRODUCTOS[1])

// console.log(carrito)

alert("Bienvenido al programa, los resultados se mostraran en consola.")

do {
    alert("Ingrese alguna opcion:")
    alert("1- Listar productos | 2- Listar productos en forma ascendente | 3- Salir")
    opcion = parseInt(prompt("Ingrese un numero: "))
    switch (opcion) {
        case 1:
            mostrarProductos(PRODUCTOS);
            break
        case 2:
            console.log(precioAscendente)
            break


    }
} while (opcion != 3)

