const titulo = document.querySelector("h2");

console.log(titulo);

const total = 
    document.querySelector("#totalUsuarios");

total.textContent = "200";

const boton =
    document.querySelector(
        "#btnCargar"
    );

boton.addEventListener(
    "click",
    function () {

        console.log(
            "El usuario hizo clic"
        );

    }
);