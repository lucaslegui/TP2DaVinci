
const computadoras = [
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I3 3200Mhz – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 129.999, stock: 120 },
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 9600K – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 158394, stock: 90 },
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I5 11600K – 16GB DDR3 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 174299, stock: 97 },
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU I7 11Gen – 8GB DDR4 – SSD 240GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 199998, stock: 45 },
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU Amd Ryzen 5 – 16GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 298999, stock: 15 },
    { nombre: 'PC Escritorio Intel', imagen: 'assets/computadora1.webp', detalles: 'CPU Intel I7 12700 – 32GB DDR4 – SSD 512GB – Sistema Operativo Windows 11', estrellas: 'assets/estrellas.png', precio: 534798, stock: 2 }
];

const btnMostrar = document.querySelector('#boton-computadoras');
// btnMostrar.addEventListener('click', mostrarProductos);


function mostrarProductos() {

    //cambiar color y texto cuando el boton esta activo
    this.classList.add('activo');
    this.textContent = "X Cerrar";

    //mostrar productos
    let mostrar = document.querySelector('#mostrandoProductos');

    for (const computadora of computadoras) {

        //cambia color y texto cuando el boton esta activo        
        this.classList.add('activo');
        this.textContent = "X Cerrar";

        //cargar productos
        let div = document.createElement('div');
        div.classList.add('card');

        let img1 = document.createElement('img');
        img1.src = computadora.imagen;
        img1.alt = "computadora";
        div.appendChild(img1);

        let h4 = document.createElement('h4');
        h4.textContent = computadora.nombre;
        div.appendChild(h4);

        let divInfo = document.createElement('div');
        divInfo.classList.add('div-info');

        let p1 = document.createElement('p');
        p1.textContent = computadora.detalles;
        divInfo.appendChild(p1);

        let img2 = document.createElement('img');
        img2.src = computadora.estrellas;
        img2.alt = "estrellas";
        divInfo.appendChild(img2);

        let p2 = document.createElement('p');
        p2.textContent = "$" + computadora.precio;
        divInfo.appendChild(p2);

        let stock = document.createElement('p');
        stock.textContent = "Stock: " + computadora.stock;
        divInfo.appendChild(stock);

        div.appendChild(divInfo);

        let button = document.createElement('button');
        button.textContent = "Agregar al carrito";
        button.classList.add("btnAgregar");
        div.appendChild(button);

        mostrar.appendChild(div);
    }
}


//funcion cerrar boton

btnMostrar.addEventListener('click', function () {
    if (this.classList.contains('activo')) {
        let tarjetas = document.querySelector('#mostrandoProductos')
        while (tarjetas.firstChild) {
            tarjetas.removeChild(tarjetas.firstChild)
        }
        this.classList.remove('activo');
        this.textContent = "Mostrar";
    } else {
        mostrarProductos.call(this);
    }
});