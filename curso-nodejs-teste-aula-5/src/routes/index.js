import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editoras from './editorasRoutes.js';
import usuarios from './usuariosRoutes.js';
import auth from './authRoutes.js';
import livrosImagens from './livrosImagensRoutes.js';
import aluguelLivro from './aluguelLivroRoutes.js'

const routes = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Curso de node' });
  });

  app.use(
    express.json(),
    auth,
    usuarios,
    livros,
    autores,
    editoras,
    livrosImagens,
    aluguelLivro,
  );
};

export default routes;
