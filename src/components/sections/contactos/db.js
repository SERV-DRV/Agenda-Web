import { getFromStorage } from "../../../storage/storage.js";

const initialContacts = [
    { nombre: "Juan Carlos Pérez García", telefono: "55892143" },
    { nombre: "María Alejandra Rodríguez López", telefono: "41228765" },
    { nombre: "Luis Fernando Morales Martínez", telefono: "30459901" },
    { nombre: "Ana Patricia Gómez Estrada", telefono: "59301287" },
    { nombre: "José David Ramírez Castillo", telefono: "45673321" },
    { nombre: "Brenda Elizabeth Hernández Ruiz", telefono: "31108844" },
    { nombre: "Ricardo Antonio Villatoro Méndez", telefono: "50029173" },
    { nombre: "Sofía Isabella González Arriola", telefono: "42190056" },
    { nombre: "Marcos Vinicio Soto Mayorga", telefono: "33417722" },
    { nombre: "Claudia Irene Herrera Juárez", telefono: "58904410" }
];
let ContactList = getFromStorage('agenda_telefonica') || initialContacts;

export { ContactList };