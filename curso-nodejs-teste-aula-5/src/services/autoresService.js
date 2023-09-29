import Autor from '../models/autor.js';

class AutoresService {
  async listarAutores() {
    try {
      const resultado = await Autor.pegarAutores();

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listarAutorPorId(id) {
    try {
      const resultado = await Autor.pegarPeloId(id);

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async cadastrarAutor(body) {
    try {
      const autor = new Autor(body);
      const resposta = await autor.salvar(autor);

      return { message: 'autor criado', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async atualizarAutor(id, body) {
    try {
      const autorAtual = await Autor.pegarPeloId(id);
      const novoAutor = new Autor({ ...autorAtual, ...body });
      const resposta = await novoAutor.salvar(novoAutor);

      return { message: 'autor atualizado', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async excluirAutor(id) {
    try {
      await Autor.excluir(id);
      return { message: 'autor excluído' };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listarLivrosPorAutor(id) {
    try {
      const resultado = await Autor.pegarPeloId(id);
      const listaLivros = await Autor.pegarLivrosPorAutor(id);

      return { autor: resultado[0], livros: listaLivros };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default AutoresService;
