# 🔷 TypeScript - Guia Completo

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> 📚 Guia completo de TypeScript - JavaScript com tipos estáticos para desenvolvimento seguro e escalável.

---

## 📋 Índice

1. [O que é TypeScript?](#-o-que-é-typescript)
2. [Por que usar TypeScript?](#-por-que-usar-typescript)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Tipos Básicos](#-tipos-básicos)
5. [Interfaces](#-interfaces)
6. [Type Aliases](#-type-aliases)
7. [Union e Intersection Types](#-union-e-intersection-types)
8. [Funções](#-funções)
9. [Classes](#-classes)
10. [Generics](#-generics)
11. [Utility Types](#-utility-types)
12. [Type Guards](#-type-guards)
13. [Decorators](#-decorators)
14. [Modules](#-modules)
15. [TypeScript com React](#-typescript-com-react)
16. [Boas Práticas](#-boas-práticas)
17. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é TypeScript?

**TypeScript** é um superconjunto tipado de JavaScript desenvolvido pela Microsoft que compila para JavaScript puro.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Tipos Estáticos** | Detecção de erros em tempo de compilação |
| **Superset de JS** | Todo código JS é TS válido |
| **IntelliSense** | Autocomplete poderoso |
| **POO Avançada** | Interfaces, classes, decorators |
| **Compatibilidade** | Compila para ES3 até ESNext |
| **Tooling** | Melhor refactoring e navegação |

### TypeScript vs JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| Tipagem | Dinâmica | Estática |
| Erros | Runtime | Compile-time |
| IDE Support | Básico | Avançado |
| Learning Curve | Suave | Média |
| Bundle Size | Menor | Mesmo (após compilar) |
| Adoção | Universal | Crescente |

---

## 💡 Por que usar TypeScript?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Menos Bugs** | Erros detectados antes de executar |
| **Refactoring Seguro** | IDE ajuda em mudanças |
| **Documentação Viva** | Tipos são documentação |
| **Melhor Colaboração** | Contratos claros entre código |
| **Escalabilidade** | Código cresce sem perder qualidade |
| **Produtividade** | Autocomplete inteligente |

### Empresas que usam TypeScript

- Microsoft
- Google (Angular)
- Airbnb
- Slack
- Shopify
- Stripe

---

## 🛠️ Configurando o Ambiente

### Instalação

```bash
# Global
npm install -g typescript

# Local (recomendado)
npm install --save-dev typescript

# Verificar versão
tsc --version
```

### Inicializar Projeto

```bash
# Criar tsconfig.json
tsc --init

# Estrutura básica
mkdir src
touch src/index.ts
```

### tsconfig.json (Configuração)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Compilar

```bash
# Compilar uma vez
tsc

# Watch mode
tsc --watch

# Compilar arquivo específico
tsc src/index.ts
```

### ts-node (Executar sem compilar)

```bash
npm install --save-dev ts-node

# Executar
npx ts-node src/index.ts
```

---

## 📊 Tipos Básicos

### Primitivos

```typescript
// String
let nome: string = 'João';
nome = "Maria";

// Number
let idade: number = 25;
let preco: number = 19.99;
let hex: number = 0xf00d;

// Boolean
let ativo: boolean = true;

// Null e Undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Any (evite usar)
let qualquerCoisa: any = 'pode ser qualquer coisa';
qualquerCoisa = 123;
qualquerCoisa = true;

// Unknown (preferível ao any)
let desconhecido: unknown = 'não sabemos ainda';
// desconhecido.toUpperCase(); // Erro!
if (typeof desconhecido === 'string') {
    desconhecido.toUpperCase(); // OK
}

// Void (sem retorno)
function log(mensagem: string): void {
    console.log(mensagem);
}

// Never (nunca retorna)
function erro(mensagem: string): never {
    throw new Error(mensagem);
}
```

### Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3];
let numeros2: Array<number> = [1, 2, 3];

// Array de strings
let nomes: string[] = ['João', 'Maria'];

// Array misto (não recomendado)
let misturado: any[] = [1, 'texto', true];

// Tuplas (array com tipos fixos)
let tupla: [string, number] = ['idade', 30];
let tupla2: [string, number, boolean] = ['João', 25, true];

// Readonly array
let readonly: readonly number[] = [1, 2, 3];
// readonly.push(4); // Erro!
```

### Objetos

```typescript
// Objeto simples
let pessoa: { nome: string; idade: number } = {
    nome: 'João',
    idade: 25
};

// Propriedade opcional
let usuario: { nome: string; idade?: number } = {
    nome: 'Maria'
};

// Propriedade readonly
let config: { readonly apiUrl: string } = {
    apiUrl: 'https://api.example.com'
};
// config.apiUrl = 'outro'; // Erro!

// Index signature
let dicionario: { [key: string]: number } = {
    'um': 1,
    'dois': 2
};
```

### Enums

```typescript
// Enum numérico
enum Direcao {
    Cima,    // 0
    Baixo,   // 1
    Esquerda, // 2
    Direita  // 3
}

let dir: Direcao = Direcao.Cima;

// Enum com valores customizados
enum Status {
    Pendente = 'PENDENTE',
    Aprovado = 'APROVADO',
    Rejeitado = 'REJEITADO'
}

// Enum numérico com valores customizados
enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

// Const enum (otimizado)
const enum Tamanho {
    Pequeno = 'P',
    Medio = 'M',
    Grande = 'G'
}
```

---

## 🎯 Interfaces

### Interface Básica

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
    idade?: number; // Opcional
    readonly cpf: string; // Readonly
}

const usuario: Usuario = {
    id: 1,
    nome: 'João',
    email: 'joao@email.com',
    cpf: '123.456.789-00'
};

// usuario.cpf = 'outro'; // Erro!
```

### Extending Interfaces

```typescript
interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    empresa: string;
    salario: number;
}

const funcionario: Funcionario = {
    nome: 'Maria',
    idade: 30,
    empresa: 'Tech Corp',
    salario: 5000
};
```

### Interface para Funções

```typescript
interface Calculadora {
    (a: number, b: number): number;
}

const somar: Calculadora = (x, y) => x + y;
const subtrair: Calculadora = (x, y) => x - y;
```

### Interface para Classes

```typescript
interface Animal {
    nome: string;
    fazerSom(): void;
}

class Cachorro implements Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerSom(): void {
        console.log('Au au!');
    }
}
```

---

## 🏷️ Type Aliases

### Type Básico

```typescript
type ID = number | string;

let userId: ID = 123;
userId = 'abc-123';

type Coordenada = {
    x: number;
    y: number;
};

const ponto: Coordenada = { x: 10, y: 20 };
```

### Diferença entre Type e Interface

| Aspecto | Interface | Type |
|---------|-----------|------|
| Extends | Sim (`extends`) | Sim (`&`) |
| Implementação | Sim (`implements`) | Sim |
| Merge | Sim (declaration merging) | Não |
| Primitivos | Não | Sim |
| Union/Intersection | Não | Sim |

```typescript
// Interface pode ser "merged"
interface Janela {
    titulo: string;
}
interface Janela {
    largura: number;
}
// Janela agora tem titulo E largura

// Type não pode ser "merged"
type Porta = {
    altura: number;
};
// type Porta = { largura: number; }; // Erro!
```

---

## 🔀 Union e Intersection Types

### Union Types (`|`)

```typescript
// Pode ser string OU number
type ID = string | number;

let id: ID = 123;
id = 'abc';

// Função com union
function imprimirId(id: string | number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

// Union de literais
type Resposta = 'sim' | 'nao' | 'talvez';

let resposta: Resposta = 'sim';
// resposta = 'outra'; // Erro!
```

### Intersection Types (`&`)

```typescript
type Pessoa = {
    nome: string;
    idade: number;
};

type Funcionario = {
    empresa: string;
    cargo: string;
};

// Tem TODAS as propriedades
type PessoaFuncionario = Pessoa & Funcionario;

const pf: PessoaFuncionario = {
    nome: 'João',
    idade: 30,
    empresa: 'Tech',
    cargo: 'Dev'
};
```

---

## ⚙️ Funções

### Tipagem de Funções

```typescript
// Parâmetros e retorno tipados
function somar(a: number, b: number): number {
    return a + b;
}

// Parâmetro opcional
function saudar(nome: string, sobrenome?: string): string {
    return sobrenome ? `Olá, ${nome} ${sobrenome}` : `Olá, ${nome}`;
}

// Parâmetro com valor padrão
function multiplicar(a: number, b: number = 2): number {
    return a * b;
}

// Rest parameters
function somarVarios(...numeros: number[]): number {
    return numeros.reduce((acc, n) => acc + n, 0);
}

// Arrow function
const dividir = (a: number, b: number): number => a / b;
```

### Function Overloads

```typescript
function processar(valor: string): string;
function processar(valor: number): number;
function processar(valor: string | number): string | number {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    return valor * 2;
}

processar('texto'); // string
processar(10); // number
```

---

## 🏛️ Classes

### Classe Básica

```typescript
class Pessoa {
    // Propriedades
    nome: string;
    idade: number;

    // Constructor
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método
    apresentar(): string {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa = new Pessoa('João', 25);
console.log(pessoa.apresentar());
```

### Modificadores de Acesso

```typescript
class Conta {
    public titular: string;      // Acessível de qualquer lugar
    private saldo: number;       // Apenas dentro da classe
    protected senha: string;     // Classe e subclasses

    constructor(titular: string, saldoInicial: number, senha: string) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.senha = senha;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    getSaldo(): number {
        return this.saldo;
    }
}

const conta = new Conta('João', 1000, '1234');
// conta.saldo; // Erro! É private
conta.getSaldo(); // OK
```

### Getters e Setters

```typescript
class Usuario {
    private _email: string;

    constructor(email: string) {
        this._email = email;
    }

    get email(): string {
        return this._email;
    }

    set email(novoEmail: string) {
        if (novoEmail.includes('@')) {
            this._email = novoEmail;
        } else {
            throw new Error('Email inválido');
        }
    }
}

const usuario = new Usuario('joao@email.com');
console.log(usuario.email); // getter
usuario.email = 'novo@email.com'; // setter
```

### Herança

```typescript
class Animal {
    constructor(public nome: string) {}

    mover(distancia: number): void {
        console.log(`${this.nome} moveu ${distancia}m`);
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log('Au au!');
    }
}

class Passaro extends Animal {
    voar(distancia: number): void {
        console.log(`${this.nome} voou ${distancia}m`);
    }
}

const rex = new Cachorro('Rex');
rex.mover(10);
rex.latir();
```

### Classes Abstratas

```typescript
abstract class Forma {
    abstract calcularArea(): number;

    descrever(): string {
        return `Área: ${this.calcularArea()}`;
    }
}

class Circulo extends Forma {
    constructor(public raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Retangulo extends Forma {
    constructor(public largura: number, public altura: number) {
        super();
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

// const forma = new Forma(); // Erro! Classe abstrata
const circulo = new Circulo(5);
console.log(circulo.calcularArea());
```

---

## 🔮 Generics

### Generic Básico

```typescript
function identidade<T>(valor: T): T {
    return valor;
}

identidade<number>(123);
identidade<string>('texto');
identidade(true); // Inferência automática
```

### Generic com Arrays

```typescript
function pegarPrimeiro<T>(array: T[]): T | undefined {
    return array[0];
}

const numeros = [1, 2, 3];
const primeiro = pegarPrimeiro(numeros); // number

const nomes = ['João', 'Maria'];
const primeiroNome = pegarPrimeiro(nomes); // string
```

### Generic Interfaces

```typescript
interface Resposta<T> {
    sucesso: boolean;
    dados: T;
    erro?: string;
}

const respostaUsuario: Resposta<{ nome: string; email: string }> = {
    sucesso: true,
    dados: {
        nome: 'João',
        email: 'joao@email.com'
    }
};

const respostaNumero: Resposta<number> = {
    sucesso: true,
    dados: 42
};
```

### Generic Classes

```typescript
class Caixa<T> {
    private conteudo: T;

    constructor(valor: T) {
        this.conteudo = valor;
    }

    getConteudo(): T {
        return this.conteudo;
    }

    setConteudo(valor: T): void {
        this.conteudo = valor;
    }
}

const caixaDeNumeros = new Caixa<number>(123);
const caixaDeStrings = new Caixa<string>('texto');
```

### Generic Constraints

```typescript
interface ComTamanho {
    length: number;
}

function exibirTamanho<T extends ComTamanho>(item: T): void {
    console.log(item.length);
}

exibirTamanho('texto'); // OK
exibirTamanho([1, 2, 3]); // OK
// exibirTamanho(123); // Erro! Number não tem length
```

---

## 🛠️ Utility Types

TypeScript fornece tipos utilitários para transformações comuns.

### Partial<T>

```typescript
interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

// Todas as propriedades se tornam opcionais
function atualizarUsuario(id: number, dados: Partial<Usuario>) {
    // ...
}

atualizarUsuario(1, { nome: 'João' }); // OK
atualizarUsuario(1, { email: 'novo@email.com' }); // OK
```

### Required<T>

```typescript
interface Config {
    host?: string;
    port?: number;
}

// Todas as propriedades se tornam obrigatórias
const config: Required<Config> = {
    host: 'localhost',
    port: 3000
};
```

### Readonly<T>

```typescript
interface Ponto {
    x: number;
    y: number;
}

const ponto: Readonly<Ponto> = { x: 10, y: 20 };
// ponto.x = 30; // Erro!
```

### Pick<T, K>

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

// Selecionar apenas algumas propriedades
type UsuarioPublico = Pick<Usuario, 'id' | 'nome'>;

const usuario: UsuarioPublico = {
    id: 1,
    nome: 'João'
};
```

### Omit<T, K>

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

// Omitir propriedades
type UsuarioSemSenha = Omit<Usuario, 'senha'>;

const usuario: UsuarioSemSenha = {
    id: 1,
    nome: 'João',
    email: 'joao@email.com'
};
```

### Record<K, T>

```typescript
type Papel = 'admin' | 'editor' | 'viewer';

type Permissoes = Record<Papel, string[]>;

const permissoes: Permissoes = {
    admin: ['read', 'write', 'delete'],
    editor: ['read', 'write'],
    viewer: ['read']
};
```

---

## 🛡️ Type Guards

### typeof

```typescript
function processar(valor: string | number) {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    } else {
        return valor.toFixed(2);
    }
}
```

### instanceof

```typescript
class Cachorro {
    latir() {
        console.log('Au au!');
    }
}

class Gato {
    miar() {
        console.log('Miau!');
    }
}

function fazerSom(animal: Cachorro | Gato) {
    if (animal instanceof Cachorro) {
        animal.latir();
    } else {
        animal.miar();
    }
}
```

### Custom Type Guards

```typescript
interface Peixe {
    nadar(): void;
}

interface Passaro {
    voar(): void;
}

function isPeixe(animal: Peixe | Passaro): animal is Peixe {
    return (animal as Peixe).nadar !== undefined;
}

function mover(animal: Peixe | Passaro) {
    if (isPeixe(animal)) {
        animal.nadar();
    } else {
        animal.voar();
    }
}
```

---

## 🎨 Decorators

Decorators são recursos experimentais (habilite no `tsconfig.json`).

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### Class Decorator

```typescript
function selado(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@selado
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
}
```

### Method Decorator

```typescript
function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Chamando ${propertyName} com`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Resultado:`, result);
        return result;
    };
}

class Calculator {
    @log
    add(a: number, b: number) {
        return a + b;
    }
}
```

---

## 📦 Modules

### Export

```typescript
// math.ts
export function somar(a: number, b: number): number {
    return a + b;
}

export function subtrair(a: number, b: number): number {
    return a - b;
}

export const PI = 3.14159;

// Export default
export default class Calculator {
    // ...
}
```

### Import

```typescript
// app.ts
import Calculator, { somar, subtrair, PI } from './math';

console.log(somar(5, 3));
console.log(PI);

const calc = new Calculator();
```

---

## ⚛️ TypeScript com React

### Componente Funcional

```typescript
import React, { useState } from 'react';

interface Props {
    nome: string;
    idade: number;
    onSalvar?: (nome: string) => void;
}

const Perfil: React.FC<Props> = ({ nome, idade, onSalvar }) => {
    const [editando, setEditando] = useState<boolean>(false);

    return (
        <div>
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <button onClick={() => setEditando(!editando)}>
                {editando ? 'Salvar' : 'Editar'}
            </button>
        </div>
    );
};

export default Perfil;
```

### Hooks

```typescript
// useState
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useEffect
useEffect(() => {
    // ...
}, []);

// Custom Hook
function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
```

---

## ✅ Boas Práticas

| Prática | Benefício |
|---------|-----------|
| Ative `strict` mode | Máxima segurança de tipos |
| Evite `any` | Use `unknown` quando não souber o tipo |
| Use interfaces para objetos | Melhor para extensibilidade |
| Use types para unions/primitivos | Mais flexível |
| Evite `!` (non-null assertion) | Pode ocultar bugs |
| Use `readonly` quando apropriado | Previne mutações |

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [typescriptlang.org](https://www.typescriptlang.org/) |
| TypeScript Handbook | [typescriptlang.org/docs/handbook](https://www.typescriptlang.org/docs/handbook/intro.html) |
| TypeScript Playground | [typescriptlang.org/play](https://www.typescriptlang.org/play) |
| DefinitelyTyped | [github.com/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) |
| Type Challenges | [github.com/type-challenges](https://github.com/type-challenges/type-challenges) |

---

## ⏭️ Próximo Passo

Aprenda Python, linguagem versátil para backend e ciência de dados:

➡️ [11-python.md - Guia Completo de Python](11-python.md)

---

<p align="center">
  <strong>🔷 Você completou o guia de TypeScript!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
