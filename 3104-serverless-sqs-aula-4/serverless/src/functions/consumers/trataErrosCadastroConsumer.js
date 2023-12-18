const { buildEmail } = require('../../../utils/buildEmail');
const { emailConfirmaProducer } = require('../producers/emailConfirmaProducer');

module.exports.trataErrosCadastroConsumer = async (evento) => {
  const { body } = evento.Records[0];
  const aluno = JSON.parse(body);

  await emailConfirmaProducer(buildEmail(
    'admin@plataforma.com', 
    `Cadastro de ${aluno.nome} não efetuado`, 
    `O cadastro do email ${aluno.email} não foi concluído.`));
};
