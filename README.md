# @echo_rec/speech-to-text
[![npm version](https://img.shields.io/npm/v/@echo_rec/speech-to-text.svg?style=flat-square)](https://www.npmjs.org/package/@echo_rec/speech-to-text)
[![install size](https://packagephobia.now.sh/badge?p=@echo_rec/speech-to-text)](https://packagephobia.now.sh/result?p=@echo_rec/speech-to-text)
[![npm downloads](https://img.shields.io/npm/dm/@echo_rec/speech-to-text.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@echo_rec/speech-to-text)


![echo.rec](https://raw.githubusercontent.com/echo-rec/speech-to-text/main/images/logo-dark.png)

Transcrição de voz para texto em clientes com node.js.

> Sobre echo.rec [clique aqui](https://app.echo.rec.br).

## Sobre a apm.
- [Instalação](#instalação)
- [Configuração](#configuração)
    - [Transcrição de voz para tetxo.](#transcribe)


## instalação

Usando npm:

```bash
$ npm i @echo_rec/speech-to-text --save
```

Usando yarn:

```bash
$ yarn add @echo_rec/speech-to-text
```

## Configuração

Para configuração é necessário acessar o [sistema da echo.rec](https://app.echo.rec.br) e
criar sua APM, com isso terá o token para integração do sdk.

Após a instalação do seu sdk no seu ```package.json``` iremos para iniciar o projeto.

```js
const reportfyApm = require('@reportfy/apm')

const reportfyApm = reportfyApm.init({
    key: 'sua_chave_aqui', 
    env: 'development',
    accessKey: 'access_key_workspace', 
    secretKey: 'secret_key_workspace'
})

```

- [x] O campo ```key``` é obrigatório para que seus logs e erros de aplicação sejam enviados para [reportfy](https://reportfy.com.br).
-[x] O campo ```accessKey``` é obrigatório, chave secreta para leitura de dados que contém criptografia da sua área de trabalho(workspace).
-[x] O campo ```accessKey``` é obrigatório, chave secreta para leitura de dados que contém criptografia da sua área de trabalho(workspace).
- [x] O campo ```env``` é opcional, ele serve para identificar os **logs, issues, handler e tracing** do seu ambiente. Por **default** a ````.env ```` é development.
- [x] O campo ```tracing``` é opcional, ele serve para identificar realizar **tracing http** da sua api. Por **default** a ````tracing ```` é **false**.




## Api

Para que o [reportfy](https://reportfy.com.br) escute todas as request do [framework express](https://expressjs.com/) necessita da
alocação do ```captureHandler``` como middleware, segue o exemplo abaixo:

```js
const express = require('express')
const reportfyApm = require('@reportfy/apm')

const app = express()
const reportfyApm = reportfyApm.init({ 
  key: 'sua_chave_aqui', 
  env: 'development',
  accessKey: 'access_key_workspace',
  secretKey: 'secret_key_workspace'
})

app.use(express.json({}))
app.use(reportfyApm.captureHandler)

const port = process.env.PORT || 3000

app.listen(3000, () => console.log('Aplicão no ar: http://localhost:3000'))
```
