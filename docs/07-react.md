# ⚛️ React - Guia Completo

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

> 📚 Guia completo de React - biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.

---

## 📋 Índice

1. [O que é React?](#-o-que-é-react)
2. [Por que usar React?](#-por-que-usar-react)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [JSX](#-jsx)
5. [Componentes](#-componentes)
6. [Props](#-props)
7. [State](#-state)
8. [Hooks](#-hooks)
9. [Eventos](#-eventos)
10. [Renderização Condicional](#-renderização-condicional)
11. [Listas e Keys](#-listas-e-keys)
12. [Formulários](#-formulários)
13. [Lifting State Up](#-lifting-state-up)
14. [Context API](#-context-api)
15. [React Router](#-react-router)
16. [Fetch de Dados](#-fetch-de-dados)
17. [Performance](#-performance)
18. [Boas Práticas](#-boas-práticas)
19. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é React?

**React** é uma biblioteca JavaScript desenvolvida pelo Facebook (Meta) para construir interfaces de usuário através de componentes reutilizáveis.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Component-Based** | UI dividida em componentes independentes |
| **Declarativo** | Descreva como a UI deve ser |
| **Virtual DOM** | Atualizações eficientes |
| **Unidirecional** | Fluxo de dados one-way |
| **Learn Once, Write Anywhere** | React Native, React VR |

### React vs Vanilla JavaScript

```javascript
// Vanilla JavaScript
const button = document.createElement('button');
button.textContent = 'Clique aqui';
button.addEventListener('click', () => {
    alert('Clicou!');
});
document.body.appendChild(button);

// React
function Button() {
    const handleClick = () => alert('Clicou!');
    return <button onClick={handleClick}>Clique aqui</button>;
}
```

---

## 💡 Por que usar React?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Componentes Reutilizáveis** | Menos código, mais produtividade |
| **Virtual DOM** | Performance otimizada |
| **Ecossistema Rico** | Milhares de bibliotecas |
| **Comunidade Gigante** | Suporte e recursos abundantes |
| **React Native** | Mesmo código para mobile |
| **Mercado de Trabalho** | Alto demand de vagas |

### Empresas que usam React

- Facebook/Meta
- Instagram
- Netflix
- Airbnb
- Uber
- WhatsApp Web
- Discord
- Dropbox

---

## 🛠️ Configurando o Ambiente

### Opção 1: Create React App (CRA)

```bash
# NPM
npx create-react-app meu-app
cd meu-app
npm start

# Yarn
yarn create react-app meu-app
cd meu-app
yarn start
```

### Opção 2: Vite (Recomendado - Mais Rápido)

```bash
# NPM
npm create vite@latest meu-app -- --template react
cd meu-app
npm install
npm run dev

# Yarn
yarn create vite meu-app --template react
cd meu-app
yarn
yarn dev
```

### Estrutura de Pastas

```
meu-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 📝 JSX

**JSX** (JavaScript XML) é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript.

### Sintaxe Básica

```jsx
// JSX
const element = <h1>Olá, mundo!</h1>;

// JavaScript puro (o que o JSX se transforma)
const element = React.createElement('h1', null, 'Olá, mundo!');
```

### Expressões em JSX

```jsx
const nome = 'João';
const idade = 25;

const element = (
    <div>
        <h1>Olá, {nome}!</h1>
        <p>Você tem {idade} anos.</p>
        <p>Ano de nascimento: {2026 - idade}</p>
        <p>{idade >= 18 ? 'Maior de idade' : 'Menor de idade'}</p>
    </div>
);
```

### Atributos em JSX

```jsx
// className ao invés de class
<div className="container"></div>

// htmlFor ao invés de for
<label htmlFor="email">Email:</label>

// style como objeto
<div style={{ color: 'red', fontSize: '20px' }}></div>

// Atributos dinâmicos
const src = 'foto.jpg';
<img src={src} alt="Foto" />
```

### Regras do JSX

| Regra | Exemplo |
|-------|---------|
| **Uma raiz** | Envolva em `<>` ou `<div>` |
| **Fechar tags** | `<img />` `<input />` |
| **camelCase** | `className`, `onClick` |
| **Expressões em {}** | `{variavel}` `{2 + 2}` |

```jsx
// ❌ Múltiplas raízes
return (
    <h1>Título</h1>
    <p>Parágrafo</p>
);

// ✅ Fragment
return (
    <>
        <h1>Título</h1>
        <p>Parágrafo</p>
    </>
);
```

---

## 🧩 Componentes

### Function Components (Moderno)

```jsx
// Componente simples
function Welcome() {
    return <h1>Bem-vindo!</h1>;
}

// Arrow function
const Welcome = () => {
    return <h1>Bem-vindo!</h1>;
};

// Return implícito
const Welcome = () => <h1>Bem-vindo!</h1>;

// Uso
function App() {
    return (
        <div>
            <Welcome />
        </div>
    );
}
```

### Class Components (Legado)

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Bem-vindo!</h1>;
    }
}
```

### Anatomia de um Componente

```jsx
// src/components/Card.jsx
import React from 'react';
import './Card.css';

function Card({ titulo, descricao }) {
    const handleClick = () => {
        console.log('Card clicado');
    };

    return (
        <div className="card" onClick={handleClick}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
}

export default Card;
```

---

## 📦 Props

**Props** (properties) são argumentos passados para componentes.

### Passando Props

```jsx
// Definindo componente
function Welcome({ nome, idade }) {
    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <p>Idade: {idade}</p>
        </div>
    );
}

// Usando componente
function App() {
    return (
        <div>
            <Welcome nome="João" idade={25} />
            <Welcome nome="Maria" idade={30} />
        </div>
    );
}
```

### Props com Valores Padrão

```jsx
function Button({ texto = 'Clique', cor = 'azul' }) {
    return (
        <button style={{ backgroundColor: cor }}>
            {texto}
        </button>
    );
}

// Uso
<Button /> // Usa valores padrão
<Button texto="Enviar" cor="verde" />
```

### Props.children

```jsx
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

// Uso
<Card>
    <h2>Título</h2>
    <p>Conteúdo qualquer</p>
</Card>
```

### Spread Props

```jsx
const userProps = {
    nome: 'João',
    idade: 25,
    cidade: 'SP'
};

<UserCard {...userProps} />
```

---

## 🔄 State

**State** é um objeto que armazena dados que podem mudar ao longo do tempo.

### useState Hook

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Contagem: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrementar
            </button>
            <button onClick={() => setCount(0)}>
                Resetar
            </button>
        </div>
    );
}
```

### State com Objetos

```jsx
function Form() {
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        idade: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form>
            <input
                name="nome"
                value={usuario.nome}
                onChange={handleChange}
            />
            <input
                name="email"
                value={usuario.email}
                onChange={handleChange}
            />
        </form>
    );
}
```

### State com Arrays

```jsx
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        setTodos([...todos, input]);
        setInput('');
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Adicionar</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

---

## 🪝 Hooks

### useState - Estado Local

```jsx
const [state, setState] = useState(initialValue);
```

### useEffect - Efeitos Colaterais

```jsx
import { useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    // Executa após toda renderização
    useEffect(() => {
        console.log('Renderizou');
    });

    // Executa apenas na montagem
    useEffect(() => {
        console.log('Componente montado');
    }, []);

    // Executa quando dependências mudam
    useEffect(() => {
        console.log('Count mudou');
    }, [count]);

    // Cleanup
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>App</div>;
}
```

### useEffect para Fetch

```jsx
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [userId]); // Re-fetch quando userId mudar

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!user) return <p>Usuário não encontrado</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}
```

### useRef - Referências

```jsx
import { useRef, useEffect } from 'react';

function InputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
}

// useRef para valores persistentes
function Timer() {
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++;
        console.log(countRef.current); // Não causa re-render
    };

    return <button onClick={handleClick}>Clique</button>;
}
```

### useContext - Contexto

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return <ThemedButton />;
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Botão</button>;
}
```

### useMemo - Memoização

```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
    const expensiveCalculation = useMemo(() => {
        console.log('Calculando...');
        return items.reduce((acc, item) => acc + item.price, 0);
    }, [items]); // Só recalcula se items mudar

    return <div>Total: R$ {expensiveCalculation}</div>;
}
```

### useCallback - Memoização de Funções

```jsx
import { useCallback } from 'react';

function Parent() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Função não muda

    return <Child onIncrement={handleIncrement} />;
}
```

### Custom Hooks

```jsx
// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Uso
function App() {
    const { data, loading, error } = useFetch('/api/users');

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    return <div>{JSON.stringify(data)}</div>;
}
```

---

## 🎯 Eventos

### Eventos Sintéticos

```jsx
function EventosExemplo() {
    const handleClick = (e) => {
        e.preventDefault(); // Prevenir comportamento padrão
        e.stopPropagation(); // Parar propagação
        console.log('Clicou!');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado');
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>Clique</button>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
```

### Passando Argumentos

```jsx
function List() {
    const handleClick = (id, e) => {
        console.log(`Item ${id} clicado`);
    };

    return (
        <ul>
            <li onClick={(e) => handleClick(1, e)}>Item 1</li>
            <li onClick={(e) => handleClick(2, e)}>Item 2</li>
        </ul>
    );
}
```

---

## 🔀 Renderização Condicional

### if/else

```jsx
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Bem-vindo de volta!</h1>;
    }
    return <h1>Por favor, faça login.</h1>;
}
```

### Operador Ternário

```jsx
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <h1>Bem-vindo de volta!</h1>
            ) : (
                <h1>Por favor, faça login.</h1>
            )}
        </div>
    );
}
```

### Logical &&

```jsx
function Mailbox({ unreadMessages }) {
    return (
        <div>
            <h1>Caixa de Entrada</h1>
            {unreadMessages.length > 0 && (
                <p>Você tem {unreadMessages.length} mensagens não lidas.</p>
            )}
        </div>
    );
}
```

---

## 📋 Listas e Keys

### Renderizando Listas

```jsx
function TodoList() {
    const todos = [
        { id: 1, text: 'Aprender React' },
        { id: 2, text: 'Construir projeto' },
        { id: 3, text: 'Deploy' }
    ];

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
```

### Keys - Por que são importantes?

```jsx
// ❌ Ruim - Índice como key (pode causar bugs)
{items.map((item, index) => (
    <div key={index}>{item}</div>
))}

// ✅ Bom - ID único como key
{items.map(item => (
    <div key={item.id}>{item.name}</div>
))}
```

---

## 📝 Formulários

### Controlled Components

```jsx
function Form() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome"
            />

            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Senha"
            />

            <button type="submit">Cadastrar</button>
        </form>
    );
}
```

### Checkbox e Radio

```jsx
function Preferences() {
    const [aceito, setAceito] = useState(false);
    const [genero, setGenero] = useState('');

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={aceito}
                    onChange={(e) => setAceito(e.target.checked)}
                />
                Aceito os termos
            </label>

            <label>
                <input
                    type="radio"
                    value="M"
                    checked={genero === 'M'}
                    onChange={(e) => setGenero(e.target.value)}
                />
                Masculino
            </label>

            <label>
                <input
                    type="radio"
                    value="F"
                    checked={genero === 'F'}
                    onChange={(e) => setGenero(e.target.value)}
                />
                Feminino
            </label>
        </div>
    );
}
```

---

## ⬆️ Lifting State Up

Quando múltiplos componentes precisam compartilhar estado, mova-o para o pai comum.

```jsx
function App() {
    const [temperatura, setTemperatura] = useState(0);

    return (
        <div>
            <TemperaturaInput
                valor={temperatura}
                onChange={setTemperatura}
            />
            <TemperaturaDisplay valor={temperatura} />
        </div>
    );
}

function TemperaturaInput({ valor, onChange }) {
    return (
        <input
            type="number"
            value={valor}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    );
}

function TemperaturaDisplay({ valor }) {
    return <p>{valor}°C = {valor * 9/5 + 32}°F</p>;
}
```

---

## 🌍 Context API

Para evitar prop drilling (passar props por muitos níveis).

```jsx
// AuthContext.js
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

// App.js
<AuthProvider>
    <App />
</AuthProvider>

// Qualquer componente
function Profile() {
    const { user, logout } = useAuth();

    return (
        <div>
            <p>Olá, {user?.name}</p>
            <button onClick={logout}>Sair</button>
        </div>
    );
}
```

---

## 🛣️ React Router

### Instalação

```bash
npm install react-router-dom
```

### Configuração Básica

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
```

### Parâmetros de Rota

```jsx
import { useParams, useNavigate } from 'react-router-dom';

// Definir rota
<Route path="/usuario/:id" element={<Usuario />} />

// Acessar parâmetro
function Usuario() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Usuário ID: {id}</h1>
            <button onClick={() => navigate('/')}>
                Voltar
            </button>
        </div>
    );
}
```

---

## 🌐 Fetch de Dados

### Com useEffect

```jsx
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

### Com Async/Await

```jsx
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://api.exemplo.com/posts');
            const data = await response.json();
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    );
}
```

---

## ⚡ Performance

### React.memo

```jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
    console.log('Renderizou!');
    return <div>{data}</div>;
});
```

### useMemo e useCal lback

```jsx
function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // Memoriza resultado de cálculo pesado
    const expensive = useMemo(() => {
        return todos.reduce((acc, todo) => acc + todo.priority, 0);
    }, [todos]);

    // Memoriza função
    const handleAddTodo = useCallback((todo) => {
        setTodos(prev => [...prev, todo]);
    }, []);

    return <div>{expensive}</div>;
}
```

### Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Dashboard />
        </Suspense>
    );
}
```

