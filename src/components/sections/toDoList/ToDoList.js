import { ItemToDoList } from "../../common/itemToDoList/itemToDoList.js";
import { listdb } from "../toDoList/listdb.js";

let ToDoList = () => {
  let section = document.createElement("section");
  section.className = "todo-list";

  let h2 = document.createElement("h2");
  h2.textContent = "Mi ToDoList";
  section.appendChild(h2);

  const listaOrdenada = [...listdb].sort((a, b) => {
    if (a.prioridad === "Urgente" && b.prioridad !== "Urgente") {
      return -1;
    }
    if (a.prioridad !== "Urgente" && b.prioridad === "Urgente") {
      return 1;
    }
    return 0;
  });

  listaOrdenada.forEach((item) => {
    section.appendChild(
      ItemToDoList(
        item.titulo,
        item.fechaVencimiento,
        item.descripcion,
        item.prioridad,
      ),
    );
  });

  return section;
};

export { ToDoList };
