# Curso Alura JavaScript: validando formulários

## Aula 01: Validadndo com HTML

### Aula 01: Apresentação - Video 1

Nesta aula, a instrutora Mônica Mazzochi Hillman apresenta o curso de JavaScript sobre validação de formulários. Ela explica que o projeto consiste em implementar validações nos campos de um formulário de cadastro do Monibank. A instrutora destaca que o sistema possui mensagens customizadas para cada tipo de erro e o objetivo é implementar essas validações em todos os campos do formulário. Além disso, como bônus, será implementada uma página de reconhecimento facial no formulário. Durante o curso, serão abordados tópicos como atributos do HTML5, uso do método "addEventListener", validação do CPF, verificação da maioridade, manipulação do DOM e uso do "localStorage". É importante ter conhecimento prévio de JavaScript assíncrono, manipulação do DOM, "localStorage" e um pouco de HTML e CSS. As validações aprendidas no curso são essenciais e podem ser aplicadas em qualquer aplicação com formulários.

### Aula 01: Tipos de input - Video 2

Nesta aula, o instrutor mostra como criar um formulário no projeto, explicando os diferentes campos e tipos de dados que devem ser inseridos. Ele destaca a importância de definir o tipo correto para cada campo, como texto, email, data e checkbox, para garantir que os dados inseridos estejam de acordo com as regras específicas. O vídeo também menciona a necessidade de validar os dados inseridos no formulário e como o HTML pode ajudar nesse processo. No final, o instrutor menciona que serão abordadas outras formas de validação no próximo vídeo.

### Aula 01: Min-lenght e Max-length - Video 3

Nesta aula do curso "JavaScript: validando formulários", a instrutora Mônica Mazzochi Hillman aborda a utilização dos atributos "minLength" e "maxLength" para regular a quantidade de caracteres em cada campo de um formulário HTML. Ela demonstra como adicionar esses atributos em campos como nome, email e CPF, definindo valores mínimos e máximos para cada um. Além disso, a instrutora mostra como exibir mensagens de erro caso o usuário insira dados incorretos. Essas alterações no código permitem realizar validações adicionais no formulário.

### Aula 01: Required - Video 4

Nesta aula, o instrutor discute a inclusão do atributo "required" em campos de um formulário HTML. Esse atributo torna obrigatório o preenchimento de um campo, impedindo que o formulário seja enviado caso haja campos em branco. O instrutor mostra como incluir o atributo "required" nos campos de "Nome", "E-mail", "RG", "Data de nascimento" e no checkbox de aceite dos termos do banco. Ele também destaca que o campo de CPF já possui o atributo "required" configurado. Com essa inclusão, o formulário não poderá ser enviado enquanto houver campos em branco, evitando a presença de valores vazios no código. A partir desse ponto, serão abordadas validações mais avançadas utilizando JavaScript.

### Aula 01: Para saber mais: lidando com inputs

Durante essa aula lidamos com alguns tipos de input. É importante entender a função deles e de outros existentes:

Tipo        Descrição
button      Define um botão clicável
number      Define um campo para número inteiro
text        Define um campo para texto que permite também números e caracteres especiais
date        Define um campo para data
checkbox    Define uma caixa de seleção para múltiplas opções
radio       Define uma caixa de seleção para opção única
password    Define um campo de senha
submit      Define um botão para enviar os dados
tel         Define um campo para telefone

Além disso, você pode aprender mais sobre lidar com dados do usuário no artigo [“Recebendo dados de usuário na Web com inputs”](https://www.alura.com.br/artigos/recebendo-dados-usuario-na-web-com-inputs) do instrutor Luan Alves.

### Aula 01: Nessa aula, você aprendeu como:

Definir tipos para campos de digitação;
Limitar a quantidade de caracteres em um elemento input;
Controlar a quantidade mínima de caracteres do input;
Transformar um campo em obrigatório.

## Aula 02: Validando com JS

### Aula 02: Pattern e Regex - Video 1

Faça um resumo dessa aula
Nesta aula, aprendemos como configurar o campo de CPF para seguir um padrão específico utilizando expressões regulares. A expressão regular utilizada é \d{3}.?\d{3}.?\d{3}-?\d{2}, que permite aceitar inputs com e sem pontuação. Além disso, também vimos outros atributos do campo de CPF, como maxLength, minLength e required, que definem o tamanho máximo e mínimo do campo e a obrigatoriedade de preenchimento.

### Aula 02: AddEventListener - Video 2

Nesta aula, o instrutor discute a necessidade de criar validações para campos de documentos brasileiros em um formulário HTML. É criado um arquivo JavaScript chamado "script.js" na pasta "js" do projeto e importado no arquivo HTML. A técnica de modularização é utilizada para separar cada motivação em arquivos diferentes. É criada a variável "camposDoFormulario" que recebe todos os elementos do HTML que possuem o atributo "required". É adicionado um evento de digitação em cada campo para realizar as validações. A função "verificaCampo" é criada como base para implementar a verificação no interior dessa função.

### Aula 02: Verificar CPF - Video 3

Nesta aula do curso "JavaScript: validando formulários", a instrutora Mônica Mazzochi Hillman ensina como implementar a validação de CPF em um formulário web. O arquivo script.js é importado no HTML como module e é criado um novo arquivo chamado valida-cpf.js para implementar a validação. Dentro desse arquivo, é criada a função ehUmCPF que remove os caracteres especiais do CPF e imprime o resultado no console. No script.js, é feito o import da função ehUmCPF e adicionado um evento de blur nos campos obrigatórios do formulário. Quando acionado, a função verificaCampo é chamada para verificar se o campo é o CPF e se possui pelo menos 11 caracteres. Se sim, a função ehUmCPF é chamada. Também é implementada a validação de números repetidos no CPF, utilizando a função validaNumerosRepetidos. Ao digitar um CPF válido, o console exibirá false, indicando que o CPF é válido. Se um CPF com números repetidos for digitado, o console exibirá true, indicando que o CPF é inválido. Essa é apenas uma validação básica e serão implementadas outras validações mais complexas no próximo trecho do curso.

### Aula 02: Para saber mais: expressões regulares

Ao analisarmos que o CPF possui um formato padrão, inserimos um atributo chamado pattern. O atributo pattern usa expressões regulares também conhecidas como regex, que é usado em Javascript. Dessa maneira, escolhemos o que deve ser aceito pelo nosso formulário.

A expressão regular que utilizamos é a \d{3}\.?\d{3}\.?\d{3}-?\d{2}. Mas vamos por partes para entender o que isso significa:

Expressão   Descrição
\d{3}   Encontra correspondência com um número (equivalente a [0-9]) por 3 vezes.
.?  Seguido por um ponto opcional.
-?  Seguido por um hífen opcional.
\d{2}   Encontra um número duas vezes.

Caso você queira entender melhor sobre a criação de expressões regulares, recomendo o artigo [JavaScript replace: manipulando Strings e regex](https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex) e o curso [”Expressões regulares”](https://cursos.alura.com.br/course/expressoes-regulares).

### Aula 02: Nessa aula, você aprendeu como:
Utilizar patterns;
Criar expressões regulares;
Selecionar vários elementos ao mesmo tempo;
Construir funções para cada elemento de uma lista;
Detectar eventos do usuário;
Importar funções de outros arquivos;
Verificar CPFs com números repetidos.

## Aula 03: Desenvolvendo Validações

### Aula 03: CPF: primeiro dígito - Video 1

