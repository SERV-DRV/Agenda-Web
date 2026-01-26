import { InfoContactos } from "../infoContactos/InfoContactos.js";

let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    div.style.cursor = "pointer"; 

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;


    div.addEventListener("click", () => {
        const mainContainer = document.querySelector("#main-container") || document.querySelector("main"); 
        
        if (mainContainer) {
            mainContainer.innerHTML = "";
            mainContainer.appendChild(InfoContactos(imgContacto, nombre, telefono));
        }
    });

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
};

export { ItemContacto };