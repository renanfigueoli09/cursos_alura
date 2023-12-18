const { cadastrarAlunosNoBd } = require("../cadastrarAlunosNoBd");
const { converteDadosCsv } = require("../converteDadosCsv");
const { fazUploadNoBucket, obtemDadosDoCsvDoBucket } = require("./servidorS3");

module.exports.simulandoUploadDoCsv = async (evento) => {
  try {
    await fazUploadNoBucket();

    return {
      statusCode: 200,
      body: JSON.stringify({
        mensagem: "Simulando upload de arquivo..."
      })
    };
  } catch (erro) {
    return {
      statusCode: erro.statusCode || 500,
      body: JSON.stringify(erro)
    };
  }
}


module.exports.cadastrarAlunosDoBucketLocal = async (evento) => {
  try {
    const eventoS3 = evento.Records[0].s3;

    const nomeBucket = eventoS3.bucket.name;
    const chaveBucket = decodeURIComponent(eventoS3.object.key.replace(/\+/g, " "));
  
    const dadosArquivo = await obtemDadosDoCsvDoBucket(nomeBucket, chaveBucket);
  
    const alunos = await converteDadosCsv(dadosArquivo);
  
    await cadastrarAlunosNoBd(alunos);

    console.log("Cadastro dos alunos realizado com sucesso!");
  } catch (erro) {
    console.log(erro);
  }
};
