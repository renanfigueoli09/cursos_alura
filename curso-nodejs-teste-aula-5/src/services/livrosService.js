import Livro from '../models/livro.js';

class LivrosService {
  async listarLivros() {
    try {
      const resultado = await Livro.pegarLivros();

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async listarLivroPorId(id) {
    try {
      const resultado = await Livro.pegarPeloId(id);

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async cadastrarLivro(body) {
    try {
      const livro = new Livro(body);
      const resposta = await livro.salvar(livro);

      return { message: 'livro criado', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async atualizarLivro(id, body) {
    try {
      const livroAtual = await Livro.pegarPeloId(id);
      const novoLivro = new Livro({ ...livroAtual, ...body });
      const resposta = await novoLivro.salvar(novoLivro);

      return { message: 'livro atualizado', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async excluirLivro(id) {
    try {
      await Livro.excluir(id);
      return { message: 'livro excluído' };
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

export default LivrosService;
