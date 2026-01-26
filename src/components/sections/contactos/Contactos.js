import { ItemContacto } from "../../common/itemContacto/ItemContacto.js"
import { ContactList } from "./db.js";
import { Favoritos } from "../../common/favoritosContactos/FavoritoContactos.js"; // Importar para la navegación

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let header = document.createElement("div");
    header.className = "contactos__header";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";

    let btnFavoritos = document.createElement("button");
    btnFavoritos.className = "btn-favoritos-nav";
    btnFavoritos.innerHTML = 'Favoritos <img src="./assets/icons/star.svg" alt="star">';

    btnFavoritos.addEventListener("click", () => {
        const mainContainer = document.querySelector("#main-container") || document.querySelector("main");
        if (mainContainer) {
            mainContainer.innerHTML = "";
            mainContainer.appendChild(Favoritos());
        }
    });

    header.appendChild(h2);
    header.appendChild(btnFavoritos);
    sectionContactos.appendChild(header);

    ContactList.forEach((contact) =>{
        sectionContactos.appendChild(ItemContacto("account.svg",
            contact.nombre, contact.telefono));
    });
    
    return sectionContactos;
}

export { Contactos };