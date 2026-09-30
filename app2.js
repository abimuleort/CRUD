// Ejercicio 1: Configuración de Express y rutas básicas para DevTasker
// Objetivo: Configurar un servidor Express y crear rutas básicas para una aplicación de gestión de tareas

const express = require('express');
const app = express();

app.use(express.json());

let tareas = [{ id: 1, titulo: 'Implementar login', descripcion: 'Crear sistema de autenticación', estado: 'pendiente' }]; // ejemplo de estructura { id: '1', titulo: 'Implementar login', descripcion: 'Crear sistema de autenticación', estado: 'pendiente' }

// TODO:
// - Crear endpoint para listar tareas
app.get('/listar-tareas', (req,res) => {
    res.send(tareas);
});
// - Crear endpoint para crear una tarea

app.post('/crear-tareas', (req,res) => {
    const nuevoItem = req.body

    tareas.push(nuevoItem);
    nuevoItem.id = tareas.length;

    res.status(201).json({mensaje: 'Item agregado'});
});
// - Crear endpoint para obtener una tarea por id
//
app.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    const tarea = tareas.find(item => item.id === id);

    res.json(tarea);
});
// Cada tarea debe tener: id, titulo, descripcion, estado
// El estado inicial debe ser "pendiente"

app.listen(3000, () => {
  console.log('Servidor DevTasker corriendo en http://localhost:3000');
});