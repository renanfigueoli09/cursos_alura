import LivrosService from "../services/livrosService.js";

const livrosService = new LivrosService();
class LivrosController {
  static listarLivros = async (req, res) => {
    try {
      const resultado = await livrosService.listarLivros();

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarLivroPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await livrosService.listarLivroPorId(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarLivro = async (req, res) => {
    const { body } = req;
    try {
      const resposta = await livrosService.cadastrarLivro(body);

      return res.status(201).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static atualizarLivro = async (req, res) => {
    const { params } = req;
    const { body } = req;
    try {
      const resposta = await livrosService.atualizarLivro(params.id, body);

      return res.status(200).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirLivro = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await livrosService.excluirLivro(params.id);
      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default LivrosController;
