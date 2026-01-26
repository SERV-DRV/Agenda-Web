import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../../sections/contactos/db.js";

let Favoritos = () => {
  let section = document.createElement("section");
  section.className = "contactos favoritos-section";

  let h2 = document.createElement("h2");
  h2.textContent = "Mis Favoritos";
  section.appendChild(h2);

  const listaFavoritos = ContactList.filter((contact) => contact.favorito);

  listaFavoritos.forEach((contact) => {
    section.appendChild(
      ItemContacto("account.svg", contact.nombre, contact.telefono)
    );
  });

  if (listaFavoritos.length === 0) {
    let p = document.createElement("p");
    p.textContent = "No tienes contactos favoritos aún.";
    p.style.textAlign = "center";
    section.appendChild(p);
  }

  let btnVolver = document.createElement("button");
  btnVolver.className = "info-contactos__boton";
  btnVolver.textContent = "Volver a la lista";
  btnVolver.addEventListener("click", () => window.location.reload());

  section.appendChild(btnVolver);

  return section;
};

export { Favoritos };
