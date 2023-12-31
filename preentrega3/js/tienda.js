const PRODUCTOS = [
    // paletas
    { indice: 0, marca: "nox", modelo: "ml10", categoria: "paleta", peso: 350, material: "fibra", forma: "redonda", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/125134708fdb936c7141781687528113276410241024-c651a71768ec09e45b17024981446326-1024-1024.webp" },
    { indice: 1, marca: "head", modelo: "delta", categoria: "paleta", peso: 380, material: "fibra", forma: "redonda", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/speedpro23_1-a2d2897e5be668f16017043096906426-1024-1024.webp" },
    { indice: 2, marca: "babolat", modelo: "counter", categoria: "paleta", peso: 360, material: "fibra", forma: "redonda", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/16130654e25e5061dd5611694645239469910241024-5ce0329ee2711bbed117031707437404-1024-1024.webp" },
    { indice: 3, marca: "bullpadel", modelo: "vertex03", categoria: "paleta", peso: 370, material: "fibra", forma: "redonda", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1231dd5ac892f5922962eb1688573277080910241024-4747a21cd0e57dd10a17037779963952-1024-1024.webp" },
    { indice: 4, marca: "nox", modelo: "ml10", categoria: "paleta", peso: 350, material: "fibra", forma: "redonda", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/125134708fdb936c7141781687528113276410241024-c651a71768ec09e45b17024981446326-1024-1024.webp" },
    { indice: 5, marca: "head", modelo: "delta", categoria: "paleta", peso: 380, material: "fibra", forma: "redonda", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/speedpro23_1-a2d2897e5be668f16017043096906426-1024-1024.webp" },
    { indice: 6, marca: "babolat", modelo: "counter", categoria: "paleta", peso: 360, material: "fibra", forma: "redonda", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/16130654e25e5061dd5611694645239469910241024-5ce0329ee2711bbed117031707437404-1024-1024.webp" },
    // pelotas
    { indice: 7, marca: "bullpadel", modelo: "premium pro", categoria: "pelota", material: "fibra", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/disenosintitulo20230629t1728316231c1ce3b27794a3a0fbf1688071104293510241024-80ef0ced2f4a6b952b17036163157615-1024-1024.webp" },
    { indice: 8, marca: "babolat", modelo: "all court", categoria: "pelota", material: "fibra", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/tubopelotasbabolatgoldallcourtx3tenis_1-b5f47e92a43d18718c17031978147630-1024-1024.webp" },
    { indice: 9, marca: "head", modelo: "padel pro", categoria: "pelota", material: "fibra", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/head21f6fb8e8c762a6936dc1693339431793710241024-7ac06482a40ba530ba17029996195683-1024-1024.webp" },
    // bolsos
    { indice: 10, marca: "varlion", modelo: "mike yanguas", categoria: "bolso", material: "fibra", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1f54d792f597db8a9c2169904885463841fe46284911e2a5b78e1699048871682610241024-91ea97ed0021332e0917029202893851-1024-1024.webp" },
    { indice: 11, marca: "bullpadel", modelo: "flow", categoria: "bolso", material: "fibra", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/bullpadel312edf7210b85c46de1b1695131507557810241024-653cfbd9b9d5cf3c1417036165224032-1024-1024.webp" },
    { indice: 12, marca: "adidas", modelo: "ctrl 3.1", categoria: "bolso", material: "fibra", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/146106d52f91d6e43da2921689280009724210241024-65f4b1c2d0cc36965217025773185257-1024-1024.webp" }
]

//const carrito = []

const carritoEnLocalStorage = localStorage.getItem("carrito");
const carrito = carritoEnLocalStorage ? JSON.parse(carritoEnLocalStorage) : [];

function mostrarProductos(array) {
    let contenedorProductos = document.getElementById("contenedorProductos");
    // Limpia el contenido actual del contenedor antes de mostrar los nuevos productos
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

let buttonCancelar = document.getElementById("buttonCancelar")
buttonCancelar.addEventListener("click", () => {
    mostrarProductos(PRODUCTOS)
})


function agregarAlCarrito(indice) {
    const productoSeleccionado = PRODUCTOS[indice];
    carrito.push(productoSeleccionado);
    console.log("Producto añadido al carrito:", productoSeleccionado);
    actualizarLocalStorage()
    mostrarCarrito()

}


function mostrarCarrito() {
    console.log("Contenido del carrito:", carrito);
}

function calcularSumatoria(carrito) {
    let sumatoria = 0;

    carrito.forEach((producto) => {
        sumatoria += producto.precio
    })

    return sumatoria
}

mostrarCarrito()

buttonCart = document.getElementById("buttonCart")
buttonCart.addEventListener("click", () => {

    const carritoJson = JSON.stringify(carrito)

    localStorage.setItem("carrito", carritoJson)

    const carritoObjeto = JSON.parse(carritoJson)

    console.log(carritoObjeto)

    let contenedorCarrito = document.getElementById("cartProducts")
    contenedorCarrito.innerHTML = ""
    if (carritoObjeto.length == 0) {
        let aviso = document.createElement("div")
        aviso.innerHTML = `<p>El carrito esta vacio</p>`
        contenedorCarrito.appendChild(aviso)
    } else {
        carritoObjeto.forEach((producto) => {
            let div = document.createElement("div");
            div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${producto.image}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.marca}</h5>
                                            <p class="card-text">${producto.modelo}</p>
                                            <p class="card-text">${producto.precio}</p>
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

    let total = document.createElement("div");
    if (carrito.length > 0) {
        total.innerHTML = `<span>Total: $ ${calcularSumatoria(carrito)}</span>
        <button class="btn btn-success">Pagar</button>`
    }

    contenedorCarrito.appendChild(total)
})

function quitarDelCarrito(indice) {
    // Busca el índice del producto en el array carrito
    const index = carrito.findIndex(producto => producto.indice === indice);

    if (index !== -1) {
        // Elimina el producto del array carrito
        carrito.splice(index, 1);
        console.log("Producto eliminado del carrito:", indice);
        actualizarLocalStorage();
        mostrarCarrito();
    } else {
        console.error("Producto no encontrado en el carrito:", indice);
    }
}


function actualizarLocalStorage() {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}


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


let buttonFiltro = document.getElementById("buttonFiltro");
buttonFiltro.addEventListener("click", () => {
    let precio = 300;
    let filtro = filtrarProductos(precio, ">");
    mostrarProductos(filtro);
});

let buttonFiltro2 = document.getElementById("buttonFiltro2");
buttonFiltro2.addEventListener("click", () => {
    let precio = 300;
    let filtro2 = filtrarProductos(precio, "<");
    mostrarProductos(filtro2);
});



// Ordenar de manera ascendente por precio
const productosOrdenadosAscendente = PRODUCTOS.slice().sort((a, b) => a.precio - b.precio);


// Ordenar de manera descendente por precio
const productosOrdenadosDescendente = PRODUCTOS.slice().sort((a, b) => b.precio - a.precio);


let buttonOrderAsc = document.getElementById("buttonOrderAsc")
buttonOrderAsc.addEventListener("click", () => {

    mostrarProductos(productosOrdenadosAscendente)

})

let buttonOrderDes = document.getElementById("buttonOrderDesc")
buttonOrderDes.addEventListener("click", () => {

    mostrarProductos(productosOrdenadosDescendente)

})

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

let buttonFiltrarPrecio = document.getElementById("buttonFiltrarPrecio");
buttonFiltrarPrecio.addEventListener("click", () => {
    let inputPrecio = document.getElementById("inputPrecio");
    let precioIngresado = parseFloat(inputPrecio.value);

    if (!isNaN(precioIngresado)) {
        // Verifica que el valor ingresado sea un número
        let productosFiltrados = filtrarProductos(precioIngresado, ">");
        mostrarProductos(productosFiltrados);
    } else {
        alert("Por favor, ingrese un valor numérico válido.");
    }
});

