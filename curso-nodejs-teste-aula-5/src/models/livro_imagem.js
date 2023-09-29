/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';

class LivroImagem {
  constructor({
    id,
    livro_id,
    mimetype,
    filename,
    size,
    base64,
    created_at,
    updated_at
  }) {
    this.id = null || id;
    this.livro_id = livro_id;
    this.mimetype = mimetype;
    this.filename = filename;
    this.size = size;
    this.base64 = base64;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarImagens() {
    return db.select('*').from('livros_imagens');
  }

  static async pegarPeloId(id) {
    const resultado = await db.select('*').from('livros_imagens').where({ id });
    return resultado[0];
  }

  async criar() {
    return db('livros_imagens').insert(this)
      .then((registroCriado) => db('livros_imagens')
        .where('id', registroCriado[0]))
      .then((registroSelecionado) => new LivroImagem(registroSelecionado[0]));
  }

  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await db('livros_imagens')
      .where({ id })
      .update({ ...this, updated_at: new Date().toISOString() });

    return db.select('*').from('livros_imagens').where({ id });
  }

  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await db('livros_imagens')
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

export default LivroImagem;
