//Funcion
let menu = function () {
    let contenedor = document.createElement("div");
    contenedor.className = "div-padre";

    let informacionU = document.createElement("div");
    informacionU.className = "div-hijo-1";
    contenedor.appendChild(informacionU)

    let informacionD = document.createElement("div");
    informacionD.className = "div-hijo-2";
    contenedor.appendChild(informacionD)

    return contenedor;
}

export { menu };