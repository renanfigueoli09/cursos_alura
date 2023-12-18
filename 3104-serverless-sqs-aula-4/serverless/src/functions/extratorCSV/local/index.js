/* eslint-disable no-unused-vars */
const { fazUploadNoBucketLocal } = require('./servidorS3');

module.exports.simulandoUploadDoCsv = async (evento) => {
  try {
    await fazUploadNoBucketLocal();

    return {
      statusCode: 200,
      body: JSON.stringify({
        mensagem: 'Simulando upload de arquivo...'
      })
    };
  } catch (erro) {
    return {
      statusCode: erro.statusCode || 500,
      body: JSON.stringify(erro)
    };
  }
};
