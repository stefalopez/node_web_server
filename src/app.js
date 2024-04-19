const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {

    //Arrancamos el server enviando el puerto y el path
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

}

//Función agnóstica (sin nombre)
//Autoconvocada (con paréntesis al final)
//Así llamamos al main todo el tiempo
(async () => {
    main()
})()