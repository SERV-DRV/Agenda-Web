let ItemToDoList = (titulo, fechaVencimiento, descripcion) => {
    let div = document.createElement("div");
    div.className = "item-todolist";

    let simbolo = document.createElement("img");
    simbolo.className = "item-todolist__simbolo";
    simbolo.src = "./assets/icons/x.svg";
    simbolo.alt = "No completado";

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
        if (simbolo.src.includes("x.svg")) {
            simbolo.src = "./assets/icons/cheque.svg"; 
            simbolo.alt = "Completado";
            div.classList.add("completado");
        }
    });

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();
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