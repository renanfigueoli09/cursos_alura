import { describe } from '@jest/globals';
import AluguelLivroService from '../../services/aluguelLivroService';

const aluguelLivroService = new AluguelLivroService();

describe('Testando AluguelLivroService', () => {
  it('Retornar a data de devolução do livro validando a quantidade de dias alugados', async () => {
    const dataAlugado = new Date('2023-01-01');
    const numeroDiasAlugas = 5;
    const dataDevolucaoMock = new Date('2023-01-06');

    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugas);

    expect(dataDevolucao).toStrictEqual(dataDevolucaoMock);
  });
});
