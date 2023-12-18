import config from "../config/config.json";

const BASE_URL = config.apiUrl.prod;

function buildFetchObj(metodo, contentType, body) {
  return ({
    method: metodo,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "PUT,POST,GET",
    },
    body: body,
  });
}

async function criaRegistro(novoRegistro) {
  const fetchObj = buildFetchObj("POST", "application/json", JSON.stringify(novoRegistro))
  try {
    const res = await fetch(`${BASE_URL}/alunos`, fetchObj);
    return res.json();
  } catch (erro) {
    return erro;
  }
}

async function enviaArquivoViaURL (url, arquivo) {
  const fetchObj = buildFetchObj("PUT", "text/csv; charset=utf-8", arquivo);
  try {
    const res = await fetch(url, fetchObj);
    if (res.status === 200) {
      return "upload do arquivo concluído"
    } else {
      return "falha no upload"
    }
  } catch (erro) {
    return erro;
  }
}

async function requestPresignURL (nomeArquivo) {

  try {
    const fetchObj = buildFetchObj('POST', 'application/json', JSON.stringify({ nomeArquivo }));

    const res = await fetch(`${config.slsUrl.prod}/alunos/presignedurl`, fetchObj)

    const body = await res.json();

    return body.url;
  } catch (erro) {
    return erro;
  }
}

export { criaRegistro, enviaArquivoViaURL, requestPresignURL };
