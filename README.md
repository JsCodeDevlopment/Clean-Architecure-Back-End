# Boilerplate - Back-end Typescript + Clean Architecture

## 💬 Descrição

Este projeto serve como um ponto de partida para a criação de aplicações backend robustas e bem estruturadas, utilizando as melhores práticas da Clean Architecture.

## 🚧 Estrutura do Projeto

📂 **Esquema de pastas:** Este projeto segue os princípios da Clean Architecture, dividindo o código em camadas bem definidas:
```
  src/
    |- domain
    |- infra
    |- package
    |- usecases
  main.ts

  domain/
    |-| product
    |-----| entity
    |---------- product.entity.ts
    |-----| gateway
    |---------product.gateway.ts

  infra/
    |-| api
    |----| express
    |---------| routes
    |--------------| products
    |--------------------| create
    |-------------------------| dto
    |----------------------------- create.dto.ts
    |----------------------------- create.route.express.ts
    |--------------------| list
    |------------------------| dto
    |---------------------------- list.dto.ts
    |------------------------- list.route.express.ts
    |--------------- api.express.ts
    |--------------- route.ts
    |-| repositories
    |--------| product
    |------------- product.repository.ts
    |-| api.ts

    package/
     |--| prisma
     |------- prisma.ts

    usecases/
     |--| products
     |-------| create
     |-----------| dto
     |--------------- create.input.dto.ts
     |--------------- create.output.dto.ts
     |------------ create.usecase.ts
     |-------| list
     |-----------| dto
     |--------------- list.input.dto.ts
     |--------------- list.output.dto.ts
     |------------ list.usecase.ts
     |--- usecase.ts
```
## ⚙ Resumo da Estrutura

**- Entidade:** Define a estrutura e lógica de negócios básica da(s) Entidade(s).
**- Caso de Uso (UseCase):** Implementa a lógica de aplicação específica para criação, edição, deleção, listage ou atualização de uma entidade.
**- Configurações de Rota:** Define a abstração para as rotas HTTP.
**- Rota Específica:** Implementa a lógica da rota para executar uma ação feita no usecase.
**- Ponto de Entrada (Main):** Configura e inicializa a aplicação, incluindo a injeção de dependências.

## Fluxo da Aplicação

# Recepção da Requisição:
- O cliente faz uma requisição HTTP ao servidor Express.
- O servidor Express direciona a requisição para a rota apropriada com base no método HTTP e no caminho.

# Rota:
- A rota recebe a requisição e extrai os dados necessários.
- Cria um DTO de entrada (CreateProductInputDto) com os dados extraídos.
- Chama o caso de uso (CreateProductUsecase), passando o DTO de entrada.

# Caso de Uso (UseCase):
- O caso de uso recebe o DTO de entrada.
- Cria uma instância da entidade Product usando o método Product.create.
- Interage com o repositório (ProductGateway) para persistir o produto no banco de dados.
- Gera um DTO de saída (CreateProductOutputDto) com os dados do produto criado.

# Repositório (Gateway):
- Implementa a interface do repositório definida no domínio.
- Usa Prisma para realizar operações no banco de dados.
- Retorna os dados necessários para o caso de uso.

# Resposta da Rota:
- A rota recebe o DTO de saída do caso de uso.
- Formata a resposta e envia de volta ao cliente.


## 🎯 Instalação
1°→ Instalação das dependências:
```bash
npm install
# ou
yarn install
```
2°→ Inicialização do Prisma:
```bash
npx prisma init
```
3°→ Configure o banco de dados no arquivo `.env`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/meubanco"
```
4°→ Execute as migrações do Prisma para configurar o banco de dados:
```bash
npx prisma migrate dev --name init
```
5°→ Execute a aplicação:
```bash
npm run dev
# ou
yarn dev

```

## 💻 Tecnologias Utilizadas

 <div align="center">
  <image src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <image src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
  <image src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
</div>

## 👨‍💻 Desenvolvedor

| Foto                                                                                                                           | Nome                                                 | Cargo               |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------- |
| <img src="https://avatars.githubusercontent.com/u/100796752?s=400&u=ae99bd456c6b274cd934d85a374a44340140e222&v=4" width="100"> | [Jonatas Silva](https://github.com/JsCodeDevlopment) | FullStack Developer |
