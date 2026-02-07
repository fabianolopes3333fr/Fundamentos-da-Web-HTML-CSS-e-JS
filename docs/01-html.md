# 📄 HTML - Guia Completo

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

> 📚 Guia completo de HTML (HyperText Markup Language) - a linguagem de marcação que define a estrutura de páginas web.

---

## 📋 Índice

1. [O que é HTML?](#-o-que-é-html)
2. [Estrutura Básica](#-estrutura-básica-de-um-documento-html)
3. [HTML Semântico](#-html-semântico)
4. [Elementos de Texto](#-elementos-de-texto)
5. [Listas](#-listas)
6. [Links e Âncoras](#-links-e-âncoras)
7. [Imagens e Multimídia](#-imagens-e-multimídia)
8. [Tabelas](#-tabelas)
9. [Formulários](#-formulários)
10. [Atributos Globais](#-atributos-globais)
11. [Meta Tags](#-meta-tags)
12. [Boas Práticas](#-boas-práticas)
13. [Erros Comuns](#-erros-comuns-a-evitar)
14. [Exercícios Práticos](#-exercícios-práticos)
15. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é HTML?

**HTML (HyperText Markup Language)** é a linguagem de marcação padrão para criar páginas web. Não é uma linguagem de programação - é uma linguagem de **marcação** que define a estrutura e o significado do conteúdo.

### Características do HTML:

| Característica | Descrição |
|---------------|-----------|
| **Marcação** | Define a estrutura do documento |
| **Semântica** | Dá significado ao conteúdo |
| **Hierarquia** | Organiza elementos em árvore (DOM) |
| **Declarativo** | Descreve "o que é", não "como fazer" |
| **Universal** | Funciona em qualquer navegador |

### Como o HTML funciona?

```
Você escreve HTML → Navegador interpreta → Usuário vê a página
```

1. O desenvolvedor escreve código HTML
2. O navegador faz o **parsing** (análise) do HTML
3. Cria a árvore DOM (Document Object Model)
4. Renderiza a página na tela

---

## 📐 Estrutura Básica de um Documento HTML

Todo documento HTML segue uma estrutura padrão:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Metadados (não visíveis) -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo visível -->
    <h1>Olá, Mundo!</h1>
    <p>Meu primeiro parágrafo.</p>

    <script src="script.js"></script>
</body>
</html>
```

### Explicação de cada parte:

| Elemento | Função |
|----------|--------|
| `<!DOCTYPE html>` | Declara que é HTML5 |
| `<html lang="pt-BR">` | Elemento raiz + idioma |
| `<head>` | Metadados (título, CSS, SEO) |
| `<meta charset="UTF-8">` | Codificação de caracteres |
| `<meta name="viewport">` | Responsividade mobile |
| `<title>` | Título na aba do navegador |
| `<body>` | Conteúdo visível da página |

### Etapas para criar um documento HTML:

1. ✅ Criar arquivo com extensão `.html`
2. ✅ Adicionar `<!DOCTYPE html>`
3. ✅ Criar estrutura `<html>`, `<head>`, `<body>`
4. ✅ Definir charset e viewport
5. ✅ Adicionar título
6. ✅ Escrever conteúdo no body

---

## 🏗️ HTML Semântico

HTML semântico significa usar **elementos que transmitem significado** sobre o conteúdo, não apenas sua aparência.

### ❌ HTML Não Semântico vs ✅ HTML Semântico

```html
<!-- ❌ RUIM: Sem significado -->
<div class="header">
    <div class="nav">
        <div class="link">Home</div>
    </div>
</div>
<div class="main-content">
    <div class="article">
        <div class="title">Título</div>
        <div class="text">Conteúdo...</div>
    </div>
</div>
<div class="footer">
    <div>© 2026</div>
</div>

<!-- ✅ BOM: Com significado -->
<header>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>
<main>
    <article>
        <h1>Título</h1>
        <p>Conteúdo...</p>
    </article>
</main>
<footer>
    <p>© 2026</p>
</footer>
```

### Por que usar HTML Semântico?

| Benefício | Explicação |
|-----------|------------|
| **Acessibilidade** | Leitores de tela entendem a estrutura |
| **SEO** | Google entende melhor seu conteúdo |
| **Manutenção** | Código mais legível e organizado |
| **Performance** | Navegadores otimizam rendering |
| **Futuro** | Compatível com novas tecnologias |

### Tabela Completa de Elementos Semânticos

#### Elementos de Estrutura

| Elemento | Quando Usar | Exemplo |
|----------|-------------|---------|
| `<header>` | Cabeçalho da página ou seção | Logo, navegação principal |
| `<nav>` | Navegação com links | Menu, breadcrumbs |
| `<main>` | Conteúdo principal (único) | Área central da página |
| `<article>` | Conteúdo independente | Post, notícia, comentário |
| `<section>` | Seção temática | Grupo de conteúdo relacionado |
| `<aside>` | Conteúdo secundário | Sidebar, anúncios |
| `<footer>` | Rodapé da página ou seção | Copyright, links, contato |

#### Elementos de Conteúdo

| Elemento | Quando Usar | Exemplo |
|----------|-------------|---------|
| `<figure>` | Ilustração com legenda | Imagem + descrição |
| `<figcaption>` | Legenda de figure | Texto abaixo da imagem |
| `<time>` | Data ou hora | `<time datetime="2026-02-07">` |
| `<address>` | Informações de contato | Email, endereço |
| `<mark>` | Texto destacado | Termo de busca |
| `<details>` | Conteúdo expansível | FAQ, acordeão |
| `<summary>` | Título do details | Pergunta do FAQ |

### Exemplo Completo de Página Semântica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Blog | Home</title>
</head>
<body>
    <!-- Cabeçalho do site -->
    <header>
        <h1>Meu Blog</h1>
        <nav aria-label="Navegação principal">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Conteúdo principal -->
    <main>
        <!-- Artigo do blog -->
        <article>
            <header>
                <h2>Título do Post</h2>
                <p>Publicado em <time datetime="2026-02-07">7 de fevereiro de 2026</time></p>
            </header>

            <section>
                <h3>Introdução</h3>
                <p>Primeiro parágrafo do artigo...</p>
            </section>

            <section>
                <h3>Desenvolvimento</h3>
                <p>Conteúdo principal...</p>

                <figure>
                    <img src="imagem.jpg" alt="Descrição da imagem">
                    <figcaption>Legenda explicativa da imagem</figcaption>
                </figure>
            </section>

            <footer>
                <p>Escrito por <address><a href="mailto:autor@email.com">Nome do Autor</a></address></p>
            </footer>
        </article>

        <!-- Barra lateral -->
        <aside>
            <h3>Posts Relacionados</h3>
            <ul>
                <li><a href="/post-1">Post 1</a></li>
                <li><a href="/post-2">Post 2</a></li>
            </ul>
        </aside>
    </main>

    <!-- Rodapé do site -->
    <footer>
        <p>&copy; <time datetime="2026">2026</time> Meu Blog. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

---

## 📝 Elementos de Texto

### Títulos (Headings)

```html
<h1>Título Principal (único por página)</h1>
<h2>Subtítulo</h2>
<h3>Título de seção</h3>
<h4>Subseção</h4>
<h5>Sub-subseção</h5>
<h6>Menor nível</h6>
```

> ⚠️ **Regra de Ouro**: Use apenas UM `<h1>` por página e mantenha a hierarquia (não pule níveis).

### Parágrafos e Formatação

```html
<!-- Parágrafo -->
<p>Este é um parágrafo de texto.</p>

<!-- Quebra de linha (sem novo parágrafo) -->
<p>Linha 1<br>Linha 2</p>

<!-- Linha horizontal -->
<hr>

<!-- Texto pré-formatado -->
<pre>
    Código ou texto
    com espaços preservados
</pre>

<!-- Citação em bloco -->
<blockquote cite="https://fonte.com">
    "Uma citação importante."
    <cite>— Autor</cite>
</blockquote>

<!-- Citação inline -->
<p>Como disse o autor: <q>Uma citação curta.</q></p>
```

### Formatação de Texto Inline

| Elemento | Uso | Exemplo |
|----------|-----|---------|
| `<strong>` | Importância | `<strong>Importante!</strong>` |
| `<em>` | Ênfase | `<em>Destaque</em>` |
| `<b>` | Negrito (sem importância) | `<b>Negrito</b>` |
| `<i>` | Itálico (termo técnico) | `<i>Variável x</i>` |
| `<u>` | Sublinhado | `<u>Sublinhado</u>` |
| `<s>` | Riscado | `<s>Preço antigo</s>` |
| `<mark>` | Destaque | `<mark>Marcado</mark>` |
| `<small>` | Texto menor | `<small>Rodapé</small>` |
| `<sub>` | Subscrito | `H<sub>2</sub>O` |
| `<sup>` | Sobrescrito | `x<sup>2</sup>` |
| `<code>` | Código inline | `<code>console.log()</code>` |
| `<kbd>` | Tecla | `<kbd>Ctrl+C</kbd>` |
| `<abbr>` | Abreviação | `<abbr title="HyperText">HTML</abbr>` |

### Exemplo Completo

```html
<article>
    <h1>Guia de Formatação HTML</h1>

    <p>
        Este é um parágrafo com <strong>texto importante</strong> e
        <em>texto enfatizado</em>. Você pode usar
        <mark>destaque</mark> para chamar atenção.
    </p>

    <p>
        Para código, use <code>const x = 10;</code>.
        Para teclas, use <kbd>Ctrl</kbd> + <kbd>S</kbd>.
    </p>

    <p>
        <abbr title="Cascading Style Sheets">CSS</abbr> é usado
        para estilizar páginas <abbr title="HyperText Markup Language">HTML</abbr>.
    </p>

    <blockquote>
        "A web é para todos."
        <cite>— Tim Berners-Lee</cite>
    </blockquote>
</article>
```

---

## 📋 Listas

### Lista Não Ordenada (Bullets)

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3
        <ul>
            <li>Subitem 3.1</li>
            <li>Subitem 3.2</li>
        </ul>
    </li>
</ul>
```

### Lista Ordenada (Números)

```html
<!-- Padrão: 1, 2, 3... -->
<ol>
    <li>Primeiro passo</li>
    <li>Segundo passo</li>
    <li>Terceiro passo</li>
</ol>

<!-- Com letras: a, b, c... -->
<ol type="a">
    <li>Item a</li>
    <li>Item b</li>
</ol>

<!-- Começar de um número específico -->
<ol start="5">
    <li>Item 5</li>
    <li>Item 6</li>
</ol>

<!-- Ordem reversa -->
<ol reversed>
    <li>Terceiro</li>
    <li>Segundo</li>
    <li>Primeiro</li>
</ol>
```

### Lista de Definição

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - linguagem de marcação para web.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets - linguagem de estilização.</dd>

    <dt>JavaScript</dt>
    <dd>Linguagem de programação para interatividade.</dd>
</dl>
```

---

## 🔗 Links e Âncoras

### Links Básicos

```html
<!-- Link externo -->
<a href="https://google.com">Ir para o Google</a>

<!-- Abrir em nova aba -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
    Abrir em nova aba
</a>

<!-- Link interno (mesma página) -->
<a href="#secao-1">Ir para Seção 1</a>

<!-- Link para outra página do site -->
<a href="/sobre.html">Sobre Nós</a>

<!-- Link para email -->
<a href="mailto:contato@email.com">Enviar Email</a>

<!-- Link para telefone -->
<a href="tel:+5511999999999">Ligar</a>

<!-- Link para WhatsApp -->
<a href="https://wa.me/5511999999999">WhatsApp</a>

<!-- Link para download -->
<a href="/arquivo.pdf" download="meu-arquivo.pdf">Baixar PDF</a>
```

### Atributos Importantes

| Atributo | Uso |
|----------|-----|
| `href` | URL de destino |
| `target="_blank"` | Abrir em nova aba |
| `rel="noopener noreferrer"` | Segurança para links externos |
| `download` | Forçar download |
| `title` | Tooltip ao passar o mouse |

### Âncoras (Links Internos)

```html
<!-- Criar âncora -->
<section id="introducao">
    <h2>Introdução</h2>
    <p>Conteúdo...</p>
</section>

<!-- Link para a âncora -->
<a href="#introducao">Ir para Introdução</a>

<!-- Voltar ao topo -->
<a href="#">Voltar ao Topo</a>
```

---

## 🖼️ Imagens e Multimídia

### Imagens

```html
<!-- Imagem básica -->
<img src="foto.jpg" alt="Descrição da imagem">

<!-- Com dimensões -->
<img src="foto.jpg" alt="Descrição" width="800" height="600">

<!-- Imagem responsiva -->
<img src="foto.jpg" alt="Descrição" style="max-width: 100%; height: auto;">

<!-- Com srcset para diferentes resoluções -->
<img
    src="foto-800.jpg"
    srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    alt="Foto responsiva"
>

<!-- Lazy loading (carregamento tardio) -->
<img src="foto.jpg" alt="Descrição" loading="lazy">
```

### Figure com Legenda

```html
<figure>
    <img src="grafico.png" alt="Gráfico de vendas 2026">
    <figcaption>Figura 1: Gráfico de vendas do primeiro trimestre de 2026</figcaption>
</figure>
```

### Picture (Arte Direcionada)

```html
<picture>
    <!-- Para telas pequenas -->
    <source media="(max-width: 600px)" srcset="img-mobile.jpg">
    <!-- Para telas médias -->
    <source media="(max-width: 1024px)" srcset="img-tablet.jpg">
    <!-- Fallback -->
    <img src="img-desktop.jpg" alt="Imagem responsiva">
</picture>
```

### Vídeo

```html
<video controls width="800" height="450" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <p>Seu navegador não suporta vídeo HTML5.</p>
</video>

<!-- Atributos úteis -->
<video
    controls      <!-- Mostra controles -->
    autoplay      <!-- Inicia automaticamente -->
    muted         <!-- Sem som (necessário para autoplay) -->
    loop          <!-- Repete infinitamente -->
    playsinline   <!-- Toca inline no mobile -->
    preload="metadata"  <!-- Carrega apenas metadados -->
>
```

### Áudio

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <p>Seu navegador não suporta áudio HTML5.</p>
</audio>
```

### Iframe (Embedar Conteúdo)

```html
<!-- YouTube -->
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Título do vídeo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

<!-- Google Maps -->
<iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
></iframe>
```

---

## 📊 Tabelas

### Estrutura Completa de Tabela

```html
<table>
    <!-- Cabeçalho -->
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Cidade</th>
        </tr>
    </thead>

    <!-- Corpo -->
    <tbody>
        <tr>
            <td>Maria</td>
            <td>28</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>João</td>
            <td>35</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>

    <!-- Rodapé -->
    <tfoot>
        <tr>
            <td colspan="3">Total: 2 pessoas</td>
        </tr>
    </tfoot>
</table>
```

### Atributos de Tabela

| Atributo | Uso | Exemplo |
|----------|-----|---------|
| `colspan` | Mesclar colunas | `<td colspan="2">` |
| `rowspan` | Mesclar linhas | `<td rowspan="3">` |
| `scope="col"` | Define cabeçalho de coluna | `<th scope="col">` |
| `scope="row"` | Define cabeçalho de linha | `<th scope="row">` |

### Tabela Acessível

```html
<table>
    <caption>Vendas por Região - 2026</caption>
    <thead>
        <tr>
            <th scope="col">Região</th>
            <th scope="col">Q1</th>
            <th scope="col">Q2</th>
            <th scope="col">Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Norte</th>
            <td>R$ 10.000</td>
            <td>R$ 12.000</td>
            <td>R$ 22.000</td>
        </tr>
        <tr>
            <th scope="row">Sul</th>
            <td>R$ 15.000</td>
            <td>R$ 18.000</td>
            <td>R$ 33.000</td>
        </tr>
    </tbody>
</table>
```

---

## 📝 Formulários

### Estrutura Básica

```html
<form action="/enviar" method="POST">
    <!-- Campo de texto -->
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <!-- Botão de envio -->
    <button type="submit">Enviar</button>
</form>
```

### Tipos de Input

```html
<!-- Texto -->
<input type="text" placeholder="Digite seu nome">

<!-- Email -->
<input type="email" placeholder="seu@email.com">

<!-- Senha -->
<input type="password" placeholder="Senha">

<!-- Número -->
<input type="number" min="0" max="100" step="1">

<!-- Telefone -->
<input type="tel" placeholder="(11) 99999-9999">

<!-- URL -->
<input type="url" placeholder="https://seusite.com">

<!-- Data -->
<input type="date">

<!-- Data e Hora -->
<input type="datetime-local">

<!-- Hora -->
<input type="time">

<!-- Cor -->
<input type="color" value="#ff0000">

<!-- Arquivo -->
<input type="file" accept="image/*">

<!-- Range (slider) -->
<input type="range" min="0" max="100" value="50">

<!-- Checkbox -->
<input type="checkbox" id="termos" name="termos">
<label for="termos">Aceito os termos</label>

<!-- Radio -->
<input type="radio" id="opcao1" name="opcao" value="1">
<label for="opcao1">Opção 1</label>
<input type="radio" id="opcao2" name="opcao" value="2">
<label for="opcao2">Opção 2</label>

<!-- Hidden -->
<input type="hidden" name="token" value="abc123">
```

### Outros Elementos de Formulário

```html
<!-- Textarea (texto longo) -->
<label for="mensagem">Mensagem:</label>
<textarea id="mensagem" name="mensagem" rows="5" cols="40"></textarea>

<!-- Select (dropdown) -->
<label for="estado">Estado:</label>
<select id="estado" name="estado">
    <option value="">Selecione...</option>
    <option value="SP">São Paulo</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="MG">Minas Gerais</option>
</select>

<!-- Select com grupos -->
<select>
    <optgroup label="Sudeste">
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
    </optgroup>
    <optgroup label="Sul">
        <option value="PR">Paraná</option>
        <option value="SC">Santa Catarina</option>
    </optgroup>
</select>

<!-- Datalist (autocomplete) -->
<input list="navegadores" placeholder="Escolha um navegador">
<datalist id="navegadores">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>
```

### Fieldset e Legend

```html
<form>
    <fieldset>
        <legend>Dados Pessoais</legend>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </fieldset>

    <fieldset>
        <legend>Endereço</legend>
        <label for="rua">Rua:</label>
        <input type="text" id="rua" name="rua">

        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade">
    </fieldset>

    <button type="submit">Enviar</button>
</form>
```

### Atributos de Validação

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `required` | Campo obrigatório | `<input required>` |
| `minlength` | Mínimo de caracteres | `<input minlength="3">` |
| `maxlength` | Máximo de caracteres | `<input maxlength="100">` |
| `min` | Valor mínimo | `<input type="number" min="0">` |
| `max` | Valor máximo | `<input type="number" max="10">` |
| `pattern` | Expressão regular | `<input pattern="[0-9]{3}">` |
| `disabled` | Desabilitar campo | `<input disabled>` |
| `readonly` | Somente leitura | `<input readonly>` |
| `autocomplete` | Autocompletar | `<input autocomplete="email">` |

---

## 🌐 Atributos Globais

Atributos que podem ser usados em qualquer elemento HTML:

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `id` | Identificador único | `<div id="menu">` |
| `class` | Classes CSS | `<p class="destaque texto-grande">` |
| `style` | CSS inline | `<p style="color: red;">` |
| `title` | Tooltip | `<abbr title="HTML">HyperText</abbr>` |
| `lang` | Idioma do conteúdo | `<p lang="en">Hello</p>` |
| `dir` | Direção do texto | `<p dir="rtl">עברית</p>` |
| `hidden` | Ocultar elemento | `<div hidden>Oculto</div>` |
| `tabindex` | Ordem de tabulação | `<button tabindex="1">` |
| `contenteditable` | Edição inline | `<p contenteditable="true">` |
| `draggable` | Arrastar e soltar | `<div draggable="true">` |
| `data-*` | Dados customizados | `<div data-id="123">` |

### Exemplo de data-*

```html
<article
    data-author="João Silva"
    data-publish-date="2026-02-07"
    data-category="tecnologia"
>
    <h2>Título do Artigo</h2>
</article>

<script>
    const article = document.querySelector('article');
    console.log(article.dataset.author); // "João Silva"
    console.log(article.dataset.publishDate); // "2026-02-07"
</script>
```

---

## 🏷️ Meta Tags

### Meta Tags Essenciais

```html
<head>
    <!-- Charset (sempre primeiro) -->
    <meta charset="UTF-8">

    <!-- Viewport (responsividade) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título (aparece na aba do navegador) -->
    <title>Título da Página | Nome do Site</title>

    <!-- Descrição (aparece no Google) -->
    <meta name="description" content="Descrição da página em 150-160 caracteres.">

    <!-- Palavras-chave (menos importante hoje) -->
    <meta name="keywords" content="palavra1, palavra2, palavra3">

    <!-- Autor -->
    <meta name="author" content="Seu Nome">

    <!-- Robôs de busca -->
    <meta name="robots" content="index, follow">

    <!-- Idioma -->
    <meta http-equiv="content-language" content="pt-BR">
</head>
```

### Veja mais sobre meta tags no documento [04-seo.md](04-seo.md).

---

## ✅ Boas Práticas

### 1. Sempre use DOCTYPE

```html
<!DOCTYPE html>
```

### 2. Defina o idioma

```html
<html lang="pt-BR">
```

### 3. Use charset UTF-8

```html
<meta charset="UTF-8">
```

### 4. Sempre inclua alt em imagens

```html
<img src="foto.jpg" alt="Descrição da imagem">
```

### 5. Use elementos semânticos

```html
<!-- ✅ Bom -->
<nav>...</nav>
<main>...</main>
<footer>...</footer>

<!-- ❌ Ruim -->
<div class="nav">...</div>
<div class="main">...</div>
<div class="footer">...</div>
```

### 6. Mantenha hierarquia de headings

```html
<!-- ✅ Bom -->
<h1>Título Principal</h1>
    <h2>Subtítulo</h2>
        <h3>Seção</h3>

<!-- ❌ Ruim -->
<h1>Título</h1>
    <h3>Pulou o h2!</h3>
```

### 7. Use labels em formulários

```html
<!-- ✅ Bom -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- ❌ Ruim -->
<input type="email" placeholder="Email">
```

### 8. Valide seu HTML

Use o [W3C Validator](https://validator.w3.org/) para verificar erros.

---

## ❌ Erros Comuns a Evitar

| Erro | Problema | Solução |
|------|----------|---------|
| Múltiplos `<h1>` | Confunde SEO | Use apenas um `<h1>` |
| Imagem sem `alt` | Inacessível | Sempre adicione `alt` |
| `<br>` para espaço | Markup incorreto | Use CSS para espaçamento |
| Pular headings | Hierarquia quebrada | h1 → h2 → h3 em ordem |
| Links sem texto | Inacessível | Adicione texto descritivo |
| Tables para layout | Semântica errada | Use CSS Grid/Flexbox |
| Inline styles | Difícil manutenção | Use classes CSS |
| IDs duplicados | HTML inválido | IDs devem ser únicos |

---

## 📝 Exercícios Práticos

### Exercício 1: Página Pessoal
Crie uma página HTML com:
- Header com seu nome
- Nav com links para seções
- Main com 3 sections (Sobre, Projetos, Contato)
- Footer com copyright

### Exercício 2: Formulário de Contato
Crie um formulário com:
- Nome (obrigatório)
- Email (obrigatório, validação)
- Telefone (opcional)
- Assunto (select com opções)
- Mensagem (textarea)
- Botão de envio

### Exercício 3: Blog Post
Crie um artigo com:
- Título (h1)
- Autor e data
- Parágrafos
- Imagem com legenda
- Lista de tags
- Links externos

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| MDN Web Docs | [developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) |
| W3C HTML Spec | [html.spec.whatwg.org](https://html.spec.whatwg.org/) |
| W3Schools | [w3schools.com/html](https://www.w3schools.com/html/) |
| Web.dev | [web.dev/learn/html](https://web.dev/learn/html/) |

### Ferramentas

| Ferramenta | Link |
|------------|------|
| W3C Validator | [validator.w3.org](https://validator.w3.org/) |
| HTML5 Outliner | [gsnedders.html5.org/outliner](https://gsnedders.html5.org/outliner/) |
| Can I Use | [caniuse.com](https://caniuse.com/) |

### Referências Rápidas

| Recurso | Link |
|---------|------|
| HTML Cheat Sheet | [htmlcheatsheet.com](https://htmlcheatsheet.com/) |
| HTML Reference | [htmlreference.io](https://htmlreference.io/) |
| DevDocs | [devdocs.io/html](https://devdocs.io/html/) |

---

## ⏭️ Próximo Passo

Agora que você domina HTML, aprenda a estilizar suas páginas com CSS:

➡️ [02-css.md - Guia Completo de CSS](02-css.md)

---

<p align="center">
  <strong>📄 Você completou o guia de HTML!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
