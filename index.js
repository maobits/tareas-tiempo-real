const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tareas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const tareaSchema = new mongoose.Schema({
    titulo: String,
    completado: Boolean,
});

const Tarea = mongoose.model('Tarea', tareaSchema);

app.use(express.json());
app.use(express.static('public'));

// Endpoints
app.post('/tareas', async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    io.emit('nuevaTarea', tarea);
    res.status(201).send(tarea);
});

app.get('/tareas', async (req, res) => {
    const tareas = await Tarea.find();
    res.send(tareas);
});

// Actualizar tarea
app.put('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tarea) {
            return res.status(404).send('Tarea no encontrada');
        }
        io.emit('actualizarTarea', tarea);  // Emitir evento de actualización
        res.send(tarea);  // Devolver la tarea actualizada
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar tarea
app.delete('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        if (!tarea) {
            return res.status(404).send('Tarea no encontrada');
        }
        io.emit('eliminarTarea', req.params.id);  // Emitir evento de eliminación
        res.send(tarea);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Manejo de conexiones de Socket.io
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.on('disconnect', () => console.log('Cliente desconectado'));
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
