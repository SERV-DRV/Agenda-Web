let ItemToDoList = (titulo, fechaVencimiento, estado) => {
    let div = document.createElement("div");
    div.className = "item-todolist";

    let simbolo = document.createElement("p");
    simbolo.className = "item-todolist__simbolo";
    simbolo.textContent = "❌";

    let pTitulo = document.createElement("p");
    pTitulo.className = "item-todolist__text";
    pTitulo.textContent = titulo;

    let pFecha = document.createElement("p");
    pFecha.className = "item-todolist__fecha";
    pFecha.textContent = fechaVencimiento;

    let pEstado = document.createElement("p");
    pEstado.className = "item-todolist__estado";
    pEstado.textContent = estado;

    div.addEventListener("click", () => {
        simbolo.textContent = simbolo.textContent === "❌" ? "✔️" : "❌";
    });

    div.appendChild(simbolo);
    div.appendChild(pTitulo);
    div.appendChild(pFecha);
    div.appendChild(pEstado);

    return div;
};

export { ItemToDoList };
