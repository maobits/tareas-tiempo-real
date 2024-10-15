# Gestor de Tareas en Tiempo Real / Real-time Task Manager

## Español

Este proyecto es una aplicación de gestor de tareas en tiempo real, construida con **Node.js**, **Socket.io** y **MongoDB**. Los usuarios pueden añadir tareas, verlas en tiempo real y administrarlas desde una interfaz sencilla y moderna.

### Tecnologías Utilizadas

- **Node.js**: Servidor backend para manejar las solicitudes y la lógica del negocio.
- **Express**: Framework para Node.js que permite la creación del servidor web.
- **Socket.io**: Comunicación en tiempo real entre el cliente y el servidor.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar las tareas.
- **Docker**: MongoDB corre dentro de un contenedor de Docker para una fácil configuración.
- **HTML/CSS/JavaScript**: Interfaz de usuario con diseño responsivo y dinámico.

### Características

- Añadir tareas en tiempo real con comunicación bidireccional entre el cliente y el servidor.
- Visualización inmediata de las tareas agregadas por cualquier usuario conectado.
- Diseño moderno con una paleta de colores masculinos (gris, azul y verde militar).
- Transiciones suaves y efectos hover para una mejor experiencia de usuario.
- Backend conectado a una base de datos MongoDB dentro de Docker.

### Instalación

#### Prerrequisitos

- **Node.js** instalado en tu máquina.
- **Docker** instalado para correr MongoDB en un contenedor.

#### Pasos para la instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/usuario/gestor-tareas-tiempo-real.git
    cd gestor-tareas-tiempo-real
    ```

2. Instala las dependencias de Node.js:

    ```bash
    npm install
    ```

3. Configura y ejecuta MongoDB en Docker:

    ```bash
    docker pull mongo:latest
    docker run --name mongodb -p 27017:27017 -d mongo:latest
    ```

4. Inicia el servidor Node.js:

    ```bash
    node index.js
    ```

5. Abre tu navegador en `http://localhost:3000` y comienza a agregar tareas.

### Uso

1. En la página principal, verás un formulario para agregar nuevas tareas.
2. Escribe el título de la tarea y haz clic en "Agregar".
3. Las tareas aparecerán inmediatamente en la lista de tareas, visibles para todos los usuarios conectados.

### Estilo

- El diseño de la interfaz está hecho con CSS, utilizando una paleta de colores masculinos basada en tonos grises, azul oscuro y verde militar.
- La experiencia de usuario está mejorada con transiciones suaves y efectos interactivos.

### Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit a tus cambios (`git commit -m 'feat: añadir nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

### Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).

---

## English

This project is a real-time task manager application built with **Node.js**, **Socket.io**, and **MongoDB**. Users can add tasks, see them in real-time, and manage them through a simple and modern interface.

### Technologies Used

- **Node.js**: Backend server to handle requests and business logic.
- **Express**: Framework for Node.js to build the web server.
- **Socket.io**: Real-time communication between the client and the server.
- **MongoDB**: NoSQL database used to store tasks.
- **Docker**: MongoDB runs inside a Docker container for easy setup.
- **HTML/CSS/JavaScript**: User interface with a responsive and dynamic design.

### Features

- Add tasks in real-time with bidirectional communication between the client and server.
- Immediate visualization of tasks added by any connected user.
- Modern design with a masculine color palette (gray, blue, and military green).
- Smooth transitions and hover effects for a better user experience.
- Backend connected to a MongoDB database running inside Docker.

### Installation

#### Prerequisites

- **Node.js** installed on your machine.
- **Docker** installed to run MongoDB in a container.

#### Installation Steps

1. Clone this repository:

    ```bash
    git clone https://github.com/usuario/gestor-tareas-tiempo-real.git
    cd gestor-tareas-tiempo-real
    ```

2. Install the Node.js dependencies:

    ```bash
    npm install
    ```

3. Set up and run MongoDB in Docker:

    ```bash
    docker pull mongo:latest
    docker run --name mongodb -p 27017:27017 -d mongo:latest
    ```

4. Start the Node.js server:

    ```bash
    node index.js
    ```

5. Open your browser at `http://localhost:3000` and start adding tasks.

### Usage

1. On the main page, you will see a form to add new tasks.
2. Enter the task title and click "Add".
3. The tasks will appear immediately in the task list, visible to all connected users.

### Styling

- The interface design is built with CSS, using a masculine color palette based on shades of gray, dark blue, and military green.
- The user experience is enhanced with smooth transitions and interactive hover effects.

### Contribution

If you want to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'feat: add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

### License

This project is licensed under the MIT License. You can see more details in the [LICENSE](LICENSE) file.