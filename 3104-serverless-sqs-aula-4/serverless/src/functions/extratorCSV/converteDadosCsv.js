const { parse } = require('fast-csv');

async function converteDadosCsv(dados) {
  const resultado = await new Promise((resolver, rejeitar) => {
    const alunos = [];

    const stream = parse({ headers: ['nome', 'email'], renameHeaders: true })
      .on('data', (aluno) => alunos.push(aluno))
      .on('error', (erro) => rejeitar(new Error('Houve um erro no processamento do arquivo CSV.', erro.message)))
      .on('end', () => resolver(alunos));
  
    stream.write(dados);
    stream.end();
  });

  if (resultado instanceof Error) throw resultado;
  return resultado;
}

module.exports = { converteDadosCsv };
