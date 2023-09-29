/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';

class AluguelLivro {
  constructor({
    id,
    livro_id,
    usuario_id,
    dias_alugados,
    alugado,
    created_at,
    updated_at
  }) {
    this.id = null || id;
    this.livro_id = livro_id;
    this.usuario_id = usuario_id;
    this.dias_alugados = dias_alugados;
    this.alugado = alugado;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarAluguelLivros() {
    return db.select('*').from('aluguel_livro');
  }

  static async pegarPeloId(id) {
    const resultado = await db.select('*').from('aluguel_livro').where({ id });
    return resultado[0];
  }

  async criar() {
    return db('aluguel_livro').insert(this)
      .then((registroCriado) => db('aluguel_livro')
        .where('id', registroCriado[0]))
      .then((registroSelecionado) => new AluguelLivro(registroSelecionado[0]));
  }

  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await db('aluguel_livro')
      .where({ id })
      .update({ ...this, updated_at: new Date().toISOString() });

    return db.select('*').from('aluguel_livro').where({ id });
  }

  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await db('aluguel_livro')
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

export default AluguelLivro;
