# ⚡ JavaScript - Guia Completo

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

> 📚 Guia completo de JavaScript moderno (ES6+) - a linguagem de programação que adiciona interatividade às páginas web.

---

## 📋 Índice

1. [O que é JavaScript?](#-o-que-é-javascript)
2. [Onde Escrever JavaScript](#-onde-escrever-javascript)
3. [Variáveis](#-variáveis)
4. [Tipos de Dados](#-tipos-de-dados)
5. [Operadores](#-operadores)
6. [Estruturas de Controle](#-estruturas-de-controle)
7. [Funções](#-funções)
8. [Arrays](#-arrays)
9. [Objetos](#-objetos)
10. [DOM Manipulation](#-dom-manipulation)
11. [Eventos](#-eventos)
12. [Async JavaScript](#-async-javascript)
13. [Módulos ES6](#-módulos-es6)
14. [Classes](#-classes)
15. [Tratamento de Erros](#-tratamento-de-erros)
16. [Local Storage](#-local-storage)
17. [Fetch API](#-fetch-api)
18. [Boas Práticas](#-boas-práticas)
19. [Exercícios Práticos](#-exercícios-práticos)
20. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é JavaScript?

**JavaScript** é uma linguagem de programação que permite adicionar interatividade às páginas web. É executada no navegador (client-side) ou no servidor (Node.js).

### O que você pode fazer com JavaScript:

| Funcionalidade | Exemplo |
|---------------|---------|
| **Manipular DOM** | Mudar conteúdo, estilos, elementos |
| **Responder a eventos** | Cliques, teclado, scroll |
| **Validar formulários** | Verificar dados antes de enviar |
| **Fazer requisições** | Buscar dados de APIs |
| **Animações** | Transições, efeitos visuais |
| **Armazenar dados** | LocalStorage, cookies |

### JavaScript vs Java

| JavaScript | Java |
|------------|------|
| Linguagem de script | Linguagem compilada |
| Roda no navegador | Roda na JVM |
| Tipagem dinâmica | Tipagem estática |
| Prototypes | Classes verdadeiras |

---

## 📝 Onde Escrever JavaScript

### 1. Script Externo (Recomendado) ✅

```html
<!-- No final do <body> -->
<script src="script.js"></script>

<!-- Ou no <head> com defer -->
<script src="script.js" defer></script>
```

### 2. Script Interno

```html
<script>
    console.log('Olá, mundo!');
</script>
```

### 3. Inline (Evitar)

```html
<button onclick="alert('Clicou!')">Clique</button>
```

### defer vs async

```html
<!-- defer: executa após HTML carregar, mantém ordem -->
<script src="script.js" defer></script>

<!-- async: executa assim que baixar, não mantém ordem -->
<script src="analytics.js" async></script>
```

| Atributo | Quando Executa | Ordem |
|----------|----------------|-------|
| Nenhum | Bloqueia parsing, executa imediatamente | Mantém |
| `defer` | Após DOM pronto | Mantém |
| `async` | Quando termina de baixar | Não mantém |

---

## 📦 Variáveis

### var, let e const

```javascript
// ❌ VAR - Evite usar (escopo de função, hoisting)
var nome = 'João';  // Pode ser redeclarada
var nome = 'Maria'; // OK, mas confuso

// ✅ LET - Para valores que mudam
let contador = 0;
contador = 1;       // OK
// let contador = 2; // ❌ Erro: já declarada

// ✅ CONST - Para valores que não mudam (padrão)
const PI = 3.14159;
// PI = 3.14;       // ❌ Erro: não pode reatribuir

// CONST com objetos/arrays (referência é constante)
const pessoa = { nome: 'João' };
pessoa.nome = 'Maria';  // ✅ OK, modifica propriedade
// pessoa = {};         // ❌ Erro: não pode reatribuir
```

### Regras de Nomenclatura

```javascript
// ✅ Válidos
let nome;
let nomeCompleto;
let _privado;
let $elemento;
let nome1;

// ❌ Inválidos
// let 1nome;      // Não pode começar com número
// let nome-completo; // Não pode ter hífen
// let class;      // Não pode ser palavra reservada

// Convenções
let nomeDeVariavel;  // camelCase (variáveis, funções)
const VALOR_MAXIMO = 100;  // SCREAMING_SNAKE_CASE (constantes)
class MinhaClasse {}  // PascalCase (classes)
```

---

## 🔢 Tipos de Dados

### Tipos Primitivos

```javascript
// String
const nome = 'João';
const sobrenome = "Silva";
const completo = `${nome} ${sobrenome}`; // Template literal

// Number (inteiros e decimais)
const idade = 25;
const altura = 1.75;
const infinito = Infinity;
const naoNumero = NaN;

// Boolean
const ativo = true;
const inativo = false;

// Undefined (não definido)
let naoDefinido;
console.log(naoDefinido); // undefined

// Null (ausência intencional)
const vazio = null;

// Symbol (único)
const id = Symbol('id');

// BigInt (números muito grandes)
const grande = 9007199254740991n;
```

### Tipos de Referência

```javascript
// Array
const numeros = [1, 2, 3, 4, 5];
const misturado = [1, 'dois', true, null];

// Object
const pessoa = {
    nome: 'João',
    idade: 25,
    ativo: true
};

// Function
const somar = (a, b) => a + b;
```

### Verificando Tipos

```javascript
typeof 'texto';      // 'string'
typeof 42;           // 'number'
typeof true;         // 'boolean'
typeof undefined;    // 'undefined'
typeof null;         // 'object' (bug histórico)
typeof {};           // 'object'
typeof [];           // 'object' (arrays são objetos)
typeof function(){}; // 'function'

// Verificar se é array
Array.isArray([1, 2, 3]); // true

// Verificar se é null
const valor = null;
valor === null; // true
```

### Conversão de Tipos

```javascript
// Para String
String(123);        // '123'
(123).toString();   // '123'
123 + '';           // '123'

// Para Number
Number('123');      // 123
parseInt('123');    // 123
parseFloat('3.14'); // 3.14
+'123';             // 123

// Para Boolean
Boolean(1);         // true
Boolean(0);         // false
Boolean('');        // false
Boolean('texto');   // true
!!valor;            // Converte para boolean
```

### Valores Falsy e Truthy

```javascript
// Falsy (convertidos para false)
false
0
-0
''
null
undefined
NaN

// Truthy (tudo o resto é true)
true
42
'texto'
[]      // Array vazio é truthy!
{}      // Objeto vazio é truthy!
```

---

## ➕ Operadores

### Aritméticos

```javascript
const a = 10, b = 3;

a + b;   // 13 (adição)
a - b;   // 7 (subtração)
a * b;   // 30 (multiplicação)
a / b;   // 3.333... (divisão)
a % b;   // 1 (resto/módulo)
a ** b;  // 1000 (exponenciação)

// Incremento/Decremento
let x = 5;
x++;     // 6 (incrementa depois)
++x;     // 7 (incrementa antes)
x--;     // 6 (decrementa depois)
--x;     // 5 (decrementa antes)

// Atribuição composta
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4
```

### Comparação

```javascript
// Igualdade
5 == '5';    // true (compara valor, converte tipo)
5 === '5';   // false (compara valor E tipo)
5 != '5';    // false
5 !== '5';   // true

// ✅ Sempre use === e !== para evitar bugs

// Relacionais
5 > 3;       // true
5 >= 5;      // true
3 < 5;       // true
3 <= 3;      // true
```

### Lógicos

```javascript
// AND (&&) - ambos devem ser true
true && true;    // true
true && false;   // false

// OR (||) - pelo menos um true
true || false;   // true
false || false;  // false

// NOT (!) - inverte
!true;           // false
!false;          // true
!!valor;         // Converte para boolean

// Nullish Coalescing (??) - ES2020
const nome = null ?? 'Padrão';  // 'Padrão'
const idade = 0 ?? 18;          // 0 (|| retornaria 18)

// Optional Chaining (?.) - ES2020
const user = { perfil: { nome: 'João' } };
user?.perfil?.nome;  // 'João'
user?.endereco?.rua; // undefined (não dá erro)
```

### Operador Ternário

```javascript
// condição ? seVerdadeiro : seFalso
const idade = 18;
const status = idade >= 18 ? 'Maior' : 'Menor';

// Encadeado (evite muitos níveis)
const nota = 85;
const conceito = nota >= 90 ? 'A'
              : nota >= 80 ? 'B'
              : nota >= 70 ? 'C'
              : 'D';
```

### Spread e Rest

```javascript
// Spread (...) - expande
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest (...) - agrupa
function soma(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}
soma(1, 2, 3, 4); // 10
```

---

## 🔀 Estruturas de Controle

### if / else

```javascript
const idade = 18;

if (idade >= 18) {
    console.log('Maior de idade');
} else if (idade >= 16) {
    console.log('Pode votar');
} else {
    console.log('Menor de idade');
}

// Simplificado (uma linha)
if (idade >= 18) console.log('Maior');
```

### switch

```javascript
const dia = 'segunda';

switch (dia) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Dia útil');
        break;
    case 'sábado':
    case 'domingo':
        console.log('Fim de semana');
        break;
    default:
        console.log('Dia inválido');
}
```

### for

```javascript
// for clássico
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// for...of (valores de iteráveis)
const frutas = ['maçã', 'banana', 'laranja'];
for (const fruta of frutas) {
    console.log(fruta);
}

// for...in (chaves de objetos)
const pessoa = { nome: 'João', idade: 25 };
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

### while e do...while

```javascript
// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do...while (executa pelo menos uma vez)
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
```

### break e continue

```javascript
// break - sai do loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - pula para próxima iteração
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}
```

---

## 🔧 Funções

### Declaração de Função

```javascript
// Function Declaration (hoisted)
function somar(a, b) {
    return a + b;
}

// Function Expression
const subtrair = function(a, b) {
    return a - b;
};

// Arrow Function (ES6)
const multiplicar = (a, b) => a * b;

// Arrow com corpo
const dividir = (a, b) => {
    if (b === 0) return 'Erro: divisão por zero';
    return a / b;
};

// Arrow com um parâmetro (sem parênteses)
const dobrar = n => n * 2;

// Arrow sem parâmetros
const saudar = () => 'Olá!';
```

### Parâmetros

```javascript
// Parâmetros padrão
function saudar(nome = 'Visitante') {
    return `Olá, ${nome}!`;
}
saudar();        // 'Olá, Visitante!'
saudar('João');  // 'Olá, João!'

// Rest parameters
function soma(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
soma(1, 2, 3, 4, 5); // 15

// Destructuring em parâmetros
function exibirPessoa({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos`);
}
exibirPessoa({ nome: 'João', idade: 25 });
```

### Callbacks

```javascript
// Função que recebe outra função
function processar(array, callback) {
    const resultado = [];
    for (const item of array) {
        resultado.push(callback(item));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const dobrados = processar(numeros, n => n * 2);
// [2, 4, 6, 8, 10]
```

### Closures

```javascript
// Função que "lembra" do escopo onde foi criada
function criarContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const contador = criarContador();
contador(); // 1
contador(); // 2
contador(); // 3
```

### IIFE (Immediately Invoked Function Expression)

```javascript
// Executa imediatamente
(function() {
    const privado = 'Não acessível fora';
    console.log('Executado!');
})();

// Com arrow function
(() => {
    console.log('IIFE com arrow');
})();
```

---

## 📋 Arrays

### Criando Arrays

```javascript
const frutas = ['maçã', 'banana', 'laranja'];
const numeros = new Array(1, 2, 3);
const vazio = [];
const preenchido = Array(5).fill(0); // [0, 0, 0, 0, 0]
const sequencia = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
```

### Acessando e Modificando

```javascript
const arr = ['a', 'b', 'c', 'd'];

// Acessar
arr[0];        // 'a'
arr[arr.length - 1]; // 'd' (último)
arr.at(-1);    // 'd' (ES2022)

// Modificar
arr[1] = 'B';  // ['a', 'B', 'c', 'd']

// Adicionar
arr.push('e');      // Adiciona no final
arr.unshift('0');   // Adiciona no início

// Remover
arr.pop();          // Remove do final
arr.shift();        // Remove do início

// Splice (modificar no meio)
arr.splice(1, 1);        // Remove 1 elemento no índice 1
arr.splice(1, 0, 'x');   // Insere 'x' no índice 1
arr.splice(1, 1, 'y');   // Substitui elemento no índice 1
```

### Métodos de Array (Importantes!)

#### forEach - Iterar

```javascript
const numeros = [1, 2, 3];
numeros.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});
```

#### map - Transformar

```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Transformar objetos
const usuarios = [{ nome: 'João' }, { nome: 'Maria' }];
const nomes = usuarios.map(u => u.nome);
// ['João', 'Maria']
```

#### filter - Filtrar

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(n => n % 2 === 0);
// [2, 4, 6]

// Filtrar objetos
const produtos = [
    { nome: 'A', preco: 10 },
    { nome: 'B', preco: 50 },
    { nome: 'C', preco: 30 }
];
const caros = produtos.filter(p => p.preco > 20);
// [{ nome: 'B', preco: 50 }, { nome: 'C', preco: 30 }]
```

#### reduce - Reduzir a um valor

```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, n) => acc + n, 0);
// 15

// Contar ocorrências
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const contagem = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});
// { maçã: 3, banana: 2, laranja: 1 }
```

#### find e findIndex

```javascript
const usuarios = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Pedro' }
];

const usuario = usuarios.find(u => u.id === 2);
// { id: 2, nome: 'Maria' }

const indice = usuarios.findIndex(u => u.id === 2);
// 1
```

#### some e every

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.some(n => n > 3);   // true (algum > 3?)
numeros.every(n => n > 0);  // true (todos > 0?)
```

#### sort - Ordenar

```javascript
// Strings (funciona direto)
const frutas = ['banana', 'maçã', 'laranja'];
frutas.sort(); // ['banana', 'laranja', 'maçã']

// Números (precisa função)
const numeros = [10, 2, 30, 4];
numeros.sort((a, b) => a - b); // [2, 4, 10, 30] (crescente)
numeros.sort((a, b) => b - a); // [30, 10, 4, 2] (decrescente)

// Objetos
const produtos = [
    { nome: 'A', preco: 30 },
    { nome: 'B', preco: 10 },
    { nome: 'C', preco: 20 }
];
produtos.sort((a, b) => a.preco - b.preco);
```

#### Outros Métodos Úteis

```javascript
const arr = [1, 2, 3, 4, 5];

// includes - verifica se contém
arr.includes(3);     // true

// indexOf - encontra índice
arr.indexOf(3);      // 2
arr.indexOf(99);     // -1 (não encontrado)

// join - junta em string
arr.join(', ');      // '1, 2, 3, 4, 5'

// slice - cópia parcial (não modifica original)
arr.slice(1, 3);     // [2, 3]

// concat - junta arrays
const arr2 = [6, 7];
arr.concat(arr2);    // [1, 2, 3, 4, 5, 6, 7]

// flat - achata arrays aninhados
const aninhado = [1, [2, 3], [4, [5]]];
aninhado.flat();     // [1, 2, 3, 4, [5]]
aninhado.flat(2);    // [1, 2, 3, 4, 5]

// reverse - inverte (modifica original!)
[...arr].reverse();  // [5, 4, 3, 2, 1] (cópia invertida)
```

---

## 📦 Objetos

### Criando Objetos

```javascript
// Literal (mais comum)
const pessoa = {
    nome: 'João',
    idade: 25,
    ativo: true
};

// Constructor
const obj = new Object();
obj.propriedade = 'valor';

// Object.create
const proto = { saudar() { return 'Olá!'; } };
const obj2 = Object.create(proto);
```

### Acessando Propriedades

```javascript
const pessoa = { nome: 'João', idade: 25 };

// Notação de ponto
pessoa.nome;      // 'João'

// Notação de colchetes
pessoa['nome'];   // 'João'

// Com variável (só funciona com colchetes)
const prop = 'idade';
pessoa[prop];     // 25

// Propriedade dinâmica
const chave = 'email';
const obj = {
    [chave]: 'joao@email.com'
};
// { email: 'joao@email.com' }
```

### Modificando Objetos

```javascript
const pessoa = { nome: 'João' };

// Adicionar propriedade
pessoa.idade = 25;
pessoa['email'] = 'joao@email.com';

// Modificar
pessoa.nome = 'João Silva';

// Remover
delete pessoa.email;
```

### Métodos de Objeto

```javascript
const pessoa = {
    nome: 'João',
    idade: 25,

    // Método
    saudar() {
        return `Olá, meu nome é ${this.nome}`;
    },

    // Getter
    get info() {
        return `${this.nome} - ${this.idade} anos`;
    },

    // Setter
    set novaIdade(valor) {
        if (valor > 0) this.idade = valor;
    }
};

pessoa.saudar();      // 'Olá, meu nome é João'
pessoa.info;          // 'João - 25 anos' (sem parênteses)
pessoa.novaIdade = 30; // Define idade = 30
```

### Destructuring

```javascript
const pessoa = {
    nome: 'João',
    idade: 25,
    endereco: {
        cidade: 'São Paulo',
        rua: 'Av. Paulista'
    }
};

// Destructuring básico
const { nome, idade } = pessoa;

// Com renomeação
const { nome: n, idade: i } = pessoa;

// Com valor padrão
const { email = 'não informado' } = pessoa;

// Destructuring aninhado
const { endereco: { cidade } } = pessoa;

// Em parâmetros de função
function exibir({ nome, idade }) {
    console.log(`${nome} - ${idade}`);
}
```

### Object Methods

```javascript
const pessoa = { nome: 'João', idade: 25 };

// Chaves
Object.keys(pessoa);      // ['nome', 'idade']

// Valores
Object.values(pessoa);    // ['João', 25]

// Entradas [chave, valor]
Object.entries(pessoa);   // [['nome', 'João'], ['idade', 25]]

// Criar objeto de entradas
Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }

// Merge (spread é mais comum)
Object.assign({}, pessoa, { email: 'a@b.com' });
// ou
{ ...pessoa, email: 'a@b.com' };

// Congelar (imutável)
Object.freeze(pessoa);
pessoa.nome = 'Maria'; // Não funciona (silencioso)

// Verificar se tem propriedade
pessoa.hasOwnProperty('nome');  // true
'nome' in pessoa;               // true
```

---

## 🌳 DOM Manipulation

### Selecionando Elementos

```javascript
// Por ID (retorna 1 elemento)
const header = document.getElementById('header');

// Por classe (retorna HTMLCollection)
const items = document.getElementsByClassName('item');

// Por tag (retorna HTMLCollection)
const paragrafos = document.getElementsByTagName('p');

// Por seletor CSS (retorna 1 elemento)
const btn = document.querySelector('.btn');
const link = document.querySelector('#nav a');

// Por seletor CSS (retorna todos - NodeList)
const btns = document.querySelectorAll('.btn');
const links = document.querySelectorAll('nav a');
```

### Modificando Conteúdo

```javascript
const elemento = document.querySelector('#titulo');

// Texto (mais seguro)
elemento.textContent = 'Novo título';

// HTML (cuidado com XSS)
elemento.innerHTML = '<strong>Título</strong>';

// HTML externo
elemento.outerHTML = '<h2>Substitui o elemento inteiro</h2>';
```

### Modificando Atributos

```javascript
const link = document.querySelector('a');

// Obter atributo
link.getAttribute('href');

// Definir atributo
link.setAttribute('href', 'https://novo-link.com');

// Remover atributo
link.removeAttribute('target');

// Verificar se tem atributo
link.hasAttribute('href'); // true

// Atributos como propriedades
link.href = 'https://novo.com';
link.id = 'meu-link';

// Data attributes
const elemento = document.querySelector('[data-id="123"]');
elemento.dataset.id;      // '123'
elemento.dataset.nome = 'João'; // Cria data-nome="João"
```

### Modificando Classes

```javascript
const elemento = document.querySelector('.card');

// Adicionar classe
elemento.classList.add('ativo');
elemento.classList.add('destaque', 'novo'); // Múltiplas

// Remover classe
elemento.classList.remove('ativo');

// Toggle (adiciona se não tem, remove se tem)
elemento.classList.toggle('ativo');

// Verificar se tem classe
elemento.classList.contains('ativo'); // true/false

// Substituir classe
elemento.classList.replace('antigo', 'novo');
```

### Modificando Estilos

```javascript
const elemento = document.querySelector('.box');

// Estilos inline
elemento.style.backgroundColor = 'red';
elemento.style.fontSize = '20px';
elemento.style.marginTop = '10px';

// Múltiplos estilos
Object.assign(elemento.style, {
    backgroundColor: 'blue',
    padding: '20px',
    borderRadius: '8px'
});

// Obter estilos computados
const estilos = getComputedStyle(elemento);
console.log(estilos.fontSize);
```

### Criando e Removendo Elementos

```javascript
// Criar elemento
const novoDiv = document.createElement('div');
novoDiv.textContent = 'Novo elemento';
novoDiv.classList.add('novo');

// Adicionar ao DOM
document.body.appendChild(novoDiv);        // No final
document.body.prepend(novoDiv);            // No início
elemento.insertBefore(novoDiv, referencia); // Antes de outro

// Métodos modernos
elemento.append(novoDiv, 'texto');         // Múltiplos, aceita texto
elemento.before(novoDiv);                  // Antes do elemento
elemento.after(novoDiv);                   // Depois do elemento

// Remover elemento
elemento.remove();
// ou
elemento.parentNode.removeChild(elemento);

// Clonar elemento
const clone = elemento.cloneNode(true); // true = com filhos
```

### Navegando pelo DOM

```javascript
const elemento = document.querySelector('.item');

// Pai
elemento.parentElement;
elemento.parentNode;

// Filhos
elemento.children;          // HTMLCollection de elementos
elemento.childNodes;        // NodeList incluindo texto
elemento.firstElementChild;
elemento.lastElementChild;

// Irmãos
elemento.previousElementSibling;
elemento.nextElementSibling;

// Encontrar ancestral
elemento.closest('.container'); // Sobe até encontrar
```

---

## 🎯 Eventos

### Adicionando Event Listeners

```javascript
const btn = document.querySelector('#meu-botao');

// Adicionar evento
btn.addEventListener('click', function(event) {
    console.log('Clicou!');
    console.log(event.target); // Elemento clicado
});

// Com arrow function
btn.addEventListener('click', (e) => {
    console.log('Clicou!', e);
});

// Remover evento (precisa da mesma referência)
const handler = (e) => console.log('Clicou!');
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

// Executar apenas uma vez
btn.addEventListener('click', handler, { once: true });
```

### Eventos Comuns

```javascript
// Mouse
'click'        // Clique
'dblclick'     // Duplo clique
'mouseenter'   // Mouse entra (não propaga)
'mouseleave'   // Mouse sai (não propaga)
'mouseover'    // Mouse sobre (propaga)
'mouseout'     // Mouse fora (propaga)
'mousedown'    // Botão pressionado
'mouseup'      // Botão solto
'mousemove'    // Mouse movendo

// Teclado
'keydown'      // Tecla pressionada
'keyup'        // Tecla solta
'keypress'     // Tecla pressionada (deprecated)

// Formulário
'submit'       // Formulário enviado
'input'        // Valor alterado (em tempo real)
'change'       // Valor alterado (ao sair do campo)
'focus'        // Campo focado
'blur'         // Campo perdeu foco

// Documento
'DOMContentLoaded'  // DOM pronto
'load'              // Página totalmente carregada
'scroll'            // Rolagem
'resize'            // Janela redimensionada

// Touch (mobile)
'touchstart'
'touchmove'
'touchend'
```

### Objeto Event

```javascript
elemento.addEventListener('click', (event) => {
    // Informações do evento
    event.type;           // 'click'
    event.target;         // Elemento que disparou
    event.currentTarget;  // Elemento com o listener
    event.timeStamp;      // Quando ocorreu

    // Posição do mouse
    event.clientX;        // X relativo à viewport
    event.clientY;        // Y relativo à viewport
    event.pageX;          // X relativo à página
    event.pageY;          // Y relativo à página

    // Teclas modificadoras
    event.shiftKey;       // Shift pressionado?
    event.ctrlKey;        // Ctrl pressionado?
    event.altKey;         // Alt pressionado?
    event.metaKey;        // Cmd/Win pressionado?

    // Prevenir comportamento padrão
    event.preventDefault();

    // Parar propagação
    event.stopPropagation();
});

// Teclado
input.addEventListener('keydown', (e) => {
    e.key;        // 'Enter', 'a', 'ArrowUp', etc.
    e.code;       // 'Enter', 'KeyA', 'ArrowUp', etc.
});
```

### Event Delegation

```javascript
// Ao invés de adicionar listener em cada item...
// ...adicione no pai e verifique o target

const lista = document.querySelector('#lista');

lista.addEventListener('click', (e) => {
    // Verifica se clicou em um item
    if (e.target.matches('.item')) {
        console.log('Clicou no item:', e.target.textContent);
    }

    // Ou encontra o ancestral mais próximo
    const item = e.target.closest('.item');
    if (item) {
        console.log('Item:', item.textContent);
    }
});
```

---

## ⏳ Async JavaScript

### Callbacks

```javascript
// Callback simples
function buscarDados(callback) {
    setTimeout(() => {
        const dados = { nome: 'João' };
        callback(dados);
    }, 1000);
}

buscarDados((dados) => {
    console.log(dados);
});

// Callback Hell (problema)
buscarUsuario(id, (usuario) => {
    buscarPosts(usuario.id, (posts) => {
        buscarComentarios(posts[0].id, (comentarios) => {
            // Aninhamento profundo...
        });
    });
});
```

### Promises

```javascript
// Criando uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;

    setTimeout(() => {
        if (sucesso) {
            resolve({ dados: 'Sucesso!' });
        } else {
            reject(new Error('Falhou!'));
        }
    }, 1000);
});

// Consumindo Promise
minhaPromise
    .then((resultado) => {
        console.log(resultado);
        return resultado.dados;
    })
    .then((dados) => {
        console.log(dados);
    })
    .catch((erro) => {
        console.error(erro);
    })
    .finally(() => {
        console.log('Finalizado');
    });

// Promise.all - todas devem resolver
Promise.all([promise1, promise2, promise3])
    .then(([r1, r2, r3]) => {
        console.log(r1, r2, r3);
    });

// Promise.race - primeira a resolver/rejeitar
Promise.race([promise1, promise2])
    .then(primeiroResultado => {
        console.log(primeiroResultado);
    });

// Promise.allSettled - todas, independente de resultado
Promise.allSettled([promise1, promise2])
    .then(resultados => {
        resultados.forEach(r => {
            if (r.status === 'fulfilled') {
                console.log(r.value);
            } else {
                console.log(r.reason);
            }
        });
    });
```

### Async/Await

```javascript
// Função async retorna Promise
async function buscarDados() {
    try {
        const response = await fetch('/api/dados');
        const dados = await response.json();
        return dados;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Usando
buscarDados()
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));

// Ou em outra função async
async function processar() {
    const dados = await buscarDados();
    console.log(dados);
}

// Múltiplas requisições paralelas
async function buscarTudo() {
    const [usuarios, posts] = await Promise.all([
        fetch('/api/usuarios').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    return { usuarios, posts };
}

// Arrow function async
const buscar = async () => {
    const dados = await fetch('/api').then(r => r.json());
    return dados;
};
```

---

## 📦 Módulos ES6

### Export

```javascript
// utils.js

// Named exports
export const PI = 3.14159;

export function somar(a, b) {
    return a + b;
}

export const multiplicar = (a, b) => a * b;

// Ou exportar no final
const dividir = (a, b) => a / b;
const subtrair = (a, b) => a - b;

export { dividir, subtrair };

// Default export (apenas um por arquivo)
export default function principal() {
    return 'Função principal';
}
```

### Import

```javascript
// main.js

// Import default
import principal from './utils.js';

// Import named
import { somar, multiplicar } from './utils.js';

// Import com alias
import { somar as soma, PI as pi } from './utils.js';

// Import tudo
import * as Utils from './utils.js';
Utils.somar(1, 2);
Utils.PI;

// Import default e named juntos
import principal, { somar, PI } from './utils.js';
```

### No HTML

```html
<!-- type="module" é necessário -->
<script type="module" src="main.js"></script>

<!-- Fallback para navegadores antigos -->
<script nomodule src="bundle.js"></script>
```

---

## 🏛️ Classes

### Definindo Classes

```javascript
class Pessoa {
    // Propriedades públicas (ES2022)
    nome;
    idade;

    // Propriedades privadas (ES2022)
    #senha;

    // Propriedade estática
    static especie = 'Homo sapiens';

    // Constructor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.#senha = '1234';
    }

    // Método
    apresentar() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }

    // Getter
    get info() {
        return `${this.nome} - ${this.idade}`;
    }

    // Setter
    set novaIdade(valor) {
        if (valor > 0) this.idade = valor;
    }

    // Método privado
    #validarSenha(senha) {
        return senha === this.#senha;
    }

    // Método estático
    static criar(nome) {
        return new Pessoa(nome, 0);
    }
}

// Uso
const joao = new Pessoa('João', 25);
joao.apresentar();    // 'Olá, sou João...'
joao.info;            // 'João - 25'
Pessoa.especie;       // 'Homo sapiens'
Pessoa.criar('Maria'); // Nova instância
```

### Herança

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} faz um som.`;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);  // Chama constructor do pai
        this.raca = raca;
    }

    // Override do método
    falar() {
        return `${this.nome} late!`;
    }

    // Novo método
    buscar() {
        return `${this.nome} busca a bola!`;
    }
}

const rex = new Cachorro('Rex', 'Labrador');
rex.falar();   // 'Rex late!'
rex.buscar();  // 'Rex busca a bola!'
```

---

## 🚨 Tratamento de Erros

### try...catch...finally

```javascript
try {
    // Código que pode falhar
    const dados = JSON.parse(textoInvalido);
} catch (erro) {
    // Trata o erro
    console.error('Erro:', erro.message);
} finally {
    // Sempre executa
    console.log('Finalizado');
}
```

### Tipos de Erros

```javascript
// Lançar erro genérico
throw new Error('Algo deu errado');

// Tipos específicos
throw new TypeError('Tipo inválido');
throw new RangeError('Valor fora do intervalo');
throw new SyntaxError('Sintaxe inválida');
throw new ReferenceError('Referência não encontrada');

// Erro customizado
class ValidacaoError extends Error {
    constructor(campo, mensagem) {
        super(mensagem);
        this.name = 'ValidacaoError';
        this.campo = campo;
    }
}

throw new ValidacaoError('email', 'Email inválido');
```

### Validação com Erros

```javascript
function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Argumentos devem ser números');
    }
    if (b === 0) {
        throw new RangeError('Divisão por zero não permitida');
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
} catch (e) {
    if (e instanceof RangeError) {
        console.log('Erro de intervalo:', e.message);
    } else if (e instanceof TypeError) {
        console.log('Erro de tipo:', e.message);
    } else {
        throw e; // Re-lança erros desconhecidos
    }
}
```

---

## 💾 Local Storage

### Operações Básicas

```javascript
// Salvar (apenas strings)
localStorage.setItem('nome', 'João');

// Buscar
const nome = localStorage.getItem('nome'); // 'João'

// Remover
localStorage.removeItem('nome');

// Limpar tudo
localStorage.clear();

// Verificar se existe
if (localStorage.getItem('nome') !== null) {
    // existe
}

// Quantidade de items
localStorage.length;

// Obter chave por índice
localStorage.key(0);
```

### Salvando Objetos

```javascript
// Salvar objeto (converter para JSON)
const usuario = { nome: 'João', idade: 25 };
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar objeto
const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

// Função helper
const storage = {
    set(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    },
    get(chave) {
        const item = localStorage.getItem(chave);
        return item ? JSON.parse(item) : null;
    },
    remove(chave) {
        localStorage.removeItem(chave);
    }
};

storage.set('config', { tema: 'dark', idioma: 'pt' });
const config = storage.get('config');
```

### Session Storage

```javascript
// Mesma API, mas dados são perdidos ao fechar a aba
sessionStorage.setItem('temp', 'dados temporários');
sessionStorage.getItem('temp');
sessionStorage.removeItem('temp');
```

---

## 🌐 Fetch API

### GET Request

```javascript
// Básico
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));

// Com async/await
async function buscarDados() {
    try {
        const response = await fetch('https://api.exemplo.com/dados');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const dados = await response.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao buscar:', erro);
    }
}
```

### POST Request

```javascript
async function enviarDados(dados) {
    const response = await fetch('https://api.exemplo.com/criar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token123'
        },
        body: JSON.stringify(dados)
    });

    return response.json();
}

// Uso
const novoUsuario = await enviarDados({
    nome: 'João',
    email: 'joao@email.com'
});
```

### Outros Métodos

```javascript
// PUT (atualizar)
fetch('/api/usuarios/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: 'Novo Nome' })
});

// PATCH (atualização parcial)
fetch('/api/usuarios/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: 'Novo Nome' })
});

// DELETE
fetch('/api/usuarios/1', {
    method: 'DELETE'
});
```

### Tratando Respostas

```javascript
async function fetchComTratamento(url) {
    const response = await fetch(url);

    // Verificar status
    if (response.status === 404) {
        throw new Error('Não encontrado');
    }

    if (response.status === 401) {
        throw new Error('Não autorizado');
    }

    if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
    }

    // Diferentes tipos de resposta
    // const texto = await response.text();
    // const blob = await response.blob();
    // const buffer = await response.arrayBuffer();

    return response.json();
}
```

---

## ✅ Boas Práticas

### 1. Use const por Padrão

```javascript
// ✅ Bom
const dados = buscarDados();
const config = { debug: true };

// Use let apenas quando precisar reatribuir
let contador = 0;
contador++;
```

### 2. Use Nomes Descritivos

```javascript
// ❌ Ruim
const d = new Date();
const arr = usuarios.filter(u => u.a);

// ✅ Bom
const dataAtual = new Date();
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
```

### 3. Evite Variáveis Globais

```javascript
// ❌ Ruim
var configuracao = {};

// ✅ Bom - Use módulos
// config.js
export const config = {};
```

### 4. Use Arrow Functions para Callbacks

```javascript
// ✅ Bom
array.map(item => item.nome);
array.filter(item => item.ativo);

// Para métodos de objeto, use function
const obj = {
    nome: 'João',
    saudar() {  // Não arrow (para ter this correto)
        return `Olá, ${this.nome}`;
    }
};
```

### 5. Desestruture Quando Possível

```javascript
// ❌ Ruim
const nome = pessoa.nome;
const idade = pessoa.idade;

// ✅ Bom
const { nome, idade } = pessoa;
```

### 6. Use Template Literals

```javascript
// ❌ Ruim
const msg = 'Olá, ' + nome + '! Você tem ' + idade + ' anos.';

// ✅ Bom
const msg = `Olá, ${nome}! Você tem ${idade} anos.`;
```

### 7. Trate Erros Adequadamente

```javascript
// ✅ Bom
async function buscar() {
    try {
        const dados = await fetch('/api');
        return await dados.json();
    } catch (erro) {
        console.error('Erro ao buscar:', erro);
        throw erro; // Re-throw se necessário
    }
}
```

### 8. Evite Código Aninhado Demais

```javascript
// ❌ Ruim
if (usuario) {
    if (usuario.ativo) {
        if (usuario.idade >= 18) {
            // ...
        }
    }
}

// ✅ Bom - Early return
if (!usuario) return;
if (!usuario.ativo) return;
if (usuario.idade < 18) return;
// ...
```

---

## 📝 Exercícios Práticos

### Exercício 1: Todo List
Crie uma lista de tarefas com:
- Adicionar tarefa
- Marcar como concluída
- Remover tarefa
- Salvar no localStorage

### Exercício 2: Consumir API
Consuma a API JSONPlaceholder:
- Listar posts
- Mostrar comentários
- Criar novo post

### Exercício 3: Validação de Formulário
Crie validação com:
- Email válido
- Senha forte
- Confirmação de senha
- Feedback visual

### Exercício 4: Galeria de Imagens
Crie uma galeria com:
- Carregar imagens de API
- Lightbox ao clicar
- Navegação com teclado

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| MDN JavaScript | [developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| JavaScript.info | [javascript.info](https://javascript.info/) |
| Web.dev JavaScript | [web.dev/learn/javascript](https://web.dev/learn/javascript/) |

### Cursos e Tutoriais

| Recurso | Link |
|---------|------|
| Eloquent JavaScript | [eloquentjavascript.net](https://eloquentjavascript.net/) |
| You Don't Know JS | [github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS) |
| ES6 Features | [es6-features.org](https://es6-features.org/) |

### Ferramentas

| Ferramenta | Link |
|------------|------|
| JSFiddle | [jsfiddle.net](https://jsfiddle.net/) |
| CodePen | [codepen.io](https://codepen.io/) |
| ESLint | [eslint.org](https://eslint.org/) |
| Prettier | [prettier.io](https://prettier.io/) |

---

## ⏭️ Próximo Passo

Agora que você domina JavaScript, aprenda a otimizar seu site para mecanismos de busca:

➡️ [04-seo.md - Guia Completo de SEO](04-seo.md)

---

<p align="center">
  <strong>⚡ Você completou o guia de JavaScript!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
