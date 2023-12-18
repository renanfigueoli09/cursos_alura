const config = require('../../../config/config.json');
const { fetchApi } = require('../../../utils/fetchHelpers');
const { FetchErro } = require('./erros/FetchErro');
const { buildEmail } = require('../../../utils/buildEmail');
const { emailConfirmaProducer } = require('../producers/emailConfirmaProducer');

module.exports.cadastrarAlunos = async (aluno) => {

  try {
    const res = await fetchApi(`${config.fetchApi.prod}/alunos`, 'POST', 'application/json', aluno);

    const objAluno = JSON.parse(aluno);

    if (res.statusCode === 201) {

      await emailConfirmaProducer(buildEmail(
        objAluno.email,
        `Cadastro de ${objAluno.nome} na plataforma`,
        `O cadastro do email ${objAluno.email} foi feito com sucesso.`));
      return {
        mensagem: 'sucesso no cadastro',
        status: res.statusCode
      };
    }

    throw new FetchErro(res.statusCode, aluno);

  } catch (erro) {
    console.error(erro);
    throw erro;
  }
};
