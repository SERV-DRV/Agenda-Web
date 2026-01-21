import { listdb } from "../toDoList/listdb.js"; 
import { saveToStorage } from "../../../storage/storage.js";

let NewToDoListForm = function () {

    let form = document.createElement("form");
    form.className = "todo-form";

    let fieldset = document.createElement("fieldset");
    fieldset.className = "todo-form__fieldset";

    let legend = document.createElement("legend");
    legend.className = "todo-form__legend";
    legend.textContent = "Nueva Tarea";

    let labelTitulo = document.createElement("label");
    labelTitulo.className = "todo-form__label";
    labelTitulo.textContent = "Título de la Tarea";
    labelTitulo.setAttribute("for", "titulo");

    let inputTitulo = document.createElement("input");
    inputTitulo.className = "todo-form__input";
    inputTitulo.type = "text";
    inputTitulo.id = "titulo";
    inputTitulo.name = "titulo";
    inputTitulo.placeholder = "Ej: Implementar Login";
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
    inputFecha.required = true;

    let labelDescripcion = document.createElement("label");
    labelDescripcion.className = "todo-form__label";
    labelDescripcion.textContent = "Descripción";
    labelDescripcion.setAttribute("for", "descripcion");

    let inputDescripcion = document.createElement("textarea"); 
    inputDescripcion.className = "todo-form__textarea";
    inputDescripcion.id = "descripcion";
    inputDescripcion.name = "descripcion";
    inputDescripcion.placeholder = "Detalles de la tarea...";
    inputDescripcion.required = true;

    let button = document.createElement("button");
    button.className = "todo-form__button";
    button.type = "submit";
    button.textContent = "Agregar Tarea";

    fieldset.appendChild(legend);
    fieldset.appendChild(labelTitulo);
    fieldset.appendChild(inputTitulo);
    fieldset.appendChild(labelFecha);
    fieldset.appendChild(inputFecha);
    fieldset.appendChild(labelDescripcion);
    fieldset.appendChild(inputDescripcion);
    fieldset.appendChild(button);

    form.appendChild(fieldset);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let nuevaTarea = {
            titulo: inputTitulo.value,
            fechaVencimiento: inputFecha.value,
            descripcion: inputDescripcion.value,
            completada: false 
        };

        listdb.push(nuevaTarea);
        saveToStorage('lista_tareas', listdb);
        form.reset();
        window.location.reload();
    });

    return form;
}

export { NewToDoListForm };