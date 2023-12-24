const PRODUCTOS = [
    { marca: "nox", modelo: "ml10", categoria: "paleta", peso: 350, material: "fibra", forma: "redonda", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/125134708fdb936c7141781687528113276410241024-c651a71768ec09e45b17024981446326-1024-1024.webp" },
    { marca: "head", modelo: "delta", categoria: "paleta", peso: 380, material: "fibra", forma: "redonda", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/141e601bce500d13ef9791688506029202910241024-cba846114b0b7471f217024714200157-1024-1024.webp" },
    { marca: "babolat", modelo: "counter", categoria: "paleta", peso: 360, material: "fibra", forma: "redonda", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/16130654e25e5061dd5611694645239469910241024-22beccae8cc3aee1a617024727793935-1024-1024.webp" },
    { marca: "bullpadel", modelo: "vertex03", categoria: "paleta", peso: 370, material: "fibra", forma: "redonda", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1231dd5ac892f5922962eb1688573277080910241024-30d37536070c8afb5917007696714625-1024-1024.webp" },
    { marca: "bullpadel", modelo: "vertex03", categoria: "pelota", peso: 370, material: "fibra", forma: "redonda", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1231dd5ac892f5922962eb1688573277080910241024-30d37536070c8afb5917007696714625-1024-1024.webp" }
]

const carrito = []

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
                            <a href="#" class="btn btn-primary">Añadir al carrito</a>
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
