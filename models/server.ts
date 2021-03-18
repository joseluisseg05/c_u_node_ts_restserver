import express, { Application } from 'express';
import userRouter from '../routes/usuario';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;
    private paths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //midderwares
        this.middlewares();

        //definir rutas
        this.routes();
    }

    middlewares(){
        //cords
        this.app.use( cors() );
        //lectura body
        this.app.use( express.json() );
        //carpeta publica
        this.app.use( express.static( 'public' ));
    }

    routes(){
        this.app.use( this.paths.usuarios, userRouter );
    }

    listen(){
        this.app.listen( this.port, ()=> {
            console.log('Servidor corriendo en '+ this.port);
        })
    }
}

export default Server;