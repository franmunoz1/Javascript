// Definicion de arrays de objetos para luego trabajar sobre ellos

const PRODUCTOS = [
    { marca: "nox", precio: 310000 },
    { marca: "head", precio: 240000 },
    { marca: "babolat", precio: 270000 },
    { marca: "bullpadel", precio: 350000 },
]

let carrito = []

// Funcion para mostrar los productos segun distintos ordenes

function mostrarProducto(orden) {

    let productosOrdenados;

    if (orden === "asc") {
        productosOrdenados = PRODUCTOS.sort((a, b) => a.precio - b.precio)
    } else if (orden === "des") {
        productosOrdenados = PRODUCTOS.sort((a, b) => b.precio - a.precio)
    } else {
        productosOrdenados = PRODUCTOS
    }

    console.log(productosOrdenados)
}

// Funcion para calcular la sumatoria de los productos agregados al carrito

function calcularSumatoria() {
    let sumatoria = 0;

    for (recorridoCarrito of carrito) {
        sumatoria += recorridoCarrito.precio;
    }

    console.log("El precio total del carrito es: " + sumatoria)

}

// Funcion para mostrar cualquier array

function mostrarArray(vector) {
    console.log(vector)
}

// Funcion para buscar un producto por su nombre

function buscarProducto() {
    let buscar = prompt("Ingrese la marca a buscar: ")

    const busqueda = PRODUCTOS.find((prod) => prod.marca === buscar)

    if (busqueda === undefined) {
        console.log("No se encontro el producto ")
    } else {
        console.log("El producto fue encontrado: ")
        console.log(busqueda)
    }
}

// Funcion para agregar un producto al carrito segun su marca

function agregarCarrito() {
    let marcaPaleta = prompt("Ingrese la marca a agregar al carrito: ")
    marcaPaleta = marcaPaleta.toLowerCase();

    const resultado = PRODUCTOS.find((el) => el.marca === marcaPaleta)
    carrito.push(resultado)
}

// Funcion para filtrar productos mayores a un precio ingresado por teclado

function filtrarProducto() {
    let precioUsuario = parseInt(prompt("Ingrese un precio para filtrar productos con precio mayor a: "))

    const filtrado = PRODUCTOS.filter((prod) => prod.precio > precioUsuario)

    console.log(filtrado)
}


alert("Bienvenido al programa, los resultados se mostraran en consola.")

let opcion;

let fechaCompra = new Date();

do {
    alert("Ingrese alguna opcion:\n1- Listar productos por precio\n2- Buscar producto \n3- Agregar producto al carrito segun marca \n4- Mostrar productos en carrito \n5- Filtrar productos por precio \n6- Comprar \n7- Salir")
    opcion = parseInt(prompt("Ingrese un numero: "));
    switch (opcion) {
        case 1:
            orden = prompt("Ingrese el orden a mostrar los productos por precio asc/des/sin: ");
            mostrarProducto(orden);
            break;
        case 2:
            buscarProducto();
            break;
        case 3:
            agregarCarrito();
            break;
        case 4:
            if (carrito.length > 0) {
                console.log("El carrito esta compuesto por los siguientes productos:");
                mostrarArray(carrito);
            } else {
                console.log("El carrito se encuentra vacio");
            }
            break;
        case 5:
            filtrarProducto();
            break;
        case 6:
            if (carrito.length > 0) {
                calcularSumatoria();
                console.log("La fecha de compra fue: " + fechaCompra.toLocaleString());
            } else {
                console.log("El carrito se encuentra vacio");
            }
            break;
    }
} while (opcion != 7)

alert("Gracias por visitar nuestra tienda!");


