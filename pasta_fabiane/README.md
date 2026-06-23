# work-lister-app-full-crud-js
# 📁 Sistema de um estabelecimento de Bar e Karaoke

> Um sistema de estabelecimento de Bar e Karaoke no formato CRUD desenvolvido pela solicitação de um trabalho escolar.

![Capa do Projeto](./Captura%20de%20tela%202026-06-23%20145714.png)

## 🚀 Sobre o Projeto

O projeto do Bar e Karaoke foi desenvolvido no formato CRUD. O sistema simula como seria um site para os sócios do estabelecimento, contendo coisas como: Registros e relatórios.



---

## 🛠️ Tecnologias e Recursos Utilizados

O desenvolvimento do ecossistema foca na manipulação dinâmica do Front-End integrado a um back-end simulado:

* **HTML:** Estruturação semântica da aplicação.
* **CSS:** Framework CSS utilizado para garantir um design moderno, responsivo e baseado em componentes (Cards, Badges e Utilitários de Grid).
* **JavaScript:** Lógica de programação para manipulação assíncrona do DOM, delegação de eventos e requisições HTTP.




(mudar dps)

---

## ⚙️ Funcionalidades (CRUD)

* **[C]reate (Adicionar):** Formulário lateral intuitivo que envia via requisição `POST` um novo projeto com Título, Disciplina, URL da imagem de capa e Descrição.
* **[R]ead (Listar):** Renderização dinâmica em um sistema de grid responsivo de 3 colunas, adaptando-se a telas de computadores, tablets ou smartphones.
* **[U]pdate (Editar):** Abertura de formulário *inline* diretamente dentro do card correspondente, permitindo a alteração dos dados em tempo real via requisição `PATCH`.
* **[D]elete (Excluir):** Remoção lógica e física do card tanto da interface quanto do banco de dados fictício através do método `DELETE`.

---

## 📦 Como Executar o Projeto

### Pró-requisitos

### 1. Clonar ou baixar o repositório
git clone [https://github.com/laraoberderfer/crud-js-bootstrap.git](https://github.com/laraoberderfer/crud-js-bootstrap.git)

### 2. Iniciar o Servidor Back-End (Mock API)
O projeto utiliza o pacote json-server para simular as rotas da API. Certifique-se de estar usando uma versão do Node compatível e rode o seguinte comando global para instalar (caso ainda não tenha) e rodar o banco local:

# Instalar o json-server globalmente (se necessário)
npm install -g json-server

# Executar o servidor apontando para o seu arquivo work.json
json-server --watch work.json

O servidor iniciará por padrão na porta http://localhost:3000

### 3. Executar o Front-End
Basta abrir o arquivo index.html diretamente em seu navegador ou utilizar a extensão Live Server no VS Code para rodar a aplicação localmente.

---
Desenvolvido por meio de um trabalho escolar.
Docente Responsável: Professora Lara Popov Zambiasi Bazzi Oberderfer e Professor Marcos Virgilio
Alunos Responsável: Davi Emilio, Enzo Brancher, Fabiane de Oliveira, Heitor Gromovski, Pedro Franz e Mateus Furlan.
Instituição: Instituto Federal de Santa Catarina (IFSC) — Câmpus Chapecó
Ano: 2026