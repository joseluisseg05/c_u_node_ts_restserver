import express, { Application } from 'express';
import userRouter from '../routes/usuario';

class Server {

    private app: Application;
    private port: string;
    private paths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //definir rutas
        this.routes();
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