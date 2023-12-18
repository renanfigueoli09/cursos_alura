const { client } = require('../../../config/clientSQS');
const { SendMessageCommand } = require('@aws-sdk/client-sqs');
const crypto = require('crypto');

module.exports.emailConfirmaProducer = async (objAluno) => {

  const input = {
    QueueUrl: process.env.SQS_QUEUE_EMAILCONFIRMA_URL,
    MessageBody: JSON.stringify(objAluno),
    DelaySeconds: 0,
    MessageDeduplicationId: crypto.randomUUID(),
    MessageGroupId: 'email',
  };

  try {
    const command = new SendMessageCommand(input);
    const mensagem = await client.send(command);
    console.log('mensagem email enviada com sucesso', mensagem.MessageId);
    return mensagem;

  } catch (erro) {
    console.error(erro);
  }
};
