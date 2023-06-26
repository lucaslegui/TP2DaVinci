//array de objetos que continen los productos
const computadoras = [
    { nombre: 'PC Escritorio Intel', imagen: 'assets/productos/computadora1.webp', detalles: 'CPU I3 3200Mhz – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 129999, stock: 120 },
    { nombre: 'PC Escritorio Advanced', imagen: 'assets/productos/computadora2.webp', detalles: 'CPU I5 9600K – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 158394, stock: 90 },
    { nombre: 'PC Escritorio Expert', imagen: 'assets/productos/computadora3.webp', detalles: 'CPU I5 11600K – 16GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 174299, stock: 97 },
    { nombre: 'PC Gamer Intel', imagen: 'assets/productos/computadora4.webp', detalles: 'CPU I7 11Gen – 8GB DDR4 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 199998, stock: 45 },
    { nombre: 'PC Gamer AMD', imagen: 'assets/productos/computadora5.webp', detalles: 'CPU Amd Ryzen 5 – 16GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 298999, stock: 15 },
    { nombre: 'PC God Level Intel', imagen: 'assets/productos/computadora6.webp', detalles: 'CPU Intel I7 12700 – 32GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 534798, stock: 2 }
];

const teclados = [
    { nombre: 'Teclado Gamer Good Game', imagen: 'assets/productos/teclado1.webp', detalles: 'Teclado 80% Rainbow Blue Switch Esp Negro Español Latinoamérica', estrellas: 'assets/estrellas.png', precio: 13999, stock: 250 },
    { nombre: 'Teclado Hyperx', imagen: 'assets/productos/teclado2.webp', detalles: 'Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa', estrellas: 'assets/estrellas.png', precio: 12590, stock: 24 },
    { nombre: 'Teclado Mecánico T-dagger', imagen: 'assets/productos/teclado3.webp', detalles: 'Mecanico Gamer 60% T-dagger Arena Azul Rgb Brown', estrellas: 'assets/estrellas.png', precio: 4394, stock: 60 },
    { nombre: 'Teclado Mecánico Marvo', imagen: 'assets/productos/teclado4.webp', detalles: 'Kg962 60% Switch Red Rainbow Negro Inglés', estrellas: 'assets/estrellas.png', precio: 9941, stock: 24 },
    { nombre: 'Teclado Redragon Dragonborn', imagen: 'assets/productos/teclado5.webp', detalles: 'Teclado K630 QWERTY Redragon Brown inglés US color negro con luz RGB', estrellas: 'assets/estrellas.png', precio: 21999, stock: 315 },
    { nombre: 'Teclado Gamer Mecanico Redragon Mitra K551rgb Español Rgb', imagen: 'assets/productos/teclado6.webp', detalles: 'Reforzado con placa de acero, con teclas de doble inyección y diseño anti salpicaduras. ', estrellas: 'assets/estrellas.png', precio: 37000, stock: 250 }
];

const mouse = [
    { nombre: 'Mouse Gamer Noga Retroiluminado 2400 Dpi Usb Storme', imagen: 'assets/productos/mouse1.webp', detalles: 'Mouse Gamer con Retroiluminación LED multicolor.', estrellas: 'assets/estrellas.png', precio: 1200, stock: 790 },
    { nombre: 'Mouse inalámbrico Logitech M280', imagen: 'assets/productos/mouse2.webp', detalles: 'Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click', estrellas: 'assets/estrellas.png', precio: 10386, stock: 90 },
    { nombre: 'Mouse inalambrico Recargable 2.4g Portatil Bluetooth Luz Led', imagen: 'assets/productos/mouse3.webp', detalles: 'Mouse Inalámbrico Bluetooth 800 / 1200 / 1600 DPI con Luz LED', estrellas: 'assets/estrellas.png', precio: 3499, stock: 97 },
    { nombre: 'Mouse Xinua M8 Gamer Recargable Luz Rgb 6 Botones', imagen: 'assets/productos/mouse4.webp', detalles: 'Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.', estrellas: 'assets/estrellas.png', precio: 7790, stock: 45 },
    { nombre: 'Mouse gamer Logitech G Series Lightsync G203 negro', imagen: 'assets/productos/mouse5.webp', detalles: 'Solo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.', estrellas: 'assets/estrellas.png', precio: 17050, stock: 15 },
    { nombre: 'Mouse Logitech Master Series MX Master 3 grafito', imagen: 'assets/productos/mouse6.webp', detalles: 'Su sensor Darkfield te permitirá accionar con gran detalle y exactitud, gracias a su tecnología de seguimiento.', estrellas: 'assets/estrellas.png', precio: 69000, stock: 12 }
];

//declaracion y llamado a los botones
const btnMostrarComputadoras = document.querySelector('#boton-computadoras');
const btnMostrarTeclados = document.querySelector('#boton-teclados');
const btnMostrarMouse = document.querySelector('#boton-mouse');
//carrito
const btnMostrarCarrito = document.querySelector('.carrito-img');
const ventanaModal = document.querySelector('#carrito-modal');
const btnCerrar = document.querySelector('#cerrarCarrito');


//listener para los botones
btnMostrarComputadoras.addEventListener('click', function () {
    let contenedor = document.querySelector('#mostrandoComputadoras');
    btnAtributos.call(this, computadoras, contenedor);
});

btnMostrarTeclados.addEventListener('click', function () {
    let contenedor = document.querySelector('#mostrandoTeclados');
    btnAtributos.call(this, teclados, contenedor);
});

btnMostrarMouse.addEventListener('click', function () {
    let contenedor = document.querySelector('#mostrandoMouse');
    btnAtributos.call(this, mouse, contenedor);
});

//mostar carrito
btnMostrarCarrito.addEventListener('click', function () {
    if(ventanaModal.style.visibility === 'visible'){
        ventanaModal.style.visibility = 'hidden';
    } else {
        ventanaModal.style.visibility = 'visible';
    }
});

//cerrar carrito
btnCerrar.addEventListener('click', function() {
    if(ventanaModal.style.visibility === 'visible'){
    ventanaModal.style.visibility = 'hidden';}
    console.log('boton cerrar')
});


//manejar el comportamiento del boton segun muestre o no el contenido
function btnAtributos(productos, contenedor) {
    if (this.classList.contains('activo')) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        this.classList.remove('activo');
        this.textContent = 'Mostrar';
    } else {
        mostrarProductos.call(this, productos, contenedor);
    }
}

//funcion principal para mostrar los productos en el div
function mostrarProductos(productos, contenedor) {
    //cambiar color y texto cuando el boton esta activo
    this.classList.add('activo');
    this.textContent = 'X Cerrar';

    for (const producto of productos) {
        //cargar productos
        let div = document.createElement('div');
        div.classList.add('card');

        let img1 = document.createElement('img');
        img1.src = producto.imagen;
        img1.alt = 'Producto';
        div.appendChild(img1);

        let h4 = document.createElement('h4');
        h4.textContent = producto.nombre;
        div.appendChild(h4);

        let divInfo = document.createElement('div');
        divInfo.classList.add('div-info');

        let p1 = document.createElement('p');
        p1.textContent = producto.detalles;
        divInfo.appendChild(p1);

        let img2 = document.createElement('img');
        img2.src = producto.estrellas;
        img2.alt = 'estrellas';
        divInfo.appendChild(img2);

        let p2 = document.createElement('p');
        p2.textContent = '$' + producto.precio;
        p2.classList.add('precio');
        divInfo.appendChild(p2);

        let stock = document.createElement('p');
        stock.textContent = 'Stock: ' + producto.stock;
        divInfo.appendChild(stock);

        div.appendChild(divInfo);

        let button = document.createElement('button');
        button.textContent = 'Agregar al carrito';
        button.classList.add('btnAgregar');
        div.appendChild(button);

        contenedor.appendChild(div); //mostrar estructura en el div
    }
}



//agregar elementos al carrito

let carrito = [];


// detector de eventos
const detectProducto = document.querySelector('.categorias');

detectProducto.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btnAgregar')) {
        const producto = e.target.parentElement

            const productoAgregado = {
            cantidad: 1,
            nombre: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.div-info p:nth-child(3)').textContent,
            }

            //saber si un producto ya esta en el carrito
            const productoEnCarrito = carrito.some(producto => producto.nombre === productoAgregado.nombre);

            if (productoEnCarrito) {
                const productos = carrito.map(producto => {
                if (producto.nombre === productoAgregado.nombre) {
                    producto.cantidad++;
                    return producto;
                } else {
                    return producto;
                }             
                });
                carrito = [...productos];

            } else{

            carrito= [...carrito, productoAgregado];}   
     
        actualizarCarrito();
    } 
});

function actualizarCarrito() {
    const contenedorProductos = document.querySelector('#lista-carrito tbody');
    contenedorProductos.innerHTML = ''; // solo uso innerHTML para borrar el contenido del tbody.
    let total = 0;
    
    carrito.forEach(producto => {
        
        let fila = document.createElement('tr');

        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        let celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = producto.precio;
        fila.appendChild(celdaPrecio);

        let celdaCantidad = document.createElement('td');
        celdaCantidad.textContent = producto.cantidad;
        fila.appendChild(celdaCantidad);

        contenedorProductos.appendChild(fila);

        //sumar el precio total, convertir el string a number
        total += parseFloat(producto.precio.slice(1)) * producto.cantidad;
    })
    //crando el elemento total en el carrito
    let filaTotal = document.createElement('tr');

    let celdaTotalTexto = document.createElement('td');
    celdaTotalTexto.textContent = 'Total:';
    filaTotal.appendChild(celdaTotalTexto);

    let celdaTotalPrecio = document.createElement('td');
    celdaTotalPrecio.textContent = '$' + total;
    filaTotal.appendChild(celdaTotalPrecio);

    contenedorProductos.appendChild(filaTotal);
}

// vaciar carrito

document.querySelector('#vaciar-carrito').addEventListener('click', function () {
    carrito = []; // vuelve el arrray a default
    actualizarCarrito(); // actualiza el carrito
});