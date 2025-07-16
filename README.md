# Prime Filmes – Catálogo de Filmes em React

## Sobre o projeto

Prime Filmes é um catálogo de filmes desenvolvido em React com o objetivo de treinar o consumo de APIs externas e criar uma interface dinâmica e amigável. O projeto integra a API do TMDB (The Movie Database) para exibir dados atualizados sobre filmes.

## Tecnologias utilizadas

-React (com hooks)
- Axios para requisições HTTP
- API TMDB para dados dos filmes
- Controle de estado local para gerenciar a paginação e os dados

## Funcionalidades
- Exibição de listas de filmes com paginação dinâmica
- Busca e filtros de filmes (se aplicável)
- Interface responsiva e amigável

## Desafios enfrentados e soluções
Durante o desenvolvimento, enfrentei dificuldades na exibição correta dos dados paginados da API. Para resolver, estudei a fundo o funcionamento do React Hooks, especialmente o useEffect, e implementei um controle de paginação usando estados locais para garantir a atualização correta dos dados conforme o usuário navega pelas páginas.

## O que aprendi
- A trabalhar com APIs públicas e integrar dados externos em uma aplicação React.
- A gerenciar estados locais para criar um controle eficiente da paginação.
- A tratar erros de forma mais profissional para melhorar a experiência do usuário.
- A estruturar componentes para facilitar a reutilização e manutenção do código.

## Como rodar o projeto localmente

### 1. Clone o repositório:
bash```
git clone https://github.com/gameplaybiel/prime-filmes.git```

### 2. Instale as dependências:
bash```
npm install```

### 4. Inicie a aplicação:
bash```
npm start```

### 4. Acesse [http://localhost:3000] no seu navegador
