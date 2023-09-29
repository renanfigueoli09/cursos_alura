import express from 'express';
import AluguelLivroController from '../controllers/aluguelLivroController.js';

const router = express.Router();

router
  .get('/aluguel-livro', AluguelLivroController.listarAluguelLivro)
  .get('/aluguel-livro/:id', AluguelLivroController.listarAluguelLivroPorId)
  .post('/aluguel-livro', AluguelLivroController.alugarLivro)
  .get('/aluguel-livro/devolver/:id', AluguelLivroController.devolveLivro)
  .delete('/aluguel-livro/:id', AluguelLivroController.excluirAluguelLivroLivro);

export default router;
