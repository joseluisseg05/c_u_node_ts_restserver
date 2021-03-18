import { Request, Response } from "express";

export const getUsuarios = ( req: Request, res: Response ) => {
    
    res.json({
        msj: "getUsuarios"
    });
}

export const getUsuario = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.json({
        msj: 'getUsuario',
        id 
    });
}

export const postUsuario = ( req: Request, res: Response ) => {
    const { body } = req.params;

    res.json({
        msj: 'postUsuario',
        body 
    });
}

export const putUsuario = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msj: 'putUsuario',
        body 
    });
}

export const deleteUsuario = ( req: Request, res: Response ) => {
    const { id } = req.params;
    res.json({
        msj: 'deleteUsuario',
        id
    });
}


