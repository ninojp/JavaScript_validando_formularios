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

Nesta aula do curso "JavaScript: validando formulários", a instrutora Mônica Mazzochi Hillman aborda a validação do primeiro dígito verificador do CPF. Para isso, é criada uma função chamada "validaPrimeiroDigito" que realiza o cálculo da soma dos nove primeiros dígitos do CPF, multiplicados por um fator decrescente. Em seguida, é aplicada uma fórmula para obter o valor final da soma, que é comparado com a posição 9 do CPF. Caso sejam iguais, a função retorna "true", indicando que o CPF é válido. O uso dessa função é exemplificado no código principal, substituindo a função anteriormente utilizada.

### Aula 03: CPF: segundo dígito - Video 2

Nesta aula, o instrutor explica como realizar a validação do segundo dígito verificador do CPF. Ele mostra o código da função validaPrimeiroDigito() que já foi validada anteriormente e faz uma cópia dessa função, renomeando-a para validaSegundoDigito(). O instrutor explica as alterações necessárias nessa nova função, como a mudança do nome da função, do valor da variável multiplicador, do laço for e da posição do CPF a ser comparada no return. Em seguida, ele mostra como adicionar essa nova função no início do arquivo, dentro da função ehUmCPF(), para que ela seja chamada juntamente com as outras funções de validação. O instrutor também adiciona um if para testar as três funções de validação de uma vez e exibir a mensagem correta no console. Com as validações do CPF funcionando corretamente, o instrutor encerra essa etapa e menciona que a próxima etapa será a validação da idade do usuário.

### Aula 03: Para saber mais: dígito verificador

Quando estamos construindo um sistema que requer a criação de contas como o MoniBank, devemos validar os dados em que há essa possibilidade. Usando JavaScript nativamente, sem o uso de bibliotecas, iremos precisar fazer algumas validações manualmente, como a validação do CPF.

Vamos atuar em cima de um CPF base que será: 451.055.040-54. A fórmula do cálculo dos últimos dígitos verificadores de um CPF é dividida em:

Primeiro dígito
Para descobrir o primeiro dígito você precisará recolher os 9 primeiros dígitos do CPF e multiplicar por números de 10 a 2, sequencialmente.

Valor do CPF    4   5   1   0   5   5   0   4   0
Sequência   10  9   8   7   6   5   4   3   2
Resultado   40  45  8   0   30  25  0   12  0
Depois, precisamos somar todos os valores gerados nas multiplicações entre eles. Nesse caso, a soma resultou em 160. Em seguida, será necessário multiplicar essa soma por 10, que gerou o número 1600. Por fim, devemos considerar o módulo da divisão desse número com 11: 5.

Antes de decidirmos que esse é o primeiro dígito verificador, precisamos testar uma condição: Se o resultado for 10 ou 11, precisaremos zera-lo. Como não é o caso, podemos confirmar que 5 realmente é o primeiro dígito verificador do CPF base.

Segundo dígito
Para descobrir o segundo dígito você precisará recolher os 10 primeiros dígitos do CPF e multiplicar por números de 11 a 2, sequencialmente.

Valor do CPF    4   5   1   0   5   5   0   4   0   5
Sequência   11  10  9   8   7   6   5   4   3   2
Resultado   44  50  9   0   35  30  0   16  0   10
Em seguida, será necessário somar todos os valores resultados pela multiplicação novamente, e essa soma resultou em 194. Depois, multiplicamos essa soma por 10, para encontrar o valor 1940. Ao final, chegamos na etapa de encontrar o módulo da divisão por 11: o número 4.

Novamente, precisamos verificar para caso o resultado for 10 ou 11, será necessário zera-lo. Como novamente não foi o caso, o número 4 realmente é o segundo dígito verificador do CPF base.

### Aula 03: Validação idade - Video 3

Nesta aula, o instrutor discute a importância de validar a idade dos clientes cadastrados no Monibank, garantindo que sejam maiores de 18 anos. Ele mostra como criar um arquivo separado chamado valida-idade.js no Visual Studio Code e como criar a função ehMaiorDeIdade() nesse arquivo. A função recebe o valor do campo de data de nascimento e converte para um formato legível pelo JavaScript. Em seguida, o instrutor mostra como importar essa função no arquivo script.js para utilizá-la.

Dentro do arquivo script.js, o instrutor adiciona uma verificação para o campo de data de nascimento dentro da função verificaCampo(). Se o campo tiver o nome "aniversario" e não estiver vazio, a função ehMaiorDeIdade() é chamada para esse campo. O instrutor demonstra como testar a função no navegador, inserindo uma data de nascimento e verificando se o console exibe a informação correta.

