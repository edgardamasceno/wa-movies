<div align="center">
    <img alt="Wa Project" src="./doc/image/logo.svg" width="360"/>
</div>

## Sumário

01) [Desafio](#desafio-técnico---desafio-b)
    - [Back-End](#back-end)
    - [Front-End](#front-end)
    - [Requisitos](#requisitos-básicos)
    - [Diferenciais](#diferenciais)
02) [Documentação](#documentação)
    - [Git](#git)
        - [Monorepo](#monorepo)
        - [GitFlow](#gitflow)
        - [Branchs](#branchs)
        - [Commitzen](#commitzen)
    - [Docker](#docker)
    - [Database](#database)
03) [Implementação](#implementação)
    - [TODO List](#todo-list)
    - [Estrutura de dados](#estrutura-de-dados)
    - [Variáveis de ambiente](#variáveis-de-ambiente)
    - [Iniciando a aplicação localmente](#iniciando-a-aplicação-localmente)

# Desafio técnico - *Desafio B*

Desafio técnico para a oportunidade de desenvolvedor full-stack **NodeJS e ReactJS**.

O projeto tem como objetivo ser um catálogo de filmes com informações básicas de título, descrição, diretor e produtor.

[← Voltar para o sumário](#sumário)

## Back-end

**O back-end deverá ser uma API em NodeJS que contenha:**

End-point que consulta 50 filmes, extrai as informações de título, banner, descrição, diretor e produtor e salva no banco de dados da aplicação.

A API para extração dos filmes é: `https://ghibliapi.herokuapp.com/#tag/Films`

End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dados.

[← Voltar para o sumário](#sumário)

## Front-end

**O front-end deverá ser feito em ReactJS e irá conter:**

Tela com a exibição dos filmes consultados de forma paginada.

Botão de atualizar que acessará o end-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados.

[← Voltar para o sumário](#sumário)

## Requisitos básicos

- Utilizar NodeJs no back-end e ReactJS no front-end
- Ter uma documentação da API
- Ter um README que explique como executar os projetos
- Estar versionado no GitHub

[← Voltar para o sumário](#sumário)

## Diferenciais

- Ter cobertura de testes
- Boas práticas de desenvolvimento
- Clean code
- Ter realizado deploy dos projetos

[← Voltar para o sumário](#sumário)

# Documentação

## Git

### Monorepo

Este é um monorepo! Front-end, back-end, infraestrutura e configurações, versionados em um mesmo repositório.

[Leia mais: Monorepo](https://monorepo.tools/#what-is-a-monorepo)

[← Voltar para o sumário](#sumário)

### Gitflow

O Git Flow é um modelo, uma estratégia ou, ainda, um fluxo de trabalho muito utilizado por equipes de desenvolvimento de software.

[Leia mais: Git Flow](https://www.gitkraken.com/learn/git/git-flow)

[← Voltar para o sumário](#sumário)

#### Branchs

- main
- develop
- feature/*
- hotfix/*
- release

[← Voltar para o sumário](#sumário)

### Commitzen

Padronização de mensagens de commit utilizando *conventional commits*, facilitando o entendimento e manutenção de projetos atravéz de mensagens curtas, claras, descritivas e semânticas.

[Leia mais: Commitzen](https://github.com/commitizen/cz-cli)

[Leia mais: Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

#### Instalação do Commitzen

```batch
npm install -g commitizen
npm install -g cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

#### Utilização

```batch
git cz
```

- **chore:** Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
- **feat:** São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
- **fix:** Essencialmente definem o tratamento de correções de bugs.
- **refactor:** Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
- **docs:** Inclusão ou alteração somente de arquivos de documentação.
- **perf:** Uma alteração de código que melhora o desempenho.
- **style:** Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
- **test:** Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
- **build:** Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
- **ci:** Mudanças em nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, BrowserStack, SauceLabs).
- **env:** Utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

### Exemplos de Commits

`chore: add commitlint e husky`

`chore(eslint): obrigar o uso de aspas duplas no jsx`

`refactor: refatorando a tipagem`

`feat: add axios / buscando e tratando os dados`

`feat(page/home): criando o roteamentento no next`

[← Voltar para o sumário](#sumário)

# Docker

- [Instalação - Docker](https://docs.docker.com/engine/install/)
- [Instalação - Docker Compose](https://docs.docker.com/compose/install/)

[← Voltar para o sumário](#sumário)

# Database

Usando o terminal, acesse a raiz do repositório e digite o comando:

```bash
docker-compose --env-file .env.local up database
```

> Será criada a base de dados inicial da aplicação.

[← Voltar para o sumário](#sumário)

# Implementação

Para documentar o front-end, foi configurado o deploy automático no GitHub Pages via GitHub Action.

[Acesse: Wa Movies Storybook](https://edgardamasceno.github.io/wa-movies)

[← Voltar para o sumário](#sumário)

## TODO list

- [x] Criar documentação (README)
- [x] Criar banco de dados containerizado
- [x] Criar boilerplate front-end
- [x] Criar boilerplate back-end
- [x] [FRONT] Implementar componente Text
- [x] [FRONT] Implementar componente Heading
- [x] [FRONT] Implementar componente Card
- [x] [FRONT] Implementar componente Button
- [x] [FRONT] Implementar componente TextInput
- [x] [FRONT] Implementar componente SearchBar
- [x] [FRONT] Implementar componente Pagination
- [x] [FRONT] Implementar componente Movie
- [x] [BACK] Implementar endpoint de update da base de filmes
- [x] [BACK/DOC] Implementar Swagger para endpoint de update da base de filmes
- [x] [BACK] Implementar endpoint de reset da base de filmes
- [x] [BACK/DOC] Implementar Swagger para endpoint de reset da base de filmes
- [x] [BACK] Implementar endpoint de listagem de filmes com paginação
- [x] [BACK/DOC] Implementar Swagger para endpoint de listagem de filmes com paginação
- [x] [FRONT] Implementar página de busca e listagem de filmes
- [ ] [OPT/TEST] Implementar testes
- [ ] [OPT/DEPLOY] Realizar deploy da aplicação em cloud

[← Voltar para o sumário](#sumário)

## Estrutura de dados

```json
"page" : {
    "currentPage": number,
    "totalPages": number,
    "itemsPerPage": number,
    "items" : [ 
        {
            "id" : string,
            "title" : string,
            "originalTitle" : string,
            "originalTitleRomanised" : string,
            "description" : string,
            "director" : string,
            "producer" : string,
            "duration" : number,
            "year" : number,
            "score": number,
        },
        ...
    ]
}
```

[← Voltar para o sumário](#sumário)

## Variáveis de ambiente

Edite o arquivo `.env.local`:

```properties
# Database
MYSQL_DATABASE=wa_movies
MYSQL_USER=wa_movies
MYSQL_PASSWORD=wa_movies
MYSQL_ROOT_PASSWORD=wa_movies
MYSQL_DB_PORT=3306
MYSQL_DB_HOST=localhost

# Backend
NODE_ENV=development
NODE_PORT=3000
ENABLE_CORS=true
FULLTEXT_SEARCH_KEYS=title, original_title, original_title_romanised, description, director, producer, year
DEFAULT_PAGINATION=10
DEFAULT_FETCH_LIMIT=50
```

No exemplo acima, a propriedade `FULLTEXT_SEARCH_KEYS` define que as buscas serão executadas no nome do filme, descrição, nomes do diretor e produtor e também ano de lançamento.

A propriedade `DEFAULT_PAGINATION` define o número de páginas retornadas nas buscas.

[← Voltar para o sumário](#sumário)

## Iniciando a aplicação localmente

1. Crie um link simbólico para o arquivo `.env.local` na pasta `backend`.

```bash
ln -s $(pwd)/.env.local $(pwd)/backend  
```

2. Inicie o banco de dados MySQL via Docker:

Abra um novo terminal e na raíz do projeto, execute:

```bash
docker-compose --env-file .env.local up database
```

3. Inicie o backend:

Abra um novo terminal e na raíz do preojeto, execute:

```bash
cd backend
npm install
npm run start:dev
```

4. Inicie o frontend:

Abra um novo terminal e na raíz do preojeto, execute:

```bash
cd frontend
npm install
npm run start:dev
```

5. Acesse: [http://localhost:4000/](http://localhost:4000/)

6. Inicie o Storybook (OPCIONAL)

Para visualizar e documentar os componentes do front-end desenvolvidos em ReactJS, neste projetos foi utilizado o [Storybook](https://storybook.js.org)

Abra um novo terminal e na raíz do preojeto, execute:

```bash
cd frontend
npm install
npm run start:storybook
```

7. Acesse: [http://localhost:6006/](http://localhost:6006/)

[← Voltar para o sumário](#sumário)
