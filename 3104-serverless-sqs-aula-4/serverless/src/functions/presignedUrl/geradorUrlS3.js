const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

module.exports.geraUrlPreassinada = async (chaveArquivo) => {

  const s3Payload = { credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }, region: 'us-east-1'};
  const s3Client = new S3Client(s3Payload);
  const command = new PutObjectCommand({
    Bucket: 'alunos-csv',
    Key: chaveArquivo
  });

  const preSignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });

  return preSignedUrl;
};
