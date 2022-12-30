import { Router } from 'express';
import usuarioController from '../controllers/UserController';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/',  usuarioController.listar);
router.get('/:id', authMiddleware.autorizarUsuarioByParams, usuarioController.getById);
router.post('/cadastro', usuarioController.cadastrar);
router.post('/login', usuarioController.autenticar);

export default router;

