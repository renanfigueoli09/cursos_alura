import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router
  .post('/login', AuthController.login)
  .post('/cadastrar', AuthController.cadastrarUsuario);

export default router;
