//botones de las cards para abrir la ventana modal
let botones = document.querySelectorAll(".btn-modal");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        let modal = new bootstrap.Modal(document.getElementById("miModal"));
        modal.show();
    })
})
// validacion del formulario
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password".value);
    let message = document.getElementById("message");
    //Valores didacticos para esta actividad
    const USEER_DEFAULT = "prueba@gmail.com";
    const PASSWORD_DEFAULT = "123456";

    if(email === "" || password === ""){
        message.innerHTML = "Todos son obligatorios!";
        message.className = "text-warning";
    }
    else if (email === USER_DEFAULT && password === PASSWORD_DEFAULT){
        message.innerHTML = "Bienvenido al sistema";
        message.className = "text-succes";
    }
    else {
        message.innerHTML = "Error : Usuario o contraseña invalidas!"
        messages.className = "text-danger";
    }
})