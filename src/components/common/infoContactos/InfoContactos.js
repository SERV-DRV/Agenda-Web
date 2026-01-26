let InfoContactos = (imgContacto, nombre, telefono) => {
  let section = document.createElement("section");
  section.className = "info-contactos-horizontal";

  let fotoContenedor = document.createElement("div");
  fotoContenedor.className = "info-contactos__foto-side";

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./assets/icons/${imgContacto}`;

  let datosContenedor = document.createElement("div");
  datosContenedor.className = "info-contactos__datos-side";

  let h2 = document.createElement("h2");
  h2.textContent = "Detalle del Contacto";

  let etiquetaNombre = document.createElement("p");
  etiquetaNombre.className = "info-contactos__nombre";
  etiquetaNombre.textContent = nombre;

  let etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.className = "info-contactos__telefono";
  etiquetaTelefono.textContent = telefono;

  let btnVolver = document.createElement("button");
  btnVolver.className = "info-contactos__boton";
  btnVolver.textContent = "Volver a la lista";
  btnVolver.addEventListener("click", () => window.location.reload());

  fotoContenedor.appendChild(etiquetaImg);
  datosContenedor.appendChild(h2);
  datosContenedor.appendChild(etiquetaNombre);
  datosContenedor.appendChild(etiquetaTelefono);
  datosContenedor.appendChild(btnVolver);

  section.appendChild(fotoContenedor);
  section.appendChild(datosContenedor);

  return section;
};

export { InfoContactos };
