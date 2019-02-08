# Back-End: NodeJS + MongoDB
Essa aplicação desenvolvida em NodeJS gerencia de maneira simples um serviço de chat, com disponibilidade de 3 endpoints:

1. GET+/chat -- retorna o ID da mensagem mais recente.
2. GET+/chat/:id -- retorna a mensagem com ID `id: Number`.
3. POST+/chat -- cria uma nova mensagem baseado no corpo JSON definido em ./model/messageModel.js.

## Instalação
Neste caminho, execute `npm install`. Tenha um servidor mongoDB pronto e configure o acesso a ele no arquivo db.js.

## Execução
Para iniciar o servidor, execute `npm run start` em um shell neste caminho.