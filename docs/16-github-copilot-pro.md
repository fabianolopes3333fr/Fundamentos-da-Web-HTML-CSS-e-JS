# 🚀 GitHub Copilot Pro+ - Guia Completo de Configuração

[![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/features/copilot)
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

> 🤖 Guia definitivo para configurar, otimizar e turbinar o GitHub Copilot Pro+ no VS Code

---

## 📑 Índice

- [🎯 O que é o GitHub Copilot Pro+?](#-o-que-é-o-github-copilot-pro)
- [⚡ Configurações Avançadas do Modelo](#-configurações-avançadas-do-modelo)
- [🎛️ Habilitando Recursos por Linguagem](#️-habilitando-recursos-por-linguagem)
- [💬 Configurando o Chat do Copilot](#-configurando-o-chat-do-copilot)
- [📝 Instruções Customizadas (O Segredo!)](#-instruções-customizadas-o-segredo)
- [🔄 Commits e Pull Requests Inteligentes](#-commits-e-pull-requests-inteligentes)
- [🔍 Code Review Automatizado](#-code-review-automatizado)
- [⌨️ Sugestões Inline Avançadas](#️-sugestões-inline-avançadas)
- [🎨 Otimizações do Editor](#-otimizações-do-editor)
- [🐍 Configurações para Python/Django](#-configurações-para-pythondjango)
- [⚛️ Configurações para JavaScript/TypeScript](#️-configurações-para-javascripttypescript)
- [🎯 Dicas de Performance](#-dicas-de-performance)
- [📂 Estrutura de Arquivos de Instruções](#-estrutura-de-arquivos-de-instruções)
- [💡 Truques Avançados](#-truques-avançados)

---

## 🎯 O que é o GitHub Copilot Pro+?

O **GitHub Copilot Pro+** é a versão mais avançada do assistente de IA da GitHub, oferecendo:

| Recurso | Free | Pro | Pro+ |
|---------|------|-----|------|
| Sugestões de código | ✅ Limitado | ✅ Ilimitado | ✅ Ilimitado |
| Chat integrado | ❌ | ✅ | ✅ |
| Modelos avançados (Claude, GPT-4) | ❌ | ❌ | ✅ |
| Instruções customizadas | ❌ | ✅ Básico | ✅ Avançado |
| Code Review IA | ❌ | ❌ | ✅ |
| Geração de commits/PRs | ✅ Básico | ✅ | ✅ Avançado |
| Context Window expandido | 8K | 32K | 200K |

### 🔥 Por que usar?

- **Produtividade 10x**: Escreva código até 10x mais rápido
- **Menos bugs**: IA detecta problemas antes de você
- **Documentação automática**: Gera docs, commits e PRs
- **Aprendizado contínuo**: Explica código e conceitos
- **Multi-linguagem**: Suporta 50+ linguagens

---

## ⚡ Configurações Avançadas do Modelo

### 🧠 Escolhendo o Modelo Ideal

O Copilot Pro+ permite escolher entre diferentes modelos de IA. Cada um tem características únicas:

| Modelo | Velocidade | Qualidade | Context | Melhor para |
|--------|------------|-----------|---------|-------------|
| `gpt-4.1` | ⚡⚡⚡ | ⭐⭐⭐⭐ | 128K | Código geral, rapidez |
| `claude-sonnet-4-5` | ⚡⚡ | ⭐⭐⭐⭐⭐ | 200K | Análise profunda |
| `claude-opus-4-5` | ⚡ | ⭐⭐⭐⭐⭐⭐ | 200K | Tarefas complexas |
| `gemini-3-pro` | ⚡⚡⚡ | ⭐⭐⭐⭐ | 1M | Contexto gigante |

### ⚙️ Configuração do Modelo

Adicione ao seu `settings.json` (`Ctrl+,` → Open Settings JSON):

```json
{
  "github.copilot.advanced": {
    // 🔥 ESCOLHA SEU MODELO (descomente o desejado)
    "debug.overrideEngine": "claude-opus-4-5",  // Mais poderoso
    // "debug.overrideEngine": "claude-sonnet-4-5",  // Equilíbrio
    // "debug.overrideEngine": "gpt-4.1",  // Mais rápido

    // 📊 QUANTIDADE DE SUGESTÕES
    "inlineSuggest.count": 5,  // Padrão: 1 (mais opções = mais escolhas)

    // 📏 TAMANHO DAS SUGESTÕES
    "length": 2000,  // Padrão: 500 (sugestões mais completas)

    // 🎯 PRECISÃO vs CRIATIVIDADE
    "temperature": 0.05,  // 0 = preciso, 1 = criativo (0.05 recomendado)

    // 🎲 NUCLEUS SAMPLING
    "topP": 0.9,  // Controla diversidade das sugestões

    // 📚 JANELA DE CONTEXTO
    "contextWindow": 200000  // Quanto código o Copilot "vê" (200K tokens!)
  }
}
```

### 📖 Explicação dos Parâmetros

| Parâmetro | O que faz | Valor Recomendado |
|-----------|-----------|-------------------|
| `debug.overrideEngine` | Modelo de IA usado | `claude-opus-4-5` (qualidade) ou `gpt-4.1` (velocidade) |
| `inlineSuggest.count` | Quantas sugestões aparecem | 3-5 (mais opções para escolher) |
| `length` | Tamanho máximo da sugestão | 1500-2000 (código mais completo) |
| `temperature` | Criatividade vs Precisão | 0.05 (código preciso e consistente) |
| `topP` | Diversidade do vocabulário | 0.9 (bom equilíbrio) |
| `contextWindow` | Tokens de contexto | 200000 (máximo do Opus 4.5) |

---

## 🎛️ Habilitando Recursos por Linguagem

### ✅ Ativação Seletiva

Controle em quais arquivos o Copilot deve funcionar:

```json
{
  "github.copilot.enable": {
    "*": true,                    // ✅ Ativa em todos por padrão

    // 🌐 WEB
    "html": true,
    "css": true,
    "javascript": true,
    "javascriptreact": true,      // JSX (React)
    "typescript": true,
    "typescriptreact": true,      // TSX (React + TS)

    // 🐍 PYTHON
    "python": true,

    // 📄 CONFIGURAÇÃO
    "json": true,
    "jsonc": true,                // JSON com comentários
    "yaml": true,
    "markdown": true,

    // ❌ DESATIVAR ONDE NÃO FAZ SENTIDO
    "plaintext": false,           // Texto puro
    "scminput": false             // Mensagens de commit (use o chat!)
  }
}
```

### 💡 Por que desativar em alguns lugares?

- **`plaintext`**: Evita sugestões em arquivos de texto comum
- **`scminput`**: Mensagens de commit são melhor geradas pelo Chat (mais contexto)

---

## 💬 Configurando o Chat do Copilot

### 🎯 Configurações Essenciais do Chat

```json
{
  // ===== CHAT PRINCIPAL =====
  "github.copilot.chat.enabled": true,
  "github.copilot.chat.welcomeMessage": "always",    // Sempre mostra boas-vindas
  "github.copilot.chat.localeOverride": "pt-br",     // 🇧🇷 Respostas em português!

  // ===== LIMITES =====
  "chat.agent.maxRequests": 100,  // Máximo de requisições por sessão

  // ===== RECURSOS AVANÇADOS =====
  "chat.useAgentSkills": true,           // Usa skills especializados
  "chat.useNestedAgentsMdFiles": true,   // Lê arquivos .md de instruções

  // ===== LAYOUT =====
  "workbench.panel.defaultLocation": "right"  // Chat na direita (melhor UX)
}
```

### 🗣️ Comandos Úteis do Chat

| Comando | O que faz | Exemplo |
|---------|-----------|---------|
| `/explain` | Explica código selecionado | Selecione código → `/explain` |
| `/fix` | Corrige erros no código | `/fix TypeError na linha 42` |
| `/tests` | Gera testes unitários | `/tests para a função calcular()` |
| `/doc` | Gera documentação | `/doc para esta classe` |
| `/simplify` | Simplifica código complexo | Selecione código → `/simplify` |
| `@workspace` | Busca no projeto inteiro | `@workspace onde está a config do DB?` |
| `@vscode` | Comandos do VS Code | `@vscode como configuro o debugger?` |

---

## 📝 Instruções Customizadas (O Segredo!)

### 🔥 O Poder das Instruções Personalizadas

**Este é o recurso mais poderoso do Copilot Pro+!** Você pode ensinar o Copilot a:
- Seguir padrões do seu projeto
- Usar bibliotecas específicas
- Escrever código no seu estilo
- Gerar commits e PRs padronizados

### 📂 Estrutura de Pastas de Instruções

```
seu-projeto/
├── .github/
│   ├── copilot-instructions.md      # Instruções gerais do projeto
│   ├── copilot-instructions/        # Pasta com múltiplas instruções
│   │   ├── django-fullstack.md      # Padrões Django
│   │   ├── nextjs-fullstack.md      # Padrões Next.js
│   │   ├── postgresql-prisma.md     # Padrões de DB
│   │   ├── stripe-integration.md    # Integração Stripe
│   │   ├── redis-caching.md         # Estratégias de cache
│   │   └── mobile-web-dev.md        # React Native
│   └── instructions/                # Pasta alternativa
├── .copilot/
│   └── STATUS_MVP.md                # Status do projeto (contexto)
└── ...
```

### ⚙️ Configurando Locais de Instruções

```json
{
  "chat.instructionsFilesLocations": {
    ".github/copilot-instructions": true,     // 📂 Pasta principal
    ".github/instructions": true,             // 📂 Pasta alternativa
    ".github/copilot-instructions.md": true,  // 📄 Arquivo único
    ".copilot": true                          // 📂 Pasta .copilot
  },

  // Habilita uso de arquivos de instrução na geração de código
  "github.copilot.chat.codeGeneration.useInstructionFiles": true
}
```

### 📄 Exemplo: Arquivo de Instruções Django

Crie `.github/copilot-instructions/django-fullstack.md`:

```markdown
---
applyTo: "**/*.py"
---

# Instruções para Desenvolvimento Django

## Padrões de Código

- Use Django 5.0+ com Python 3.12+
- Siga PEP 8 com linha máxima de 88 caracteres (Black formatter)
- Use type hints em todas as funções
- Docstrings no formato Google

## Estrutura de Models

```python
from django.db import models
from django.utils.translation import gettext_lazy as _

class MeuModel(models.Model):
    """Descrição do model."""

    nome = models.CharField(_("nome"), max_length=255)
    criado_em = models.DateTimeField(_("criado em"), auto_now_add=True)
    atualizado_em = models.DateTimeField(_("atualizado em"), auto_now=True)

    class Meta:
        verbose_name = _("Meu Model")
        verbose_name_plural = _("Meus Models")
        ordering = ["-criado_em"]

    def __str__(self) -> str:
        return self.nome
```

## Views

- Prefira Class-Based Views (CBVs)
- Use mixins para DRY
- Sempre valide permissões

## Templates

- Use Django Template Language
- Prefira includes para componentes reutilizáveis
- Escape variáveis automaticamente ({{ var }})
```

### 📄 Exemplo: Arquivo de Instruções Next.js

Crie `.github/copilot-instructions/nextjs-fullstack.md`:

```markdown
---
applyTo: "**/*.{ts,tsx,js,jsx}"
---

# Instruções para Desenvolvimento Next.js

## Stack Tecnológica

- Next.js 14+ com App Router
- TypeScript strict mode
- Tailwind CSS para estilos
- Prisma para ORM
- Zod para validação

## Padrões de Código

### Server Components (padrão)

```tsx
// app/users/page.tsx
import { prisma } from '@/lib/prisma'

export default async function UsersPage() {
  const users = await prisma.user.findMany()

  return (
    <div className="container mx-auto p-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
```

### Client Components (quando necessário)

```tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Cliques: {count}
    </button>
  )
}
```

### Server Actions

```tsx
'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email()
})

export async function createUser(formData: FormData) {
  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email')
  })

  await prisma.user.create({ data })
  revalidatePath('/users')
}
```

## Convenções

- Arquivos: kebab-case (user-profile.tsx)
- Componentes: PascalCase (UserProfile)
- Funções: camelCase (getUserById)
- Constantes: UPPER_SNAKE_CASE (API_URL)
```

### 🎯 Cabeçalho `applyTo` - Aplicação Seletiva

O cabeçalho YAML no início do arquivo define QUANDO as instruções se aplicam:

```markdown
---
applyTo: "**/*.py"           # Apenas arquivos Python
---

---
applyTo: "**/*.{ts,tsx}"     # TypeScript e TSX
---

---
applyTo: "**/models/**"      # Apenas na pasta models
---

---
applyTo: "**"                # Todos os arquivos
---
```

---

## 🔄 Commits e Pull Requests Inteligentes

### 📝 Commits Automáticos

O Copilot pode gerar mensagens de commit seguindo seus padrões:

```json
{
  "github.copilot.chat.commitMessageGeneration.enabled": true,

  "github.copilot.chat.commitMessageGeneration.instructions": [
    // Instruções inline (ou use arquivo externo)
  ]
}
```

### 📄 Arquivo de Instruções para Commits

Crie `.github/copilot-instructions/commit-messages.md`:

```markdown
---
applyTo: "commit"
---

# Padrão de Mensagens de Commit

## Formato

```
<tipo>(<escopo>): <descrição curta>

<corpo opcional>

<rodapé opcional>
```

## Tipos Permitidos

| Tipo | Quando usar |
|------|-------------|
| feat | Nova funcionalidade |
| fix | Correção de bug |
| docs | Documentação |
| style | Formatação (sem mudança de lógica) |
| refactor | Refatoração |
| test | Testes |
| chore | Tarefas de manutenção |
| perf | Melhoria de performance |

## Exemplos

```
feat(auth): adiciona login com Google OAuth

- Implementa provider Google no NextAuth
- Adiciona botão de login social
- Configura variáveis de ambiente

Closes #123
```

```
fix(cart): corrige cálculo de frete para CEPs inválidos

O sistema agora valida o CEP antes de calcular o frete,
exibindo mensagem amigável se o CEP for inválido.

Fixes #456
```

## Regras

1. Primeira linha: máximo 72 caracteres
2. Corpo: quebre linhas em 80 caracteres
3. Use imperativo: "adiciona", não "adicionado"
4. Em português brasileiro
5. Referencie issues quando aplicável
```

### 🔀 Pull Requests Automáticos

```json
{
  "github.copilot.chat.pullRequestDescriptionGeneration.enabled": true,

  "github.copilot.chat.pullRequestDescriptionGeneration.instructions": [
    // Instruções inline (ou use arquivo externo)
  ]
}
```

### 📄 Arquivo de Instruções para PRs

Crie `.github/copilot-instructions/pull-request-descriptions.md`:

```markdown
---
applyTo: "pullRequest"
---

# Template de Pull Request

## Formato

### 📋 Descrição
[Breve descrição do que foi feito]

### 🎯 Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova feature
- [ ] 💥 Breaking change
- [ ] 📚 Documentação
- [ ] 🔧 Refatoração

### 🧪 Como Testar
1. Passo 1
2. Passo 2
3. Resultado esperado

### 📸 Screenshots (se aplicável)
[Imagens aqui]

### ✅ Checklist
- [ ] Código segue os padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem console.log ou prints de debug

### 🔗 Issues Relacionadas
Closes #XXX

## Regras

1. Seja claro e conciso
2. Liste TODAS as mudanças significativas
3. Inclua screenshots para mudanças visuais
4. Mencione breaking changes explicitamente
```

---

## 🔍 Code Review Automatizado

### ⚙️ Configuração

```json
{
  "github.copilot.chat.reviewSelection.instructions": [
    // Instruções de review (ou use arquivo externo)
  ]
}
```

### 📄 Arquivo de Instruções para Review

Crie `.github/copilot-instructions/code-review.md`:

```markdown
---
applyTo: "review"
---

# Instruções de Code Review

## O que Verificar

### 🔒 Segurança
- SQL Injection
- XSS (Cross-Site Scripting)
- Secrets hardcoded
- Validação de input
- Autenticação/Autorização

### 🐛 Bugs Potenciais
- Null pointer exceptions
- Race conditions
- Memory leaks
- Loops infinitos
- Off-by-one errors

### 📊 Performance
- N+1 queries
- Operações síncronas desnecessárias
- Falta de índices no DB
- Memória não liberada

### 🧹 Código Limpo
- Nomes descritivos
- Funções pequenas e focadas
- DRY (Don't Repeat Yourself)
- SOLID principles
- Comentários úteis (não óbvios)

### 🧪 Testabilidade
- Código testável (injeção de dependência)
- Cobertura de edge cases
- Mocks apropriados

## Formato de Feedback

```
🔴 CRÍTICO: [descrição do problema]
   Linha: XX
   Sugestão: [como corrigir]

🟡 ATENÇÃO: [descrição do problema]
   Linha: XX
   Sugestão: [como melhorar]

🟢 SUGESTÃO: [melhoria opcional]
   Linha: XX
   Alternativa: [código sugerido]
```

## Níveis de Severidade

- 🔴 **CRÍTICO**: Bloqueia merge (bug/segurança)
- 🟡 **ATENÇÃO**: Deveria corrigir antes do merge
- 🟢 **SUGESTÃO**: Opcional, melhoria de qualidade
- 💡 **DICA**: Aprendizado, não requer ação
```

---

## ⌨️ Sugestões Inline Avançadas

### 🚀 Configurações para Sugestões Melhores

```json
{
  // ===== SUGESTÕES INLINE =====
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.suppressSuggestions": false,
  "editor.inlineSuggest.showToolbar": "always",  // Mostra toolbar

  // ===== NEXT EDIT SUGGESTIONS (NOVO!) =====
  "github.copilot.nextEditSuggestions.enabled": true,
  "github.copilot.nextEditSuggestions.showAfter": 500,  // Delay em ms

  // ===== AUTO-COMPLETIONS =====
  "github.copilot.editor.enableAutoCompletions": true,
  "github.copilot.editor.enableCodeActions": true,

  // ===== 🔥 SUGESTÕES EM COMENTÁRIOS (SUPER PODEROSO!) =====
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "on",   // ← ATIVE ISSO! Copilot completa comentários
    "strings": "on"
  },

  // ===== TRIGGER E ACEITE =====
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on"
}
```

### 💡 Truque: Comentários que Geram Código

Com `"comments": "on"`, você pode escrever comentários que o Copilot transforma em código:

```python
# função que calcula fatorial recursivamente
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)  # ← Copilot gera isso!

# classe User com nome, email e senha hasheada
class User:
    def __init__(self, nome, email, senha):
        self.nome = nome
        self.email = email
        self.senha_hash = hash_senha(senha)  # ← Gerado!
```

---

## 🎨 Otimizações do Editor

### 📐 Configurações Gerais do Editor

```json
{
  // ===== FORMATAÇÃO AUTOMÁTICA =====
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,

  // ===== INDENTAÇÃO =====
  "editor.tabSize": 4,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,

  // ===== VISUAL =====
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,          // Ligaduras bonitas (=>  ->)
  "editor.lineHeight": 1.6,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.minimap.enabled": true,
  "editor.renderWhitespace": "boundary",

  // ===== BRACKETS =====
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,

  // ===== RULERS (GUIAS VISUAIS) =====
  "editor.rulers": [79, 100, 120],

  // ===== AÇÕES AO SALVAR =====
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

### 📁 Configurações de Arquivos

```json
{
  "files.autoSave": "onFocusChange",     // Salva ao mudar de foco
  "files.autoSaveDelay": 1000,           // Delay em ms
  "files.trimTrailingWhitespace": true,  // Remove espaços no final
  "files.insertFinalNewline": true       // Linha em branco no final
}
```

---

## 🐍 Configurações para Python/Django

### ⚙️ Configuração Completa Python

```json
{
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.rulers": [88, 120],
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit",
      "source.fixAll": "explicit"
    }
  },

  // ===== LINTING =====
  "python.linting.enabled": true,
  "python.linting.flake8Enabled": true,
  "python.linting.flake8Args": [
    "--max-line-length=88",
    "--extend-ignore=E203,W503"
  ],
  "python.linting.pylintEnabled": true,
  "python.linting.pylintArgs": [
    "--load-plugins=pylint_django",
    "--django-settings-module=config.settings.development",
    "--max-line-length=88"
  ],

  // ===== FORMATAÇÃO =====
  "python.formatting.provider": "black",
  "black-formatter.args": ["--line-length=88"],
  "isort.args": ["--profile", "black", "--line-length=88"],

  // ===== ANÁLISE =====
  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.autoImportCompletions": true,
  "python.analysis.diagnosticMode": "workspace",
  "python.analysis.extraPaths": ["./apps"],

  // ===== TERMINAL =====
  "python.terminal.executeInFileDir": true
}
```

### 🎸 Configuração Django Templates

```json
{
  "[django-html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "monosans.djlint",
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    }
  },

  // ===== DJLINT =====
  "djlint.useEditorIndentation": true,
  "djlint.formatCss": true,
  "djlint.formatJs": true,
  "djlint.profile": "django",
  "djlint.indent": 2,

  // ===== EMMET PARA DJANGO =====
  "emmet.includeLanguages": {
    "django-html": "html",
    "jinja-html": "html"
  },
  "emmet.triggerExpansionOnTab": true,

  // ===== ASSOCIAÇÕES =====
  "files.associations": {
    "**/templates/**/*.html": "django-html",
    "**/templates/**/*": "django-txt"
  }
}
```

---

## ⚛️ Configurações para JavaScript/TypeScript

### ⚙️ Configuração Completa JS/TS

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.tabSize": 2,
    "editor.detectIndentation": false
  },

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.tabSize": 2
  },

  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // ===== TYPESCRIPT =====
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",

  // ===== ESLINT =====
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.codeActionsOnSave.mode": "all",

  // ===== TAILWIND CSS =====
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "tailwindCSS.classAttributes": ["class", "className", "classList", "ngClass"]
}
```

---

## 🎯 Dicas de Performance

### ⚡ Exclusões para Melhor Performance

```json
{
  // ===== EXCLUIR DO WATCHER =====
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/.hg/store/**": true,
    "**/dist/**": true,
    "**/build/**": true,
    "**/__pycache__/**": true,
    "**/.venv/**": true
  },

  // ===== EXCLUIR DA BUSCA =====
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true,
    "**/dist": true,
    "**/build": true,
    "**/staticfiles": true
  },

  // ===== EXCLUIR DO EXPLORER =====
  "files.exclude": {
    "**/.git": true,
    "**/__pycache__": true,
    "**/*.pyc": true,
    "**/db.sqlite3": true,
    "**/.pytest_cache": true,
    "**/.coverage": true,
    "**/htmlcov": true,
    "**/.venv": true,
    "**/venv": true,
    "**/.next": true,
    "**/node_modules": true,
    "**/.DS_Store": true,
    "**/coverage": true
  }
}
```

---

## 📂 Estrutura de Arquivos de Instruções

### 🗂️ Estrutura Recomendada

```
seu-projeto/
├── .github/
│   ├── copilot-instructions.md          # Instruções gerais
│   └── copilot-instructions/
│       ├── README.md                     # Índice das instruções
│       ├── code-style.md                 # Padrões de código
│       ├── commit-messages.md            # Padrão de commits
│       ├── pull-request-descriptions.md # Template de PRs
│       ├── code-review.md                # Regras de review
│       │
│       ├── # Por tecnologia
│       ├── django-fullstack.md           # Django patterns
│       ├── nextjs-fullstack.md           # Next.js patterns
│       ├── postgresql-prisma.md          # Database patterns
│       ├── react-components.md           # React patterns
│       ├── typescript-types.md           # TypeScript patterns
│       │
│       ├── # Por domínio
│       ├── stripe-integration.md         # Pagamentos
│       ├── redis-caching.md              # Cache
│       ├── auth-security.md              # Autenticação
│       └── api-design.md                 # Design de APIs
│
├── .copilot/
│   ├── STATUS_MVP.md                     # Status atual do projeto
│   └── ROADMAP.md                        # Próximos passos
│
└── ...
```

### 📄 Exemplo: Arquivo README.md para Instruções

```markdown
# Instruções do Copilot para Este Projeto

## Arquivos Disponíveis

| Arquivo | Descrição | Aplica-se a |
|---------|-----------|-------------|
| code-style.md | Padrões gerais de código | Todos |
| django-fullstack.md | Padrões Django | `**/*.py` |
| nextjs-fullstack.md | Padrões Next.js | `**/*.{ts,tsx}` |
| commit-messages.md | Formato de commits | Commits |
| pull-request-descriptions.md | Template de PRs | Pull Requests |
| code-review.md | Regras de review | Code Review |

## Como Adicionar Novas Instruções

1. Crie um arquivo `.md` nesta pasta
2. Adicione o cabeçalho `applyTo` se necessário
3. O Copilot detecta automaticamente!
```

---

## 💡 Truques Avançados

### 🔮 1. Contexto com `@workspace`

```
@workspace como está estruturada a autenticação neste projeto?
@workspace onde estão as configurações do banco de dados?
@workspace qual padrão de formulários estamos usando?
```

### 📚 2. Arquivo de Status do Projeto

Crie `.copilot/STATUS_MVP.md`:

```markdown
# Status Atual do Projeto

## MVP em Desenvolvimento

### ✅ Concluído
- [x] Autenticação com NextAuth
- [x] CRUD de usuários
- [x] Dashboard básico

### 🔄 Em Progresso
- [ ] Sistema de pagamentos (Stripe)
- [ ] Notificações por email

### 📋 Backlog
- [ ] App mobile
- [ ] Integração com WhatsApp

## Stack Atual

- **Frontend**: Next.js 14, TypeScript, Tailwind
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js
- **Deploy**: Vercel

## Convenções

- Commits em português
- PR reviews obrigatórios
- Testes para features críticas
```

### 🎯 3. Perguntas Contextuais Poderosas

```
# Use @ para adicionar contexto específico

@workspace /explain como funciona o fluxo de checkout
@workspace /tests gere testes para o módulo de pagamentos
@vscode como configuro debugging para Next.js?

# Mencione arquivos específicos
Olhe o arquivo src/lib/stripe.ts e sugira melhorias de tratamento de erro
```

### 🔧 4. MCP Servers (Model Context Protocol)

Para integrações avançadas, configure MCP Servers:

```json
{
  "mcpServers": {
    // Exemplo: servidor de documentação
    "docs": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-docs"]
    },
    // Exemplo: servidor de banco de dados
    "database": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "${env:DATABASE_URL}"
      }
    }
  }
}
```

### 🎨 5. GitLens + Copilot

Integre GitLens com Copilot para análises mais profundas:

```json
{
  "gitlens.ai.model": "vscode",
  "gitlens.ai.vscode.model": "copilot:gpt-4.1",
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true
}
```

---

## 📋 Configuração Completa Recomendada

### 🎯 settings.json Otimizado

```json
{
  // ============================================
  // 🚀 GITHUB COPILOT PRO+
  // ============================================

  "github.copilot.advanced": {
    "debug.overrideEngine": "claude-opus-4-5",
    "inlineSuggest.count": 5,
    "length": 2000,
    "temperature": 0.05,
    "topP": 0.9,
    "contextWindow": 200000
  },

  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "typescript": true,
    "typescriptreact": true,
    "javascript": true,
    "javascriptreact": true,
    "python": true,
    "css": true,
    "html": true,
    "yaml": true,
    "json": true,
    "jsonc": true,
    "scminput": false
  },

  "github.copilot.editor.enableAutoCompletions": true,
  "github.copilot.editor.enableCodeActions": true,
  "github.copilot.nextEditSuggestions.enabled": true,
  "github.copilot.nextEditSuggestions.showAfter": 500,

  "github.copilot.chat.enabled": true,
  "github.copilot.chat.welcomeMessage": "always",
  "github.copilot.chat.localeOverride": "pt-br",
  "chat.agent.maxRequests": 100,
  "chat.useAgentSkills": true,
  "chat.useNestedAgentsMdFiles": true,

  "chat.instructionsFilesLocations": {
    ".github/copilot-instructions": true,
    ".github/instructions": true,
    ".github/copilot-instructions.md": true
  },

  "github.copilot.chat.codeGeneration.useInstructionFiles": true,
  "github.copilot.chat.commitMessageGeneration.enabled": true,
  "github.copilot.chat.pullRequestDescriptionGeneration.enabled": true,

  // ============================================
  // ⌨️ EDITOR
  // ============================================

  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.showToolbar": "always",
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "on",
    "strings": "on"
  },
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.6,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.rulers": [79, 100],

  // ============================================
  // 📁 FILES
  // ============================================

  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,

  // ============================================
  // 🔧 GIT
  // ============================================

  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "gitlens.ai.model": "vscode",
  "gitlens.ai.vscode.model": "copilot:gpt-4.1",

  // ============================================
  // 🐍 PYTHON
  // ============================================

  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.rulers": [88, 120]
  },

  // ============================================
  // ⚛️ JAVASCRIPT/TYPESCRIPT
  // ============================================

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // ============================================
  // 🎨 WORKBENCH
  // ============================================

  "workbench.panel.defaultLocation": "right",
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.iconTheme": "material-icon-theme"
}
```

---

## 🎓 Resumo: Como Fazer o Copilot Respeitar Suas Instruções

### Passo 1: Criar Pasta de Instruções
```bash
mkdir -p .github/copilot-instructions
```

### Passo 2: Criar Arquivos de Instruções
```markdown
---
applyTo: "**/*.py"
---

# Suas instruções aqui...
```

### Passo 3: Configurar settings.json
```json
{
  "chat.instructionsFilesLocations": {
    ".github/copilot-instructions": true
  },
  "github.copilot.chat.codeGeneration.useInstructionFiles": true
}
```

### Passo 4: Testar!
Peça ao Copilot para gerar código e verifique se segue suas instruções.

---

## 📚 Recursos Adicionais

- [📖 Documentação Oficial Copilot](https://docs.github.com/copilot)
- [⚙️ VS Code Settings Reference](https://code.visualstudio.com/docs/getstarted/settings)
- [📝 Custom Instructions Guide](https://aka.ms/vscode-ghcp-custom-instructions)
- [🎥 GitHub Copilot YouTube](https://www.youtube.com/@GitHub)

---

## 🤝 Contribuindo

Encontrou uma configuração útil que não está aqui? Envie sua sugestão!

---

**Desenvolvido com 💙 e 🤖 para desenvolvedores que querem ser 10x mais produtivos**

**Última atualização:** Fevereiro 2026
