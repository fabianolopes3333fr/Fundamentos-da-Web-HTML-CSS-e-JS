# 🌐 GitHub Pages - Hospedagem e Preview de Projetos

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github-pages&logoColor=white)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

> 🚀 Guia completo para hospedar seus projetos HTML/CSS/JS gratuitamente no GitHub Pages e criar previews para seus alunos

---

## 📑 Índice

- [🎯 O que é GitHub Pages?](#-o-que-é-github-pages)
- [⚡ Método 1: GitHub Pages (Recomendado)](#-método-1-github-pages-recomendado)
- [🔗 Método 2: Preview Instantâneo](#-método-2-preview-instantâneo)
- [🚀 Método 3: Netlify/Vercel](#-método-3-netlifyvercel)
- [📂 Organizando Múltiplos Exemplos](#-organizando-múltiplos-exemplos)
- [🎨 Criando uma Página Índice](#-criando-uma-página-índice)
- [🔧 Troubleshooting](#-troubleshooting)
- [💡 Dicas Avançadas](#-dicas-avançadas)

---

## 🎯 O que é GitHub Pages?

**GitHub Pages** é um serviço gratuito de hospedagem de sites estáticos oferecido pelo GitHub. Perfeito para:

| Uso | Descrição |
|-----|-----------|
| 📚 **Portfólios** | Mostre seus projetos ao mundo |
| 📖 **Documentação** | Hospede docs de projetos |
| 🎓 **Ensino** | Demonstrações para alunos |
| 🖼️ **Landing Pages** | Sites institucionais simples |
| 🎮 **Jogos HTML5** | Jogos feitos com JavaScript |

### ✅ Vantagens

- ✅ **100% Gratuito** para repositórios públicos
- ✅ **Domínio grátis**: `usuario.github.io/repositorio`
- ✅ **HTTPS automático** (SSL grátis)
- ✅ **Deploy automático** quando você faz push
- ✅ **CDN global** (rápido no mundo todo)
- ✅ **Domínio customizado** (opcional)

### ⚠️ Limitações

- ❌ Apenas arquivos estáticos (HTML, CSS, JS)
- ❌ Sem backend (Node.js, Python, PHP)
- ❌ Sem banco de dados
- ⚠️ Limite de 1GB por repositório
- ⚠️ Limite de 100GB de banda/mês

---

## ⚡ Método 1: GitHub Pages (Recomendado)

### 📋 Passo a Passo Completo

#### **Opção A: Deploy da Branch Principal (Mais Simples)**

1. **Acesse as Configurações do Repositório**

```
1. Vá para seu repositório no GitHub
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages"
```

2. **Configure a Source (Origem)**

```
Em "Build and deployment":
- Source: "Deploy from a branch"
- Branch: selecione "main" (ou "master")
- Folder: selecione "/ (root)" ou "/docs"
- Clique em "Save"
```

3. **Aguarde o Deploy**

```
GitHub vai processar (1-2 minutos)
Você verá a mensagem:
"Your site is live at https://seu-usuario.github.io/seu-repo/"
```

4. **Acesse seu Site**

```
URL padrão: https://seu-usuario.github.io/nome-do-repositorio/
```

#### **Opção B: Deploy de Subpasta `/docs`**

Se você quiser manter código-fonte separado dos arquivos públicos:

1. **Crie uma pasta `docs` na raiz do projeto**

```bash
mkdir docs
```

2. **Mova os arquivos HTML para `/docs`**

```bash
mv index.html docs/
mv dragao_voando.html docs/
mv -r assets docs/
```

3. **Configure GitHub Pages**

```
Settings → Pages → Branch: main → Folder: /docs → Save
```

#### **Opção C: Branch Separada `gh-pages`**

Para projetos mais organizados:

```bash
# Criar branch gh-pages
git checkout --orphan gh-pages

# Remover arquivos desnecessários
git rm -rf .
echo "# GitHub Pages" > README.md

# Adicionar apenas arquivos públicos
git add index.html dragao_voando.html assets/
git commit -m "Deploy inicial do GitHub Pages"
git push origin gh-pages

# Voltar para main
git checkout main
```

Configure Pages para usar branch `gh-pages`.

---

### 🔗 Acessando Seus Arquivos

Após configurar, seus arquivos estarão disponíveis em:

```
Página principal:
https://seu-usuario.github.io/nome-repo/

Exemplos específicos:
https://seu-usuario.github.io/nome-repo/index.html
https://seu-usuario.github.io/nome-repo/dragao_voando.html
https://seu-usuario.github.io/nome-repo/assets/dragao_voador.css
```

---

## 🔗 Método 2: Preview Instantâneo

### Sem Configurar GitHub Pages!

Use serviços que renderizam HTML diretamente do GitHub:

#### **1. HTMLPreview.github.io**

```
https://htmlpreview.github.io/?https://github.com/SEU-USUARIO/SEU-REPO/blob/main/dragao_voando.html
```

**Como usar:**
1. Copie a URL do arquivo no GitHub
2. Cole no site: https://htmlpreview.github.io/
3. Compartilhe o link gerado

**Exemplo:**
```
Original: https://github.com/fabianolopes3333fr/html_teste/blob/main/dragao_voando.html

Preview: https://htmlpreview.github.io/?https://github.com/fabianolopes3333fr/html_teste/blob/main/dragao_voando.html
```

#### **2. Raw.githack.com**

```
https://raw.githack.com/SEU-USUARIO/SEU-REPO/main/dragao_voando.html
```

**Como usar:**
1. Acesse: https://raw.githack.com/
2. Cole a URL do GitHub
3. Use o link "Use this URL for development"

**Diferença:**
- **Development URL**: Sempre a versão mais recente (sem cache)
- **Production URL**: Com cache CDN (mais rápido, mas pode demorar para atualizar)

#### **3. GitHub.dev (Visual Studio Code Online)**

```
https://github.dev/SEU-USUARIO/SEU-REPO
```

- Abre o VS Code no navegador
- Perfeito para demonstrar código
- Não executa o HTML, apenas mostra o código

---

## 🚀 Método 3: Netlify/Vercel

Para projetos mais avançados com build process:

### **Netlify (Recomendado para Iniciantes)**

1. **Acesse:** https://netlify.com
2. **Conecte o GitHub**
3. **Selecione o repositório**
4. **Configure build:**
   ```yaml
   Build command: (deixe vazio se for apenas HTML)
   Publish directory: . ou /docs
   ```
5. **Deploy!**

**Link gerado:**
```
https://nome-aleatorio-123.netlify.app/
```

### **Vercel (Melhor para Next.js/React)**

1. **Acesse:** https://vercel.com
2. **Importe do GitHub**
3. **Deploy automático**

---

## 📂 Organizando Múltiplos Exemplos

### Estrutura Recomendada

```
html_teste/
├── index.html                    # Página principal (índice)
├── exemplos/
│   ├── dragao_voando.html       # Exemplo 1
│   ├── formulario.html          # Exemplo 2
│   ├── galeria.html             # Exemplo 3
│   └── jogo_da_memoria.html     # Exemplo 4
├── assets/
│   ├── css/
│   │   ├── dragao_voador.css
│   │   └── global.css
│   ├── js/
│   │   └── animations.js
│   └── img/
│       └── logo.png
├── docs/                         # Guias markdown
└── README.md
```

### Links Relativos

Em `index.html`:

```html
<nav>
  <h2>Exemplos Práticos</h2>
  <ul>
    <li><a href="exemplos/dragao_voando.html">🐉 Dragão Voando (Animação CSS)</a></li>
    <li><a href="exemplos/formulario.html">📝 Formulário Validado</a></li>
    <li><a href="exemplos/galeria.html">🖼️ Galeria Responsiva</a></li>
    <li><a href="exemplos/jogo_da_memoria.html">🎮 Jogo da Memória</a></li>
  </ul>
</nav>
```

---

## 🎨 Criando uma Página Índice

### Template de `index.html` para Exemplos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplos Práticos - Curso de Web Development</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 15px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2.5em;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 40px;
      font-size: 1.1em;
    }

    .examples-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-top: 30px;
    }

    .card {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 12px;
      padding: 25px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .card-icon {
      font-size: 3em;
      margin-bottom: 15px;
      display: block;
    }

    .card h3 {
      color: #333;
      margin-bottom: 10px;
      font-size: 1.3em;
    }

    .card p {
      color: #666;
      line-height: 1.6;
    }

    .card-tag {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85em;
      margin-top: 10px;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #eee;
      color: #666;
    }

    .footer a {
      color: #667eea;
      text-decoration: none;
      font-weight: bold;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Exemplos Práticos</h1>
    <p class="subtitle">Curso Completo de Web Development - HTML, CSS e JavaScript</p>

    <div class="examples-grid">
      <!-- Exemplo 1 -->
      <a href="dragao_voando.html" class="card">
        <span class="card-icon">🐉</span>
        <h3>Dragão Voando</h3>
        <p>Animação complexa usando apenas CSS. SVG, keyframes e transformações 3D.</p>
        <span class="card-tag">CSS Avançado</span>
      </a>

      <!-- Exemplo 2 -->
      <a href="index.html" class="card">
        <span class="card-icon">📄</span>
        <h3>Página Completa SEO</h3>
        <p>HTML semântico com Schema Markup, Open Graph e meta tags otimizadas.</p>
        <span class="card-tag">SEO</span>
        <span class="card-tag">HTML5</span>
      </a>

      <!-- Adicione mais exemplos -->
      <a href="#" class="card">
        <span class="card-icon">🎮</span>
        <h3>Jogo da Memória</h3>
        <p>Jogo interativo usando JavaScript vanilla, DOM manipulation e eventos.</p>
        <span class="card-tag">JavaScript</span>
      </a>

      <a href="#" class="card">
        <span class="card-icon">📝</span>
        <h3>Formulário Validado</h3>
        <p>Validação client-side com JavaScript, regex e feedback visual.</p>
        <span class="card-tag">Forms</span>
        <span class="card-tag">Validação</span>
      </a>

      <a href="#" class="card">
        <span class="card-icon">🖼️</span>
        <h3>Galeria Responsiva</h3>
        <p>Grid responsivo com lightbox, lazy loading e otimização de imagens.</p>
        <span class="card-tag">Responsive</span>
      </a>

      <a href="#" class="card">
        <span class="card-icon">🌙</span>
        <h3>Dark Mode Toggle</h3>
        <p>Alternância entre temas claro/escuro com localStorage e CSS variables.</p>
        <span class="card-tag">JavaScript</span>
        <span class="card-tag">CSS Vars</span>
      </a>
    </div>

    <div class="footer">
      <p>
        📚 Desenvolvido por <a href="https://github.com/fabianolopes3333fr" target="_blank">Fabiano Lopes</a>
        | 📖 <a href="https://github.com/fabianolopes3333fr/html_teste" target="_blank">Ver no GitHub</a>
      </p>
    </div>
  </div>
</body>
</html>
```

---

## 🔧 Troubleshooting

### Problema: Página não carrega CSS/imagens

**Causa:** Caminhos relativos errados

**Solução:**

```html
<!-- ❌ ERRADO (caminho absoluto) -->
<link rel="stylesheet" href="/assets/style.css">

<!-- ✅ CORRETO (caminho relativo) -->
<link rel="stylesheet" href="assets/style.css">

<!-- OU caminho a partir da raiz do repositório -->
<link rel="stylesheet" href="./assets/style.css">
```

### Problema: 404 Not Found

**Causa:** Arquivo não está na branch configurada

**Solução:**

```bash
# Verificar em qual branch está
git branch

# Fazer push para a branch correta
git push origin main  # ou gh-pages
```

### Problema: Mudanças não aparecem

**Causa:** Cache do navegador

**Solução:**

1. Limpe o cache: `Ctrl+Shift+Del`
2. Forçar reload: `Ctrl+F5`
3. Aguarde 1-2 minutos para o deploy

### Problema: Página demora para atualizar

**Causa:** CDN do GitHub Pages tem cache

**Solução:**

```bash
# Adicione query string para forçar reload
https://seu-usuario.github.io/repo/index.html?v=2
```

---

## 💡 Dicas Avançadas

### **1. Domínio Customizado**

Em vez de `usuario.github.io/repo`, use `seudominio.com`:

1. **Compre um domínio** (ex: Registro.br, GoDaddy)

2. **Configure DNS do domínio:**

```
Type: CNAME
Name: www
Value: seu-usuario.github.io
```

3. **Configure no GitHub Pages:**

```
Settings → Pages → Custom domain → Digite seu domínio → Save
```

4. **Marque "Enforce HTTPS"**

### **2. Actions para Deploy Automático**

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### **3. README com Badges de Status**

```markdown
![Deploy Status](https://github.com/usuario/repo/actions/workflows/deploy.yml/badge.svg)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fusuario.github.io%2Frepo)
```

### **4. Analytics (Google Analytics)**

Adicione antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **5. PWA (Progressive Web App)**

Crie `manifest.json`:

```json
{
  "name": "Curso Web Development",
  "short_name": "WebDev",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

Adicione no HTML:

```html
<link rel="manifest" href="manifest.json">
```

---

## 📋 Checklist Final

Antes de compartilhar com seus alunos:

- [ ] ✅ GitHub Pages configurado e funcionando
- [ ] ✅ Todos os links funcionando (sem 404)
- [ ] ✅ CSS e JavaScript carregando corretamente
- [ ] ✅ Imagens otimizadas (< 500KB cada)
- [ ] ✅ HTML validado (https://validator.w3.org/)
- [ ] ✅ Responsivo (testado em mobile)
- [ ] ✅ README.md atualizado com links
- [ ] ✅ HTTPS habilitado
- [ ] ✅ Lighthouse score > 90

---

## 📚 Recursos Adicionais

- [📖 Documentação GitHub Pages](https://docs.github.com/pages)
- [🎨 Jekyll (SSG para GitHub Pages)](https://jekyllrb.com/)
- [🚀 Hugo (SSG alternativo)](https://gohugo.io/)
- [📊 Google PageSpeed Insights](https://pagespeed.web.dev/)
- [✅ HTML Validator](https://validator.w3.org/)

---

## 🎓 Exemplo Prático: Este Repositório

**Repositório:** https://github.com/fabianolopes3333fr/html_teste

**GitHub Pages:** https://fabianolopes3333fr.github.io/html_teste/

**Exemplos:**
- 📄 Página Principal: https://fabianolopes3333fr.github.io/html_teste/
- 🐉 Dragão Voando: https://fabianolopes3333fr.github.io/html_teste/dragao_voando.html

**Preview Instantâneo:**
- HTMLPreview: https://htmlpreview.github.io/?https://github.com/fabianolopes3333fr/html_teste/blob/main/dragao_voando.html

---

## 🤝 Compartilhando com Alunos

### Formato de Mensagem

```
🎓 Olá alunos!

Nossos exemplos práticos estão disponíveis online:

📚 Índice de Exemplos:
https://seu-usuario.github.io/repo/

🐉 Exemplo: Dragão Voando (Animação CSS)
https://seu-usuario.github.io/repo/dragao_voando.html

💻 Código-fonte no GitHub:
https://github.com/seu-usuario/repo

Para ver o código:
1. Clique com botão direito → "Ver código-fonte da página"
2. Ou acesse o GitHub acima e navegue pelos arquivos

Bons estudos! 🚀
```

---

**Desenvolvido com 💙 para facilitar o ensino de Web Development**

**Última atualização:** Fevereiro 2026
