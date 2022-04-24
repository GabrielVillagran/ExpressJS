const express = require('express');
const app = express();
const port = 3000 //Hace referencia al localhost:3000

// cuando alguien acceda a la url que se selecciono como puerto {localhost:3000} recibira la siguiente respuesta
app.get('/', (req, res) => {
    // respuesta que se tendra
    res.send("Hola, que bueno tenerte por aqui");
})

// Creacion de otra app web
app.get('/launchX', (req, res) => {
    // respuesta que se tendra
    res.send("Hola, Bienvenido a LaunchX");
})

// inicialiacion de la app
app.listen(port, () => {
    console.log("server initialized");
})