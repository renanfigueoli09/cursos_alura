async function cadastrarAlunosNoBd(alunos) {
  const alunosPromessas = alunos.map((aluno) => {
    return fetch("http://curso-serverless2-api-1428908743.us-east-1.elb.amazonaws.com/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno)
    })
  });

  const respostas = await Promise.all(alunosPromessas);

  if (respostas.some((resposta) => !resposta.ok)) {
    throw new Error("Houve um erro no cadastro de um ou mais alunos");
  }
}

module.exports = { cadastrarAlunosNoBd };