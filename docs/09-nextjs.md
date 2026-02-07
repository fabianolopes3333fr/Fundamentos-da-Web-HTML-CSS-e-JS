# ⚫ Next.js - Guia Completo

[![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

> 📚 Guia completo de Next.js - Framework React para produção com renderização híbrida.

---

## 📋 Índice

1. [O que é Next.js?](#-o-que-é-nextjs)
2. [Por que usar Next.js?](#-por-que-usar-nextjs)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Estrutura de Pastas](#-estrutura-de-pastas)
5. [App Router vs Pages Router](#-app-router-vs-pages-router)
6. [Server Components](#-server-components)
7. [Client Components](#-client-components)
8. [Roteamento](#-roteamento)
9. [Layouts e Templates](#-layouts-e-templates)
10. [Data Fetching](#-data-fetching)
11. [API Routes](#-api-routes)
12. [Renderização](#-renderização)
13. [Otimização de Imagens](#-otimização-de-imagens)
14. [Metadata e SEO](#-metadata-e-seo)
15. [Middleware](#-middleware)
16. [Deployment](#-deployment)
17. [Boas Práticas](#-boas-práticas)
18. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Next.js?

**Next.js** é um framework React para produção que fornece renderização híbrida, roteamento baseado em arquivos, otimizações automáticas e muito mais.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Renderização Híbrida** | SSR, SSG, ISR, CSR |
| **Roteamento** | Baseado em sistema de arquivos |
| **API Routes** | Backend integrado |
| **Otimizações** | Imagens, fontes, scripts automáticos |
| **TypeScript** | Suporte nativo |
| **React Server Components** | Renderização no servidor |

### Vantagens sobre React puro

| Aspecto | React | Next.js |
|---------|-------|---------|
| Roteamento | Externo (React Router) | Integrado |
| SSR | Manual | Automático |
| SEO | Limitado | Excelente |
| Performance | Boa | Otimizada |
| Configuração | Complexa | Simples |
| Deploy | Manual | Vercel otimizado |

---

## 💡 Por que usar Next.js?

### Benefícios

| Benefício | Impacto |
|-----------|---------|
| **SEO Nativo** | Google indexa conteúdo facilmente |
| **Performance** | Core Web Vitals otimizados |
| **DX (Developer Experience)** | Hot reload, TypeScript, zero config |
| **Flexibilidade** | Escolha renderização por página |
| **Escalabilidade** | De MVP a aplicações enterprise |
| **Vercel Deploy** | Deploy em 1 minuto |

### Empresas que usam Next.js

- Netflix
- TikTok
- Twitch
- GitHub
- Uber
- Nike
- Hulu

---

## 🛠️ Configurando o Ambiente

### Requisitos

- Node.js 18.17+
- npm, yarn, ou pnpm

### Criar Projeto

```bash
# NPM
npx create-next-app@latest meu-app

# Yarn
yarn create next-app meu-app

# pnpm
pnpm create next-app meu-app

# Opções:
# ✔ Would you like to use TypeScript? No / Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like to use `src/` directory? No
# ✔ Would you like to use App Router? Yes (recommended)
# ✔ Would you like to customize the default import alias? No

cd meu-app
npm run dev
```

Acesse: `http://localhost:3000`

### Scripts

```json
{
  "scripts": {
    "dev": "next dev",           // Desenvolvimento
    "build": "next build",       // Build para produção
    "start": "next start",       // Servidor de produção
    "lint": "next lint"          // ESLint
  }
}
```

---

## 📁 Estrutura de Pastas

### App Router (Next.js 13+)

```
meu-app/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial (/)
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error UI
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx        # /about
│   ├── blog/
│   │   ├── page.tsx        # /blog
│   │   └── [slug]/
│   │       └── page.tsx    # /blog/:slug
│   └── api/
│       └── users/
│           └── route.ts    # API endpoint
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 🔀 App Router vs Pages Router

### Pages Router (Legado)

```typescript
// pages/index.tsx
export default function Home() {
    return <h1>Home</h1>;
}

// pages/about.tsx
export default function About() {
    return <h1>About</h1>;
}

// pages/blog/[slug].tsx
export default function Post({ post }) {
    return <h1>{post.title}</h1>;
}

export async function getStaticProps({ params }) {
    const post = await fetchPost(params.slug);
    return { props: { post } };
}
```

### App Router (Moderno - Recomendado)

```typescript
// app/page.tsx
export default function Home() {
    return <h1>Home</h1>;
}

// app/about/page.tsx
export default function About() {
    return <h1>About</h1>;
}

// app/blog/[slug]/page.tsx
async function fetchPost(slug: string) {
    const res = await fetch(`https://api.example.com/posts/${slug}`);
    return res.json();
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await fetchPost(params.slug);
    return <h1>{post.title}</h1>;
}
```

### Comparação

| Aspecto | Pages Router | App Router |
|---------|--------------|------------|
| Lançamento | Next.js 1+ | Next.js 13+ |
| Server Components | ❌ | ✅ |
| Streaming | ❌ | ✅ |
| Layouts Aninhados | ❌ | ✅ |
| Data Fetching | `getStaticProps` | `async/await` nativo |
| Status | Mantido | Recomendado |

---

## 🖥️ Server Components

Por padrão, todos os componentes no App Router são **Server Components**.

### Vantagens

- Rodam no servidor
- Sem JavaScript enviado ao cliente
- Acesso direto a bancos de dados
- SEO otimizado

### Exemplo

```typescript
// app/users/page.tsx
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store' // Sempre buscar dados frescos
    });
    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

### Cache e Revalidação

```typescript
// Cached (SSG)
fetch('https://api.example.com/data');

// Revalidar a cada 60 segundos (ISR)
fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
});

// Sempre buscar dados frescos (SSR)
fetch('https://api.example.com/data', {
    cache: 'no-store'
});
```

---

## 🌐 Client Components

Use `'use client'` para componentes que precisam de interatividade.

### Quando usar?

- Event listeners (`onClick`, etc.)
- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs
- Custom hooks

### Exemplo

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}
```

### Composição Server + Client

```typescript
// app/page.tsx (Server Component)
import Counter from '@/components/Counter'; // Client Component

async function getData() {
    const res = await fetch('https://api.example.com/data');
    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <div>
            <h1>Server Data: {data.title}</h1>
            <Counter /> {/* Client Component */}
        </div>
    );
}
```

---

## 🛣️ Roteamento

### Rotas Estáticas

```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
└── blog/
    └── page.tsx          → /blog
```

### Rotas Dinâmicas

```typescript
// app/blog/[slug]/page.tsx
export default function Post({ params }: { params: { slug: string } }) {
    return <h1>Post: {params.slug}</h1>;
}

// /blog/meu-post → params.slug = "meu-post"
```

### Rotas Aninhadas

```
app/
└── blog/
    ├── page.tsx          → /blog
    ├── [slug]/
    │   └── page.tsx      → /blog/:slug
    └── [slug]/
        └── comments/
            └── page.tsx  → /blog/:slug/comments
```

### Catch-all Routes

```typescript
// app/docs/[...slug]/page.tsx
export default function Docs({ params }: { params: { slug: string[] } }) {
    return <h1>Docs: {params.slug.join('/')}</h1>;
}

// /docs/intro → slug = ["intro"]
// /docs/api/users → slug = ["api", "users"]
```

### Route Groups

```
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx     → /about
│   └── blog/
│       └── page.tsx     → /blog
└── (shop)/
    ├── products/
    │   └── page.tsx     → /products
    └── cart/
        └── page.tsx     → /cart
```

---

## 🎨 Layouts e Templates

### Layout Raiz

```typescript
// app/layout.tsx
export const metadata = {
    title: 'Meu Site',
    description: 'Descrição do site'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                <header>
                    <nav>Menu</nav>
                </header>
                <main>{children}</main>
                <footer>Rodapé</footer>
            </body>
        </html>
    );
}
```

### Layouts Aninhados

```typescript
// app/blog/layout.tsx
export default function BlogLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <aside>Sidebar do Blog</aside>
            <div>{children}</div>
        </div>
    );
}
```

### Templates (Recriam state)

```typescript
// app/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

// Layout: mantém state entre navegações
// Template: recria state a cada navegação
```

---

## 📊 Data Fetching

### Server Components (Recomendado)

```typescript
// app/posts/page.tsx
async function getPosts() {
    const res = await fetch('https://api.example.com/posts', {
        next: { revalidate: 3600 } // ISR: revalidar a cada 1h
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

### Parallel Data Fetching

```typescript
async function getUser() {
    const res = await fetch('https://api.example.com/user');
    return res.json();
}

async function getPosts() {
    const res = await fetch('https://api.example.com/posts');
    return res.json();
}

export default async function Dashboard() {
    // Executam em paralelo
    const [user, posts] = await Promise.all([
        getUser(),
        getPosts()
    ]);

    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
```

### Client-Side Fetching

```typescript
'use client';

import { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.example.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

---

## 🔌 API Routes

### GET Request

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const users = [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' }
    ];

    return NextResponse.json(users);
}
```

### POST Request

```typescript
// app/api/users/route.ts
export async function POST(request: Request) {
    const body = await request.json();

    // Salvar no banco de dados
    const newUser = {
        id: Date.now(),
        name: body.name
    };

    return NextResponse.json(newUser, { status: 201 });
}
```

### Dynamic Route

```typescript
// app/api/users/[id]/route.ts
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    // Buscar usuário no banco
    const user = { id, name: 'João' };

    return NextResponse.json(user);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    // Deletar do banco

    return new NextResponse(null, { status: 204 });
}
```

### Headers e Cookies

```typescript
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    // Ler cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    // Setar headers
    return NextResponse.json(
        { message: 'Success' },
        {
            headers: {
                'Set-Cookie': 'token=abc123; Path=/; HttpOnly'
            }
        }
    );
}
```

---

## 🎭 Renderização

### SSG (Static Site Generation)

```typescript
// app/posts/[id]/page.tsx

// Gerar páginas estáticas em build time
export async function generateStaticParams() {
    const posts = await fetch('https://api.example.com/posts').then(res => res.json());

    return posts.map((post: any) => ({
        id: post.id.toString()
    }));
}

export default async function Post({ params }: { params: { id: string } }) {
    const post = await fetch(`https://api.example.com/posts/${params.id}`).then(res => res.json());

    return <h1>{post.title}</h1>;
}
```

### ISR (Incremental Static Regeneration)

```typescript
// Revalidar a cada 60 segundos
async function getPost(id: string) {
    const res = await fetch(`https://api.example.com/posts/${id}`, {
        next: { revalidate: 60 }
    });
    return res.json();
}

export default async function Post({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
    return <h1>{post.title}</h1>;
}
```

### SSR (Server-Side Rendering)

```typescript
// Buscar dados a cada request
async function getPost(id: string) {
    const res = await fetch(`https://api.example.com/posts/${id}`, {
        cache: 'no-store' // Desabilitar cache
    });
    return res.json();
}

export default async function Post({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
    return <h1>{post.title}</h1>;
}
```

### Comparação

| Método | Quando renderiza | Use quando |
|--------|------------------|------------|
| **SSG** | Build time | Conteúdo estático |
| **ISR** | Build + Background | Conteúdo atualiza periodicamente |
| **SSR** | Cada request | Dados sempre frescos |
| **CSR** | No cliente | Dados privados/dinâmicos |

---

## 🖼️ Otimização de Imagens

### next/image

```typescript
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            {/* Imagem local */}
            <Image
                src="/images/hero.jpg"
                alt="Hero"
                width={800}
                height={600}
                priority // Carrega com prioridade
            />

            {/* Imagem externa */}
            <Image
                src="https://example.com/image.jpg"
                alt="External"
                width={400}
                height={300}
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
            />

            {/* Responsive (fill) */}
            <div style={{ position: 'relative', width: '100%', height: 400 }}>
                <Image
                    src="/images/banner.jpg"
                    alt="Banner"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}
```

### Configuração

```javascript
// next.config.js
module.exports = {
    images: {
        domains: ['example.com', 'cdn.example.com'],
        formats: ['image/avif', 'image/webp']
    }
};
```

---

## 📄 Metadata e SEO

### Static Metadata

```typescript
// app/page.tsx
export const metadata = {
    title: 'Home - Meu Site',
    description: 'Descrição da página inicial',
    keywords: ['next.js', 'react', 'typescript'],
    openGraph: {
        title: 'Home - Meu Site',
        description: 'Descrição para redes sociais',
        images: ['/og-image.jpg']
    }
};

export default function Home() {
    return <h1>Home</h1>;
}
```

### Dynamic Metadata

```typescript
// app/posts/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }) {
    const post = await fetch(`https://api.example.com/posts/${params.id}`).then(res => res.json());

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image]
        }
    };
}

export default async function Post({ params }: { params: { id: string } }) {
    const post = await fetch(`https://api.example.com/posts/${params.id}`).then(res => res.json());
    return <h1>{post.title}</h1>;
}
```

---

## 🛡️ Middleware

```typescript
// middleware.ts (na raiz do projeto)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Verificar autenticação
    const token = request.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Adicionar headers
    const response = NextResponse.next();
    response.headers.set('x-custom-header', 'value');

    return response;
}

export const config = {
    matcher: '/dashboard/:path*' // Aplicar apenas em /dashboard/*
};
```

---

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# Produção
vercel --prod
```

### Build Manual

```bash
# Build
npm run build

# Iniciar servidor de produção
npm start
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## ✅ Boas Práticas

### Performance

| Prática | Benefício |
|---------|-----------|
| Use Server Components | Menos JavaScript no cliente |
| Otimize imagens | Use `next/image` |
| Code Splitting | Lazy loading com `dynamic()` |
| ISR | Melhor que SSR para dados semi-estáticos |

### SEO

```typescript
// Sempre adicione metadata
export const metadata = {
    title: 'Página',
    description: 'Descrição'
};

// Use semantic HTML
<article>
    <h1>Título</h1>
    <p>Conteúdo</p>
</article>

// Otimize Core Web Vitals
// - Use Server Components
// - Otimize imagens
// - Reduza JavaScript
```

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [nextjs.org](https://nextjs.org/) |
| Learn Next.js | [nextjs.org/learn](https://nextjs.org/learn) |
| Exemplos | [github.com/vercel/next.js/tree/canary/examples](https://github.com/vercel/next.js/tree/canary/examples) |
| Vercel | [vercel.com](https://vercel.com/) |
| Next.js Discord | [discord.gg/nextjs](https://discord.gg/nextjs) |

---

## ⏭️ Próximo Passo

Aprenda TypeScript para escrever código mais seguro:

➡️ [10-typescript.md - Guia Completo de TypeScript](10-typescript.md)

---

<p align="center">
  <strong>⚫ Você completou o guia de Next.js!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
