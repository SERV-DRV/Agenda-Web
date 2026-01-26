import { InfoContactos } from "../infoContactos/InfoContactos.js";
import { ContactList } from "../../sections/contactos/db.js";
import { saveContactsToStorage } from "../../../storage/storage.js";

let ItemContacto = (imgContacto, nombre, telefono) => {
  let div = document.createElement("div");
  div.className = "item-contacto";

  const contactoActual = ContactList.find((c) => c.nombre === nombre);

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./assets/icons/${imgContacto}`;

  let etiquetaNombre = document.createElement("p");
  etiquetaNombre.textContent = nombre;

  let etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.textContent = telefono;

  let btnFavorito = document.createElement("img");
  btnFavorito.className = "item-contacto__favorito";
  btnFavorito.src = "./assets/icons/star.svg";

  if (contactoActual && contactoActual.favorito) {
    div.classList.add("es-favorito");
  }

  btnFavorito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (contactoActual) {
      contactoActual.favorito = !contactoActual.favorito;
      div.classList.toggle("es-favorito");
      saveContactsToStorage(ContactList);

      const esVistaFavoritos = document.querySelector(".favoritos-section");
      if (esVistaFavoritos && !contactoActual.favorito) {
        div.remove();
      }
    }
  });

  div.addEventListener("click", () => {
    const mainContainer =
      document.querySelector("#main-container") ||
      document.querySelector("main");
    if (mainContainer) {
      mainContainer.innerHTML = "";
      mainContainer.appendChild(InfoContactos(imgContacto, nombre, telefono));
    }
  });

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaTelefono);
  div.appendChild(btnFavorito);

  return div;
};

export { ItemContacto };
