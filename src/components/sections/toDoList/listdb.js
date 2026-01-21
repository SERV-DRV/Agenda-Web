import { getFromStorage } from "../../../storage/storage.js";

const initialTasks = [
    {
        titulo: "Seminario: Proyecto de Vida",
        fechaVencimiento: "2025-02-15",
        descripcion: "Redactar la visión, misión y áreas de prioridad para la entrega final del primer bloque."
    },
    {
        titulo: "Documentar API de Inventario",
        fechaVencimiento: "2025-01-30",
        descripcion: "Generar la documentación técnica detallando cada endpoint y los códigos de respuesta en Swagger."
    },
    {
        titulo: "Actualizar Dependencias NPM",
        fechaVencimiento: "2025-02-05",
        descripcion: "Migrar el proyecto a Node 20 LTS y actualizar librerías de seguridad para evitar vulnerabilidades."
    },
    {
        titulo: "Seminario: Árbol Genealógico",
        fechaVencimiento: "2025-02-10",
        descripcion: "Investigar antecedentes familiares y recopilar fotografías para el anexo del Proyecto de Vida."
    },
    {
        titulo: "Cálculo Integral: Áreas",
        fechaVencimiento: "2025-02-03",
        descripcion: "Resolver la serie de ejercicios sobre el cálculo de áreas bajo la curva utilizando integrales definidas."
    },
    {
        titulo: "Optimización de Consultas SQL",
        fechaVencimiento: "2025-03-01",
        descripcion: "Revisar los índices de la base de datos para reducir el tiempo de carga de los reportes mensuales."
    },
    {
        titulo: "Seminario: Metas a Corto Plazo",
        fechaVencimiento: "2025-02-20",
        descripcion: "Definir estrategias y cronograma para las metas académicas del presente ciclo escolar."
    },
    {
        titulo: "Refactorizar Componentes UI",
        fechaVencimiento: "2025-02-12",
        descripcion: "Limpiar código duplicado en los botones y formularios para mejorar la mantenibilidad del frontend."
    },
    {
        titulo: "Derivadas de Orden Superior",
        fechaVencimiento: "2025-01-29",
        descripcion: "Estudio de la segunda derivada para encontrar puntos de inflexión y optimización de funciones."
    },
    {
        titulo: "Configurar Servidor de Pruebas",
        fechaVencimiento: "2025-03-10",
        descripcion: "Desplegar la aplicación en un entorno de staging para realizar pruebas de estrés con usuarios reales."
    },
    {
        titulo: "Seminario: Investigación Acción",
        fechaVencimiento: "2025-03-25",
        descripcion: "Tabular los resultados de las encuestas realizadas sobre la seguridad alimentaria en la comunidad."
    },
    {
        titulo: "Integrales por Sustitución",
        fechaVencimiento: "2025-02-18",
        descripcion: "Aplicar el método de cambio de variable para resolver integrales indefinidas de funciones compuestas."
    },
    {
        titulo: "Límites e Indeterminaciones",
        fechaVencimiento: "2025-02-24",
        descripcion: "Resolución de límites al infinito y casos de 0/0 mediante la regla de L'Hôpital."
    },
    {
        titulo: "Actualizar Portafolio Digital",
        fechaVencimiento: "2025-02-28",
        descripcion: "Subir los mejores proyectos realizados en GitHub y redactar los casos de estudio de cada uno."
    },
    {
        titulo: "Probabilidad y Estadística",
        fechaVencimiento: "2025-03-05",
        descripcion: "Cálculo de desviación estándar y varianza para el análisis de datos en el proyecto de investigación."
    }
];
let listdb = getFromStorage('lista_tareas') || initialTasks;

export { listdb };