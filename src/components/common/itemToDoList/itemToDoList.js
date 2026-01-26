import { listdb } from "../../sections/toDoList/listdb.js";
import { saveTasksToStorage } from "../../../storage/storage.js";
import { EditToDoListForm } from "../editToDoListForm/EditToDoListForm.js";

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

  let btnEditar = document.createElement("img");
  btnEditar.className = "item-todolist__editar";
  btnEditar.src = "./assets/icons/edit.svg";
  btnEditar.alt = "Editar tarea";

  div.addEventListener("click", () => {
    const tarea = listdb.find((t) => t.titulo === titulo);

    if (tarea) {
      tarea.completada = !tarea.completada;

      if (tarea.completada) {
        simbolo.src = "./assets/icons/cheque.svg";
        simbolo.alt = "Completado";
        div.classList.add("completado");
        
        btnEliminar.classList.add("deshabilitado");
        btnEditar.classList.add("deshabilitado");
      } else {
        simbolo.src = "./assets/icons/x.svg";
        simbolo.alt = "No completado";
        div.classList.remove("completado");

        btnEliminar.classList.remove("deshabilitado");
        btnEditar.classList.remove("deshabilitado");
      }

      saveTasksToStorage(listdb);
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

  btnEditar.addEventListener("click", (e) => {
    e.stopPropagation();

    const formularioExistente = div.querySelector(".todo-form");

    if (formularioExistente) {
      formularioExistente.remove();
    } else {
      const tareaActual = listdb.find((t) => t.titulo === titulo);
      const formularioEdicion = EditToDoListForm(tareaActual);
      
      div.appendChild(formularioEdicion);
    }
  });

  div.appendChild(simbolo);
  div.appendChild(pTitulo);
  div.appendChild(pFecha);
  div.appendChild(pDescripcion);
  div.appendChild(btnEliminar);
  div.appendChild(btnEditar);
  return div;
};

export { ItemToDoList };
