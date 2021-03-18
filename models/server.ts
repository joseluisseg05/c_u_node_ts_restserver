import express, { Application } from 'express';
import userRouter from '../routes/usuario';
import cors from 'cors';
import db from '../database/connection';

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

        this.dbConection();
    }

    async dbConection() {
        try {
            await db.authenticate();
            console.log('Base de datos online');
        } catch (error) {
            throw new Error( error);
        }
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