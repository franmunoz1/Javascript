let opcion;
const PRODUCTOS = [
    { marca: "nox", precio: 3000 },
    { marca: "head", precio: 2400 },
    { marca: "babolat", precio: 2700 }
]

let carrito = []


let encontrado = false

//forma 1 de buscar un producto
let marcaPaleta = prompt("Ingrese la marca a buscar: ")
marcaPaleta = marcaPaleta.toLowerCase();

const resultado = PRODUCTOS.find((el) => el.marca === marcaPaleta)
carrito.push(resultado)
console.log(carrito)

//forma 2 de buscar un producto
// for (let i = 0; i < PRODUCTOS.length; i++) {
//     if (PRODUCTOS[i].marca === marcaPaleta) {
//         carrito.push(PRODUCTOS[i])
//         encontrado = true;
//     }
// }

// if (encontrado) {
//     console.log("El producto fue añadido");
// } else {
//     console.log("El producto no fue encontrado")
// }
// console.log(carrito)


// calcular el total del carrito

let sumatoria = 0;

for (recorridoCarrito of carrito) {
    sumatoria += recorridoCarrito.precio;
}

console.log("El precio total del carrito es: " + sumatoria)

function mostrarProductos(PRODUCTOS) {
    console.log(PRODUCTOS)
}

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

