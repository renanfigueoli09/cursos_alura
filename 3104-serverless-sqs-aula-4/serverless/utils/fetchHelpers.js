const buildFetchObj = (metodo, contentType, body) => {
  return ({
    method: metodo,
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET',
    },
    body: body,
  });
};

const buildResponse = (status, body, headers) => {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  };
};

const fetchApi = async (url, metodo, contentType, body) => {
  const fetchObj = buildFetchObj(metodo, contentType, body);
  const res = await fetch(url, fetchObj);
  console.log('RESPONSE', res.status);
  return buildResponse(res.status, res.body, res.headers);
};

module.exports = { buildResponse, fetchApi };
