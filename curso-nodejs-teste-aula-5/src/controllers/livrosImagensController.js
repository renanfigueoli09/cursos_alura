import LivrosImagensService from '../services/livrosImagensService.js';

const livrosImagensService = new LivrosImagensService();
class LivrosImagensController {
  static listarImagens = async (req, res) => {
    try {
      const resultado = await livrosImagensService.listarImagens();

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarImagemPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await livrosImagensService.listarImagemPorId(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarImagem = async (req, res) => {
    try {
      const resposta = await livrosImagensService.cadastrarImagem(req);
      
      return res.status(201).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static atualizarImagem = async (req, res) => {
    const { params } = req;
    const { body } = req;
    try {
      const resposta = await livrosImagensService.atualizarImagem(params.id, body);

      return res.status(200).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirImagemLivro = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await livrosImagensService.excluirImagemLivro(params.id);
      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default LivrosImagensController;
