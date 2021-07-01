"use strict"

////////Formulario que no envia////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector("#form");
form.addEventListener("submit", noEnvia);

function noEnvia(e){
    e.preventDefault(e);
    console.log("funciona");
}

let listaNombresYprecios = [
    {
        "nombre": "Evolution VII",
        "precio": 100000
    },
    {
        "nombre": "M4 Supra",
        "precio": 150000
    },
    {
        "nombre": "M3-m30",
        "precio": 80000
    },
    {
        "nombre": "Chevrolet corsa",
        "precio": 8000
    },
    {
        "nombre": "Volkswagen Fox",
        "precio": 20000
    },
    {
        "nombre": "Volkswagen Golf Turbo",
        "precio": 60000
    }
]

////////////////////////////////////////////////////////////////////////////////////

////////Fetch////////////////////////////////////////////////////////////////////////////////////
const url = "https://60c6d7da19aa1e001769fcab.mockapi.io/api/Autos";
async function obtenerDatos() {
    try{
        let res = await fetch(url);
            let json = await res.json();
                console.log(json);
        for(const autos of json){
            tabla.push(autos);
                UlimoAutoComprado.push(autos);
                    id = UlimoAutoComprado.length
        }
    }catch(error){
        console.log(error);
    }

    mostrar(tabla);
    total();
}

obtenerDatos();

let id = 0;

////////////////////////////////////////////////////////////////////////////////////

async function BorrarApi(id) {

    try{
        let res = await fetch(`${url}/${id}`, {
            "method": "DELETE"
        });
            if(res.status === 200){
                console.log("Borrado carrito");
            }
    }catch(error){
        console.log(error);
    }
}

function Borrar(pos, arr) {
    arr.splice(pos, 1);
}

/*La tabla inicia precargada con un inicio de compra == 0 */

let tabla =[];

