const { geraUrlPreassinada } = require('./geradorUrlS3');
const { buildResponse } = require('../../../utils/fetchHelpers');

module.exports.enviarUrlPreassinada = async (evento) => {
  const { nomeArquivo } = JSON.parse(evento.body);
  const url = await geraUrlPreassinada(nomeArquivo);

  return buildResponse(201, { url });
};
