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

let inicioTabla = false;

let tabla =[];

let datosAutos =[];
////////Fetch////////////////////////////////////////////////////////////////////////////////////
const url = "https://60c6d7da19aa1e001769fcab.mockapi.io/api/Autos";
async function obtenerDatos() {
    try{
        let res = await fetch(url);
            let json = await res.json();
                console.log(json);
        for(const autos of json){
            tabla.push(autos);
            datosAutos.push(autos);
        }
    }catch(error){
        console.log(error);
    }

    mostrar();
    total();
}

obtenerDatos();

////////////////////////////////////////////////////////////////////////////////////

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

function inicio() {
    if(inicioTabla == false){
        inicioTabla = true;
            borrar(tabla);
    }
}

async function agregoApi(a) {

    let agregoAuto = a;

    try{
        let res = await fetch(url, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(agregoAuto)
        });
            if(res.status === 201){
                console.log("Agregado con exito");
            }
    }catch(error){
        console.log(error);
    }
}

////////////////////////////////////////////////////////////////////////////////////

let UlimoAutoComprado = {};

////////Botones de comprar////////////////////////////////////////////////////////////////////////////////////
document.getElementById("btn-evo").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-evo").innerHTML;
        comprar(nombre);
});

document.getElementById("btn-supra").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-supra").innerHTML;
        comprar(nombre);
});

document.getElementById("btn-m30").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-m30").innerHTML;
        comprar(nombre);
});

document.getElementById("btn-corsa").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-corsa").innerHTML;
        comprar(nombre);
});

document.getElementById("btn-fox").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-fox").innerHTML;
        comprar(nombre);
});

document.getElementById("btn-golf").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-golf").innerHTML;
        comprar(nombre);
});

////////////////////////////////////////////////////////////////////////////////////

function comprar(n) {

    inicio();

    let nuevoAuto ={};

    for (const auto of datosAutos) {
        if(n == auto.nombre){
                nuevoAuto = auto;
                console.log(nuevoAuto);
        }
    }

    UlimoAutoComprado = nuevoAuto;

    Top(nuevoAuto);

    mostrar();
    total();
}

////////Busco iguales y si no encuentro agrego a la tabla////////////////////////////////////////////////////////////////////////////////////

function Top(a) {
     let x = false;

    for (let i = 0; i < tabla.length; i++) {
         if(a.nombre == tabla[i].nombre){
             x = true;
                 tabla[i].contador++;
                 datosAutos[i].contador = Number(datosAutos.contador++);
                 modificarApi(a);
         }
     }

     if(x == false){
         tabla.push(a);
     }
}

async function modificarApi(a){

    let id = a.id;

    let auto = a;

    try{
        let res = await fetch(`${url}/${id}`,{
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(auto),
        })
            if(res.status === 200){
                console.log("Modificado");
            }
    }catch(error){
        console.log(error);
    }
}

////////////////////////////////////////////////////////////////////////////////////

document.getElementById("editarDOM").addEventListener("click", Editar);

function Editar() {

        let numero = document.getElementById("modId").value;
        let cantidad = document.getElementById("modCantidad").value;

        for (let i = 0; i < tabla.length; i++) {
            if(numero == tabla[i].id){
                tabla[i].contador = cantidad;
                datosAutos[i].contador = Number(cantidad);
                modificarApi(datosAutos[i]);
            }
        }

        mostrar();

    document.getElementById("modId").value = " ";
    document.getElementById("modCantidad").value = " ";
}

////////Boton de borrar carrito////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar").addEventListener("click", function(e){ borrar(tabla); mostrar(); total();});

////////////////////////////////////////////////////////////////////////////////////

function borrar(t) {

    for (let i = t.length; i > 0; i--) {
        tabla.pop();
    }
}

////////////////////////////////////////////////////////////////////////////////////

async function borrarUltimoApi(a){

    let id = a.id;

    try{
        let res = await fetch(`${url}/${id}`, {
            "method": "DELETE"
        });
            if(res.status === 200){
                console.log("Eliminado con exito");
            }
    }catch(error){
        console.log(error);
    }
}

////////Boton de borrar utlimo////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar-ultimo").addEventListener("click", function(e) {
    let ultimo = UlimoAutoComprado;
    borrarUltimo(ultimo);
    UlimoAutoComprado = {};
});

function borrarUltimo(u) {

    let ultimo = u;
        console.log(ultimo);

        for (let  i = 0; i < tabla.length; i++) {
            if(tabla[i].nombre == ultimo.nombre){
                if(tabla[i].contador == 1){
                    console.log("hay uno");
                        tabla.splice(i, 1);
                            datosAutos[i].contador--;
                                borrarUltimoApi(ultimo);
                }else{
                    if(tabla[i].contador > 1){
                        console.log("hay mas");
                            tabla[i].contador--;
                                datosAutos[i].contador--;
                                    modificarApi(tabla[i]);
                    }
                }
            }
        }
        mostrar();
        total();
}


////////////////////////////////////////////////////////////////////////////////////

////////Boton de pagar///////////////////////////////////////////////////////////////////////////////////

document.getElementById("pagar").addEventListener("click", pago);

function pago() {
    alert("Muchas gracias por su compra!!");
}

////////////////////////////////////////////////////////////////////////////////////
