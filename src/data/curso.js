export const WHATSAPP_URL =
  "https://wa.me/573209373528?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20curso%20de%20Excel%20con%20DanExcel";

export const PRECIO = { actual: 149000, anterior: 280000 };

export const modulos = [
  {
    id: 1,
    titulo: "Fundamentos Esenciales para el Análisis de Datos en Excel",
    objetivo: "Reforzar bases en Excel: funciones clave, tablas dinámicas avanzadas y limpieza de datos.",
    temas: ["Funciones lógicas y de búsqueda (SI, BUSCARX, ÍNDICE/COINCIDIR)", "Tablas Dinámicas Avanzadas y Segmentación de Datos", "Validación de Datos y Formato Condicional"],
    tags: ["BUSCARX", "Tablas Dinámicas", "Formato Condicional"],
    clases: [
      { id: "M01E01", titulo: "Funciones BUSCARX e ÍNDICE/COINCIDIR", duracion: "45 min", videoId: null },
      { id: "M01E02", titulo: "Tablas Dinámicas Avanzadas y Segmentación", duracion: "50 min", videoId: null },
      { id: "M01E03", titulo: "Validación de Datos y Formato Condicional Profesional", duracion: "40 min", videoId: null },
    ],
  },
  {
    id: 2,
    titulo: "Power Query (Lenguaje M): Transformación de Datos sin Código",
    objetivo: "Importar, limpiar y transformar datos de diversas fuentes de forma automatizada.",
    temas: ["Importación desde múltiples fuentes (CSV, SQL, Web)", "Limpieza y transformación ETL", "Combinar y Anexar consultas (Merge/Append)"],
    tags: ["Power Query", "Lenguaje M", "ETL", "SQL/CSV/Web"],
    clases: [
      { id: "M02E01", titulo: "Power Query: Conexión a múltiples fuentes", duracion: "55 min", videoId: null },
      { id: "M02E02", titulo: "Limpieza y transformación ETL automática", duracion: "60 min", videoId: null },
      { id: "M02E03", titulo: "Merge y Append: uniendo fuentes de datos", duracion: "45 min", videoId: null },
    ],
  },
  {
    id: 3,
    titulo: "Modelos de Datos Robustos con Power Pivot",
    objetivo: "Diseñar modelos de datos eficientes, relaciones entre tablas y KPIs básicos.",
    temas: ["Introducción a Power Pivot y el Modelo de Datos", "Relaciones entre tablas y Vista de Diagrama", "Columnas calculadas, Jerarquías y KPIs"],
    tags: ["Power Pivot", "Relaciones", "KPIs", "Big Data"],
    clases: [
      { id: "M03E01", titulo: "Power Pivot: Modelo de Datos y Relaciones", duracion: "65 min", videoId: null },
      { id: "M03E02", titulo: "Columnas calculadas, jerarquías y KPIs", duracion: "50 min", videoId: null },
    ],
  },
  {
    id: 4,
    titulo: "DAX Desatado: El Lenguaje de Expresiones para tu Modelo",
    objetivo: "Escribir fórmulas DAX avanzadas: medidas, columnas calculadas y KPIs dinámicos.",
    temas: ["Contextos de Fila y Filtro", "SUM, COUNT, AVERAGE y CALCULATE", "Inteligencia de Tiempo (YTD, SAMEPERIODLASTYEAR, DATEADD)"],
    tags: ["DAX", "CALCULATE", "Time Intelligence"],
    clases: [
      { id: "M04E01", titulo: "DAX: Contextos, CALCULATE y medidas clave", duracion: "70 min", videoId: null },
      { id: "M04E02", titulo: "Inteligencia de Tiempo con DAX", duracion: "55 min", videoId: null },
    ],
  },
  {
    id: 5,
    titulo: "Visualización Interactiva y Reportes Profesionales",
    objetivo: "Crear dashboards interactivos y optimizar el modelo para máximo rendimiento.",
    temas: ["Paneles de Control con segmentadores y líneas de tiempo", "Gráficos, Mapas y Formato Condicional Avanzado", "Optimización del Modelo de Datos"],
    tags: ["Dashboards", "Gráficos", "Segmentadores"],
    clases: [
      { id: "M05E01", titulo: "Dashboard Interactivo desde cero", duracion: "75 min", videoId: null },
      { id: "M05E02", titulo: "Gráficos avanzados y formato condicional", duracion: "50 min", videoId: null },
      { id: "M05E03", titulo: "Optimización y rendimiento del modelo", duracion: "40 min", videoId: null },
    ],
  },
  {
    id: 6,
    titulo: "Minería de Datos y Big Data con Excel: Aplicaciones Prácticas",
    objetivo: "Aplicar Excel avanzado en minería de datos, pronósticos e integración con Big Data.",
    temas: ["Análisis de Tendencias y Pronósticos (PRONOSTICO.ETS)", "Identificación de Patrones y Anomalías", "Conectando Excel a SQL Server, Azure SQL y Data Lakes"],
    tags: ["Minería de datos", "Pronósticos", "SQL Server", "Azure"],
    clases: [
      { id: "M06E01", titulo: "Minería de datos y pronósticos con Excel", duracion: "65 min", videoId: null },
      { id: "M06E02", titulo: "Anomalías y patrones con Power Pivot + DAX", duracion: "55 min", videoId: null },
      { id: "M06E03", titulo: "Excel conectado a Big Data: SQL, Azure, Data Lake", duracion: "60 min", videoId: null },
    ],
  },
];
