const PRODUCTOS = [
    { marca: "nox", modelo: "ml10", peso: 350, material: "fibra", forma: "redonda", precio: 280, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/125134708fdb936c7141781687528113276410241024-c651a71768ec09e45b17024981446326-1024-1024.webp" },
    { marca: "head", modelo: "delta", peso: 380, material: "fibra", forma: "redonda", precio: 200, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/141e601bce500d13ef9791688506029202910241024-cba846114b0b7471f217024714200157-1024-1024.webp" },
    { marca: "babolat", modelo: "counter", peso: 360, material: "fibra", forma: "redonda", precio: 400, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/16130654e25e5061dd5611694645239469910241024-22beccae8cc3aee1a617024727793935-1024-1024.webp" },
    { marca: "bullpadel", modelo: "vertex03", peso: 370, material: "fibra", forma: "redonda", precio: 450, image: "https://acdn.mitiendanube.com/stores/003/106/548/products/1231dd5ac892f5922962eb1688573277080910241024-30d37536070c8afb5917007696714625-1024-1024.webp" }
]

const carrito = []

function mostrarProductos(vector) {
    vector.forEach((producto) => {
        let contenedorProductos = document.getElementById("contenedorProductos")

        let div = document.createElement("div")

        div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.marca}</h5>
                            <p class="card-text">Modelo: ${producto.modelo}</p>
                            <p class="card-text">${producto.precio}</p>
                            <a href="#" class="btn btn-primary">Añadir al carrito</a>
                        </div>
                    </div>`

        contenedorProductos.appendChild(div)
    })
}

let buttonFiltro = document.getElementById("buttonFiltro")
buttonFiltro.onclick = () => {
    let filtro
    let precio = 300

    filtro = PRODUCTOS.filter((prod) => prod.precio > precio)
    mostrarProductos(filtro)
}

let buttonFiltro2 = document.getElementById("buttonFiltro2")
buttonFiltro2.onclick = () => {
    let filtro
    let precio = 300

    filtro = PRODUCTOS.filter((prod) => prod.precio < precio)
    mostrarProductos(filtro)
}

let filterForm = document.getElementById("filterForm")

filterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let filtro


})

