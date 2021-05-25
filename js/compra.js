"use strict"
let tabla = [
    {
        "Nombre": "Evolution VII",
        "Precio": "$100.000",
    },
    {
        "Nombre": "Volkswagen Fox",
        "Precio": "$20.000",
    },
    {
        "Nombre": "Chevrolet corsa",
        "Precio": "$8.000",
    }
];

let t = document.getElementById("tabla-dinamica");
        t.innerHTML = " ";

    for (const o of tabla) {
    t.innerHTML += `<thead>
            <th>Modelo</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <td> ${o.Nombre} </td>
            <td> ${o.Precio} </td>
        </tbody>
        `
    }

document.getElementById("btn-evo").addEventListener("click", compra1);
document.getElementById("btn-supra").addEventListener("click", compra2);
document.getElementById("btn-m30").addEventListener("click", compra3);
document.getElementById("btn-corsa").addEventListener("click", compra4);
document.getElementById("btn-fox").addEventListener("click", compra5);
document.getElementById("btn-golf").addEventListener("click", compra6);


function compra1() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-evo").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-evo").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}
function compra2() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-supra").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-supra").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}
function compra3() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-m3").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-m3").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}
function compra4() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-corsa").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-corsa").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}
function compra5() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-fox").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-fox").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}
function compra6() {
    event.preventDefault();
    let nombre = document.getElementById("nombre-golf").innerHTML;
        console.log(nombre);
    let precio = document.getElementById("valor-golf").innerHTML;
        console.log(precio);

        let nuevoAuto = {
            "Nombre": nombre,
            "Precio": precio,
        };
        tabla.push(nuevoAuto);
        actualizar();
}

function actualizar() {
    let t = document.getElementById("tabla-dinamica");
        t.innerHTML = " ";

    for (const o of tabla) {
    t.innerHTML += `<thead>
            <th>Modelo</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <td> ${o.Nombre} </td>
            <td> ${o.Precio} </td>
        </tbody>
        `
    }
}

document.getElementById("agregar-varios").addEventListener("click", agregarVarios);

function agregarVarios(params) {
    event.preventDefault();
    let tabla2 = [
        {
            "Nombre": "Evolution VII",
            "Precio": "$100.000",
        },
        {
            "Nombre": "Supra",
            "Precio": "$150.000",
        },
        {
            "Nombre": "M3-M30",
            "Precio": "$80.000",
        },
    ];

    for (let i= 0; i < tabla2.length; i++) {
        tabla.push(tabla2[i]);
    }
    actualizar();
}

document.getElementById("borrar").addEventListener("click", borrar);

function borrar() {
    event.preventDefault();
    for (let i= tabla.length; i > 0; i--) {
        tabla.pop(i);
    }
    actualizar();
}
    