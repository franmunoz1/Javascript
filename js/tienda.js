// Consumo de API de dolar para calcular el precio

const API_URL = "https://api.bluelytics.com.ar/v2/latest"

const divDolar = document.getElementById("tipoCambio")

let valor
let precioDolar

setInterval(() => {
    fetch(API_URL)
        .then(response => response.json())
        .then(({ blue }) => {
            precioDolar = blue.value_avg

            divDolar.innerHTML = `<a>Cotizacion dolar blue: ${precioDolar}</a>`

            valor = calcularPrecioDolar(precioDolar)

            mostrarCarrito()

        })
        .catch(error => console.log(error))
}, 1000)

function calcularPrecioDolar(precioDolar) {
    return precioDolar * calcularSumatoria(carrito)
}

// Definicion de productos de la tienda de padel

const PRODUCTOS = [
    // Paletas
    { indice: 0, marca: "nox", modelo: "ml10", categoria: "paleta", peso: 350, material: "fibra", forma: "redonda", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/11712abbf97e7b2bcae3e11690228169840110241024-289a0db6311f6d50fe17072310144850-1024-1024.webp" },
    { indice: 1, marca: "head", modelo: "delta", categoria: "paleta", peso: 380, material: "carbono", forma: "diamante", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/paletaheaddeltapro22_1-3d6117fe0d16ec809a17060127097328-1024-1024.webp" },
    { indice: 2, marca: "babolat", modelo: "counter", categoria: "paleta", peso: 360, material: "fibra", forma: "hibrida", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1317191cd868b489def281694644742496410241024-6b3581969138d21a0d17066260002991-1024-1024.webp" },
    { indice: 3, marca: "bullpadel", modelo: "vertex03", categoria: "paleta", peso: 370, material: "carbono", forma: "redonda", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1161545b39048afe8192fd1688572899228310241024-3cc5d5a29af56b1bab17067132438902-1024-1024.webp" },
    { indice: 4, marca: "nox", modelo: "ml10", categoria: "paleta", peso: 350, material: "fibra", forma: "diamante", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/11116ecc2b8762899e30d1690212900264110241024-a25c223f2df80b6c8717062095244424-1024-1024.webp" },
    { indice: 5, marca: "head", modelo: "delta", categoria: "paleta", peso: 380, material: "carbono", forma: "hibrida", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/deltapro_1-9b1a39ac7fa3a6586117048186521136-1024-1024.webp" },
    { indice: 6, marca: "babolat", modelo: "air", categoria: "paleta", peso: 360, material: "carbono", forma: "hibrida", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/17152dece2f6d47b0526f1694645315367610241024-e127e4b380faffc2e417068015757489-1024-1024.webp" },
    // Pelotas
    { indice: 7, marca: "bullpadel", modelo: "premium pro", categoria: "pelota", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/disenosintitulo20230629t1728316231c1ce3b27794a3a0fbf1688071104293510241024-1141edbb9228b4e26417048982180023-1024-1024.webp" },
    { indice: 8, marca: "babolat", modelo: "all court", categoria: "pelota", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/tubopelotasbabolatcourtx3padel_1-93225cd17cd1eccff717061972123419-1024-1024.webp" },
    { indice: 9, marca: "head", modelo: "padel pro", categoria: "pelota", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/head21f6fb8e8c762a6936dc1693339431793710241024-e2a07f56b1f9d6c7ef17063019571818-1024-1024.webp" },
    // Bolsos
    { indice: 10, marca: "varlion", modelo: "mike yanguas", categoria: "bolso", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/paleterovarlionsummumprocobre_8-3437ab60823c799bfa17061948592029-1024-1024.webp" },
    { indice: 11, marca: "bullpadel", modelo: "flow", categoria: "bolso", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/191c5b70b5e938451dac51695132486563110241024-2f3e900f55599f9c9e17067178391324-1024-1024.webp" },
    { indice: 12, marca: "adidas", modelo: "ctrl 3.1", categoria: "bolso", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/131162c00ffc4b43db868f1689261657531710241024-e8db9a7fd9d215767e17060247500980-1024-1024.webp" }
]

// Definicion de carrito para luego almacenar productos y guardar elementos en local

const carritoEnLocalStorage = localStorage.getItem("carrito");
const carrito = carritoEnLocalStorage ? JSON.parse(carritoEnLocalStorage) : [];

mostrarCarrito()
botonCarrito()

// Funcion para mostrar todos los productos de la tienda

function mostrarProductos(array) {
    let contenedorProductos = document.getElementById("contenedorProductos");

    contenedorProductos.innerHTML = "";

    array.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.marca}</h5>
                            <p class="card-text">Modelo: ${producto.modelo}</p>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <button id="${producto.indice}" onclick="agregarAlCarrito(${producto.indice})" href="#" class="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>`;
        contenedorProductos.appendChild(div);
    });
}

mostrarProductos(PRODUCTOS)

// Boton para cancelar filtros

let buttonCancelar = document.getElementById("buttonCancelar")
buttonCancelar.addEventListener("click", () => {
    mostrarProductos(PRODUCTOS)
})

// Funcion para agregar elementos al carrito

function agregarAlCarrito(indice) {
    const productoSeleccionado = PRODUCTOS[indice];
    carrito.push(productoSeleccionado);
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { }
    }).showToast();
    actualizarLocalStorage()
    mostrarCarrito()

}

// Funcion para mostrar carrito

function botonCarrito() {

    let buttonNumeroCarrito = document.getElementById("buttonCart");
    buttonNumeroCarrito.innerHTML = `<i class="fa-solid fa-cart-shopping fa-2xl"></i><span class="badge text-bg-secondary">${carrito.length}</span>`;

}

// Funcion para mostrar sumatoria del carrito

function calcularSumatoria(carrito) {
    let sumatoria = 0;

    carrito.forEach((producto) => {
        sumatoria += producto.precio
    })

    return sumatoria
}

// Mostrar elementos dentro del carrito

let buttonCart = document.getElementById("buttonCart");
buttonCart.addEventListener("click", mostrarCarrito);

// Funcion para mostrar carrito

function mostrarCarrito() {
    const carritoJson = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoJson)

    const carritoObjeto = JSON.parse(carritoJson)

    let contenedorCarrito = document.getElementById("cartProducts")
    contenedorCarrito.innerHTML = ""

    if (carritoObjeto.length == 0) {
        let aviso = document.createElement("div")
        aviso.innerHTML = `<p>El carrito está vacío</p>`
        contenedorCarrito.appendChild(aviso)
    } else {
        carritoObjeto.forEach((producto) => {
            botonCarrito()
            let div = document.createElement("div");
            div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${producto.image}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Marca: ${producto.marca}</h5>
                                            <p class="card-text">Modelo: ${producto.modelo}</p>
                                            <p class="card-text">Precio: $${producto.precio}</p>
                                        </div>
                                    </div>
                                    <button id="${producto.indice}" onclick="quitarDelCarrito(${producto.indice})" class="btn btn-danger">Quitar</button>
                                </div>
                                
                            </div>
                            <hr>
                            `;
            contenedorCarrito.appendChild(div);
        });
    }

    // Mostrar total del carrito
    let total = document.createElement("div");
    if (carrito.length > 0) {
        total.innerHTML = `<div class="d-flex justify-content-around flex-column">
                                <div>
                                    <span>Total a pagar (Dolar): U$S${calcularSumatoria(carrito)}</span>
                                    <span>Total a pagar (ARS): $${calcularPrecioDolar(precioDolar)}</span>
                                </div>
                                <div style="display: flex; justify-content:space-around; padding: 1rem;">
                                    <button id="buttonPagar" onclick="pagarCarrito()" class="btn btn-success">Pagar</button>
                                    <button id="buttonVaciar" onclick="vaciarCarrito()" class="btn btn-warning">Vaciar</button>
                                </div>
                            </div>`;
    }

    contenedorCarrito.appendChild(total);
}

// Boton de pagar carrito con libreria SweetAlert

function pagarCarrito() {
    Swal.fire({
        title: "Estas seguro de realizar la compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Pagar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Pago realizado con exito!",
                html: `Pagaste! Por un total de: <b>$ ${calcularPrecioDolar(precioDolar)}</b> pesos, con su equivalente a: 
                       <b>U$S ${calcularSumatoria(carrito)}</b> dolares, con la compra de <b>${carrito.length} producto/s</b>`,
                icon: "success"
            });
            carrito.splice(0, carrito.length)
            actualizarLocalStorage()
            mostrarCarrito()
            botonCarrito()
        }
    });
}

// Boton de vaciar carrito con libreria SweetAlert

function vaciarCarrito() {
    Swal.fire({
        title: "Estas seguro de vaciar todo el carrito?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Vaciar carrito"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Vaciaste todo el carrito",
                icon: "success"
            });
            carrito.splice(0, carrito.length)
            actualizarLocalStorage()
            mostrarCarrito()
            botonCarrito()
        }
    });
}


// Funcion para eliminar elementos del carrito

function quitarDelCarrito(indice) {

    const index = carrito.findIndex(producto => producto.indice === indice);

    Swal.fire({
        title: "Estas seguro de eliminar este producto del carrito?",
        text: "Este cambio sera irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            if (index !== -1) {

                carrito.splice(index, 1);
                actualizarLocalStorage();
                mostrarCarrito();
                botonCarrito()
            } else {
                console.error("Producto no encontrado en el carrito:", indice);
            }
            Swal.fire({
                title: "Eliminado!",
                text: "El producto fue eliminado del carrito con exito.",
                icon: "success"
            });
        }
    });



}

// Funcion para actualizar el carrito en localstorage para mantenerlo

function actualizarLocalStorage() {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
    mostrarCarrito()
}

// Funcion para filtrar productos mayor a un numero con el formulario

function filtrarProductos(precio, operador) {
    return PRODUCTOS.filter((prod) => {
        if (operador === ">" && prod.precio > precio) {
            return true;
        } else if (operador === "<" && prod.precio < precio) {
            return true;
        }
        return false;
    });
}

let buttonFiltrarPrecio = document.getElementById("buttonFiltrarPrecio");
buttonFiltrarPrecio.addEventListener("click", () => {
    let inputPrecio = document.getElementById("inputPrecio");
    let precioIngresado = parseFloat(inputPrecio.value);

    if (!isNaN(precioIngresado)) {
        let productosFiltrados = filtrarProductos(precioIngresado, ">");
        mostrarProductos(productosFiltrados);
    } else {
        alert("Por favor, ingrese un valor numérico válido.");
    }
});

// Funciones para ordenar los productos de forma ascendente o descendente

function ordenAscendente() {
    return PRODUCTOS.slice().sort((a, b) => a.precio - b.precio);
}

function ordenDescendente() {
    return PRODUCTOS.slice().sort((a, b) => b.precio - a.precio);
}

// Botones para ordenar los productos

let buttonOrderAsc = document.getElementById("buttonOrderAsc")
buttonOrderAsc.addEventListener("click", () => {

    mostrarProductos(ordenAscendente())

})

let buttonOrderDes = document.getElementById("buttonOrderDesc")
buttonOrderDes.addEventListener("click", () => {

    mostrarProductos(ordenDescendente())

})

// Funcion para filtrar productos por categoria con sus respectivos botones de categorias

function filtrarProductosCategoria(categoria) {
    return PRODUCTOS.filter(producto => producto.categoria === categoria);
}


let buttonPaletas = document.getElementById("buttonPaletas");
buttonPaletas.addEventListener("click", () => {
    let filtroPaletas = filtrarProductosCategoria("paleta");
    mostrarProductos(filtroPaletas);
});

let buttonBolsos = document.getElementById("buttonBolsos");
buttonBolsos.addEventListener("click", () => {
    let filtroBolsos = filtrarProductosCategoria("bolso");
    mostrarProductos(filtroBolsos);
});

let buttonPelotas = document.getElementById("buttonPelotas");
buttonPelotas.addEventListener("click", () => {
    let filtroPelotas = filtrarProductosCategoria("pelota");
    mostrarProductos(filtroPelotas);
});


// Funcion para filtrar productos por marca con sus respectivos botones de nombres de marcas

function filtrarProductosMarca(marca) {
    return PRODUCTOS.filter(producto => producto.marca === marca);
}

let buttonBrandNox = document.getElementById("buttonBrandNox");
buttonBrandNox.addEventListener("click", () => {
    let filtroNox = filtrarProductosMarca("nox");
    mostrarProductos(filtroNox);
});

let buttonBrandHead = document.getElementById("buttonBrandHead");
buttonBrandHead.addEventListener("click", () => {
    let filtroHead = filtrarProductosMarca("head");
    mostrarProductos(filtroHead);
});

let buttonBrandAdidas = document.getElementById("buttonBrandAdidas");
buttonBrandAdidas.addEventListener("click", () => {
    let filtroAdidas = filtrarProductosMarca("adidas");
    mostrarProductos(filtroAdidas);
});

let buttonBrandVarlion = document.getElementById("buttonBrandVarlion");
buttonBrandVarlion.addEventListener("click", () => {
    let filtroVarlion = filtrarProductosMarca("varlion");
    mostrarProductos(filtroVarlion);
});

let buttonBrandBullpadel = document.getElementById("buttonBrandBullpadel");
buttonBrandBullpadel.addEventListener("click", () => {
    let filtroBullpadel = filtrarProductosMarca("bullpadel");
    mostrarProductos(filtroBullpadel);
});

let buttonBrandBabolat = document.getElementById("buttonBrandBabolat");
buttonBrandBabolat.addEventListener("click", () => {
    let filtroBabolat = filtrarProductosMarca("babolat");
    mostrarProductos(filtroBabolat);
});
