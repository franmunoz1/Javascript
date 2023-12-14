let opcion;

do {
    alert("Bienvenido al programa, ingrese alguna opcion:")
    alert("1- Listar productos")
    opcion = parseInt(prompt("Ingrese un numero: "))
    switch (opcion) {
        case 1:
            alert("Hola")
            break
        case 2:
            alert("Chau")
            break


    }
} while (opcion != 3)

const PRODUCTOS = [
    { marca: "Nox", precio: 3000 },
    { marca: "Head", precio: 2400 },
    { marca: "Babolat", precio: 2700 }
];

let carrito = []

let precioAscendente = PRODUCTOS.sort((a, b) =>
    a.precio - b.precio
)

console.log(precioAscendente)

carrito.push(PRODUCTOS[1])

console.log(carrito)