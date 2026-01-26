import { getContactsFromStorage } from "../../../storage/storage.js";

const initialContacts = [
    { nombre: "Juan Carlos Pérez García", telefono: "55892143", favorito: false },
    { nombre: "María Alejandra Rodríguez López", telefono: "41228765", favorito: false },
    { nombre: "Luis Fernando Morales Martínez", telefono: "30459901", favorito: false },
    { nombre: "Ana Patricia Gómez Estrada", telefono: "59301287", favorito: false },
    { nombre: "José David Ramírez Castillo", telefono: "45673321", favorito: false },
    { nombre: "Brenda Elizabeth Hernández Ruiz", telefono: "31108844", favorito: false },
    { nombre: "Ricardo Antonio Villatoro Méndez", telefono: "50029173", favorito: false },
    { nombre: "Sofía Isabella González Arriola", telefono: "42190056", favorito: false },
    { nombre: "Marcos Vinicio Soto Mayorga", telefono: "33417722", favorito: false },
    { nombre: "Claudia Irene Herrera Juárez", telefono: "58904410", favorito: false }
];

let storedContacts = getContactsFromStorage();
let ContactList = storedContacts.length > 0 ? storedContacts : initialContacts;

export { ContactList };