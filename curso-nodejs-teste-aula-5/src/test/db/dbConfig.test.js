import { describe, expect } from '@jest/globals';
import db from '../../db/dbconfig';

describe('Testando configDB', () => {
  it('Teste de conexão com o banco de dados', async () => {
    const autorMock = {
      nome: 'Luana',
      nacionalidade: 'Brasileira',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const autorSalvo = await db('autores').insert(autorMock)
      .then((retorno) => db('autores')
        .where('id', retorno[0]))
      .then((autorSelecionado) => autorSelecionado[0]);

    expect(autorSalvo.nome).toBe(autorMock.nome);

    await db('autores').where({ id: autorSalvo.id }).del();
  });

});
