"use strict"

////////Formulario que no envia////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector("#form");
form.addEventListener("submit", noEnvia);

function noEnvia(e){
    e.preventDefault(e);
    console.log("funciona");
}

////////////////////////////////////////////////////////////////////////////////////

let tabla =[
    {
        "nombre": "Evolution VII",
        "precio": "100000"
    },
    {
        "nombre": "Evolution VII",
        "precio": "100000"
    },
    {
        "nombre": "Evolution VII",
        "precio": "100000"
    },
];

function mostrar() {
    let t = document.getElementById("tabla-dinamica");

    t.innerHTML = " ";

    for (const i of tabla) {
        t.innerHTML += `<thead>
            <th>Modelo</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <td> ${i.nombre} </td>
            <td> ${i.precio} </td>
        </tbody>
        `
    }
}

mostrar();

////////Boton de borrar carrito////////////////////////////////////////////////////////////////////////////////////

function total() {
    let valor = 0;

    for (let i = 0; i < tabla.length; i++) {
        valor += Number(tabla[i].precio);
    }

    console.log(valor);

    document.getElementById("total").innerHTML = "$" + valor;
}

total();

////////////////////////////////////////////////////////////////////////////////////

////////Botones de comprar////////////////////////////////////////////////////////////////////////////////////

document.getElementById("btn-evo").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-evo").innerHTML;
    let precio = document.getElementById("valor-evo").innerHTML;
        comprar(nombre, precio);
});

document.getElementById("btn-supra").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-supra").innerHTML;
    let precio = document.getElementById("valor-supra").innerHTML;
        comprar(nombre, precio);
});

document.getElementById("btn-m30").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-m30").innerHTML;
    let precio = document.getElementById("valor-m30").innerHTML;
        comprar(nombre, precio);
});

document.getElementById("btn-corsa").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-corsa").innerHTML;
    let precio = document.getElementById("valor-corsa").innerHTML; 
        comprar(nombre, precio);
});

document.getElementById("btn-fox").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-fox").innerHTML;
    let precio = document.getElementById("valor-fox").innerHTML
        comprar(nombre, precio);
});

document.getElementById("btn-golf").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-golf").innerHTML;
    let precio = document.getElementById("valor-golf").innerHTML 
        comprar(nombre, precio);
});

function comprar(n, p){
    
    let nuevoAuto ={
        "nombre": n,
        "precio": p,
    };

    tabla.push(nuevoAuto);
    mostrar();
    total();
}

////////////////////////////////////////////////////////////////////////////////////

////////Boton de agregar premiums////////////////////////////////////////////////////////////////////////////////////

document.getElementById("agregar-varios").addEventListener("click", function(e){

    let autosTop =[{
        "nombre": "Evolution VII",
        "precio": "100000",
    },
    {
        "nombre": "M4 Supra",
        "precio": "150000",
    },
    {
        "nombre": "M3-m30",
        "precio": "80000",
    },
];

    for (let i = 0; i < autosTop.length; i++) {
        tabla.push(autosTop[i]);
    }

    mostrar();
    total();

});

////////////////////////////////////////////////////////////////////////////////////

////////Boton de borrar carrito////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar").addEventListener("click", function(e){ borrar(tabla); mostrar(); total();});

function borrar(t) {
    for (let i = t.length; i > 0; i--) {
        tabla.pop();
    }
}

////////////////////////////////////////////////////////////////////////////////////