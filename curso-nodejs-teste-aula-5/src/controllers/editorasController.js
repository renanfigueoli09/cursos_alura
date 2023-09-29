import EditorasService from '../services/editorasService.js';

const editorasService = new EditorasService();
class EditorasController {
  static listarEditoras = async (req, res) => {
    try {
      const resultado = await editorasService.listarEditoras();

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarEditoraPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await editorasService.listarEditoraPorId(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarEditora = async (req, res) => {
    const { body } = req;
    try {
      const resposta = await editorasService.cadastrarEditora(body);

      return res.status(201).json(resposta);
    } catch (err) {
      if (err.message === 'corpo da requisicao vazio') {
        return res.status(400).json(err.message);
      }

      return res.status(500).json(err.message);
    }
  };

  static atualizarEditora = async (req, res) => {
    const { params } = req;
    const { body } = req;
    try {
      const resposta = await editorasService.atualizarEditora(params.id, body);

      return res.status(204).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirEditora = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await editorasService.excluirEditora(params.id);
      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarLivrosPorEditora = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await editorasService.listarLivrosPorEditora(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EditorasController;
