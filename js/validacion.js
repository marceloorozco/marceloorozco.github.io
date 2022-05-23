var nombre = document.getElementById('nom');
var correo = document.getElementById('mail');
var empresa = document.getElementById('company');
var mensaje = document.getElementById('mens');
var expresion = /\w+@+\w+\.+[a-z]+(\.+[a-z])?/;

function validar() {
if (nom.value === "" ){
  alert("Por favor, escribe tu nombre de usuario."); 
  return false;
  }
if (!expresion.test(mail.value)){
  alert("Por favor, ingrese una direccion de correo valida");
  return false;
  }
if (company.value === ""){
  alert("Por favor, indique su empresa.");
  return false;
  }
if (mens.value === ""){
  alert("Por favor, escriba un mensaje.");
  return false;
  }
  return false;
}
