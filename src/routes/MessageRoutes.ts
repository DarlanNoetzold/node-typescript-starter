import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import mensagemController from '../controllers/MessageController';

const router = Router();

router.post('/:id', 
    authMiddleware.autorizarUsuarioByToken, 
    authMiddleware.autorizarUsuarioByParams, 
    mensagemController.enviar
);

router.get('/:id', 
    authMiddleware.autorizarUsuarioByToken, 
    authMiddleware.autorizarUsuarioByParams, 
    mensagemController.listar
);

export default router;

