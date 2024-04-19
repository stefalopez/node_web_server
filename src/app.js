//const { envs } = require('./config/env')
import { envs } from ('./config/env.js')
//const { startServer } = require('./server/server')
import { startServer } from './server/server.js'

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