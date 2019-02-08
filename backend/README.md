# Back-End: NodeJS + MongoDB
Essa aplicação desenvolvida em NodeJS gerencia de maneira simples um serviço de chat, com disponibilidade de 3 endpoints:

1. GET+/chat -- retorna o ID da mensagem mais recente.
2. GET+/chat/:id -- retorna a mensagem com ID `id: Number`.
3. POST+/chat -- cria uma nova mensagem baseado no corpo JSON definido em ./model/messageModel.js.

## Instalação
Neste caminho, execute `npm install`. Tenha um servidor mongoDB pronto e configure o acesso a ele no arquivo db.js.

Crie um arquivo de configuração de base de dados nos moldes de:

```json
{
    "connectionString": "mongodb://127.0.0.1/webchat"
}
```

e salve-o no caminho `src` como `dbConfig.json`. Altere o valor da chave `connectionString` para corresponder à sua instância MongoDB.

## Execução
Para iniciar o servidor, execute `npm run start` em um shell neste caminho.