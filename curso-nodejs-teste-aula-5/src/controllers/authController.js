import AuthService from '../services/authService.js';

const authService = new AuthService();
class AuthController {
  static login = async (req, res) => {
    const { body } = req;

    try {
      const login = await authService.login(body);

      return res.status(201).json(login);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarUsuario = async (req, res) => {
    const { body } = req;
    
    try {
      const usuario = await authService.cadastrarUsuario(body);

      return res.status(201).json(usuario);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default AuthController;
