# Avaliação Prática - Cardápio Digital (Interação com API's)

**Turma**: Programação Front-End (MI77)

Você atua como Desenvolvedor Front-End em uma agência de tecnologia. Um cliente do setor gastronômico solicitou a finalização de um Cardápio Digital de alto padrão. A interface (HTML/CSS) já foi desenvolvida pela equipe de Design, porém os dados ainda estão estáticos. Sua tarefa é integrar o sistema a uma API RESTful para que o cardápio reflita em tempo real os produtos, preços e categorias do restaurante, garantindo uma experiência dinâmica ao usuário final.

---

## 🎯 Desafio

Considerando o ambiente de desenvolvimento configurado e a documentação da API fornecida, você deve:

1. **Página Inicial (Home)**: Apresentar 6 itens destacados, buscando na API e ordenando-os do menor ao maior preço (manipulando arrays no JavaScript).
2. **Cardápio em Seções**: Buscar a listagem completa de produtos e agrupá-los no DOM formando "seções" por categoria (Entradas, Principais, etc). Cada seção deve ter seu título dinâmico contendo a quantidade de itens, além de possuir um filtro em select (\`<select>\`) para reordenar os itens pelo preço (menor ou maior).
3. **Produtos Relacionados (Detalhes)**: Na página de detalhes do produto, implementar uma seção de "Mais produtos" consultando produtos da mesma categoria e exibindo até 3 sugestões que diferem do próprio item exibido.

---

## 📦 Resultados e Entregas

**⚠️ INSTRUÇÕES OBRIGATÓRIAS DE ENTREGA ⚠️**
1. Instale a extensão **Local History** (publicada por xyz) no seu VS Code.
2. Certifique-se de habilitar a opção de **Salvamento Automático (Auto Save)** do VS Code.
3. Ao submeter a sua avaliação, você deve enviar o arquivo `.zip` do projeto contendo **obrigatoriamente** a pasta oculta `.history` (gerada automaticamente pela extensão).

> **Atenção**: Caso não siga estas instruções ou entregue o arquivo `.zip` sem a pasta `.history`, a prova será considerada como **incorreta, gerando nota zero**.

- **Entrega Técnica**: Interface funcional com a listagem vinda da API implementada via scripts no arquivo `app.js`, que deve estar identado e documentado.
- **Formato Final de Envio**: Arquivo `.zip` completo (contendo todos os arquivos do site e a pasta `.history`).
- **Tempo estimado**: 3h

### Lista de Anexos
- Arquivo zipado com a estrutura inicial de código (`prova77.zip` com o arquivo `app.js` vazio além do HTML atualizado).
- Documentação da API: [api-restaurante-front.vercel.app](https://api-restaurante-front.vercel.app)

---

## 🛠️ Critérios de Avaliação e Lista de Verificação

Abaixo estão as capacidades e os critérios pelos quais sua entrega será avaliada. Lembre-se de deixar o seu código `app.js` coerente com todos os pontos listados de **Desenvolvimento**.

### Capacidades (CAP)
- **C1** – Aplicar técnicas de programação para integração de interfaces front-end com APIs (P)
- **C2** – Reconhecer diferentes linguagens de scripts para a aplicação de lógica no sistema (P)
- **C3** – Aplicar técnicas e linguagens atuais de acordo com escopo do projeto, considerando o ambiente de Interface de Desenvolvimento - IDE, de acordo com a necessidade do software (P)
- **C4** – Reconhecer as características e funcionalidades da programação front-end (P)
- **C5** – Adotar comportamentos profissionais com iniciativa e criatividade, considerando as premissas da autogestão das suas atividades, bem como os critérios de organização, disciplina, responsabilidade, concentração e gestão do tempo (P)

### Lista de Verificação (Desenvolvimento / Nota Máxima)

| Critério Avaliado | CAP | Nota Máx. | Justificativa / Avaliação |
| :--- | :---: | :---: | :--- |
| Realizou o consumo do endpoint **GET** para listagem de produtos via **Fetch API** dominando o formato da requisição? | C1 | 1,0 | |
| Estruturou com consistência e fundamento a lógica de ordenação (sort) e agrupamento (filter) de arrays? | C1 | 1,0 | |
| Manipulou as respostas **JSON** da API aplicando o raciocínio correto para estruturar o DOM (seções e sugestões)? | C1 | 1,0 | |
| Aplicou **estruturas de repetição** demonstrando compreensão da lógica adotada? | C2 | 0,5 | |
| Aplicou **lógica condicional** para validar a existência de dados antes da exibição? | C2 | 0,5 | |
| Implementou lógica de **tratamento de tipos** (ex: formatação de moeda)? | C2 | 0,5 | |
| Utilizou recursos modernos (**Arrow Functions**, **Template Strings**, **Destructuring**)? | C3 | 0,5 | |
| Demonstrou domínio da IDE e compreensão técnica para depuração e explicação do código? | C3 | 0,5 | |
| Articulou o fluxo assíncrono (**async/await**) demonstrando compreender o ciclo de vida e a dependência dos dados da API? | C3 | 0,5 | |
| Gerou elementos HTML de forma dinâmica, sabendo identificar a **semântica** correspondente ao modelo de visualização? | C4 | 1,0 | |
| Configurou os eventos de **mudança (change)** dos selects assegurando o domínio do fluxo disparado? | C4 | 0,5 | |
| Alocou dados dinâmicos preservando o **layout original** com embasamento técnico sobre os nós do DOM utilizados? | C4 | 0,5 | |
| Geriu suas atividades com responsabilidade, evidenciando propriedade técnica da entrega ao longo do prazo? | C5 | 0,5 | |
| Seguiu rigorosamente as especificações técnicas contidas na documentação da API? | C5 | 1,0 | |
| Demonstrou organização, autonomia e clareza sobre a solução técnica estruturada? | C5 | 0,5 | |

---

## 🚀 Como Executar Localmente
Para garantir que as requisições à API funcionem corretamente (evitando bloqueios de CORS por protocolo local), abra a pasta raiz do projeto no seu editor de código e inicie a aplicação utilizando uma extensão de servidor local (como a **Live Server** no VS Code). Abra o `index.html` em qualquer navegador moderno.
