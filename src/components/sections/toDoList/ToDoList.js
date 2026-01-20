import { ItemToDoList } from "../../common/itemToDoList/itemToDoList.js";
import { listdb } from "../toDoList/listdb.js";

let ToDoList = () => {
    let section = document.createElement("section");
    section.className = "todo-list";

    let h2 = document.createElement("h2");
    h2.textContent = "Mi ToDoList";
    section.appendChild(h2);

    listdb.forEach((item) => {
        section.appendChild(ItemToDoList(item.titulo, item.fechaVencimiento, item.descripcion));
    });

    return section;
};

export { ToDoList };
