const express = require('express')
const path = require('path') //Propio de node para leer las carpetas del proyecto

//Traemos el puerto y el path de app.js
const startServer = (options) => {
    const { port, public_path = 'public' } = options

    //Ejecutamos express y lo ponemos disponible en la variable
    const app = express()

    //Para poder usar middlewares usamos la palabra use (propio de express)
    app.use(express.static(public_path)) //Contenido estático que ponemos disponibles

    //El navegador hace una petición (req) con una URL y nosotros le respondemos (res) con la web index.html
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //Ponemos disponible el servidor escuchando las peticiones URL (abrimos el puerto)
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    }) 
}

module.exports = {
    startServer
}