const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { readFile } = require('fs/promises');
const { join } = require('path');
const { criaClienteS3 } = require('../index');

module.exports.fazUploadNoBucketLocal = async () => {
  const cliente = await criaClienteS3();

  const nomeArquivo = 'cadastrar_alunos.csv';
  const caminhoArquivo = join(__dirname, nomeArquivo);
  const dadosCsv = await readFile(caminhoArquivo, 'utf-8');

  const comandoUpload = new PutObjectCommand({
    Bucket: 'alunos-csv-local',
    Key: nomeArquivo,
    Body: dadosCsv
  });

  await cliente.send(comandoUpload);
};
