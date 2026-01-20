import { NewContactForm } from "../newContactForm/NewContactForm.js";
import { Contactos } from "../contactos/Contactos.js"
import { ToDoList } from "../toDoList/ToDoList.js";

let container = document.getElementById("");

let viewContactos = function(){
    let container = document.getElementById("container");
    container.innerHTML ="";
    container.appendChild(Contactos());
}

let viewNewContact = function (){
    let container = document.getElementById("container");
    container.innerHTML ="";
    container.appendChild(NewContactForm());
}

let viewToDoList = () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(ToDoList());
};

export {viewContactos, viewNewContact, viewToDoList};