import Editora from '../models/editora.js';

class EditorasService {
  async listarEditoras() {
    try {
      const resultado = await Editora.pegarEditoras();

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async listarEditoraPorId(id) {
    try {
      const resultado = await Editora.pegarPeloId(id);

      return resultado;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async cadastrarEditora(body) {
    try {
      const editora = new Editora(body);
      
      if (Object.keys(body).length === 0) {
        throw new Error('corpo da requisicao vazio');
      }

      const resposta = await editora.salvar(editora);

      return { message: 'editora criada', content: resposta };
    } catch (err) {
      if (err.message === 'corpo da requisicao vazio') {
        throw new Error(err.message);
      }
      throw new Error(err.message);
    }
  };

  async atualizarEditora(id, body) {
    try {
      const editoraAtual = await Editora.pegarPeloId(id);
      const novaEditora = new Editora({ ...editoraAtual, ...body });
      const resposta = await novaEditora.salvar(novaEditora);

      return { message: 'editora atualizada', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async excluirEditora(id) {
    try {
      await Editora.excluir(id);

      return { message: 'editora excluída' };
    } catch (err) {
      throw new Error(err.message);
    }
  };

  async listarLivrosPorEditora(id) {
    try {
      const resultado = await Editora.pegarPeloId(id);
      const listaLivros = await Editora.pegarLivrosPorEditora(id);

      return { editora: resultado[0], livros: listaLivros };
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

export default EditorasService;