Posteriormente, o instrutor substitui o console.log por uma chamada para a função validaIdade() no arquivo valida-idade.js. Essa função verifica se a data atual é maior ou igual a 18 anos após a data de nascimento e retorna true ou false. O instrutor testa novamente a função no navegador, inserindo diferentes datas de nascimento e verificando se o console exibe o resultado correto.

No próximo trecho do vídeo, será abordada a criação de mensagens personalizadas para cada erro.

### Aula 03: Nessa aula, você aprendeu como:

Validar os dígitos verificadores do CPF;
Transformar fórmulas matemáticas em código;
Lidar com datas em JavaScript;
Construir comparações de datas para verificar maioridade.

## Aula 04: Comunicanod ao Usuário

### Aula 04: Validity State - Video 1

Nesta aula, o instrutor discute a validação de formulários em JavaScript. Ele mostra como é possível personalizar as mensagens de erro para cada tipo de validação. O instrutor explica que o atributo "valid" segue uma lógica diferente dos outros atributos de erro. Ele também mostra como remover a mensagem padrão exibida quando o campo está vazio. As customizações serão abordadas no próximo vídeo.

ValidityState, exibe possíveis erros de validação que ocorrem automaticamente quando interagimos com esse formulário.

### Aula 04: Mensagens customizadas - Video 2

Nesta aula, a instrutora discute os erros mais comuns que podem ocorrer em um formulário e como identificá-los usando o Validity State. Os erros mais frequentes são: valueMissing, typeMismatch, patternMismatch, tooShort e customError. Ela também mostra como criar mensagens customizadas para cada um desses erros, utilizando um código disponível em um link fornecido. As mensagens são configuradas para serem exibidas nos respectivos campos do formulário.

### Aula 04: Imprimindo mensagens - Video 3

Nesta aula, aprendemos como imprimir mensagens de erro personalizadas em um formulário. O instrutor mostrou como criar uma lista de erros e suas respectivas mensagens. Foi apresentada a função verificaCampo(campo), que verifica os campos do formulário e exibe as mensagens de erro. Também foi discutido como exibir as mensagens na tela, utilizando o arquivo abrir-conta-form.html. Além disso, vimos como personalizar as mensagens de erro nos arquivos valida-idade.js e valida-cpf.js. Por fim, foi mencionado que é necessário redefinir o setCustomValidity() do campo para remover a mensagem de erro quando um dado válido for inserido. Com essas implementações, a aplicação é capaz de exibir mensagens de erro personalizadas de acordo com os erros encontrados nos campos do formulário.

### Aula 04: localStorage - Video 4

Nesta aula, o instrutor aborda como lidar com os dados preenchidos corretamente em um formulário. Ele mostra como selecionar o formulário no arquivo HTML usando o atributo de dados e adiciona um evento de envio ao formulário no arquivo JavaScript. Dentro desse evento, ele cria uma lista de respostas com os valores preenchidos nos campos do formulário. Em seguida, ele usa o localStorage para salvar esses dados em formato JSON. Por fim, o usuário é redirecionado para a próxima etapa do formulário.

### Aula 04: Para saber mais: localStorage e DOM

Durante o projeto selecionamos elementos do HTML para pegar seus valores, para criar novas validações, para inserir textos, entre outros casos. Para conseguir realizar essas ações, estamos interagindo com o Document Object Model (DOM). Isso é algo que abordamos em vários projetos mas temos um curso em específico pra te ajudar nesse assunto: [JavaScript: manipulando o DOM](https://cursos.alura.com.br/course/javascript-manipulando-dom), não deixe de dar uma passadinha por lá.

Para armazenamento dos dados do formulário foi utilizado o localStorage. O objeto localStorage permite salvar pares de chave/valor no navegador sem data de expiração, ou seja, os dados não são excluídos quando o navegador é fechado e ficam disponíveis para navegação futura. Você pode se aprofundar mais no assunto com o treinamento [JavaScript na Web: armazenando dados no navegador](https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador) do instrutor Pedro Marins e com o artigo ["Armazenadores de dados do navegador"](https://www.alura.com.br/artigos/armazenadores-de-dados-do-navegador) do Luan Alves.

### Aula 04: Nessa aula, você aprendeu como:

Encontrar as validações padrões que existem no JavaScript com o Validity State;
Interpretar cada tipo de erro;
Criar mensagens customizadas;
Remover o comportamento padrão de erro do HTML;
Mostrar as mensagens customizadas na página;
Salvar dados no localStorage.

## Aula 05: 

### Aula 05:  - Video 1
