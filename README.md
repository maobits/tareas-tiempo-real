# Gestor de Tareas en Tiempo Real / Real-time Task Manager

![Vista Previa](https://i.ibb.co/S3ZSY3L/tareas-tiempo-real.png)

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
    git clone https://github.com/maobits/tareas-tiempo-real.git
    cd tareas-tiempo-real
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

### Contacto

- **Empresa**: Maobits
- **Empresario informático**: Mauricio Chara Hurtado
- **E-mail**: [code@maobits.com](mailto:code@maobits.com)
- **WhatsApp**: [Enlace directo](https://wa.me/573153774638?text=Deseo%20m%C3%A1s%20informaci%C3%B3n%20del%20repositorio)
- **Sitio web**: [mauriciochara.online](http://mauriciochara.online)
- **Foto de perfil**: ![Foto de perfil](https://i.ibb.co/ncmG17j/foto-perfil.jpg)
