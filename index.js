const express = require('express'); // Importa el framework Express para crear el servidor web.
const http = require('http'); // Importa el módulo HTTP para crear un servidor.
const mongoose = require('mongoose'); // Importa Mongoose, una biblioteca para trabajar con MongoDB.
const socketIo = require('socket.io'); // Importa Socket.io para establecer comunicación en tiempo real entre cliente y servidor.

const app = express(); // Crea una aplicación Express.
const server = http.createServer(app); // Crea un servidor HTTP utilizando la app de Express.
const io = socketIo(server); // Inicializa Socket.io con el servidor HTTP creado.

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tareas', {
    useNewUrlParser: true, // Utiliza el nuevo sistema de análisis de URL.
    useUnifiedTopology: true, // Usa la nueva capa de administración de conexiones.
});

const tareaSchema = new mongoose.Schema({
    titulo: String, // Define un campo de tipo String para el título de la tarea.
    completado: Boolean, // Define un campo de tipo Boolean para indicar si la tarea está completada.
});

const Tarea = mongoose.model('Tarea', tareaSchema); // Crea el modelo Tarea basado en el esquema tareaSchema.

app.use(express.json()); // Middleware para procesar peticiones con cuerpo en formato JSON.
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'.

// Endpoints
app.post('/tareas', async (req, res) => {
    const tarea = new Tarea(req.body); // Crea una nueva instancia de Tarea con los datos recibidos en el cuerpo de la petición.
    await tarea.save(); // Guarda la tarea en la base de datos.
    io.emit('nuevaTarea', tarea); // Emite un evento 'nuevaTarea' a todos los clientes conectados con los datos de la nueva tarea.
    res.status(201).send(tarea); // Envía una respuesta con estado 201 (creado) y la tarea guardada.
});

app.get('/tareas', async (req, res) => {
    const tareas = await Tarea.find(); // Busca todas las tareas en la base de datos.
    res.send(tareas); // Envía las tareas encontradas al cliente.
});

// Actualizar tarea
app.put('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Actualiza la tarea con el ID proporcionado en la URL y con los datos enviados en el cuerpo. El parámetro { new: true } indica que debe devolver la tarea actualizada.

        if (!tarea) {
            return res.status(404).send('Tarea no encontrada'); // Si no se encuentra la tarea, envía un error 404.
        }
        io.emit('actualizarTarea', tarea); // Emite un evento 'actualizarTarea' con la tarea actualizada.
        res.send(tarea); // Envía la tarea actualizada al cliente.
    } catch (error) {
        res.status(400).send(error); // Si ocurre un error, envía un estado 400 con el error.
    }
});

// Eliminar tarea
app.delete('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        // Elimina la tarea con el ID proporcionado en la URL.

        if (!tarea) {
            return res.status(404).send('Tarea no encontrada'); // Si no se encuentra la tarea, envía un error 404.
        }
        io.emit('eliminarTarea', req.params.id); // Emite un evento 'eliminarTarea' con el ID de la tarea eliminada.
        res.send(tarea); // Envía la tarea eliminada al cliente.
    } catch (error) {
        res.status(400).send(error); // Si ocurre un error, envía un estado 400 con el error.
    }
});

// Manejo de conexiones de Socket.io
io.on('connection', (socket) => {
    // Escucha el evento 'connection' cuando un cliente se conecta.
    console.log('Nuevo cliente conectado'); // Muestra en consola cuando un cliente se conecta.

    socket.on('disconnect', () => console.log('Cliente desconectado'));
    // Escucha el evento 'disconnect' cuando un cliente se desconecta y muestra un mensaje en la consola.
});

server.listen(3000, () => {
    // Inicia el servidor HTTP en el puerto 3000.
    console.log('Servidor corriendo en http://localhost:3000'); // Muestra en consola que el servidor está corriendo.
});
