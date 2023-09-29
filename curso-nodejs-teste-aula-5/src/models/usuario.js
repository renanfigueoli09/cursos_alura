/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';

class Usuario {
  constructor({
    id,
    nome,
    email,
    senha,
    created_at,
    updated_at
  }) {
    this.id = null || id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarUsuarios() {
    return db.select('*').from('usuarios');
  }

  static async pegarPeloId(id) {
    const resultado = await db.select('*').from('usuarios').where({ id });
    return resultado[0];
  }

  static async pegarPeloEmail(email) {
    const resultado = await db.select('*').from('usuarios').where({ email });
    return resultado[0];
  }

  async criar() {
    return db('usuarios').insert(this)
      .then((registroCriado) => db('usuarios')
        .where('id', registroCriado[0]))
      .then((registroSelecionado) => new Usuario(registroSelecionado[0]));
  }

  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await db('usuarios')
      .where({ id })
      .update({ ...this, updated_at: new Date().toISOString() });

    return db.select('*').from('usuarios').where({ id });
  }

  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await db('usuarios')
      .where({ id })
      .del();
  }

  async salvar() {
    // verificar se o id existe no banco
    // se não existir é create
    // se existir é update
    if (this.id) {
      const resultado = await this.atualizar(this.id);
      return resultado;
    }
    const resultado = await this.criar();
    return resultado;
  }
}

export default Usuario;
