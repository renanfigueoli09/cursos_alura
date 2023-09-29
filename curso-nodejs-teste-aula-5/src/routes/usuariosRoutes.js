import express from 'express';
import UsuariosController from '../controllers/usuariosController.js';
import autenticado from '../middleware/autenticado.js';

const router = express.Router();

router.use(autenticado);

router
  .get('/usuarios', UsuariosController.listarUsuarios)
  .get('/usuarios/:id', UsuariosController.listarUsuarioPorId)
  .put('/usuarios/:id', UsuariosController.atualizarUsuario)
  .delete('/usuarios/:id', UsuariosController.excluirUsuario);

export default router;
