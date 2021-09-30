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
    - [Transcrição de voz para texto.](#transcribe)


## Instalação

Usando npm:

```bash
$ npm i @echo_rec/speech-to-text --save
```

Usando yarn:

```bash
$ yarn add @echo_rec/speech-to-text
```

## Configuração

Para utilização da ferramenta, é necessário acessar o [sistema da echo.rec](https://app.echo.rec.br) e criar o seu token de integração.

Após a instalação do seu sdk no projeto, segue o exemplo para iniciar a instância da biblioteca.

```js
const echoRec = require('@echo_rec/speech-to-text')

const { transcribe } = echoRec({ 
  token: 'sua_chave_aqui',
  env: 'seu_ambiente' 
})

```

- [x] O campo ```token``` é obrigatório para identificação da sua aplicação no [echo.rec](https://app.echo.rec.br).
- [x] O campo ```env``` é opcional, ele serve para identificar o ambiente da sua maquina, a ````.env ```` por padrão é ```development.```


## transcribe

Para que o [echo.rec](https://app.echo.rec.br) transcreva em texto o seu áudio, é necessário que envie o arquivo dos tipo:

 - **mp3**
 - **ogg**

Segue o exemplo usando o sdk para transcrição do audio:

```js
const path = require('path')
const echoRec = require('@echo_rec/speech-to-text')

const { transcribe } = echoRec({
  token: 'sua_chave_aqui',
  env: 'seu_ambiente'
})

const file = path.join(__dirname, './', 'meu_audio_aqui.mp3')


const result = await transcribe(file)

console.log(result)
```

Saída no terminal.

````json
{
  "data": {
    "id": "d128aec0-0607-444e-a269-5ea98c1ffbda",
    "message": "Sua transcrição aqui em texto!"
  },
  "status": 201
}
````
