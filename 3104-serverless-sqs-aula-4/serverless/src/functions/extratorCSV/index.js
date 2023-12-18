const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { converteDadosCsv } = require('./converteDadosCsv');
const { cadastroProducer } = require('../../functions/producers/cadastroProducer');

async function criaClienteS3 () {
  if(process.env.STAGE === 'dev') {
    return new S3Client({
      forcePathStyle: true,
      credentials: {
        accessKeyId: 'S3RVER',
        secretAccessKey: 'S3RVER'
      },
      endpoint: 'http://localhost:4569'
    });
  } 
  else if (process.env.STAGE === 'prod') {
    return new S3Client({});
  }
}

const obtemDadosDoCsvDoBucket = async (nome, chave) => {
  const cliente = await criaClienteS3();
  const comando = new GetObjectCommand({
    Bucket: nome,
    Key: chave
  });

  const resposta = await cliente.send(comando);
  const dadosCsv = await resposta.Body.transformToString('utf-8');

  return dadosCsv;
};

module.exports.extraiDadosCsv = async (evento) => {
  try {
    const eventoS3 = evento.Records[0].s3;
    const nomeBucket = eventoS3.bucket.name;
    const chaveBucket = decodeURIComponent(eventoS3.object.key.replace(/\+/g, ' '));
    const dadosArquivo = await obtemDadosDoCsvDoBucket(nomeBucket, chaveBucket);
    const alunos = await converteDadosCsv(dadosArquivo);

    for (let aluno of alunos) {
      await cadastroProducer(aluno);
    }

    console.log('Cadastro dos alunos realizado com sucesso!');
  } catch (erro) {
    console.log(erro);
  }
};
