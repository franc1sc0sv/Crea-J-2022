let body = document.querySelector("body");
let btnMode = document.getElementById("btnMode");
if (!localStorage.dark) {
    localStorage.setItem("dark", "no");
}

btnMode.addEventListener("click", function () {
    let val = body.classList.toggle("darkmode");
    let val1 = body.classList.toggle("font-mode");
    body.style.transition = '3s';

    console.log(val)

    if (val) {
        localStorage.dark = "si"//El primero es de asignacion, segundo comparacion y tercero comparacion de variables y tipos de datos//
        document.querySelector(".cambio").src = "../img/imagenes/dom.png";
    } else {
        localStorage.dark = "no"
        document.querySelector(".cambio").src = "../img/imagenes/luna.png";
    }
})

if (localStorage.dark == "si") {
    body.classList.add("darkmode");
    body.classList.add("font-mode");
    document.querySelector(".cambio").src = "../img/imagenes/dom.png";
} else {
    body.classList.remove("darkmode");
    body.classList.remove("font-mode");
    document.querySelector(".cambio").src = "../img/imagenes/luna.png";
}