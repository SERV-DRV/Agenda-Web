import { listdb } from "../../sections/toDoList/listdb.js";
import { saveTasksToStorage } from "../../../storage/storage.js";

let EditToDoListForm = function (tarea) {
  let form = document.createElement("form");
  form.className = "todo-form";

  let fieldset = document.createElement("fieldset");
  fieldset.className = "todo-form__fieldset";

  let legend = document.createElement("legend");
  legend.className = "todo-form__legend";
  legend.textContent = "Editar Tarea";

  let labelTitulo = document.createElement("label");
  labelTitulo.className = "todo-form__label";
  labelTitulo.textContent = "Título de la Tarea";
  labelTitulo.setAttribute("for", "titulo");

  let inputTitulo = document.createElement("input");
  inputTitulo.className = "todo-form__input";
  inputTitulo.type = "text";
  inputTitulo.id = "titulo";
  inputTitulo.name = "titulo";
  inputTitulo.value = tarea.titulo;
  inputTitulo.required = true;

  let labelFecha = document.createElement("label");
  labelFecha.className = "todo-form__label";
  labelFecha.textContent = "Fecha de Vencimiento";
  labelFecha.setAttribute("for", "fechaVencimiento");

  let inputFecha = document.createElement("input");
  inputFecha.className = "todo-form__input";
  inputFecha.type = "date";
  inputFecha.id = "fechaVencimiento";
  inputFecha.name = "fechaVencimiento";
  inputFecha.value = tarea.fechaVencimiento;
  inputFecha.required = true;

  let labelPrioridad = document.createElement("label");
  labelPrioridad.className = "todo-form__label";
  labelPrioridad.textContent = "Prioridad";
  labelPrioridad.setAttribute("for", "prioridad");

  let selectPrioridad = document.createElement("select");
  selectPrioridad.className = "todo-form__select";
  selectPrioridad.id = "prioridad";
  selectPrioridad.name = "prioridad";

  let opciones = ["Urgente", "Con Tiempo"];
  opciones.forEach((opcion) => {
    let opt = document.createElement("option");
    opt.value = opcion;
    opt.textContent = opcion;
    if (tarea.prioridad === opcion) opt.selected = true;
    selectPrioridad.appendChild(opt);
  });

  let labelDescripcion = document.createElement("label");
  labelDescripcion.className = "todo-form__label";
  labelDescripcion.textContent = "Descripción";
  labelDescripcion.setAttribute("for", "descripcion");

  let inputDescripcion = document.createElement("textarea");
  inputDescripcion.className = "todo-form__textarea";
  inputDescripcion.id = "descripcion";
  inputDescripcion.name = "descripcion";
  inputDescripcion.value = tarea.descripcion;
  inputDescripcion.required = true;

  let button = document.createElement("button");
  button.className = "todo-form__button";
  button.type = "submit";
  button.textContent = "Guardar Cambios";

  fieldset.appendChild(legend);
  fieldset.appendChild(labelTitulo);
  fieldset.appendChild(inputTitulo);
  fieldset.appendChild(labelFecha);
  fieldset.appendChild(inputFecha);
  fieldset.appendChild(labelPrioridad);
  fieldset.appendChild(selectPrioridad);
  fieldset.appendChild(labelDescripcion);
  fieldset.appendChild(inputDescripcion);
  fieldset.appendChild(button);

  form.appendChild(fieldset);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const tareaEnDb = listdb.find((t) => t.titulo === tarea.titulo);

    if (tareaEnDb) {
      tareaEnDb.titulo = inputTitulo.value;
      tareaEnDb.fechaVencimiento = inputFecha.value;
      tareaEnDb.descripcion = inputDescripcion.value;
      tareaEnDb.prioridad = selectPrioridad.value;

      saveTasksToStorage(listdb);
      const contenedorTarea = form.parentElement;
      if (contenedorTarea) {
        contenedorTarea.querySelector(".item-todolist__text").textContent =
          inputTitulo.value;
        contenedorTarea.querySelector(".item-todolist__fecha").textContent =
          inputFecha.value;
        contenedorTarea.querySelector(
          ".item-todolist__descripcion",
        ).textContent = inputDescripcion.value;

        let pPrioridad = contenedorTarea.querySelector(
          ".item-todolist__prioridad",
        );
        pPrioridad.textContent = selectPrioridad.value;
        pPrioridad.classList.remove(
          "prioridad--urgente",
          "prioridad--con-tiempo",
        );
        const claseNueva =
          selectPrioridad.value === "Urgente"
            ? "prioridad--urgente"
            : "prioridad--con-tiempo";
        pPrioridad.classList.add(claseNueva);
      }

      form.remove();
    }
  });

  inputTitulo.addEventListener("click", (e) => e.stopPropagation());
  inputFecha.addEventListener("click", (e) => e.stopPropagation());
  selectPrioridad.addEventListener("click", (e) => e.stopPropagation());
  inputDescripcion.addEventListener("click", (e) => e.stopPropagation());
  button.addEventListener("click", (e) => e.stopPropagation());

  return form;
};

export { EditToDoListForm };
