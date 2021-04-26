"uses strict";
const valueCaptcha=5;
let btn_formulario = document.getElementById("btn-enviar").addEventListener("click",EnviarFormulario);
function EnviarFormulario(){
    let Resultado=document.querySelector("#Captcha").value;
    if (Resultado==valueCaptcha){
        document.querySelector("#Resultado-Captcha").innerHTML="Resultado correcto, su consulta fue enviada"
    }else{
        document.querySelector("#Resultado-Captcha").innerHTML= "Error vuelva a intentarlo"

    }

}