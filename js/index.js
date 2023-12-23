// Definicion de arrays de objetos para luego trabajar sobre ellos

const PRODUCTOS = [
    { marca: "nox", precio: 310000, img: "https://acdn.mitiendanube.com/stores/003/106/548/products/125134708fdb936c7141781687528113276410241024-c651a71768ec09e45b17024981446326-1024-1024.webp" },
    { marca: "head", precio: 240000, img: "https://acdn.mitiendanube.com/stores/003/106/548/products/141e601bce500d13ef9791688506029202910241024-cba846114b0b7471f217024714200157-1024-1024.webp" },
    { marca: "babolat", precio: 270000, img: "https://acdn.mitiendanube.com/stores/003/106/548/products/16130654e25e5061dd5611694645239469910241024-22beccae8cc3aee1a617024727793935-1024-1024.webp" },
    { marca: "bullpadel", precio: 350000, img: "https://acdn.mitiendanube.com/stores/003/106/548/products/1231dd5ac892f5922962eb1688573277080910241024-30d37536070c8afb5917007696714625-1024-1024.webp" },
]

const contenedorProductos = document.getElementById("contenedorProductos")

PRODUCTOS.forEach(producto => {

    const div = document.createElement("div")

    div.innerHTML = `
                    <div class="group relative">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src=${producto.img}
                                alt="Front of men&#039;s Basic Tee in black."
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        ${producto.marca}
                                    </a>
                                </h3>
                            </div>
                            <p class="text-sm font-medium text-gray-900">$ ${producto.precio}</p>
                        </div>
                    </div>
    `

    contenedorProductos.appendChild(div)
})

let numero = 350

// const precioCarrito = document.getElementById("carrito")

// precioCarrito.innerHTML = `
//                             <h2>El precio del carrito es: ${numero}</h2>

// `

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

const botonAnadir = document.getElementById("addCard")

botonAnadir.addEventListener("click", () => {


    carrito.push()

})

// function agregarCarrito() {
//     let marcaPaleta = prompt("Ingrese la marca a agregar al carrito: ")
//     marcaPaleta = marcaPaleta.toLowerCase();

//     const resultado = PRODUCTOS.find((el) => el.marca === marcaPaleta)
//     carrito.push(resultado)
// }

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
        // if (carrito.length > 0) {
        //     calcularSumatoria();
        //     console.log("La fecha de compra fue: " + fechaCompra.toLocaleString());
        // } else {
        //     console.log("El carrito se encuentra vacio");
        // }
        // break;
    }
} while (opcion != 7)

alert("Gracias por visitar nuestra tienda!");

const contenedorCarrito = document.getElementById("contenedorCarrito")

carrito.forEach(carrito => {

    const div = document.createElement("div")

    div.innerHTML = `
                    <div class="group relative">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src=${carrito.img}
                                alt="Front of men&#039;s Basic Tee in black."
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        ${carrito.marca}
                                    </a>
                                </h3>
                            </div>
                            <p class="text-sm font-medium text-gray-900">$ ${carrito.precio}</p>
                        </div>
                    </div>   
    
    `

    contenedorCarrito.appendChild(div)
})

const precioCarrito = document.getElementById("carrito")




