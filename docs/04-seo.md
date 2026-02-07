# 🔍 SEO - Guia Completo de Otimização

[![SEO](https://img.shields.io/badge/SEO-Optimization-green?style=for-the-badge)](https://developers.google.com/search)

> 📚 Guia completo de Search Engine Optimization - como tornar seu site visível e bem posicionado nos mecanismos de busca.

---

## 📋 Índice

1. [O que é SEO?](#-o-que-é-seo)
2. [Por que SEO é Importante](#-por-que-seo-é-importante)
3. [Como os Buscadores Funcionam](#-como-os-buscadores-funcionam)
4. [SEO On-Page](#-seo-on-page)
5. [Meta Tags Essenciais](#-meta-tags-essenciais)
6. [Open Graph e Social Media](#-open-graph-e-social-media)
7. [URLs Amigáveis](#-urls-amigáveis)
8. [Hierarquia de Títulos](#-hierarquia-de-títulos)
9. [Otimização de Imagens](#-otimização-de-imagens)
10. [Core Web Vitals](#-core-web-vitals)
11. [Mobile-First](#-mobile-first)
12. [SEO Técnico](#-seo-técnico)
13. [Link Building](#-link-building)
14. [Consequências de SEO Ruim](#-consequências-de-seo-ruim)
15. [Google Ads e SEO](#-google-ads-e-seo)
16. [Checklist de SEO](#-checklist-de-seo)
17. [Ferramentas de SEO](#-ferramentas-de-seo)
18. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é SEO?

**SEO (Search Engine Optimization)** é o conjunto de técnicas e estratégias para melhorar o posicionamento de um site nos resultados orgânicos (não pagos) dos mecanismos de busca como Google, Bing e Yahoo.

### Os Três Pilares do SEO

```
                    SEO
                     │
    ┌────────────────┼────────────────┐
    │                │                │
 TÉCNICO        CONTEÚDO        OFF-PAGE
    │                │                │
 • Velocidade    • Qualidade      • Backlinks
 • Indexação     • Relevância     • Autoridade
 • Mobile        • Keywords       • Menções
 • Estrutura     • Atualização    • Social
```

### SEO vs SEM vs SMM

| Estratégia | Descrição | Custo | Tempo |
|------------|-----------|-------|-------|
| **SEO** | Otimização orgânica | Baixo (tempo) | Médio/Longo prazo |
| **SEM** | Marketing em buscadores (Ads) | Alto ($$) | Imediato |
| **SMM** | Marketing em redes sociais | Variável | Curto/Médio prazo |

---

## 💡 Por que SEO é Importante

### Estatísticas que Comprovam

| Estatística | Impacto |
|-------------|---------|
| 68% das experiências online começam em um buscador | Tráfego primário |
| 53% do tráfego de sites vem de busca orgânica | Principal fonte |
| 75% nunca passam da primeira página | Visibilidade crítica |
| 0.63% clicam em resultados da 2ª página | Baixíssimo CTR |
| Posição #1 = 27.6% de todos os cliques | Domínio do topo |

### Benefícios do SEO

1. **Tráfego Qualificado**: Pessoas buscando ativamente seu produto/serviço
2. **Credibilidade**: Resultados orgânicos são mais confiáveis que anúncios
3. **ROI Alto**: Custo por aquisição menor a longo prazo
4. **Resultados Duradouros**: Diferente de ads que param ao parar de pagar
5. **Vantagem Competitiva**: Supere concorrentes nas buscas

---

## ⚙️ Como os Buscadores Funcionam

### O Processo de Indexação

```
1. CRAWLING (Rastreamento)
   └── Bots visitam páginas seguindo links

2. INDEXING (Indexação)
   └── Conteúdo é analisado e armazenado

3. RANKING (Classificação)
   └── Algoritmo determina posições

4. SERVING (Exibição)
   └── Resultados mostrados ao usuário
```

### Fatores de Ranking do Google

O Google usa mais de 200 fatores. Os principais:

| Categoria | Fatores |
|-----------|---------|
| **Conteúdo** | Qualidade, relevância, originalidade, E-E-A-T |
| **Técnico** | Velocidade, mobile, HTTPS, Core Web Vitals |
| **Autoridade** | Backlinks, domínio, reputação |
| **Experiência** | CTR, tempo na página, bounce rate |
| **On-Page** | Títulos, meta descriptions, headings |

### E-E-A-T (Google Quality Guidelines)

| Letra | Significado | Como Demonstrar |
|-------|-------------|-----------------|
| **E** | Experience (Experiência) | Mostrar experiência prática no assunto |
| **E** | Expertise (Especialização) | Credenciais, formação, conhecimento |
| **A** | Authoritativeness (Autoridade) | Backlinks, citações, reconhecimento |
| **T** | Trustworthiness (Confiabilidade) | HTTPS, política de privacidade, contato |

---

## 📄 SEO On-Page

### Estrutura HTML Otimizada

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta essenciais -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <title>Palavra-Chave Principal | Marca</title>
    <meta name="description" content="Descrição atraente com palavras-chave em até 160 caracteres.">
    <meta name="robots" content="index, follow">

    <!-- Canonical -->
    <link rel="canonical" href="https://seusite.com/pagina/">

    <!-- Open Graph -->
    <meta property="og:title" content="Título para Redes Sociais">
    <meta property="og:description" content="Descrição para compartilhamento">
    <meta property="og:image" content="https://seusite.com/imagem.jpg">
</head>
<body>
    <!-- Estrutura semântica -->
    <header>
        <nav aria-label="Navegação principal">
            <!-- Menu de navegação -->
        </nav>
    </header>

    <main>
        <article>
            <h1>Título Principal (único por página)</h1>

            <section>
                <h2>Subtítulo 1</h2>
                <p>Conteúdo com palavras-chave naturalmente inseridas.</p>
            </section>

            <section>
                <h2>Subtítulo 2</h2>
                <h3>Sub-subtítulo</h3>
            </section>
        </article>
    </main>

    <footer>
        <!-- Informações de contato, links -->
    </footer>
</body>
</html>
```

### Densidade de Palavras-Chave

```html
<!-- ❌ Keyword Stuffing (penalizado) -->
<p>
    Compre tênis baratos, tênis baratos online, melhores tênis baratos,
    tênis baratos em promoção, tênis baratos com frete grátis.
</p>

<!-- ✅ Uso Natural -->
<p>
    Encontre os melhores tênis com preços acessíveis em nossa loja.
    Oferecemos frete grátis para compras acima de R$ 200 e promoções
    exclusivas em calçados esportivos de alta qualidade.
</p>
```

### Keywords: Onde Inserir

| Local | Prioridade | Dica |
|-------|------------|------|
| **Title Tag** | ⭐⭐⭐⭐⭐ | No início, máx. 60 caracteres |
| **Meta Description** | ⭐⭐⭐⭐ | CTA incluído, máx. 160 caracteres |
| **H1** | ⭐⭐⭐⭐⭐ | Único, contém keyword principal |
| **URL** | ⭐⭐⭐⭐ | Curta, sem stopwords |
| **Primeiro Parágrafo** | ⭐⭐⭐⭐ | Nas primeiras 100 palavras |
| **H2, H3** | ⭐⭐⭐ | Variações e long-tail |
| **Alt de Imagens** | ⭐⭐⭐ | Descritivo com keyword |
| **Links Internos** | ⭐⭐⭐ | Anchor text relevante |

---

## 🏷️ Meta Tags Essenciais

### Title Tag

```html
<!-- Formato recomendado -->
<title>Keyword Principal - Keyword Secundária | Marca</title>

<!-- Exemplos por tipo de página -->
<title>Tênis de Corrida Nike - Comprar Online | SportStore</title>
<title>Como Aprender JavaScript em 2024 | Blog Dev</title>
<title>Contato - Fale Conosco | Empresa XPTO</title>
```

**Regras:**
- 50-60 caracteres (Google trunca após ~60)
- Palavra-chave no início
- Único para cada página
- Inclua a marca no final

### Meta Description

```html
<meta name="description" content="Descrição atraente que incentiva o clique.
Inclua sua proposta de valor, palavra-chave e uma call-to-action.
Máximo de 160 caracteres para não ser cortada.">
```

**Regras:**
- 150-160 caracteres
- Inclua palavra-chave (aparece em negrito)
- Seja persuasivo (CTA)
- Única para cada página

### Meta Robots

```html
<!-- Indexar e seguir links (padrão) -->
<meta name="robots" content="index, follow">

<!-- Não indexar, mas seguir links -->
<meta name="robots" content="noindex, follow">

<!-- Indexar, mas não seguir links -->
<meta name="robots" content="index, nofollow">

<!-- Não indexar nem seguir -->
<meta name="robots" content="noindex, nofollow">

<!-- Controles adicionais -->
<meta name="robots" content="noarchive">  <!-- Não cachear -->
<meta name="robots" content="nosnippet">  <!-- Não mostrar snippet -->
<meta name="robots" content="max-snippet:150"> <!-- Limitar snippet -->
<meta name="robots" content="max-image-preview:large"> <!-- Imagem grande -->
```

### Canonical URL

```html
<!-- Indica a versão preferencial da página -->
<link rel="canonical" href="https://www.seusite.com/pagina-principal/">

<!-- Quando usar: -->
<!-- - Conteúdo duplicado -->
<!-- - Parâmetros de URL (ex: ?sort=price) -->
<!-- - Versões www e não-www -->
<!-- - HTTP e HTTPS -->
```

### Hreflang (Sites Multilíngue)

```html
<link rel="alternate" hreflang="pt-BR" href="https://seusite.com/br/">
<link rel="alternate" hreflang="en-US" href="https://seusite.com/en/">
<link rel="alternate" hreflang="es" href="https://seusite.com/es/">
<link rel="alternate" hreflang="x-default" href="https://seusite.com/">
```

---

## 📱 Open Graph e Social Media

### Open Graph (Facebook, LinkedIn)

```html
<!-- Básico -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://seusite.com/pagina/">
<meta property="og:title" content="Título Atraente para Social Media">
<meta property="og:description" content="Descrição que incentiva o clique e compartilhamento.">
<meta property="og:image" content="https://seusite.com/imagem-1200x630.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Descrição da imagem">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Nome do Site">

<!-- Para artigos -->
<meta property="og:type" content="article">
<meta property="article:author" content="https://facebook.com/autor">
<meta property="article:published_time" content="2024-01-15T08:00:00Z">
<meta property="article:modified_time" content="2024-01-20T10:30:00Z">
<meta property="article:section" content="Tecnologia">
<meta property="article:tag" content="JavaScript">
<meta property="article:tag" content="Web Development">
```

### Twitter Cards

```html
<!-- Summary Card with Large Image -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@seuperfil">
<meta name="twitter:creator" content="@autor">
<meta name="twitter:title" content="Título para Twitter">
<meta name="twitter:description" content="Descrição com até 200 caracteres.">
<meta name="twitter:image" content="https://seusite.com/imagem.jpg">
<meta name="twitter:image:alt" content="Descrição da imagem">
```

### Dimensões de Imagem Recomendadas

| Plataforma | Tipo | Dimensões | Ratio |
|------------|------|-----------|-------|
| Facebook/LinkedIn | Post | 1200 x 630 | 1.91:1 |
| Twitter | Large Image | 1200 x 628 | 1.91:1 |
| Twitter | Summary | 144 x 144 min | 1:1 |
| WhatsApp | Preview | 300 x 200 min | 1.5:1 |

---

## 🔗 URLs Amigáveis

### Boas Práticas

```plaintext
✅ BOM:
https://seusite.com/blog/como-aprender-javascript
https://seusite.com/produtos/tenis-corrida-nike
https://seusite.com/servicos/consultoria-seo

❌ RUIM:
https://seusite.com/blog/post?id=12345
https://seusite.com/p/123/cat/456/prod/789
https://seusite.com/Como_Aprender_JavaScript_Em_2024!!!
```

### Regras para URLs

| Regra | Exemplo |
|-------|---------|
| Usar hífens, não underscores | `meu-produto` ✅ vs `meu_produto` ❌ |
| Minúsculas apenas | `pagina` ✅ vs `Pagina` ❌ |
| Curtas e descritivas | `/tenis-nike` ✅ vs `/produtos/calcados/esportivos/corrida/tenis-nike-air-max-2024-edicao-limitada` ❌ |
| Sem parâmetros (quando possível) | `/produtos/tenis` ✅ vs `/produtos?cat=tenis&sort=price` ❌ |
| Sem caracteres especiais | `/cafe` ✅ vs `/café` ❌ |
| Sem stopwords | `/guia-seo` ✅ vs `/um-guia-de-seo-para-voce` ❌ |

### Estrutura de URL Ideal

```plaintext
https://www.seusite.com/categoria/subcategoria/pagina
         │         │        │           │        │
      Protocolo  WWW    Domínio    Path      Slug
         │
    Sempre HTTPS!
```

---

## 📊 Hierarquia de Títulos

### Estrutura Correta

```html
<body>
    <!-- Logo/Nome do site (não é H1) -->
    <header>
        <a href="/">Nome do Site</a>
    </header>

    <main>
        <!-- Apenas UM H1 por página -->
        <h1>Título Principal da Página</h1>

        <section>
            <h2>Primeira Seção</h2>
            <p>Conteúdo...</p>

            <h3>Subseção 1.1</h3>
            <p>Conteúdo...</p>

            <h3>Subseção 1.2</h3>
            <p>Conteúdo...</p>
        </section>

        <section>
            <h2>Segunda Seção</h2>

            <h3>Subseção 2.1</h3>

            <h4>Detalhamento 2.1.1</h4>
        </section>
    </main>
</body>
```

### Regras dos Headings

| Regra | Descrição |
|-------|-----------|
| **H1 único** | Apenas um por página, contém keyword principal |
| **Hierarquia** | Não pule níveis (H1 → H3 ❌) |
| **Descritivo** | Deve indicar o conteúdo da seção |
| **Keywords** | Inclua variações naturalmente |
| **Tamanho** | 20-70 caracteres ideal |

---

## 🖼️ Otimização de Imagens

### Atributos Essenciais

```html
<img
    src="tenis-nike-air-max.webp"
    alt="Tênis Nike Air Max preto com sola branca, vista lateral"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
>
```

### Checklist de Otimização

| Aspecto | Recomendação |
|---------|--------------|
| **Formato** | WebP (principal), AVIF (moderno), JPEG (fallback) |
| **Tamanho** | < 200KB ideal, máx. 500KB |
| **Dimensões** | Exatas para uso (não redimensione com CSS) |
| **Nome do arquivo** | `descritivo-com-keywords.webp` |
| **Alt text** | Descritivo, 125 caracteres máx. |
| **Lazy loading** | `loading="lazy"` para imagens abaixo do fold |
| **Width/Height** | Sempre incluir (evita layout shift) |

### Responsive Images

```html
<picture>
    <!-- Formato moderno -->
    <source
        srcset="imagem-400.avif 400w,
                imagem-800.avif 800w,
                imagem-1200.avif 1200w"
        type="image/avif">

    <!-- WebP fallback -->
    <source
        srcset="imagem-400.webp 400w,
                imagem-800.webp 800w,
                imagem-1200.webp 1200w"
        type="image/webp">

    <!-- JPEG fallback universal -->
    <img
        src="imagem-800.jpg"
        srcset="imagem-400.jpg 400w,
                imagem-800.jpg 800w,
                imagem-1200.jpg 1200w"
        sizes="(max-width: 600px) 400px,
               (max-width: 900px) 800px,
               1200px"
        alt="Descrição da imagem"
        loading="lazy"
        width="1200"
        height="800">
</picture>
```

### Texto Alt Eficaz

```html
<!-- ❌ Ruim -->
<img src="img1.jpg" alt="">
<img src="img1.jpg" alt="imagem">
<img src="img1.jpg" alt="foto">

<!-- ❌ Keyword stuffing -->
<img src="tenis.jpg" alt="tênis barato tênis em promoção tênis online">

<!-- ✅ Bom - Descritivo -->
<img src="tenis.jpg" alt="Tênis de corrida Nike Air Max preto, vista lateral">

<!-- ✅ Bom - Para imagens decorativas -->
<img src="decorativo.jpg" alt="" role="presentation">
```

---

## ⚡ Core Web Vitals

### As 3 Métricas Essenciais

| Métrica | Significado | Meta | Mede |
|---------|-------------|------|------|
| **LCP** | Largest Contentful Paint | ≤ 2.5s | Loading |
| **FID** | First Input Delay | ≤ 100ms | Interactivity |
| **CLS** | Cumulative Layout Shift | ≤ 0.1 | Visual Stability |

### LCP - Largest Contentful Paint

O tempo para renderizar o maior elemento visível (imagem, vídeo, texto).

```html
<!-- Otimizações para LCP -->

<!-- 1. Preload de recursos críticos -->
<link rel="preload" as="image" href="hero-image.webp">
<link rel="preload" as="font" href="fonte.woff2" crossorigin>

<!-- 2. Inline CSS crítico -->
<style>
    .hero { /* estilos críticos inline */ }
</style>

<!-- 3. Defer/async JavaScript -->
<script src="app.js" defer></script>
```

### FID/INP - Interatividade

Tempo até a página responder à primeira interação.

```javascript
// ❌ Bloqueia interação
function processarDados() {
    for (let i = 0; i < 1000000; i++) {
        // processamento pesado
    }
}

// ✅ Divide em chunks
async function processarDados() {
    const chunks = dividirEmChunks(dados);
    for (const chunk of chunks) {
        await processarChunk(chunk);
        await new Promise(r => setTimeout(r, 0)); // Libera main thread
    }
}
```

### CLS - Cumulative Layout Shift

Estabilidade visual - elementos que "pulam" afetam negativamente.

```html
<!-- ❌ Causa CLS - imagem sem dimensões -->
<img src="foto.jpg" alt="Descrição">

<!-- ✅ Evita CLS - dimensões definidas -->
<img src="foto.jpg" alt="Descrição" width="800" height="600">

<!-- ✅ Aspect ratio com CSS -->
<style>
    .img-container {
        aspect-ratio: 16 / 9;
    }
</style>

<!-- ✅ Espaço reservado para ads/embeds -->
<style>
    .ad-slot {
        min-height: 250px;
    }
</style>
```

---

## 📱 Mobile-First

### Por que Mobile-First?

- **60%+** do tráfego web vem de mobile
- Google usa **Mobile-First Indexing** desde 2019
- Experiência mobile ruim = ranking prejudicado

### Viewport e Responsividade

```html
<!-- Essencial -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Mobile-First CSS */
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
        padding: 3rem;
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Checklist Mobile

| Aspecto | Verificar |
|---------|-----------|
| **Touch Targets** | Botões mín. 48x48px |
| **Font Size** | Mín. 16px para texto |
| **Viewport** | Sem zoom fixo |
| **Conteúdo** | Mesmo conteúdo mobile/desktop |
| **Pop-ups** | Não use pop-ups intrusivos |
| **Velocidade** | < 3s para First Contentful Paint |

---

## 🔧 SEO Técnico

### robots.txt

```txt
# Localização: https://seusite.com/robots.txt

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /painel/
Disallow: /checkout/
Disallow: /carrinho/
Disallow: /*.pdf$
Disallow: /*?*sort=
Disallow: /*?*filter=

# Sitemap
Sitemap: https://seusite.com/sitemap.xml

# Google específico
User-agent: Googlebot
Crawl-delay: 1
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://seusite.com/</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://seusite.com/sobre/</loc>
        <lastmod>2024-01-10</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://seusite.com/blog/artigo-1/</loc>
        <lastmod>2024-01-12</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
</urlset>
```

### HTTPS

```html
<!-- Forçar HTTPS via .htaccess (Apache) -->
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

<!-- Ou via header -->
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

### Redirects

```html
<!-- 301 - Permanente (transfere SEO) -->
<!-- Use para páginas movidas definitivamente -->

<!-- 302 - Temporário (não transfere SEO) -->
<!-- Use para manutenção temporária -->

<!-- Redirect via HTML (não recomendado) -->
<meta http-equiv="refresh" content="0; url=https://nova-url.com">

<!-- Melhor: Redirect no servidor -->
```

---

## 🔗 Link Building

### Links Internos

```html
<!-- ✅ Anchor text descritivo -->
<a href="/guia-seo">Guia completo de SEO</a>

<!-- ❌ Não usar -->
<a href="/guia-seo">Clique aqui</a>
<a href="/guia-seo">Saiba mais</a>
```

### Estratégia de Links Internos

| Prática | Benefício |
|---------|-----------|
| Link para páginas importantes | Distribui autoridade |
| Anchor text relevante | Indica tema ao Google |
| Links contextuais | Mais valor que menus |
| Estrutura em silo | Agrupa conteúdo relacionado |

### Backlinks

| Tipo | Valor | Como Conseguir |
|------|-------|----------------|
| Editorial | ⭐⭐⭐⭐⭐ | Conteúdo excepcional |
| Guest Post | ⭐⭐⭐⭐ | Escrever para outros sites |
| Menções | ⭐⭐⭐ | PR, eventos, pesquisas |
| Diretórios | ⭐⭐ | Apenas diretórios relevantes |
| Comentários | ⭐ | Mínimo valor |

### Atributos de Links

```html
<!-- Link normal (passa autoridade) -->
<a href="https://site.com">Link</a>

<!-- Nofollow (não passa autoridade) -->
<a href="https://site.com" rel="nofollow">Link pago/duvidoso</a>

<!-- Sponsored (links pagos) -->
<a href="https://site.com" rel="sponsored">Publicidade</a>

<!-- UGC (conteúdo gerado por usuário) -->
<a href="https://site.com" rel="ugc">Comentário do usuário</a>

<!-- Externo (abre em nova aba com segurança) -->
<a href="https://site.com" target="_blank" rel="noopener noreferrer">Link externo</a>
```

---

## ⚠️ Consequências de SEO Ruim

### Impactos Negativos

| Problema | Consequência | Exemplo |
|----------|--------------|---------|
| **Sem indexação** | Invisível nas buscas | 0 tráfego orgânico |
| **Ranking baixo** | Página 2+ = invisível | CTR < 1% |
| **Penalização** | Remoção do Google | Black hat SEO |
| **Experiência ruim** | Alta taxa de rejeição | Site lento |
| **Sem mobile** | Ranking móvel prejudicado | 60% do tráfego perdido |

### Erros Comuns e Penalizações

```html
<!-- ❌ ERROS QUE PREJUDICAM O SEO -->

<!-- 1. Conteúdo duplicado -->
Mesma página em múltiplas URLs sem canonical

<!-- 2. Keyword stuffing -->
<p>Compre tênis tênis tênis baratos tênis online tênis promoção</p>

<!-- 3. Texto oculto -->
<p style="color: white; background: white;">Palavras-chave escondidas</p>

<!-- 4. Links pagos sem nofollow -->
<a href="site-pago.com">Link que deveria ser nofollow</a>

<!-- 5. Cloaking (conteúdo diferente para bot/usuário) -->
Mostra X para Google, Y para usuário

<!-- 6. Redirecionamentos enganosos -->
301 para páginas não relacionadas

<!-- 7. Conteúdo gerado automaticamente (spam) -->
Texto sem sentido apenas para indexação
```

### Sinais de Site com SEO Ruim

| Sinal | Problema | Solução |
|-------|----------|---------|
| Tempo de carregamento > 5s | UX ruim | Otimizar performance |
| Bounce rate > 70% | Conteúdo irrelevante | Melhorar conteúdo |
| Páginas sem meta description | Snippet ruim | Adicionar meta tags |
| Imagens sem alt | Acessibilidade ruim | Adicionar alt text |
| Links quebrados | Experiência ruim | Corrigir/redirecionar |
| Conteúdo fino (< 300 palavras) | Pouco valor | Expandir conteúdo |

---

## 💰 Google Ads e SEO

### Como SEO Afeta Google Ads

| Fator SEO | Impacto em Ads |
|-----------|----------------|
| **Quality Score** | Melhor SEO = maior Quality Score |
| **Experiência da Landing Page** | Páginas lentas = CPC maior |
| **Relevância** | Conteúdo alinhado = melhor Ad Rank |
| **Mobile** | Site ruim no mobile = anúncios prejudicados |

### Quality Score

O Google avalia:

1. **CTR esperado**: Histórico de cliques
2. **Relevância do anúncio**: Keyword vs texto do ad
3. **Experiência da landing page**: SEO on-page!

```plaintext
Quality Score 1-3: Péssimo → CPC muito alto, poucas impressões
Quality Score 4-6: Médio → CPC moderado
Quality Score 7-10: Ótimo → CPC baixo, mais impressões
```

### Custo Real

```plaintext
Site com SEO ruim:
- CPC: R$ 5,00
- Quality Score: 4
- Conversões: 2%
- Custo por conversão: R$ 250

Site com SEO bom:
- CPC: R$ 2,50
- Quality Score: 8
- Conversões: 5%
- Custo por conversão: R$ 50

= 80% de economia!
```

---

## ✅ Checklist de SEO

### SEO Técnico

- [ ] Site usa HTTPS
- [ ] robots.txt configurado
- [ ] sitemap.xml enviado ao Google Search Console
- [ ] URLs canônicas definidas
- [ ] Redirects 301 funcionando
- [ ] Sem erros 404
- [ ] Mobile-friendly
- [ ] Core Web Vitals passando

### SEO On-Page

- [ ] Title tag única e otimizada (50-60 chars)
- [ ] Meta description única e persuasiva (150-160 chars)
- [ ] H1 único com palavra-chave
- [ ] Hierarquia de headings correta
- [ ] URLs amigáveis
- [ ] Imagens otimizadas com alt text
- [ ] Links internos com anchor text descritivo
- [ ] Schema markup implementado

### Conteúdo

- [ ] Conteúdo original e de qualidade
- [ ] Palavras-chave naturalmente inseridas
- [ ] Mínimo 300 palavras por página
- [ ] Atualização regular
- [ ] Responde à intenção de busca

### Performance

- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Imagens em WebP/AVIF
- [ ] CSS/JS minificados
- [ ] Lazy loading ativo

---

## 🛠️ Ferramentas de SEO

### Ferramentas Gratuitas

| Ferramenta | Uso |
|------------|-----|
| [Google Search Console](https://search.google.com/search-console) | Indexação, erros, performance |
| [Google Analytics](https://analytics.google.com/) | Tráfego, comportamento |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Core Web Vitals |
| [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) | Teste mobile |
| [Rich Results Test](https://search.google.com/test/rich-results) | Teste de Schema |
| [Lighthouse](https://developers.google.com/web/tools/lighthouse) | Auditoria completa |

### Ferramentas Pagas (Freemium)

| Ferramenta | Especialidade |
|------------|---------------|
| Ahrefs | Backlinks, keywords |
| SEMrush | Análise competitiva |
| Moz | Autoridade de domínio |
| Screaming Frog | Auditoria técnica |
| Ubersuggest | Pesquisa de keywords |

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| Google Search Central | [developers.google.com/search](https://developers.google.com/search) |
| Google SEO Starter Guide | [developers.google.com/search/docs](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) |
| Core Web Vitals | [web.dev/vitals](https://web.dev/vitals/) |
| Schema.org | [schema.org](https://schema.org/) |

### Blogs e Atualizações

| Recurso | Link |
|---------|------|
| Google Search Updates | [developers.google.com/search/updates](https://developers.google.com/search/updates) |
| Moz Blog | [moz.com/blog](https://moz.com/blog) |
| Search Engine Journal | [searchenginejournal.com](https://www.searchenginejournal.com/) |
| Ahrefs Blog | [ahrefs.com/blog](https://ahrefs.com/blog/) |

---

## ⏭️ Próximo Passo

Agora aprenda a implementar dados estruturados com Schema.org:

➡️ [05-schema-markup.md - Guia de Schema Markup](05-schema-markup.md)

---

<p align="center">
  <strong>🔍 Você completou o guia de SEO!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
