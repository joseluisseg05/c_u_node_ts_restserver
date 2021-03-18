import { Request, Response } from "express";
import Usuario from '../models/usuario';

export const getUsuarios = async ( req: Request, res: Response ) => {
    const usuarios = await Usuario.findAll({
        where: {
            estado: true
        }
    });
    res.json({ usuarios });
}

export const getUsuario = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if ( usuario )
        res.json({ usuario });
    else
        res.status(404).json({
            msj: `No existe un usuario con el id ${id}`
        })
}

export const postUsuario = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }

        const usuario = await Usuario.create(body);

        res.json({ usuario })

    } catch (error) {
        console.log(error),
        res.status(500).json({
            msj: 'Error en el backend'
        })
    }
}

export const putUsuario = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        

        const usuario = await Usuario.findByPk( id );
        if ( !usuario )
            return res.status(404).json({
                msj: 'No existe el usuario ' + id
            })

        await usuario.update( body );

        res.json({ usuario })

    } catch (error) {
        console.log(error),
        res.status(500).json({
            msj: 'Error en el backend'
        })
    }
}

export const deleteUsuario = async ( req: Request, res: Response ) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk( id );
        if ( !usuario )
            return res.status(404).json({
                msj: 'No existe el usuario ' + id
            })

        await usuario.update( {estado: false} );

        res.json({ usuario })

    } catch (error) {
        console.log(error),
        res.status(500).json({
            msj: 'Error en el backend'
        })
    }
}


