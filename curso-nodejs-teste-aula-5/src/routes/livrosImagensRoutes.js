import express from 'express';
import multer from 'multer';
import LivrosImagensController from '../controllers/livrosImagensController.js';

const router = express.Router();
const upload = multer();

router
  .get('/livros-imagens', LivrosImagensController.listarImagens)
  .get('/livros-imagens/:id', LivrosImagensController.listarImagemPorId)
  .post('/livros-imagens', upload.single('files'), LivrosImagensController.cadastrarImagem)
  .put('/livros-imagens/:id', upload.single('files'), LivrosImagensController.atualizarImagem)
  .delete('/livros-imagens/:id', LivrosImagensController.excluirImagemLivro);

export default router;