---

## ✅ Boas Práticas

### Estrutura de Pastas

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   └── Button.test.jsx
│   └── Card/
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── hooks/
│   ├── useFetch.js
│   └── useAuth.js
├── context/
│   └── AuthContext.jsx
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

### Nomenclatura

```jsx
// ✅ PascalCase para componentes
function UserCard() {}

// ✅ camelCase para funções/variáveis
const handleClick = () => {};
const userName = 'João';

// ✅ SCREAMING_SNAKE_CASE para constantes
const API_URL = 'https://api.exemplo.com';
```

### Evite Prop Drilling

```jsx
// ❌ Ruim
<ComponenteA>
    <ComponenteB dados={dados}>
        <ComponenteC dados={dados}>
            <ComponenteD dados={dados} />
        </ComponenteC>
    </ComponenteB>
</ComponenteA>

// ✅ Bom - Use Context
<DadosProvider>
    <ComponenteA>
        <ComponenteB>
            <ComponenteC>
                <ComponenteD /> {/* usa useContext */}
            </ComponenteC>
        </ComponenteB>
    </ComponenteA>
</DadosProvider>
```

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| React Docs (Nova) | [react.dev](https://react.dev/) |
| React Docs (Antiga) | [reactjs.org](https://reactjs.org/) |
| Create React App | [create-react-app.dev](https://create-react-app.dev/) |

### Bibliotecas Úteis

| Biblioteca | Uso |
|------------|-----|
| React Router | Roteamento |
| React Query | Fetch de dados |
| Zustand | State management |
| React Hook Form | Formulários |
| Framer Motion | Animações |
| Styled Components | CSS-in-JS |
| Axios | HTTP Client |

### Cursos e Tutoriais

| Recurso | Link |
|---------|------|
| React Tutorial | [react.dev/learn](https://react.dev/learn) |
| FreeCodeCamp | [freecodecamp.org](https://www.freecodecamp.org/) |
| React Handbook | [reacthandbook.dev](https://reacthandbook.dev/) |

---

## ⏭️ Próximo Passo

Agora aprenda Vue.js, outra biblioteca JavaScript popular:

➡️ [08-vuejs.md - Guia Completo de Vue.js](08-vuejs.md)

---

<p align="center">
  <strong>⚛️ Você completou o guia de React!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
