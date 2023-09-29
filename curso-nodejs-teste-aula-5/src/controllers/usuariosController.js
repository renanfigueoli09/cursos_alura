import UsuariosService from "../services/usuariosService.js";

const usuariosService = new UsuariosService();

class UsuariosController {
  static listarUsuarios = async (req, res) => {
    try {
      const resultado = await usuariosService.listarUsuarios();

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarUsuarioPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await usuariosService.listarUsuarioPorId(params.id);

      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static atualizarUsuario = async (req, res) => {
    const { params } = req;
    const { body } = req;
    try {
      const resposta = await usuariosService.atualizarUsuario(params.id, body);

      return res.status(200).json(resposta);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirUsuario = async (req, res) => {
    const { params } = req;
    try {
      const excluir = await usuariosService.excluirUsuario(params.id);
      return res.status(200).json(excluir);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default UsuariosController;
