"uses strict";
document.body.onclick=CrearDiv();
function CrearDiv(){
    let NuevoDiv = document.createElement("div");
    NuevoDiv.classList.add("NuevoDiv");
    alert("Creaste un div");
}
