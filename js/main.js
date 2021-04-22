"uses strict";
const value=5;
let btn_formulario = document.getElementById("btn-enviar").addEventListener("click",EnviarFormulario);
function EnviarFormulario(){
    let Resultado=document.querySelector("#Captcha").value;
    console.log(Resultado)
    if (Resultado==value){
        document.querySelector("#Resultado-Captcha").innerHTML="Resultado correcto, su consulta fue envuada"
    }else{
        document.querySelector("#Resultado-Captcha").innerHTML= "Error vuelva a intentarlo"

    }

}