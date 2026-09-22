# Learn It, Love It

Aplicación web para agregar, actualizar, eliminar y votar temas de aprendizaje (y sus enlaces relacionados), construida con Node.js, Express, EJS y JavaScript puro, siguiendo una arquitectura MVC.

## Características

- CRUD completo de **temas** (crear, ver, actualizar, borrar).
- CRUD completo de **enlaces** dentro de cada tema.
- Sistema de **votación** para temas y enlaces.
- **Reordenamiento automático** del contenido según la cantidad de votos.
- Actualización de los votos **en tiempo real** (sin recargar la página) usando `fetch` con JavaScript puro.

## Tecnologías

- Node.js
- Express
- EJS (motor de plantillas)
- JavaScript puro (frontend)
- Arquitectura MVC

## Estructura del proyecto

```
├── app.js                     # Configuración del servidor y rutas
├── controllers/
│   └── topicsController.js    # Lógica de manejo de requests
├── models/
│   └── topics.js              # Datos y lógica de negocio (temas y enlaces)
├── views/
│   └── topics.ejs             # Vista principal
├── public/
│   └── js/
│       └── votes.js           # Lógica de votación en el cliente (fetch + DOM)
└── package.json
```

## Instalación

1. Cloná el repositorio:
   ```bash
   git clone git@github.com:abimuleort/CRUD.git
   cd CRUD
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Iniciá el servidor:
   ```bash
   node app.js
   ```

4. Abrí en el navegador:
   ```
   http://localhost:3000
   ```

## Uso

- **Agregar un tema**: completá el formulario al final de la página y hacé clic en "Agregar tema".
- **Editar/borrar un tema**: usá los formularios y botones correspondientes junto a cada tema.
- **Agregar/editar/borrar un enlace**: cada tema tiene su propia sección de enlaces con sus respectivos formularios.
- **Votar**: hacé clic en el botón "Votar" de un tema o enlace. El contador se actualiza al instante y el contenido se reordena automáticamente según los votos, sin recargar la página.

## Rutas principales

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Lista todos los temas (ordenados por votos) |
| POST | `/topics` | Crea un tema nuevo |
| POST | `/topics/:id/update` | Actualiza un tema |
| POST | `/topics/:id/delete` | Elimina un tema |
| POST | `/topics/:id/vote` | Vota un tema |
| POST | `/topics/:id/links` | Agrega un enlace a un tema |
| POST | `/topics/:id/links/:linkId/update` | Actualiza un enlace |
| POST | `/topics/:id/links/:linkId/delete` | Elimina un enlace |
| POST | `/topics/:id/links/:linkId/vote` | Vota un enlace |

## Arquitectura MVC

- **Modelo** (`models/topics.js`): almacena los temas y enlaces en memoria, y contiene toda la lógica para crearlos, modificarlos, eliminarlos y ordenarlos por votos.
- **Vista** (`views/topics.ejs`): renderiza los datos como HTML usando EJS.
- **Controlador** (`controllers/topicsController.js`): recibe las solicitudes HTTP, llama al modelo correspondiente y decide la respuesta (renderizar la vista o devolver JSON).

## Notas

- Los datos se almacenan **en memoria**: se reinician cada vez que el servidor se reinicia.
- El proyecto fue desarrollado como parte de un challenge educativo, priorizando una implementación simple y funcional sobre los requerimientos opcionales (autenticación, validaciones avanzadas, estilos con Tailwind).
