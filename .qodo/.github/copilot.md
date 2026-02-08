{
  // ============================================
  // 🚀 GITHUB COPILOT PRO+ - CONFIGURAÇÕES TURBINADAS
  // ============================================
  // ===== MODELO E ENGINE =====
  // "github.copilot.advanced": {
  //   // USE O MELHOR MODELO DISPONÍVEL (Claude Sonnet 4.5, GPT-5, etc)
  //   "debug.overrideEngine": "claude-sonnet-4-5", // ou "gpt-5", "gemini-3-pro"
  //   "inlineSuggest.count": 5, // Mais sugestões simultâneas (padrão: 1)
  //   "length": 1500, // Sugestões mais longas e completas (padrão: 500)
  //   "temperature": 0.05, // Menos criativo, mais preciso (0-1, padrão: 0.0)
  //   "topP": 0.9,
  //   "contextWindow": 200000,
  // },

  "github.copilot.advanced": {
    // 🔥 CLAUDE OPUS 4.5 - MODELO MAIS PODEROSO
    "debug.overrideEngine": "claude-opus-4-5", // MUDADO PARA OPUS 4.5!
    "inlineSuggest.count": 5, // Mais sugestões simultâneas (padrão: 1)
    "length": 2000, // ⬆️ AUMENTADO! Opus 4.5 suporta respostas mais longas
    "temperature": 0.05, // ⬇️ REDUZIDO! Opus 4.5 é mais preciso com temp baixa
    "topP": 0.9, // 🆕 NOVO! Nucleus sampling para melhor qualidade
    "contextWindow": 200000, // 🆕 NOVO! Aproveitando os 200k tokens do Opus
  },

  // ===== HABILITAR RECURSOS PRINCIPAIS =====
  "github.copilot.enable": {
    "*": true, // Ativa em todos os arquivos
    "plaintext": false, // Desativa em texto puro
    "markdown": true, // Ativa em Markdown
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
    "scminput": false, // Desativa em mensagens de commit (use chat)
  },

  // ===== EDITOR - AUTO-COMPLETIONS =====
  "github.copilot.editor.enableAutoCompletions": true,
  "github.copilot.editor.enableCodeActions": true, // Actions no menu de contexto

  // ===== NEXT EDIT SUGGESTIONS (você já tem, mas vou melhorar) =====
  "github.copilot.nextEditSuggestions.enabled": true,
  "github.copilot.nextEditSuggestions.showAfter": 500, // Delay em ms (padrão: 750)

  // ===== CHAT SETTINGS =====
  "github.copilot.chat.enabled": true,
  "github.copilot.chat.welcomeMessage": "always", // Sempre mostra boas-vindas
  "github.copilot.chat.localeOverride": "pt-br", // Respostas em português
  "chat.agent.maxRequests": 100, // Você já tem isso ✅

  // ===== INSTRUÇÕES CUSTOMIZADAS =====
  // 🎯 Instruções migradas para arquivos .md externos (performance otimizada!)
  "chat.instructionsFilesLocations": {
    ".github/copilot-instructions": true, // 🆕 NOVA PASTA COM TODAS AS INSTRUÇÕES!
    ".github/instructions": true,
    ".github/copilot-instructions.md": true,
    // ".github/claude-opus-45-instructions.md": true,
    // ".github/git-commit-instructions.md": true,
    // ".github/pull-request-instructions.md": true,
    // ".github/code-review-instructions.md": true,
    // ".github/deploy-instructions.md": true,
    // ".github/refatoracao-magistral.md": true,
    // ".github/design-e-ux.md": true,
    // ".github/seguranca-instrucion.md": true,
    // ".github/planejamento-projeto.md": true,
    // ".copilot/STATUS_MVP.md": true,
  },

  // ===== COMMIT E PR DESCRIPTIONS =====
  "github.copilot.chat.commitMessageGeneration.enabled": true,

  // ========================================
  // 📝 INSTRUÇÕES DE COMMIT E PR
  // ========================================
  // ✅ MIGRADO para commit-messages.md
  "github.copilot.chat.commitMessageGeneration.instructions": [
    // Todas as instruções estão em: commit-messages.md
  ],

  "github.copilot.chat.pullRequestDescriptionGeneration.enabled": true,

  // ✅ MIGRADO para pull-request-descriptions.md
  "github.copilot.chat.pullRequestDescriptionGeneration.instructions": [
    // Todas as instruções estão em: pull-request-descriptions.md
  ],
  "github.copilot.chat.codeGeneration.useInstructionFiles": true,

  // ============================================
  // 🎯 GITHUB COPILOT PRO+ - INSTRUÇÕES PROFISSIONAIS
  // ============================================
  // ✅ MIGRAÇÃO COMPLETA! Todas as instruções agora estão em arquivos .md externos
  // 📂 Localização: C:/Users/fabia/.github/copilot-instructions/
  // 📄 Arquivos criados:
  //    - django-fullstack.md     (Django + PostgreSQL + Bootstrap)
  //    - nextjs-fullstack.md     (Next.js 14 + App Router + Server Actions)
  //    - postgresql-prisma.md    (Prisma ORM + PostgreSQL)
  //    - stripe-integration.md   (Stripe payments + webhooks)
  //    - redis-caching.md        (Redis + Upstash + caching strategies)
  //    - mobile-web-dev.md       (React Native + React Web + Acessibilidade)
  //
  // ⚡ Benefícios:
  //    ✅ Performance melhorada (sem linhas longas que causam lag)
  //    ✅ Organização modular (fácil de manter e atualizar)
  //    ✅ Versionamento independente (cada tecnologia em seu arquivo)
  //    ✅ Sem warnings do VS Code!
  //
  // 🔄 Para adicionar novas instruções:
  //    1. Crie novo arquivo .md em C:/Users/fabia/.github/copilot-instructions/
  //    2. VS Code detecta automaticamente (pasta já configurada acima)
  //
  // ============================================================================

  // ============================================================================
  // 🎯 INSTRUÇÕES DE GERAÇÃO DE CÓDIGO (MIGRADAS PARA ARQUIVOS EXTERNOS)
  // ============================================================================
  //
  // ✅ MIGRAÇÃO COMPLETA! Todas as instruções agora estão em arquivos .md externos.
  //
  // 📂 Localização: C:/Users/fabia/.github/copilot-instructions/
  //
  // 📝 Arquivos criados:
  //    - django-fullstack.md      (Django + PostgreSQL + Bootstrap patterns)
  //    - nextjs-fullstack.md      (Next.js 14 App Router + TypeScript + Prisma)
  //    - postgresql-prisma.md     (PostgreSQL schemas, migrations, queries)
  //    - stripe-integration.md    (Stripe payments, checkouts, webhooks)
  //    - redis-caching.md         (Redis caching strategies, Upstash)
  //    - mobile-web-dev.md        (React Native + React Web + a11y)
  //
  // ⚡ Benefícios da migração:
  //    ✅ Performance VASTLY melhorada (sem linhas longas que travam o editor)
  //    ✅ Organização modular (cada tecnologia em seu próprio arquivo)
  //    ✅ Versionamento independente (fácil atualizar instruções específicas)
  //    ✅ Zero warnings do VS Code!
  //    ✅ Syntax highlighting funcional
  //
  // 🔄 Para adicionar novas instruções:
  //    1. Crie novo arquivo .md em C:/Users/fabia/.github/copilot-instructions/
  //    2. VS Code detecta automaticamente (pasta já configurada em chat.instructionsFilesLocations)
  //    3. NUNCA adicione instruções inline aqui novamente!
  //
  // 📖 Documentação: https://aka.ms/vscode-ghcp-custom-instructions
  // ============================================================================

  "github.copilot.chat.codeGeneration.instructions": [
    // Este array está intencionalmente VAZIO.
    // Todas as instruções estão nos arquivos .md listados acima.
  ],

  // ===== CODE REVIEW INSTRUCTIONS =====
  // ✅ MIGRADO para code-review.md
  "github.copilot.chat.reviewSelection.instructions": [
    // Todas as instruções estão em: code-review.md
  ],

  // ===== EDITOR - SUGESTÕES AVANÇADAS =====
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.suppressSuggestions": false,
  "editor.inlineSuggest.showToolbar": "always", // Mostra toolbar de sugestões

  // CRÍTICO: Ativa sugestões em COMENTÁRIOS (super poderoso!)
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "on", // ATIVE ISSO! Copilot completa comentários
    "strings": "on",
  },

  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",

  // ===== WORKBENCH - CHAT =====
  "workbench.panel.defaultLocation": "right", // Chat na direita (melhor UX)
  "workbench.editor.enablePreview": false, // Sempre abre em nova aba

  // ===== MCP SERVERS (você tem vazio, vou adicionar exemplos) =====
  "mcpServers": {},

  // ============================================
  // 📝 OUTRAS CONFIGURAÇÕES ÚTEIS
  // ============================================
  // ===== LIVE SERVER (você já tem) =====
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.CustomBrowser": "chrome", // Browser padrão

  // ===== GIT =====
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,

  // ===== ROO-CLINE (você já tem, mas vou expandir) =====
  "roo-cline.allowedCommands": [
    "git log",
    "git diff",
    "git show",
    "git status",
    "git branch",
    "npm install",
    "npm run dev",
    "npm run build",
  ],

  "roo-cline.deniedCommands": ["rm -rf", "rm -r", "del /f"],

  // ============================================================================
  // CONFIGURAÇÕES ESPECÍFICAS DO EDITOR PARA PYTHON/DJANGO
  // ============================================================================

  "editor.rulers": [79, 100],

  // Python
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.rulers": [88, 120],
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit",
      "source.fixAll": "explicit",
    },
  },

  "python.linting.enabled": true,
  "python.linting.flake8Enabled": true,
  "python.linting.flake8Args": [
    "--max-line-length=88",
    "--extend-ignore=E203,W503",
  ],
  "python.linting.pylintEnabled": true,
  "python.linting.pylintArgs": [
    "--load-plugins=pylint_django",
    "--django-settings-module=config.settings.development",
    "--max-line-length=88",
  ],
  "python.formatting.provider": "black",
  "black-formatter.args": ["--line-length=88"],
  "isort.args": ["--profile", "black", "--line-length=88"],
  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.autoImportCompletions": true,
  "python.analysis.diagnosticMode": "workspace",
  "python.analysis.extraPaths": ["./apps"],

  // HTML
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features",
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "jinja-html": "html",
  },
  "emmet.triggerExpansionOnTab": true,
  // GitLens
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,

  // Error Lens
  "errorLens.enabled": true,
  "errorLens.gutterIconsEnabled": true,



  // CSS
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features",
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
  },
  "css.validate": true,
  "css.lint.unknownAtRules": "ignore",

  // Django Template
  "[django-html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "monosans.djlint",
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true,
    },
  },
  "djlint.useEditorIndentation": true,
  "djlint.formatCss": true,
  "djlint.formatJs": true,
  "djlint.profile": "django",
  "djlint.indent": 2,

  // Files
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
    "**/.env": false,
    "**/media": false,
    "**/staticfiles": true,
    "**/.next": true,
    "**/node_modules": true,
    "**/.DS_Store": true,
    "**/coverage": true,
  },

  "files.associations": {
    "**/*.html": "html",
    "**/templates/**/*.html": "django-html",
    "**/templates/**/*": "django-txt",
    "**/requirements{/**,*}.{txt,in}": "pip-requirements",
    "*.css": "css",
    ".env*": "dotenv",
    "**/staticfiles/**": "ignore",
  },

  // Auto Save
  "files.autoSave": "onFocusChange",

  // Breadcrumbs
  "breadcrumbs.enabled": true,

  // ===== FORMATAÇÃO AUTOMÁTICA =====
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.defaultFormatter": "vscode.css-language-features", // Se tiver Prettier

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit",
  },
  "editor.tabSize": 4,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,

  // ===== FILES =====
  // "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,

  // TypeScript
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",

  // Tailwind CSS
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
  ],
  "tailwindCSS.classAttributes": ["class", "className", "classList", "ngClass"],

  // Emmet
  // "emmet.includeLanguages": {
  //   "typescript": "typescriptreact",
  //   "javascript": "javascriptreact",
  // },

  // ===== JAVASCRIPT/TYPESCRIPT =====
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
    "editor.tabSize": 2,
    "editor.detectIndentation": false,
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
    "editor.tabSize": 2,
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  // ===== HTML/CSS =====
  // "[html]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  //   "editor.tabSize": 2,
  // },
  // "[css]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  //   "editor.tabSize": 2,
  // },

  // Prettier

  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },

  // ===== ESLINT (PADRÕES DE CÓDIGO JS/TS) =====
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "eslint.codeActionsOnSave.mode": "all",

  // ===== ACESSIBILIDADE (WCAG) =====
  // Instale: "webhint" extension para verificar acessibilidade
  "webhint.enableTelemetry": "disabled",

  // ===== YAML (você já tem schema) =====
  "yaml.schemas": {
    "file:///c%3A/Users/fabia/.vscode/extensions/continue.continue-1.2.11-win32-x64/config-yaml-schema.json": [
      ".continue/**/*.yaml",
    ],
  },

  // ===== TELEMETRY =====
  "redhat.telemetry.enabled": true,
  "telemetry.telemetryLevel": "all",

  // ===== KUBERNETES (você já tem) =====
  "vs-kubernetes": {
    "vscode-kubernetes.helm-path-windows": "C:\\Users\\fabia\\.vs-kubernetes\\tools\\helm\\windows-amd64\\helm.exe",
    "vscode-kubernetes.minikube-path-windows": "C:\\Users\\fabia\\.vs-kubernetes\\tools\\minikube\\windows-amd64\\minikube.exe",
  },
  // ===== GEMINI CODE ASSIST (você já tem) =====
  "geminicodeassist.project": "integral-field-mtgnq",

  // ============================================
  // 🎨 APARÊNCIA E PERFORMANCE
  // ============================================
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true, // Ligaduras (setas bonitas ->)
  "editor.lineHeight": 1.6,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.minimap.enabled": true,
  "editor.renderWhitespace": "boundary",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  // ===== TERMINAL =====
  "terminal.integrated.shellArgs.windows": ["-NoExit", "-Command"],
  "terminal.integrated.shellArgs.linux": ["/bin/bash", "--login"],
  "terminal.integrated.shellArgs.osx": ["/bin/zsh", "--login"],
  "terminal.integrated.env.windows": {
    "MY_VARIABLE": "my_value",
  },
  "terminal.integrated.env.linux": {
    "MY_VARIABLE": "my_value",
  },
  "terminal.integrated.env.osx": {
    "MY_VARIABLE": "my_value",
  },
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.lineHeight": 1.2,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.scrollback": 10000,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.defaultProfile.linux": "",
  "terminal.integrated.defaultProfile.windows": "Windows PowerShell",
  "terminal.integrated.tabs.defaultColor": "terminal.ansiBlack",

  "workbench.colorTheme": "Default Dark Modern",
  "workbench.iconTheme": "material-icon-theme",
  // ===== PERFORMANCE =====
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/.hg/store/**": true,
    "**/dist/**": true,
    "**/build/**": true,
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true,
    "**/dist": true,
    "**/build": true,
  },
  // ===== OUTROS =====
  "gitlens.ai.model": "vscode",
  "gitlens.ai.vscode.model": "copilot:gpt-4.1",
  "chat.useAgentSkills": true,
  "chat.useNestedAgentsMdFiles": true,
  "workbench.startupEditor": "none",

  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": "off",
  },

  "python.terminal.executeInFileDir": true,
  "codium.git.showCommitNotification": false,
}
