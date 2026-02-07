# 🎨 CSS - Guia Completo

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

> 📚 Guia completo de CSS (Cascading Style Sheets) - a linguagem que define a aparência visual das páginas web.

---

## 📋 Índice

1. [O que é CSS?](#-o-que-é-css)
2. [Como Adicionar CSS](#-como-adicionar-css)
3. [Seletores](#-seletores)
4. [Especificidade](#-especificidade)
5. [Box Model](#-box-model)
6. [Unidades de Medida](#-unidades-de-medida)
7. [Cores](#-cores)
8. [Tipografia](#-tipografia)
9. [Backgrounds](#-backgrounds)
10. [Flexbox](#-flexbox)
11. [CSS Grid](#-css-grid)
12. [Responsividade](#-responsividade)
13. [Transições e Animações](#-transições-e-animações)
14. [Variáveis CSS](#-variáveis-css-custom-properties)
15. [Pseudo-classes e Pseudo-elementos](#-pseudo-classes-e-pseudo-elementos)
16. [Metodologias CSS](#-metodologias-css)
17. [Boas Práticas](#-boas-práticas)
18. [Exercícios Práticos](#-exercícios-práticos)
19. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🎨 O que é CSS?

**CSS (Cascading Style Sheets)** é a linguagem usada para estilizar páginas HTML. Controla:

- 🎨 Cores e backgrounds
- 📐 Layout e posicionamento
- 📝 Tipografia
- 📱 Responsividade
- ✨ Animações e transições

### O "Cascading" (Cascata)

O CSS funciona em cascata - estilos são aplicados de cima para baixo, e estilos posteriores sobrescrevem anteriores:

```css
p {
    color: blue;   /* Primeira regra */
}

p {
    color: red;    /* Sobrescreve a anterior */
}
/* Resultado: parágrafos serão vermelhos */
```

---

## 📝 Como Adicionar CSS

### 1. CSS Externo (Recomendado) ✅

```html
<!-- No <head> do HTML -->
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
}
```

**Vantagens:**
- Separação de responsabilidades
- Cache do navegador
- Reutilizável em múltiplas páginas

### 2. CSS Interno

```html
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
```

**Uso:** Estilos específicos de uma única página.

### 3. CSS Inline (Evitar quando possível)

```html
<p style="color: red; font-size: 16px;">Texto vermelho</p>
```

**Problemas:**
- Difícil manutenção
- Mistura HTML e CSS
- Alta especificidade

---

## 🎯 Seletores

### Seletores Básicos

```css
/* Seletor de Elemento */
p {
    color: blue;
}

/* Seletor de Classe */
.destaque {
    background: yellow;
}

/* Seletor de ID */
#cabecalho {
    height: 80px;
}

/* Seletor Universal */
* {
    margin: 0;
    padding: 0;
}
```

### Seletores de Atributo

```css
/* Elemento com atributo */
[disabled] {
    opacity: 0.5;
}

/* Atributo com valor específico */
[type="email"] {
    border-color: blue;
}

/* Atributo que contém valor */
[class*="btn"] {
    cursor: pointer;
}

/* Atributo que começa com */
[href^="https"] {
    color: green;
}

/* Atributo que termina com */
[href$=".pdf"] {
    color: red;
}
```

### Combinadores

```css
/* Descendente (qualquer nível) */
article p {
    line-height: 1.6;
}

/* Filho direto */
ul > li {
    list-style: none;
}

/* Irmão adjacente (próximo) */
h2 + p {
    margin-top: 0;
}

/* Irmãos gerais (todos os seguintes) */
h2 ~ p {
    color: gray;
}
```

### Agrupamento de Seletores

```css
/* Múltiplos seletores com mesmos estilos */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    line-height: 1.2;
}
```

### Tabela de Seletores

| Seletor | Exemplo | Seleciona |
|---------|---------|-----------|
| `*` | `*` | Todos os elementos |
| `element` | `p` | Todos os `<p>` |
| `.class` | `.btn` | class="btn" |
| `#id` | `#header` | id="header" |
| `[attr]` | `[required]` | Elementos com atributo |
| `[attr=val]` | `[type="text"]` | Valor exato |
| `A B` | `nav a` | B descendente de A |
| `A > B` | `ul > li` | B filho direto de A |
| `A + B` | `h2 + p` | B imediatamente após A |
| `A ~ B` | `h2 ~ p` | Todos os B após A |

---

## ⚖️ Especificidade

A especificidade determina qual regra CSS vence quando há conflito.

### Cálculo de Especificidade

| Tipo | Peso | Exemplo |
|------|------|---------|
| Inline styles | 1000 | `style="..."` |
| IDs | 100 | `#header` |
| Classes, atributos, pseudo-classes | 10 | `.btn`, `[type]`, `:hover` |
| Elementos, pseudo-elementos | 1 | `p`, `::before` |

### Exemplos de Cálculo

```css
/* Especificidade: 0-0-1 (1) */
p { }

/* Especificidade: 0-1-0 (10) */
.destaque { }

/* Especificidade: 1-0-0 (100) */
#header { }

/* Especificidade: 0-1-1 (11) */
p.destaque { }

/* Especificidade: 0-2-1 (21) */
.container .btn.active { }

/* Especificidade: 1-1-1 (111) */
#nav .link:hover { }
```

### Regras de Especificidade

1. **!important** vence tudo (evite usar)
2. Inline styles vencem IDs
3. IDs vencem classes
4. Classes vencem elementos
5. Em empate, a última regra vence

```css
/* ❌ Evite !important */
p {
    color: red !important; /* Má prática */
}

/* ✅ Use especificidade adequada */
.article p.destaque {
    color: red;
}
```

---

## 📦 Box Model

Todo elemento HTML é uma "caixa" com 4 camadas:

```
┌─────────────────────────────────┐
│            MARGIN               │
│   ┌───────────────────────┐     │
│   │        BORDER         │     │
│   │   ┌───────────────┐   │     │
│   │   │    PADDING    │   │     │
│   │   │   ┌───────┐   │   │     │
│   │   │   │CONTENT│   │   │     │
│   │   │   └───────┘   │   │     │
│   │   └───────────────┘   │     │
│   └───────────────────────┘     │
└─────────────────────────────────┘
```

### Propriedades do Box Model

```css
.box {
    /* Conteúdo */
    width: 300px;
    height: 200px;

    /* Padding (espaço interno) */
    padding: 20px;                    /* Todos os lados */
    padding: 10px 20px;               /* Vertical | Horizontal */
    padding: 10px 20px 15px 25px;     /* Top Right Bottom Left */

    /* Border */
    border: 1px solid #000;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    border-radius: 8px;               /* Bordas arredondadas */

    /* Margin (espaço externo) */
    margin: 20px;
    margin: 0 auto;                   /* Centralizar horizontalmente */
}
```

### Box-Sizing

```css
/* Padrão: Content-box */
/* width = apenas o conteúdo */
/* Tamanho Total = width + padding + border */

/* Recomendado: Border-box */
/* width = conteúdo + padding + border */

/* Reset universal */
*, *::before, *::after {
    box-sizing: border-box;
}
```

### Exemplo Visual

```css
/* Content-box (padrão) */
.box-content {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Tamanho real: 300 + 40 + 10 = 350px */
}

/* Border-box (recomendado) */
.box-border {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Tamanho real: 300px (conteúdo se ajusta) */
}
```

---

## 📏 Unidades de Medida

### Unidades Absolutas

| Unidade | Descrição | Uso |
|---------|-----------|-----|
| `px` | Pixels | Precisão absoluta |
| `cm` | Centímetros | Impressão |
| `mm` | Milímetros | Impressão |
| `in` | Polegadas | Impressão |
| `pt` | Pontos (1/72 in) | Tipografia impressa |

### Unidades Relativas (Recomendadas para Web)

| Unidade | Relativa a | Exemplo |
|---------|------------|---------|
| `%` | Elemento pai | `width: 50%` |
| `em` | Font-size do elemento | `padding: 1.5em` |
| `rem` | Font-size do root (html) | `font-size: 1.2rem` |
| `vw` | 1% da largura da viewport | `width: 100vw` |
| `vh` | 1% da altura da viewport | `height: 100vh` |
| `vmin` | Menor entre vw e vh | `font-size: 5vmin` |
| `vmax` | Maior entre vw e vh | `width: 50vmax` |

### Quando Usar Cada Uma

```css
/* rem - Tipografia e espaçamentos */
html {
    font-size: 16px; /* Base */
}
h1 {
    font-size: 2rem;    /* 32px */
}
p {
    font-size: 1rem;    /* 16px */
    margin-bottom: 1.5rem;
}

/* % - Layouts fluidos */
.container {
    width: 90%;
    max-width: 1200px;
}

/* vh/vw - Elementos full-screen */
.hero {
    height: 100vh;
    width: 100vw;
}

/* em - Componentes proporcionais */
.button {
    font-size: 1rem;
    padding: 0.5em 1em; /* Proporcional ao font-size */
}
```

---

## 🌈 Cores

### Formatos de Cor

```css
/* Nome da cor */
color: red;
color: tomato;
color: rebeccapurple;

/* Hexadecimal */
color: #ff0000;        /* Vermelho */
color: #f00;           /* Abreviado */
color: #ff0000aa;      /* Com transparência */

/* RGB */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);  /* Com transparência */

/* HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

/* Palavras-chave especiais */
color: transparent;
color: currentColor;   /* Herda a cor atual */
color: inherit;
```

### Propriedades de Cor

```css
.element {
    color: #333;                    /* Cor do texto */
    background-color: #f5f5f5;      /* Cor de fundo */
    border-color: #ddd;             /* Cor da borda */
    outline-color: blue;            /* Cor do outline */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Gradientes

```css
/* Gradiente Linear */
background: linear-gradient(to right, #ff0000, #00ff00);
background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
background: linear-gradient(to bottom, #fff 0%, #f0f0f0 100%);

/* Gradiente Radial */
background: radial-gradient(circle, #ff0000, #00ff00);
background: radial-gradient(ellipse at top, #fff, #000);

/* Gradiente Cônico */
background: conic-gradient(#ff0000, #00ff00, #0000ff, #ff0000);
```

---

## 📝 Tipografia

### Propriedades de Fonte

```css
.text {
    /* Família de fonte */
    font-family: 'Roboto', Arial, sans-serif;

    /* Tamanho */
    font-size: 16px;
    font-size: 1rem;

    /* Peso */
    font-weight: normal;    /* 400 */
    font-weight: bold;      /* 700 */
    font-weight: 300;       /* Light */
    font-weight: 600;       /* Semi-bold */

    /* Estilo */
    font-style: normal;
    font-style: italic;
    font-style: oblique;

    /* Variante */
    font-variant: small-caps;
}
```

### Propriedades de Texto

```css
.text {
    /* Alinhamento */
    text-align: left;
    text-align: center;
    text-align: right;
    text-align: justify;

    /* Decoração */
    text-decoration: none;
    text-decoration: underline;
    text-decoration: line-through;
    text-decoration: underline wavy red;

    /* Transformação */
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;

    /* Espaçamento */
    letter-spacing: 0.05em;     /* Entre letras */
    word-spacing: 0.2em;        /* Entre palavras */
    line-height: 1.6;           /* Altura da linha */

    /* Indentação */
    text-indent: 2em;

    /* Sombra */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

### Fontes do Google

```html
<!-- No <head> -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

### Sistema de Tipografia

```css
:root {
    /* Escala de tamanhos */
    --font-size-xs: 0.75rem;   /* 12px */
    --font-size-sm: 0.875rem;  /* 14px */
    --font-size-base: 1rem;    /* 16px */
    --font-size-lg: 1.125rem;  /* 18px */
    --font-size-xl: 1.25rem;   /* 20px */
    --font-size-2xl: 1.5rem;   /* 24px */
    --font-size-3xl: 1.875rem; /* 30px */
    --font-size-4xl: 2.25rem;  /* 36px */

    /* Pesos */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-bold: 700;

    /* Line-heights */
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.75;
}
```

---

## 🖼️ Backgrounds

```css
.element {
    /* Cor de fundo */
    background-color: #f5f5f5;

    /* Imagem de fundo */
    background-image: url('imagem.jpg');

    /* Repetição */
    background-repeat: repeat;      /* Padrão */
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    background-repeat: repeat-y;

    /* Posição */
    background-position: center center;
    background-position: top right;
    background-position: 50% 50%;

    /* Tamanho */
    background-size: cover;     /* Cobre todo o elemento */
    background-size: contain;   /* Contém a imagem inteira */
    background-size: 100% auto;

    /* Anexação */
    background-attachment: scroll;   /* Padrão */
    background-attachment: fixed;    /* Parallax */

    /* Origem e clip */
    background-origin: padding-box;
    background-clip: border-box;

    /* Shorthand */
    background: #f5f5f5 url('img.jpg') no-repeat center/cover;
}
```

### Múltiplos Backgrounds

```css
.element {
    background:
        url('overlay.png') no-repeat center/cover,
        linear-gradient(to bottom, rgba(0,0,0,0.5), transparent),
        url('foto.jpg') no-repeat center/cover;
}
```

---

## 📐 Flexbox

Flexbox é ideal para layouts **unidimensionais** (linha OU coluna).

### Container Flex

```css
.container {
    display: flex;

    /* Direção */
    flex-direction: row;            /* Padrão: horizontal */
    flex-direction: column;         /* Vertical */
    flex-direction: row-reverse;
    flex-direction: column-reverse;

    /* Alinhamento no eixo principal */
    justify-content: flex-start;    /* Início */
    justify-content: flex-end;      /* Fim */
    justify-content: center;        /* Centro */
    justify-content: space-between; /* Espaço entre */
    justify-content: space-around;  /* Espaço ao redor */
    justify-content: space-evenly;  /* Espaço igual */

    /* Alinhamento no eixo cruzado */
    align-items: stretch;           /* Estica (padrão) */
    align-items: flex-start;        /* Início */
    align-items: flex-end;          /* Fim */
    align-items: center;            /* Centro */
    align-items: baseline;          /* Linha de base */

    /* Quebra de linha */
    flex-wrap: nowrap;              /* Sem quebra (padrão) */
    flex-wrap: wrap;                /* Quebra para nova linha */
    flex-wrap: wrap-reverse;

    /* Gap entre items */
    gap: 20px;
    row-gap: 20px;
    column-gap: 10px;
}
```

### Items Flex

```css
.item {
    /* Crescimento */
    flex-grow: 0;       /* Não cresce (padrão) */
    flex-grow: 1;       /* Cresce para preencher */

    /* Encolhimento */
    flex-shrink: 1;     /* Encolhe se necessário (padrão) */
    flex-shrink: 0;     /* Não encolhe */

    /* Tamanho base */
    flex-basis: auto;   /* Tamanho natural */
    flex-basis: 200px;  /* Tamanho fixo */
    flex-basis: 25%;    /* Porcentagem */

    /* Shorthand */
    flex: 1;            /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    flex: 0 0 200px;    /* Não cresce, não encolhe, 200px */

    /* Alinhamento individual */
    align-self: center;

    /* Ordem */
    order: 1;           /* Altera a ordem visual */
}
```

### Exemplos Práticos Flexbox

```css
/* Centralizar elemento */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Grid de cards */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* Cresce, encolhe, mínimo 300px */
}

/* Footer com colunas */
.footer {
    display: flex;
    justify-content: space-around;
}

/* Sidebar + Conteúdo */
.layout {
    display: flex;
}

.sidebar {
    flex: 0 0 250px; /* Largura fixa */
}

.content {
    flex: 1; /* Ocupa o resto */
}
```

---

## 🔲 CSS Grid

Grid é ideal para layouts **bidimensionais** (linhas E colunas).

### Container Grid

```css
.container {
    display: grid;

    /* Definir colunas */
    grid-template-columns: 200px 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    /* Definir linhas */
    grid-template-rows: 100px auto 50px;

    /* Gap */
    gap: 20px;
    row-gap: 20px;
    column-gap: 10px;

    /* Alinhamento de items */
    justify-items: stretch;         /* Horizontal */
    align-items: stretch;           /* Vertical */
    place-items: center center;     /* Shorthand */

    /* Alinhamento do grid */
    justify-content: center;        /* Grid horizontal */
    align-content: center;          /* Grid vertical */
}
```

### Items Grid

```css
.item {
    /* Posicionamento por linhas */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    /* Shorthand */
    grid-column: 1 / 3;     /* Da coluna 1 até 3 */
    grid-row: 1 / 2;

    /* Span (ocupar X células) */
    grid-column: span 2;    /* Ocupa 2 colunas */
    grid-row: span 3;       /* Ocupa 3 linhas */

    /* Area nomeada */
    grid-area: header;

    /* Alinhamento individual */
    justify-self: center;
    align-self: center;
}
```

### Grid Template Areas

```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

### Exemplos Práticos Grid

```css
/* Grid responsivo automático */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Layout de página */
.page {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

/* Card com imagem e conteúdo */
.card {
    display: grid;
    grid-template-rows: 200px 1fr auto;
}

/* Holy Grail Layout */
.holy-grail {
    display: grid;
    grid-template:
        "header header header" auto
        "nav main aside" 1fr
        "footer footer footer" auto
        / 200px 1fr 200px;
}
```

### Flexbox vs Grid

| Aspecto | Flexbox | Grid |
|---------|---------|------|
| **Dimensão** | 1D (linha OU coluna) | 2D (linhas E colunas) |
| **Uso ideal** | Componentes, navegação | Layouts de página |
| **Controle** | Baseado no conteúdo | Baseado no container |
| **Alinhamento** | Excelente | Excelente |
| **Overlap** | Não | Sim |

---

## 📱 Responsividade

### Mobile First

```css
/* Mobile (padrão) */
.container {
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Desktop grande */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
}
```

### Breakpoints Comuns

| Dispositivo | Largura | Media Query |
|-------------|---------|-------------|
| Mobile | < 576px | Padrão |
| Mobile L | ≥ 576px | `@media (min-width: 576px)` |
| Tablet | ≥ 768px | `@media (min-width: 768px)` |
| Desktop | ≥ 1024px | `@media (min-width: 1024px)` |
| Desktop L | ≥ 1280px | `@media (min-width: 1280px)` |

### Media Queries Avançadas

```css
/* Orientação */
@media (orientation: landscape) { }
@media (orientation: portrait) { }

/* Preferências do usuário */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #fff;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

@media (prefers-contrast: high) {
    body {
        --color-primary: #0000ff;
    }
}

/* Hover capability */
@media (hover: hover) {
    .button:hover {
        background: blue;
    }
}

/* Impressão */
@media print {
    .no-print {
        display: none;
    }
}
```

### Container Queries (CSS Moderno)

```css
/* Definir container */
.card-container {
    container-type: inline-size;
    container-name: card;
}

/* Query baseada no container */
@container card (min-width: 400px) {
    .card {
        display: flex;
    }
}
```

---

## ✨ Transições e Animações

### Transições

```css
.button {
    background: blue;
    color: white;
    padding: 10px 20px;

    /* Transição */
    transition: background 0.3s ease;

    /* Múltiplas propriedades */
    transition:
        background 0.3s ease,
        transform 0.2s ease-out,
        box-shadow 0.3s ease;

    /* Shorthand */
    transition: all 0.3s ease;
}

.button:hover {
    background: darkblue;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
```

### Propriedades de Transição

```css
transition-property: background, transform;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;

/* Timing functions */
transition-timing-function: linear;
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
```

### Animações (@keyframes)

```css
/* Definir a animação */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Com porcentagens */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

/* Aplicar a animação */
.element {
    animation: fadeIn 0.5s ease forwards;
}

.button {
    animation: pulse 2s ease-in-out infinite;
}
```

### Propriedades de Animação

```css
animation-name: fadeIn;
animation-duration: 0.5s;
animation-timing-function: ease;
animation-delay: 0.2s;
animation-iteration-count: 1;          /* ou 'infinite' */
animation-direction: normal;           /* reverse, alternate */
animation-fill-mode: forwards;         /* none, backwards, both */
animation-play-state: running;         /* paused */

/* Shorthand */
animation: fadeIn 0.5s ease 0.2s 1 normal forwards;
```

### Exemplos de Animações

```css
/* Loading spinner */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid blue;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Bounce */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Shake */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
```

---

## 🔧 Variáveis CSS (Custom Properties)

### Definindo Variáveis

```css
/* Global (no :root) */
:root {
    /* Cores */
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-secondary: #64748b;
    --color-success: #10b981;
    --color-error: #ef4444;

    /* Cores de texto */
    --color-text: #1e293b;
    --color-text-light: #64748b;

    /* Background */
    --color-bg: #ffffff;
    --color-bg-secondary: #f8fafc;

    /* Espaçamentos */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;

    /* Bordas */
    --border-radius: 0.5rem;
    --border-color: #e2e8f0;

    /* Sombras */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

    /* Tipografia */
    --font-family: 'Inter', sans-serif;
    --font-size-base: 1rem;

    /* Transições */
    --transition-fast: 150ms ease;
    --transition-normal: 300ms ease;
}
```

### Usando Variáveis

```css
.button {
    background: var(--color-primary);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    transition: background var(--transition-fast);
}

.button:hover {
    background: var(--color-primary-dark);
}

.card {
    background: var(--color-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
}
```

### Variáveis com Fallback

```css
/* Se --color-accent não existir, usa blue */
color: var(--color-accent, blue);

/* Fallback com outra variável */
color: var(--color-custom, var(--color-primary));
```

### Dark Mode com Variáveis

```css
:root {
    --color-bg: #ffffff;
    --color-text: #1e293b;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-bg: #1e293b;
        --color-text: #f8fafc;
    }
}

/* Ou com classe */
.dark {
    --color-bg: #1e293b;
    --color-text: #f8fafc;
}
```

---

## 🎭 Pseudo-classes e Pseudo-elementos

### Pseudo-classes de Estado

```css
/* Links */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }
a:focus { outline: 2px solid blue; }
a:focus-visible { outline: 2px solid blue; } /* Só com teclado */

/* Formulários */
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
input:enabled { opacity: 1; }
input:required { border-left: 3px solid red; }
input:optional { border-left: 3px solid gray; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:placeholder-shown { background: #f9f9f9; }
input:checked + label { font-weight: bold; }
```

### Pseudo-classes Estruturais

```css
/* Primeiro e último */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }

/* Específico */
li:nth-child(3) { color: red; }          /* Terceiro */
li:nth-child(odd) { background: #f5f5f5; } /* Ímpares */
li:nth-child(even) { background: white; }  /* Pares */
li:nth-child(3n) { color: blue; }         /* Múltiplos de 3 */
li:nth-child(3n+1) { color: green; }      /* 1, 4, 7, 10... */

/* Do fim */
li:nth-last-child(1) { }  /* Último */
li:nth-last-child(2) { }  /* Penúltimo */

/* Único filho */
li:only-child { }

/* Por tipo */
p:first-of-type { }
p:last-of-type { }
p:nth-of-type(2) { }

/* Vazio */
div:empty { display: none; }

/* Negação */
li:not(:last-child) { border-bottom: 1px solid #ddd; }
input:not(:disabled) { cursor: pointer; }

/* Has (CSS moderno) */
div:has(> img) { padding: 0; }
```

### Pseudo-elementos

```css
/* Antes e depois do conteúdo */
.quote::before {
    content: '"';
    font-size: 2em;
}

.quote::after {
    content: '"';
}

/* Primeira letra */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    float: left;
}

/* Primeira linha */
p::first-line {
    font-weight: bold;
}

/* Seleção de texto */
::selection {
    background: yellow;
    color: black;
}

/* Placeholder de input */
input::placeholder {
    color: #999;
    font-style: italic;
}

/* Scrollbar (Webkit) */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}
```

### Exemplos Práticos

```css
/* Icon com ::before */
.link-external::after {
    content: ' ↗';
    font-size: 0.8em;
}

/* Badge com counter */
.notification {
    position: relative;
}

.notification::after {
    content: attr(data-count);
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Lista com separadores */
.breadcrumb li:not(:last-child)::after {
    content: ' / ';
    margin: 0 0.5rem;
    color: #999;
}
```

---

## 📏 Metodologias CSS

### BEM (Block Element Modifier)

```css
/* Block: componente independente */
.card { }

/* Element: parte do bloco (usa __) */
.card__header { }
.card__title { }
.card__body { }
.card__footer { }
.card__image { }

/* Modifier: variação (usa --) */
.card--featured { }
.card--compact { }
.card__title--large { }
```

```html
<article class="card card--featured">
    <header class="card__header">
        <h2 class="card__title card__title--large">Título</h2>
    </header>
    <div class="card__body">
        <p>Conteúdo</p>
    </div>
    <footer class="card__footer">
        <button class="card__button">Ler mais</button>
    </footer>
</article>
```

### SMACSS (Scalable and Modular Architecture)

```css
/* Base: elementos sem classe */
html, body, h1, p { }

/* Layout: estrutura (prefixo l-) */
.l-header { }
.l-sidebar { }
.l-main { }

/* Module: componentes reutilizáveis */
.card { }
.button { }
.nav { }

/* State: estados (prefixo is-) */
.is-active { }
.is-hidden { }
.is-loading { }

/* Theme: temas */
.theme-dark { }
.theme-light { }
```

### OOCSS (Object-Oriented CSS)

```css
/* Separar estrutura de skin */

/* Estrutura */
.box {
    padding: 20px;
    margin-bottom: 20px;
}

/* Skin */
.box-primary {
    background: blue;
    color: white;
}

.box-secondary {
    background: gray;
    color: black;
}
```

---

## ✅ Boas Práticas

### 1. Use CSS Reset ou Normalize

```css
/* Reset mínimo */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

### 2. Mobile First

```css
/* Mobile primeiro, depois expanda */
.container { padding: 1rem; }

@media (min-width: 768px) {
    .container { padding: 2rem; }
}
```

### 3. Use Variáveis CSS

```css
:root {
    --color-primary: #2563eb;
}

.button {
    background: var(--color-primary);
}
```

### 4. Evite !important

```css
/* ❌ Evite */
.text { color: red !important; }

/* ✅ Use especificidade correta */
.article .text { color: red; }
```

### 5. Use Classes Descritivas

```css
/* ❌ Ruim */
.red { color: red; }
.mt10 { margin-top: 10px; }

/* ✅ Bom */
.error-message { color: red; }
.section-spacing { margin-top: 10px; }
```

### 6. Agrupe Propriedades Relacionadas

```css
.element {
    /* Posicionamento */
    position: absolute;
    top: 0;
    left: 0;

    /* Box Model */
    display: flex;
    width: 100%;
    padding: 20px;
    margin: 10px;

    /* Tipografia */
    font-size: 16px;
    line-height: 1.5;

    /* Visual */
    background: white;
    border: 1px solid gray;
    border-radius: 4px;

    /* Outros */
    cursor: pointer;
    transition: all 0.3s;
}
```

### 7. Teste Acessibilidade

```css
/* Foco visível */
:focus-visible {
    outline: 3px solid blue;
    outline-offset: 2px;
}

/* Contraste adequado */
.text {
    color: #333;        /* Contraste 12:1 com branco */
    background: #fff;
}
```

---

## 📝 Exercícios Práticos

### Exercício 1: Card Component
Crie um card com:
- Imagem no topo
- Título e descrição
- Botão de ação
- Hover effect

### Exercício 2: Navbar Responsiva
Crie uma navegação que:
- Seja horizontal em desktop
- Vire menu hambúrguer em mobile
- Tenha transições suaves

### Exercício 3: Grid de Galeria
Crie uma galeria que:
- Use CSS Grid
- Seja responsiva (auto-fit)
- Tenha hover com overlay

### Exercício 4: Formulário Estilizado
Estilize um formulário com:
- Inputs com focus states
- Validação visual
- Labels animadas

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| MDN CSS | [developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) |
| W3C CSS | [w3.org/Style/CSS](https://www.w3.org/Style/CSS/) |
| Web.dev CSS | [web.dev/learn/css](https://web.dev/learn/css/) |

### Ferramentas

| Ferramenta | Link |
|------------|------|
| CSS Validator | [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/) |
| Can I Use | [caniuse.com](https://caniuse.com/) |
| CSS Grid Generator | [cssgrid-generator.netlify.app](https://cssgrid-generator.netlify.app/) |
| Flexbox Froggy | [flexboxfroggy.com](https://flexboxfroggy.com/) |
| Grid Garden | [cssgridgarden.com](https://cssgridgarden.com/) |

### Referências

| Recurso | Link |
|---------|------|
| CSS-Tricks | [css-tricks.com](https://css-tricks.com/) |
| Smashing Magazine | [smashingmagazine.com](https://www.smashingmagazine.com/) |
| CSS Reference | [cssreference.io](https://cssreference.io/) |

---

## ⏭️ Próximo Passo

Agora que você domina CSS, aprenda a adicionar interatividade com JavaScript:

➡️ [03-javascript.md - Guia Completo de JavaScript](03-javascript.md)

---

<p align="center">
  <strong>🎨 Você completou o guia de CSS!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
