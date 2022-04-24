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

// Creacion de otra app web pasando como parametro el mensaje que se mandara
app.get('/node', (req, res) => {
        // respuesta que se tendra
        res.send("Hola, Bienvenido a LaunchX");
    })
    // inicialiacion de la app
app.listen(port, () => {
    const explorer = { id: 1, name: "ExplorerZ" } //objeto JS
    const explorer1 = { id: 2, name: "ExplorerA" } //objeto JS
    const explore2 = { id: 3, name: "ExplorerB" } //objeto JS
    const explore3 = { id: 4, name: "ExplorerC" } //objeto JS
    console.log("explorer");
})