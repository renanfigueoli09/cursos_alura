import AutoresService from "../services/autoresService.js";

const autoresService = new AutoresService();
class AutoresController {
  static listarAutores = async (req, res) => {
    try {
      const resultado = await autoresService.listarAutores();

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarAutorPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await autoresService.listarAutorPorId(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarAutor = async (req, res) => {
    const { body } = req;
    try {
      const resposta = await autoresService.cadastrarAutor(body);

      return res.status(201).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static atualizarAutor = async (req, res) => {
    const { params } = req;
    const { body } = req;
    try {
      const resposta = await autoresService.atualizarAutor(params.id, body);

      return res.status(200).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirAutor = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await autoresService.excluirAutor(params.id);

      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarLivrosPorAutor = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await autoresService.listarLivrosPorAutor(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default AutoresController;
