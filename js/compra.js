"use strict"

////////Formulario que no envia////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector("#form");
form.addEventListener("submit", noEnvia);

function noEnvia(e){
    e.preventDefault(e);
    console.log("funciona");
}

////////////////////////////////////////////////////////////////////////////////////

/*La tabla inicia precargada con un inicio de compra == 0 */

let tabla =[
    {
        "nombre": "Evolution VII Precargado",
        "precio": "100000",
        "contador": "0"            
    },
    {
        "nombre": "Evolution VII",
        "precio": "100000",
        "contador": "0"                        
    },
    {
        "nombre": "Evolution VII",
        "precio": "100000",
        "contador": "0"                
    },
];

function mostrar() {
    let t = document.getElementById("tabla-dinamica");

    t.innerHTML = " ";

    let style = 0;

    for (const i of tabla) {

        t.innerHTML += `<thead>
            <th>Modelo</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <td> ${i.nombre} </td>
            <td id="${style}"> ${i.precio} </td>
            <td> ${i.contador} </td>
        </tbody>
        `
        colorear(style);
        style++;
    }
    
}

mostrar();

function colorear(s){

    let estilo = String(s);
       let pos = document.getElementById(estilo);
        let p = Number(pos.innerHTML);
            if(p > 70000){
                document.getElementById(estilo).classList.add("precio");
            }
}

////////total////////////////////////////////////////////////////////////////////////////////////

function total() {
    let valor = 0;
    let valorMulti = 0;

    for (let i = 0; i < tabla.length; i++) {
        valorMulti = Number(tabla[i].precio) * Number(tabla[i].contador);
        valor += valorMulti;
    }

    console.log(valor);

    document.getElementById("total").innerHTML = "$" + valor;
}

total();

////////////////////////////////////////////////////////////////////////////////////

////////Botones de comprar////////////////////////////////////////////////////////////////////////////////////

    let contadorA = 0;
document.getElementById("btn-evo").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-evo").innerHTML;
    let precio = document.getElementById("valor-evo").innerHTML;
        contadorA++;
        comprar(nombre, precio, contadorA);
});

    let contadorB = 0;
document.getElementById("btn-supra").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-supra").innerHTML;
    let precio = document.getElementById("valor-supra").innerHTML;
        contadorB++;
        comprar(nombre, precio, contadorB);
});

    let contadorC = 0
document.getElementById("btn-m30").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-m30").innerHTML;
    let precio = document.getElementById("valor-m30").innerHTML;
        contadorC++;
        comprar(nombre, precio, contadorC);
});

    let contadorD = 0
document.getElementById("btn-corsa").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-corsa").innerHTML;
    let precio = document.getElementById("valor-corsa").innerHTML;
        contadorD++; 
        comprar(nombre, precio, contadorD);
});

    let contadorE = 0
document.getElementById("btn-fox").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-fox").innerHTML;
    let precio = document.getElementById("valor-fox").innerHTML;
        contadorE++;
        comprar(nombre, precio, contadorE);
});

    let contadorF = 0;
document.getElementById("btn-golf").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-golf").innerHTML;
    let precio = document.getElementById("valor-golf").innerHTML;
        contadorF++;
        comprar(nombre, precio, contadorF);
});

function comprar(n, p, c){

/*Al hacer la primera compra la tabla precargada se reiniciara con los datos correspondientes, es decir, los elegidos por el usuario. */
    if(tabla[0].nombre == "Evolution VII Precargado"){
        borrar(tabla);
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let nuevoAuto ={
        "nombre": n,
        "precio": p,
        "contador": c,
    };

    Top(nuevoAuto);

    
    mostrar();
    total();
}

////////////////////////////////////////////////////////////////////////////////////

////////Boton de agregar premiums////////////////////////////////////////////////////////////////////////////////////

document.getElementById("agregar-varios").addEventListener("click", function(e){

    if(tabla[0].nombre == "Evolution VII Precargado"){
        borrar(tabla);
    }

    let c = 1;
    let autosTop =[{
        "nombre": "Evolution VII",
        "precio": "100000",
        "contador": c,
    },
    {
        "nombre": "M4 Supra",
        "precio": "150000",
        "contador": c,
    },
    {
        "nombre": "M3-m30",
        "precio": "80000",
        "contador": c,
    },
];

    for (let i = 0; i < autosTop.length; i++) {
        Top(autosTop[i]);
    }

    mostrar();
    total();

});

////////////////////////////////////////////////////////////////////////////////////

////////Busco iguales y si no encuentro agrego a la tabla////////////////////////////////////////////////////////////////////////////////////

function Top(a) {
    let x = false;

    for (let i = 0; i < tabla.length; i++) {
        if(a.nombre == tabla[i].nombre){
            x = true;
            tabla[i].contador++;
        }
    }

    if(x == false){
        tabla.push(a);
    }
}

////////////////////////////////////////////////////////////////////////////////////

////////Boton de borrar carrito////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar").addEventListener("click", function(e){ borrar(tabla); mostrar(); total();});

////////////////////////////////////////////////////////////////////////////////////

function borrar(t, n) {
    for (let i = t.length; i > 0; i--) {
        tabla.pop();
    }
}

////////////////////////////////////////////////////////////////////////////////////