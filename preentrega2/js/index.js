let opcion;
const PRODUCTOS = [
    { marca: "nox", precio: 3000 },
    { marca: "head", precio: 2400 },
    { marca: "babolat", precio: 2700 }
]

let carrito = []

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


function calcularSumatoria() {
    let sumatoria = 0;

    for (recorridoCarrito of carrito) {
        sumatoria += recorridoCarrito.precio;
    }

    console.log("El precio total del carrito es: " + sumatoria)

}

function mostrarArray(vector) {
    console.log(vector)
}


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

function agregarCarrito() {
    let marcaPaleta = prompt("Ingrese la marca a agregar al carrito: ")
    marcaPaleta = marcaPaleta.toLowerCase();

    const resultado = PRODUCTOS.find((el) => el.marca === marcaPaleta)
    carrito.push(resultado)
}

function filtrarProducto() {
    let precioUsuario = parseInt(prompt("Ingrese un precio para filtrar productos con precio mayor a: "))

    const filtrado = PRODUCTOS.filter((prod) => prod.precio > precioUsuario)

    console.log(filtrado)
}


alert("Bienvenido al programa, los resultados se mostraran en consola.")

do {
    alert("Ingrese alguna opcion:\n1- Listar productos por precio\n2- Buscar producto \n3- Agregar producto al carrito segun marca \n4- Mostrar total carrito \n5- Filtrar productos por precio \n6- Salir")
    opcion = parseInt(prompt("Ingrese un numero: "))
    switch (opcion) {
        case 1:
            orden = prompt("Ingrese el orden a mostrar los productos por precio asc/des/sin: ");
            mostrarProducto(orden);
            break;
        case 2:
            buscarProducto()
            break
        case 3:
            agregarCarrito();
            break
        case 4:
            console.log("El carrito esta compuesto por los siguientes productos:")
            mostrarArray(carrito);
            console.log("La sumatoria del carrito da en total:")
            calcularSumatoria();
            break
        case 5:
            filtrarProducto();
            break

    }
} while (opcion != 6)

alert("Gracias por visitar nuestra tienda")

let fechaCompra = new Date();

if (carrito.length > 0) {
    console.log("La fecha de compra fue: " + fechaCompra.toLocaleString)
}