function mostrar(a) {
    let t = document.getElementById("tabla-dinamica");

    t.innerHTML = " ";

    let style = 0;

    for (const i of a) {

        t.innerHTML += `<thead>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Contador</th>
            <th>Modificar</th>
            <th>Eliminar</th>
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


mostrar(tabla);

function colorear(s){

    let estilo = String(s);
       let pos = document.getElementById(estilo);
        let p = Number(pos.innerHTML);
            if(p > 70000){
                document.getElementById(estilo).classList.add("precio");
            }
}

document.getElementById("filtro").addEventListener("click", filtradoTabla);

function filtradoTabla() {
    let t = document.getElementById("tablaFiltro");
        t.innerHTML = " ";
    let nombre = document.getElementById("autoCambio").value;

        let arr =[]

        for (const autos of tabla) {
            if(nombre == autos.nombre){
                arr.push(autos);
                    mostrar(arr);
            }
        }
        arr.pop();
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

let UlimoAutoComprado = [];

////////Botones de comprar////////////////////////////////////////////////////////////////////////////////////
let contadorA = 0;
document.getElementById("btn-evo").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-evo").innerHTML;
    let precio = document.getElementById("valor-evo").innerHTML;
        contadorA++;
            id++;
        comprar(nombre, precio, contadorA);
});

    let contadorB = 0;
document.getElementById("btn-supra").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-supra").innerHTML;
    let precio = document.getElementById("valor-supra").innerHTML;
        contadorB++;
            id++;
        comprar(nombre, precio, contadorB);
});

    let contadorC = 0
document.getElementById("btn-m30").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-m30").innerHTML;
    let precio = document.getElementById("valor-m30").innerHTML;
        contadorC++;
            id++;
        comprar(nombre, precio, contadorC);
});

    let contadorD = 0
document.getElementById("btn-corsa").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-corsa").innerHTML;
    let precio = document.getElementById("valor-corsa").innerHTML;
        contadorD++;
            id++;
        comprar(nombre, precio, contadorD);
});

    let contadorE = 0
document.getElementById("btn-fox").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-fox").innerHTML;
    let precio = document.getElementById("valor-fox").innerHTML;
        contadorE++;
            id++;
        comprar(nombre, precio, contadorE);
});

    let contadorF = 0;
document.getElementById("btn-golf").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre-golf").innerHTML;
    let precio = document.getElementById("valor-golf").innerHTML;
        contadorF++;
            id++;
        comprar(nombre, precio, contadorF);
});

////////////////////////////////////////////////////////////////////////////////////

function comprar(n,p,c) {

    let nuevoAuto ={
        "nombre": n,
        "precio": Number(p),
        "contador": Number(c),
        "id": id,
    };

    UlimoAutoComprado.push(nuevoAuto);

    Top(nuevoAuto);

    mostrar(tabla);
    total();
}

////////Busco iguales y si no encuentro agrego a la tabla////////////////////////////////////////////////////////////////////////////////////

async function agregarApi(a){
    let auto = a;

    try{
        let res = await fetch(url, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(auto)
        })
            if(res.status === 201){
                console.log("Agregado al carrito");
            }
    }catch(error){
        console.log(error);
    }
}

async function modificarApi(a) {

    try{
        let res = await fetch(`${url}/${a.id}`, {
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(a)
        });
        if(res.status === 200){
            console.log("modificado");
        }
    }catch(error){
        console.log(error);
    }
}

document.getElementById("agregar-varios").addEventListener("click", function(e) {

    let nombreA = document.getElementById("nombre-evo").innerHTML;
    let precioA = document.getElementById("valor-evo").innerHTML;
        contadorA++;
            id++;
        comprar(nombreA, precioA, contadorA);

    let nombreB = document.getElementById("nombre-supra").innerHTML;
    let precioB = document.getElementById("valor-supra").innerHTML;
        contadorB++;
            id++;
        comprar(nombreB, precioB, contadorB);

    let nombreC = document.getElementById("nombre-m30").innerHTML;
    let precioC = document.getElementById("valor-m30").innerHTML;
        contadorC++;
            id++;
        comprar(nombreC, precioC, contadorC);
       
});

function Top(a) {
     let x = false;

    for (let i = 0; i < tabla.length; i++) {
         if(a.nombre == tabla[i].nombre){
             x = true;
                 tabla[i].contador++;
                 let auto = tabla[i];
                    agregarApi(auto);
         }
     }

     if(x == false){
        agregarApi(a);
            tabla.push(a);
     }
}


////////////////////////////////////////////////////////////////////////////////////

////////Boton de borrar carrito////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar").addEventListener("click", function(e){ borrar(tabla); mostrar(tabla); total();});

////////////////////////////////////////////////////////////////////////////////////

function borrar(t) {

    for (const autos of UlimoAutoComprado) {
        let idA = autos.id;
            BorrarApi(idA);
    }

    for (let i = t.length; i > 0; i--) {
                tabla.pop();
                    UlimoAutoComprado.pop();
    }

}

////////////////////////////////////////////////////////////////////////////////////

////////Boton de borrar utlimo////////////////////////////////////////////////////////////////////////////////////

document.getElementById("borrar-ultimo").addEventListener("click", function(e) {
    id--;
    let ultimo = [];
    ultimo = UlimoAutoComprado;
    borrarUltimo(ultimo);
    ultimo = [];
});

function borrarUltimo(u) {

    let ultimo = [];
        ultimo = u;

    let uComprado = {};
    let pos = ultimo.length - 1;
        uComprado = ultimo[pos];

    let id = uComprado.id;

        for (let  i = 0; i < tabla.length; i++) {
            if(tabla[i].nombre == uComprado.nombre){
                if(tabla[i].contador == 1){
                    console.log("hay uno");
                    BorrarApi(id);
                        tabla.splice(i, 1);
                            UlimoAutoComprado.splice(pos, 1);
                }else{
                    if(tabla[i].contador > 1){
                        console.log("hay mas");
                            tabla[i].contador--;
                                BorrarApi(id);
                                    UlimoAutoComprado.splice(pos, 1);
                    }
                }
            }
        }

        mostrar(tabla);
        total();
}


////////////////////////////////////////////////////////////////////////////////////

////////Boton de pagar///////////////////////////////////////////////////////////////////////////////////

document.getElementById("pagar").addEventListener("click", pago);

function pago() {
    alert("Muchas gracias por su compra!!");
}

////////////////////////////////////////////////////////////////////////////////////
