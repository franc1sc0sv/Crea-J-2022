import { warning, alertf, nice } from "../js/alerts.js";
const code = document.getElementById('containerinfo1');
const formEmail = document.getElementById('formEmail');
const alert = document.getElementById('alert');
const eye = document.getElementById('eye')
const passwordInput = document.getElementById('password');
const eyeOpacity = document.getElementById('eye');
const correoEnviado = document.getElementById('correoEnviado');
const formCode = document.getElementById('formCode');
const alertCode = document.getElementById('alertCode');
const containerinfo1 = document.querySelector(".containerinfo1");
const formData = document.getElementById('formData');
const alertData = document.getElementById('alertData');
let codeVerification;
var Dataemail;
var Datapassword;
var codigoCorrecto;
let html = document.querySelector("html");
const alertLogin = document.getElementById('alertLogin')

//Es el primer slider del formulario - correo y contraseña
formEmail.addEventListener('submit', function (e) {
    e.preventDefault();//Evite que se ejecute lo que viene por defecto en el navegador que es procesar el formualrio
    let data = new FormData(formEmail);//Informacion del formulario de quien - form email
    let email = data.get('email')
    let passsword = data.get('password')
    let expRegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!expRegEmail.test(email)) {
        //console.log("email")
        let msg;
        if (html.lang == "es") {
            msg = nice("Datos invalidos")
        } else {
            msg = nice("Invalid data")
        }
        //console.log(msg)
        alertLogin.innerHTML = msg;
        showNotification()
    } else if (passsword.length < 6 || passsword.length > 15) {
        console.log("password")
        alert.innerHTML = passswordNot;
    } else {
        fetch('register.php?estatus=stage1', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data == 'repetido') {
                    alert.innerHTML = alertRepietido;
                } else {
                    getCode(data)
                    getEmail(email, passsword)
                    correoEnviado.innerHTML = email;
                    containerinfo1.style.transform = "translateX(-33%)"
                }
            })
    }
})

//funciones para obtener datos privados de un addeventlisener - voy a sacar codigo de verificacion, email y correo
function getCode(code) {
    codeVerification = code;
}
function getEmail(email, password) {
    Dataemail = email;
    Datapassword = password;
}

//Funcion del codigo
formCode.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = new FormData(formCode);
    ///Codigop ingresado por el usuario
    let codeEmail = data.get('codeEmail');

    if (codeEmail != '') {

        if (codeEmail == codeVerification) {
            console.log("Codigo correcto");
            containerinfo1.style.transform = "translateX(-66%)"
            codigoCorrecto = true;
        }
        else if (codeEmail.length !== 4) {
            alertCode.innerHTML = fourDigits;
        }
        else {
            alertCode.innerHTML = DatosIncorrectos;
        }

    } else {
        alertCode.innerHTML = alertEmpty;
    }
})

//Funcion de los datos del usuario
formData.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = new FormData(formData);
    let name = data.get('name');
    let lastname = data.get('lastname');
    let borndate = data.get('borndate');
    let gender = data.get('gender');
    let user = data.get('user');

    // let expRegUser = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let expRegName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (Datapassword == undefined || Dataemail == undefined || codigoCorrecto == undefined) {
        alertData.innerHTML = alertEmpty;
    } else if (Dataemail == "" || Datapassword == "" || name == " " || lastname == "" || borndate == "" || gender == "" || user == "") {
        alertData.innerHTML = alertEmpty;
    } else if (!expRegName.test(name)) {
        alertData.innerHTML = NameNoValido;
    } else {
        //console.log("nice");
        fetch(`register.php?estatus=stage2&name=${name}&lastname=${lastname}&borndate=${borndate}& gender=${gender}& user=${user}& Dataemail=${Dataemail}& Datapassword=${Datapassword}`)
        alertData.innerHTML = Nice;
        function redirec() {
            window.location.href = "index.php";
        }

        setTimeout(redirec, 1500);
    }
})

//Ojito de del password
eye.addEventListener('click', function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOpacity.style.filter = "opacity(1.0)"
    }
    else {
        passwordInput.type = "password";
        eyeOpacity.style.filter = "opacity(0.4)"
    }
})
