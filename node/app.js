const express = require('express');
const app = express()

app.get('/run', (req, res) => {
    let ret = "HOLA MUNDO";
    res.send(ret)
});


app.listen(3001, () => {
    console.log("Escuchando peticiones en el puerto 3001");
});