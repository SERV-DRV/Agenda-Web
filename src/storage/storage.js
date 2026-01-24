const LOCAL_STORAGE_KEY_CONTACTS = 'agenda_telefonica';
const LOCAL_STORAGE_KEY_TASKS = 'lista_tareas';

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTS, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTS)) || [];
}

function saveTasksToStorage(tareas) {
    localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(tareas));
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS)) || [];
}

export { 
    saveContactsToStorage, 
    getContactsFromStorage,
    saveTasksToStorage,
    getTasksFromStorage
};