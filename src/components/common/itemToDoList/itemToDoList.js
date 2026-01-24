import { listdb } from "../../sections/toDoList/listdb.js";
import { saveTasksToStorage } from "../../../storage/storage.js";

let ItemToDoList = (titulo, fechaVencimiento, descripcion) => {
  let div = document.createElement("div");
  div.className = "item-todolist";

  const tareaActual = listdb.find((t) => t.titulo === titulo);

  let simbolo = document.createElement("img");
  simbolo.className = "item-todolist__simbolo";

  if (tareaActual && tareaActual.completada) {
    simbolo.src = "./assets/icons/cheque.svg";
    simbolo.alt = "Completado";
    div.classList.add("completado");
  } else {
    simbolo.src = "./assets/icons/x.svg";
    simbolo.alt = "No completado";
  }

  let pTitulo = document.createElement("p");
  pTitulo.className = "item-todolist__text";
  pTitulo.textContent = titulo;

  let pFecha = document.createElement("p");
  pFecha.className = "item-todolist__fecha";
  pFecha.textContent = fechaVencimiento;

  let pDescripcion = document.createElement("p");
  pDescripcion.className = "item-todolist__descripcion";
  pDescripcion.textContent = descripcion;

  let btnEliminar = document.createElement("img");
  btnEliminar.className = "item-todolist__eliminar";
  btnEliminar.src = "./assets/icons/trashDelete.svg";
  btnEliminar.alt = "Eliminar tarea";

  div.addEventListener("click", () => {
    if (!div.classList.contains("completado")) {
      simbolo.src = "./assets/icons/cheque.svg";
      simbolo.alt = "Completado";
      div.classList.add("completado");

      const tarea = listdb.find((t) => t.titulo === titulo);
      if (tarea) {
        tarea.completada = true;
        saveTasksToStorage(listdb);
      }
    }
  });

  btnEliminar.addEventListener("click", (e) => {
    e.stopPropagation();

    const index = listdb.findIndex((t) => t.titulo === titulo);
    if (index !== -1) {
      listdb.splice(index, 1);
      saveTasksToStorage(listdb);
    }

    div.remove();
  });

  div.appendChild(simbolo);
  div.appendChild(pTitulo);
  div.appendChild(pFecha);
  div.appendChild(pDescripcion);
  div.appendChild(btnEliminar);

  return div;
};

export { ItemToDoList };