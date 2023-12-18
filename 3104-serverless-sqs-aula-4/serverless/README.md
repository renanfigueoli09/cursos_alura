# Serverless Framework com Node.js e AWS

Este é o repositório Serverless do projeto do curso. 
Nele estão as funções, arquivos de configuração e arquivo `serverless.yml`.

## Instalação

Para iniciar, abra o terminal no diretório `3104-serverless-sqs/serverless` e instale o projeto com `npm install`.

## Login no Serverless Framework e na AWS

As intruções detalhadas de login e acesso às credenciais estão nas atividades do curso. Verifique com atenção todos os passos da atividade "Preparando o ambiente" e nos vídeos iniciais do curso.

## Deployment

Abra o terminal no diretório `3104-serverless-sqs/serverless` e execute o comando `sls deploy --stage=prod`.
Após o processo, você deve receber o seguinte output no terminal:

```bash
Deploying serverless-3 to stage prod (us-east-1)
Disabling function: simulandoUploadDoCsv

✔ Service deployed to stack serverless-3-prod (152s)

dashboard: https://app.serverless.com/<seu-perfil>/apps/serverless-3/serverless-3/prod/us-east-1
functions:
  cadastrarAlunos: serverless-3-prod-cadastrarAlunos (6.2 MB)
```

### Serverless offline

Para executar o ambiente Serverless no modo offline, Abra o terminal no diretório `3104-serverless-sqs/serverless` e execute o comando `sls offline`.

A aplicação será executada localmente na porta `3001`. Certifique-se que nenhuma outra aplicação esteja utilizando esta porta, ou modifique o valor da porta no arquivo `serverless.yml`:

```yml
custom:
  serverless-offline:
    httpPort: 3001 #modifique o valor aqui
```

Abra o console do Serverless em `https://app.serverless.com/<seu-nome>` para ter acesso às aplicações publicadas, suas funções e endpoints.