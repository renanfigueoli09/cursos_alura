import AluguelLivroService from '../services/aluguelLivroService.js';

const aluguelLivroService = new AluguelLivroService();
class AluguelLivroController {
  static listarAluguelLivro = async (_, res) => {
    try {
      const resultado = await aluguelLivroService.listarAluguelLivro();
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarAluguelLivroPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await aluguelLivroService.listarAluguelLivroPorId(params.id);
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static alugarLivro = async (req, res) => {
    const { body } = req;
    try {
      const alugar = await aluguelLivroService.alugarLivro(body, req.usuarioId);

      return res.status(201).json(alugar);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static devolveLivro = async (req, res) => {
    const { params } = req;
    try {
      const devolver = await aluguelLivroService.devolveLivro(params.id, req.usuarioId);

      return res.status(200).json(devolver);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirAluguelLivroLivro = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await aluguelLivroService.excluir(params.id);

      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default AluguelLivroController;
