import { ItemContacto } from "../../common/itemContacto/ItemContacto.js"

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("account.svg", "Santiago Enrique De Rosa Vasquez", "2023220"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Valentina Marisol López García", "2031145"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Carlos Alberto Martínez Ruiz", "2042210"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Isabella Fernanda Ramírez Soto", "2053301"));
    sectionContactos.appendChild(ItemContacto("account.svg", "José Luis Herrera Paredes", "2064452"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Camila Andrea Torres Medina", "2075563"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Miguel Ángel Fernández Cruz", "2086674"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Lucía Valentina Gómez Rojas", "2097785"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Diego Sebastián Morales Peña", "2108896"));
    sectionContactos.appendChild(ItemContacto("account.svg", "Natalia Carolina Vargas Díaz", "2119907"));


    return sectionContactos;
}

export { Contactos };