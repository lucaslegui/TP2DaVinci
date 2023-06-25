//array de objetos que continen los productos
const computadoras = [
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I3 3200Mhz – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 129.999, stock: 120 },
    { nombre: 'PC Escritorio Advanced', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 9600K – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 158394, stock: 90 },
    { nombre: 'PC Escritorio Expert', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 11600K – 16GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 174299, stock: 97 },
    { nombre: 'PC Gamer Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I7 11Gen – 8GB DDR4 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 199998, stock: 45 },
    { nombre: 'PC Gamer AMD', imagen: 'assets/computadora1.webp', detalles: 'CPU Amd Ryzen 5 – 16GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 298999, stock: 15 },
    { nombre: 'PC God Level Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU Intel I7 12700 – 32GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 534798, stock: 2 }
];

const teclados = [
    { nombre: 'Teclado T-dagger', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 },
    { nombre: 'Teclado Hyperx', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 },
    { nombre: 'Teclado HyperX Max', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 },
    { nombre: 'Teclado Logitech', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 },
    { nombre: 'Teclado Microsoft', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 },
    { nombre: 'Teclado Redragon', imagen: 'assets/teclado1.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 13.999, stock: 250 }
];

const mouse = [
    { nombre: 'Mouse Logitech Logi', imagen: 'assets/computadora1.webp', detalles: 'CPU I3 3200Mhz – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 129.999, stock: 120 },
    { nombre: 'Mouse Noganet', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 9600K – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 158394, stock: 90 },
    { nombre: 'Mouse Wibo', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 11600K – 16GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 174299, stock: 97 },
    { nombre: 'Mouse Razer', imagen: 'assets/computadora1.webp', detalles: 'CPU I7 11Gen – 8GB DDR4 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 199998, stock: 45 },
    { nombre: 'Mouse Genius', imagen: 'assets/computadora1.webp', detalles: 'CPU Amd Ryzen 5 – 16GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 298999, stock: 15 },
    { nombre: 'Mouse Logitech MXMax3', imagen: 'assets/computadora1.webp', detalles: 'CPU Intel I7 12700 – 32GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 534798, stock: 2 }
];

//declaracion y llamado a los botones
const btnMostrarComputadoras = document.querySelector("#boton-computadoras");
const btnMostrarTeclados = document.querySelector("#boton-teclados");
const btnMostrarMouse = document.querySelector("#boton-mouse");

//listener para los botones
btnMostrarComputadoras.addEventListener("click", function () {
    let contenedor = document.querySelector("#mostrandoComputadoras");
    btnAtributos.call(this, computadoras, contenedor);
});

btnMostrarTeclados.addEventListener("click", function () {
    let contenedor = document.querySelector("#mostrandoTeclados");
    btnAtributos.call(this, teclados, contenedor);
});

btnMostrarMouse.addEventListener("click", function () {
    let contenedor = document.querySelector("#mostrandoMouse");
    btnAtributos.call(this, mouse, contenedor);
});

//manejar el comportamiento del boton segun muestre o no el contenido
function btnAtributos(productos, contenedor) {
    if (this.classList.contains("activo")) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        this.classList.remove("activo");
        this.textContent = "Mostrar";
    } else {
        mostrarProductos.call(this, productos, contenedor);
    }
}

//funcion principal para mostrar los productos en el div
function mostrarProductos(productos, contenedor) {
    //cambiar color y texto cuando el boton esta activo
    this.classList.add("activo");
    this.textContent = "X Cerrar";

    for (const producto of productos) {
        //cargar productos
        let div = document.createElement("div");
        div.classList.add("card");

        let img1 = document.createElement("img");
        img1.src = producto.imagen;
        img1.alt = "Producto";
        div.appendChild(img1);

        let h4 = document.createElement("h4");
        h4.textContent = producto.nombre;
        div.appendChild(h4);

        let divInfo = document.createElement("div");
        divInfo.classList.add("div-info");

        let p1 = document.createElement("p");
        p1.textContent = producto.detalles;
        divInfo.appendChild(p1);

        let img2 = document.createElement("img");
        img2.src = producto.estrellas;
        img2.alt = "estrellas";
        divInfo.appendChild(img2);

        let p2 = document.createElement("p");
        p2.textContent = "$" + producto.precio;
        divInfo.appendChild(p2);

        let stock = document.createElement("p");
        stock.textContent = "Stock: " + producto.stock;
        divInfo.appendChild(stock);

        div.appendChild(divInfo);

        let button = document.createElement("button");
        button.textContent = "Agregar al carrito";
        button.classList.add("btnAgregar");
        div.appendChild(button);

        contenedor.appendChild(div); //mostrar estructura en el div
    }
}

//agregar elementos al carrito
let carrito = [];
console.log(carrito);

function agregarAlCarrito(producto) {
    // Si el producto ya está en el carrito, incrementa la cantidad.
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === producto.nombre) {
            carrito[i].cantidad++;
            return;
        }
    }

    // Si el producto no esta en el carrito, agrega un nuevo articulo al carrito.
    carrito.push({
        nombre: producto.nombre,
        precio: producto.precio = parseFloat(producto.precio),
        cantidad: 1,
    });
}

function actualizarCarrito() {
    let listaCarrito = document.querySelector("#lista-carrito tbody");
    listaCarrito.innerHTML = ""; // solo uso innerHTML para borrar el contenido del tbody.
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = carrito[i].nombre;
        fila.appendChild(celdaNombre);

        let celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = carrito[i].precio;
        fila.appendChild(celdaPrecio);

        let celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = carrito[i].cantidad;
        fila.appendChild(celdaCantidad);

        listaCarrito.appendChild(fila);
        // Actualizar el total del precio.
        total += carrito[i].precio * carrito[i].cantidad;
    }

    //total de la compra
    let filaTotal = document.createElement("tr");

    let celdaTotalTexto = document.createElement("td");
    celdaTotalTexto.textContent = "Total:";
    filaTotal.appendChild(celdaTotalTexto);

    let celdaTotalPrecio = document.createElement("td");
    celdaTotalPrecio.textContent = "$" + total;
    filaTotal.appendChild(celdaTotalPrecio);

    listaCarrito.appendChild(filaTotal);
}

// detector de eventos
document.addEventListener("click", function (e) {
    // Verificar si se hizo clic en un botón Agregar al carrito.
    if (e.target && e.target.classList.contains("btnAgregar")) {
        // Obtener el producto desde la tarjeta de producto.
        let card = e.target.parentElement;
        let producto = {
            nombre: card.querySelector("h4").textContent,
            precio: card.querySelector(".div-info p:nth-child(3)").textContent.slice(1), // Remover el signo pesos
        };

        agregarAlCarrito(producto);
        actualizarCarrito();
    }
});

// vaciar carrito

document.querySelector("#vaciar-carrito").addEventListener("click", function () {
    carrito = []; // vuelve el arrray a default
    actualizarCarrito(); // actualiza el carrito
});


