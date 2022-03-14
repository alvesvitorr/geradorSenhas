
let sliderElement =document.querySelector("#slider");
let buttonElement =document.querySelector("#button");

let sizePassword =document.querySelector("#valor");
let Password =document.querySelector("#password");

let containerPassword =document.querySelector("#container-password");

let charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha= "";

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
sizePassword.innerHTML = this.value;

}

function geradorPassword(){
    let passwd = "";
    for(let i=0, n= charset.length; i < sliderElement.value; ++i){
       passwd += charset.charAt(Math.floor(Math.random()*n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = passwd;
    novaSenha = passwd;

}


function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}