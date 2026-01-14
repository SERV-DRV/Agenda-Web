import { NewContactForm } from "../newContactForm/NewContactForm";
import { Contactos } from "../contactos/Contactos.js"

let container = document.getElementById("");

let viewContactos = function(){
    container.innerHTML ="";
    container.appendChild(Contactos());
}

let viewNewContact = function (){
    container.innerHTML ="";
    container.appendChild(NewContactForm());
}

export {viewContactos, viewNewContact};