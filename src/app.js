import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContactos, viewNewContact, viewToDoList } from "./components/sections/contactos/NavController.js"
//App
let app = document.getElementById("app");
 
//section menú
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button("Agenda", "agenda", "account.svg", viewContactos));
nav.appendChild(Button("Crear Contacto", "plus", "plus.svg", viewNewContact));
nav.appendChild(Button("ToDoList", "todoList", "chequesEnLista.svg", viewToDoList ));
nav.appendChild(Button("Crear Tarea", "plus", "plus.svg"));
 
//section container
let container = document.getElementById("container");
container.innerHTML="";
container.appendChild(Contactos());
 
//cargar el DOM
app.appendChild(nav);
app.appendChild(container);
viewContactos();