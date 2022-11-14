
<h1 align="center">Posts - frontend</h1>

![home-posts](https://user-images.githubusercontent.com/40326598/201685067-0ce6c903-f963-4062-8a85-1a00fcfd99c9.png)
---

<p align="justify">
  Frontend construído a partir das aulas do <a href="https://www.udemy.com/course/curso-de-graphql-e-apollo-server-client/">Curso de GraphQL e Apollo Server + Apollo Client</a>. É um projeto simples mas explora bastantes conceitos acerca do uso do GraphQL,  Apollo Client e React. O projeto é um pequeno sistema de blog onde é possível criar, editar, deletar e comentar posts.
</p>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> |
 <a href="#layout">Layout</a> | 
 <a href="#como-usar">Como usar</a>
</p>

<h4 align="center">
	 Status: Finalizado
</h4>
 
### Sobre o projeto💻

 Este é o repositório da aplicação frontend. Nele está contidas todas as telas do projeto. 

#### Feature

- [X] Login
- [X] Logout
- [X] Create Post
- [X] Edit Post
- [X] Delete Post
- [X] Create Comment

#### Tecnologias🚀

As seguintes ferramentas foram usadas na construção do projeto:

- [X] [Node](https://nodejs.org/pt-br/).
- [x] [Reactjs](https://reactjs.org/).

##### Padronização de código:

- [x] [ESLint](https://eslint.org/);
- [x] [Prettier](https://prettier.io/).
___
### Layout
#### Login
![login](https://user-images.githubusercontent.com/40326598/201689248-4050e5cd-1259-4d07-8bf2-74471e9d26ba.png)

#### Home
![home-screen](https://user-images.githubusercontent.com/40326598/201689425-a7890f90-b1de-4152-bf04-d4dda7e1975d.png)

#### Criar Post
![new-post-screen](https://user-images.githubusercontent.com/40326598/201689723-7be114a5-7247-4f27-8397-1afcc47b9494.png)

#### Editar Post
![edit-post-screen](https://user-images.githubusercontent.com/40326598/201690094-35649253-8819-4f9e-93b3-43dbdc2fabb0.png)

### Visualizar Post
![Captura de tela 2022-11-14 112034](https://user-images.githubusercontent.com/40326598/201691077-c47c480b-c72e-4604-b2b7-143bdbb06895.png)

___
### Como usar
#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

**Obs:** Este projeto depende diretamente do projeto [Posts backend](https://github.com/willyoliv/posts-backend-graphql) , sendo necessário executar o server primeiro e configurar o arquivo `.env` com a url em que o projeto server está funcionando.

##### Clone este repositório
```bash
git clone https://github.com/willyoliv/posts-frontend.git
```
##### Após clonar, acesse as pastas do projeto no terminal/cmd e instale as dependências
```bash
cd posts-frontend
npm install
# ou npm i
```

##### Para executar o projeto rode o seguinte comando
```bash
npm run dev
```

**Obs:** O projeto irá por padrão rodar em `http://localhost:3000`

---

