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

fetch(
    "https://jsonplaceholder.typicode.com/users"
)
.then(response => response.json())
.then(data => {

    console.log(data);

});

async function obtenerUsuarios() {

    const respuesta =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    const usuarios =
        await respuesta.json();

    console.log(
        usuarios
    );

}

async function obtenerUsuarios() {

    const respuesta =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    const usuarios =
        await respuesta.json();

    mostrarUsuarios(
        usuarios
    );

}

obtenerUsuarios();

function mostrarUsuarios(
    usuarios
) {

    const tabla =
        document.querySelector(
            "#tablaUsuarios"
        );

    tabla.innerHTML = "";

    usuarios.forEach(
        usuario => {

            tabla.innerHTML += `
                <tr>
                    <td>
                        ${usuario.name}
                    </td>

                    <td>
                        ${usuario.email}
                    </td>

                    <td>
                        ${usuario.address.city}
                    </td>
                </tr>
            `;

        }
    );

}