class Auto {
    constructor(marca, modelo, anio, color, patente, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = parseInt(anio);
        this.color = color;
        this.patente = patente;
        this.precio = parseInt(precio);

    }

}

const autos = [];

const botonEmpezar = document.getElementById('boton');


function agregarAuto() {

    let continuar = true;
    while (continuar) {
        let ingreso = prompt("Ingrese los datos del auto: marca, modelo, anio, color, patente, precio..Todo separado por una barra diagonal (-) Ingresa X para salir");

        if (ingreso.toUpperCase() == "X") {
            continuar = false;
            break;
        }

        let datos = ingreso.split("-");
        const auto = new Auto(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);
        autos.push(auto);
        console.log(autos);
    }
}

botonEmpezar.addEventListener('click', agregarAuto);










const botonBuscar = document.getElementById('botonBusqueda');

function ordenar(criterio, array) {

    let continuar1 = true;
    while (continuar1) {
        let ingreso = prompt("Ingrese el criterio de busqueda: \n 1- marca (de la A a la Z)\n 2- modelo (de la A a la Z)\n 3- anio(mas viejo a mas nuevo)\n 4- color (de la A a la Z)\n 5- patente (de la A a la Z)\n  Ingresa X para salir");
        if (ingreso.toUpperCase() == "X") {
            continuar = false;
            break;
        }
    }
    let arrayOrdenado = array.slice(0);

    switch (ingreso) {
        case '1':
            return arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));

        case '2':
            return arrayOrdenado.sort((a, b) => a.modelo.localeCompare(b.modelo));

        case '3':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);

        case '4':
            return arrayOrdenado.sort((a, b) => a.color.localeCompare(b.color));

        case '5':
            return arrayOrdenado.sort((a, b) => a.patente.localeCompare(b.patente));

        case '6':
            return arrayOrdenado.sort((a, b) => a.precio - b.precio);

        default:
            alert("No es un criterio valido");
    }
}

botonBuscar.addEventListener('click', ordenar, mostrar);



//  Funcion para mostrar//

function mostrar(array) {
    let contenido = "";

    array.forEach(elementos => {
        contenido += 'marca:' + elementos.marca + '\nModelo:' + elementos.modelo + '\nanio:' + elementos.anio + '\ncolor:' + elementos.color + '\npatente:' + elementos.patente + '\n\n' + 'precio:' + elementos.precio + '\n\n';

    });
    return contenido;

    alert(mostrar(ordenar(criterio, autos)));
}

const botonMarca = document.getElementById('botonMarcas');

function marca() {
    let marcaElegido = prompt("Ingrese la marca elegida y le mostaremos los autos que tengan esa marca");
    let arrayFiltrado = autos.filter((auto) => auto.marca.toLowerCase().includes(marcaElegido.toLowerCase()));

    if (arrayFiltrado.length == 0) {
        alert("No hay autos de esa marca");
    } else {
        const filtrados = arrayFiltrado.map(auto => auto.modelo);
        alert("Los autos de la marca " + marcaElegido + " son: " + filtrados.join('\n'));
    }



}

botonMarcas.addEventListener('click', marca);



let colorElegido = prompt("Ingrese el color elegido y le mostaremos los autos que tengan ese color");
let arrayFiltrado2 = autos.filter((auto) => auto.color.toLowerCase().includes(colorElegido.toLowerCase()));

if (arrayFiltrado2.length == 0) {
    alert("No hay autos de ese color");
} else {
    const filtrados2 = arrayFiltrado2.map(auto => auto.modelo);
    alert("Los autos de color " + colorElegido + " son: " + filtrados2.join('\n'));
}


let precioMaximo = prompt("Ingrese el precio maximo y le mostraremos los autos inferiores a ese precio");
let arrayFiltrado3 = autos.filter((auto) => auto.precio <= precioMaximo);
if (arrayFiltrado3 == 0) {
    alert("No hay autos con ese precio");
} else {
    const filtrados3 = arrayFiltrado3.map(auto => auto.modelo);
    alert("Los autos con precio menor o igual a " + precioMaximo + " son: " + filtrados3.join('\n'));
}