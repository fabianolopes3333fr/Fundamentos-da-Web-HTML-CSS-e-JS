# 📦 Git - Guia Completo

[![Git](https://img.shields.io/badge/Git-2.x-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

> 📚 Guia completo de Git - Sistema de controle de versão distribuído essencial para desenvolvedores.

---

## 📋 Índice

1. [O que é Git?](#-o-que-é-git)
2. [Por que usar Git?](#-por-que-usar-git)
3. [Instalação e Configuração](#-instalação-e-configuração)
4. [Conceitos Básicos](#-conceitos-básicos)
5. [Comandos Essenciais](#-comandos-essenciais)
6. [Branching e Merging](#-branching-e-merging)
7. [Trabalhando com Remoto](#-trabalhando-com-remoto)
8. [Git Workflows](#-git-workflows)
9. [Desfazendo Mudanças](#-desfazendo-mudanças)
10. [Stash](#-stash)
11. [Tags](#-tags)
12. [Git Rebase](#-git-rebase)
13. [Git Submodules](#-git-submodules)
14. [Boas Práticas](#-boas-práticas)
15. [GitHub/GitLab/Bitbucket](#-githubgitlabbitbucket)
16. [Git Avançado](#-git-avançado)
17. [Troubleshooting](#-troubleshooting)
18. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Git?

**Git** é um sistema de controle de versão distribuído criado por Linus Torvalds em 2005 para gerenciar o código-fonte do kernel Linux.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Distribuído** | Cada desenvolvedor tem cópia completa |
| **Rápido** | Operações locais são instantâneas |
| **Branches Leves** | Criar branches é trivial |
| **Integridade** | SHA-1 garante integridade |
| **Staging Area** | Controle fino do que commitar |
| **Open Source** | Grátis e código aberto |

### Git vs SVN

| Aspecto | Git | SVN |
|---------|-----|-----|
| Tipo | Distribuído | Centralizado |
| Velocidade | Muito rápida | Lenta |
| Branches | Leves | Pesados |
| Offline | Funciona 100% | Limitado |
| Learning Curve | Média | Fácil |

---

## 💡 Por que usar Git?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Histórico Completo** | Veja todas as mudanças |
| **Colaboração** | Trabalhe em equipe |
| **Branches** | Desenvolva features isoladas |
| **Rollback** | Volte no tempo |
| **Backup Distribuído** | Cada clone é backup |
| **Integração CI/CD** | Deploy automatizado |

### Quem usa Git?

- Microsoft
- Google
- Facebook
- Linux Kernel
- Praticamente toda empresa de tech

---

## 🛠️ Instalação e Configuração

### Instalação

#### Windows

```bash
# Baixar em: https://git-scm.com/download/win
# Instalar com opções padrão

# Verificar
git --version
```

#### macOS

```bash
# Com Homebrew
brew install git

# Ou baixar em: https://git-scm.com/download/mac

# Verificar
git --version
```

#### Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git

# Verificar
git --version
```

### Configuração Inicial

```bash
# Nome e email (obrigatório)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Editor padrão
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"           # Vim

# Cores
git config --global color.ui auto

# Ver configurações
git config --list
git config user.name

# Remover configuração
git config --global --unset user.name
```

---

## 📚 Conceitos Básicos

### Estados dos Arquivos

```
Working Directory → Staging Area → Repository
     (untracked)      (staged)      (committed)

git add →
                git commit →
```

### Áreas do Git

| Área | Descrição |
|------|-----------|
| **Working Directory** | Arquivos no disco |
| **Staging Area (Index)** | Arquivos preparados para commit |
| **Repository (.git/)** | Histórico de commits |

### Ciclo de Vida

```
Untracked → Unmodified → Modified → Staged → Committed
              ↑                              ↓
              └──────────────────────────────┘
```

---

## ⚡ Comandos Essenciais

### Criar Repositório

```bash
# Inicializar novo repositório
git init

# Clonar repositório existente
git clone https://github.com/usuario/repo.git

# Clonar em pasta específica
git clone https://github.com/usuario/repo.git minha-pasta
```

### git add (Staging)

```bash
# Adicionar arquivo específico
git add arquivo.txt

# Adicionar múltiplos arquivos
git add arquivo1.txt arquivo2.txt

# Adicionar todos os arquivos modificados
git add .
git add -A

# Adicionar arquivos por extensão
git add *.js

# Adicionar interativamente
git add -i
git add -p  # Adicionar partes do arquivo
```

### git commit

```bash
# Commit com mensagem
git commit -m "Mensagem do commit"

# Commit com mensagem detalhada (abre editor)
git commit

# Commit pulando o staging (apenas arquivos rastreados)
git commit -am "Mensagem"

# Amend (corrigir último commit)
git commit --amend -m "Nova mensagem"
```

### git status

```bash
# Ver status
git status

# Status resumido
git status -s
```

### git log

```bash
# Ver histórico
git log

# Log resumido (uma linha por commit)
git log --oneline

# Log com gráfico
git log --graph --oneline --all

# Log de um arquivo
git log arquivo.txt

# Log com diff
git log -p

# Últimos N commits
git log -n 5

# Log por autor
git log --author="João"

# Log por data
git log --since="2 weeks ago"
git log --after="2024-01-01"
```

### git diff

```bash
# Ver mudanças não staged
git diff

# Ver mudanças staged
git diff --staged
git diff --cached

# Comparar commits
git diff abc123 def456

# Comparar branches
git diff main feature
```

---

## 🌿 Branching e Merging

### Branches

```bash
# Listar branches
git branch

# Criar branch
git branch feature-login

# Mudar de branch
git checkout feature-login
git switch feature-login  # Novo comando (Git 2.23+)

# Criar e mudar para branch
git checkout -b feature-nova
git switch -c feature-nova

# Renomear branch
git branch -m novo-nome

# Deletar branch
git branch -d feature-antiga  # Safe delete
git branch -D feature-antiga  # Force delete

# Ver branches remotos
git branch -r

# Ver todos os branches
git branch -a
```

### Merge

```bash
# Fazer merge (estando na branch de destino)
git checkout main
git merge feature-login

# Merge com mensagem customizada
git merge feature-login -m "Merge feature login"

# Merge sem fast-forward (cria commit de merge)
git merge --no-ff feature-login

# Abortar merge com conflitos
git merge --abort
```

### Resolver Conflitos

```bash
# 1. Git marca conflitos no arquivo:
<<<<<<< HEAD
código na branch atual
=======
código da branch sendo merged
>>>>>>> feature-login

# 2. Editar arquivo manualmente
#    - Escolher qual código manter
#    - Remover markers <<<, ===, >>>

# 3. Adicionar arquivo resolvido
git add arquivo-com-conflito.txt

# 4. Finalizar merge
git commit
```

---

## 🌐 Trabalhando com Remoto

### git remote

```bash
# Ver remotos
git remote
git remote -v

# Adicionar remoto
git remote add origin https://github.com/usuario/repo.git

# Remover remoto
git remote remove origin

# Renomear remoto
git remote rename origin upstream

# Ver informações do remoto
git remote show origin
```

### git push

```bash
# Push para remoto
git push origin main

# Push e configurar upstream
git push -u origin main

# Push de todas as branches
git push --all

# Push de tags
git push --tags

# Force push (cuidado!)
git push --force
git push --force-with-lease  # Mais seguro
```

### git pull

```bash
# Pull (fetch + merge)
git pull origin main

# Pull com rebase
git pull --rebase origin main
```

### git fetch

```bash
# Fetch (baixar sem fazer merge)
git fetch origin

# Fetch de todos os remotos
git fetch --all

# Fetch e remover branches deletados no remoto
git fetch --prune
```

---

## 🔄 Git Workflows

### Feature Branch Workflow

```bash
# 1. Criar branch para feature
git checkout -b feature-nova

# 2. Desenvolver
git add arquivo.txt
git commit -m "Implementar feature"

# 3. Push para remoto
git push -u origin feature-nova

# 4. Abrir Pull Request no GitHub

# 5. Após aprovação, merge para main
git checkout main
git merge feature-nova

# 6. Deletar branch
git branch -d feature-nova
git push origin --delete feature-nova
```

### Gitflow

```
main         ─────●─────●─────●─────●─────→ (produção)
               ↗        ↑        ↗
develop    ───●─────●───●───●─────●─────→ (desenvolvimento)
             ↗      ↑   ↘ ↗      ↗
feature     ●───●───●   ●───●───●
                        ↘
hotfix                   ●───●───↗
```

```bash
# Branches principais
main        # Produção
develop     # Desenvolvimento

# Branches de suporte
feature/*   # Novas features
hotfix/*    # Correções urgentes
release/*   # Preparar release
```

---

## ↩️ Desfazendo Mudanças

### git restore

```bash
# Descartar mudanças no working directory
git restore arquivo.txt

# Unstage arquivo (tirar do staging)
git restore --staged arquivo.txt
```

### git reset

```bash
# Soft: Move HEAD, mantém staged e working dir
git reset --soft HEAD~1

# Mixed (padrão): Move HEAD, unstage, mantém working dir
git reset HEAD~1
git reset --mixed HEAD~1

# Hard: Move HEAD, limpa staged e working dir (CUIDADO!)
git reset --hard HEAD~1

# Voltar para commit específico
git reset --hard abc123
```

### git revert

```bash
# Criar novo commit que desfaz um commit anterior
git revert abc123

# Revert sem criar commit imediatamente
git revert --no-commit abc123

# Revert de merge
git revert -m 1 abc123
```

### Diferenças

| Comando | Altera Histórico? | Uso |
|---------|-------------------|-----|
| `restore` | Não | Descartar mudanças locais |
| `reset` | Sim | Mover branch para commit anterior |
| `revert` | Não | Desfazer commit publicamente |

---

## 📦 Stash

```bash
# Guardar mudanças temporariamente
git stash
git stash save "Descrição"

# Listar stashes
git stash list

# Aplicar último stash
git stash apply

# Aplicar e remover último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{2}

# Ver diff do stash
git stash show -p stash@{0}

# Deletar stash
git stash drop stash@{0}

# Limpar todos os stashes
git stash clear
```

---

## 🏷️ Tags

```bash
# Listar tags
git tag

# Criar tag leve
git tag v1.0.0

# Criar tag anotada (recomendado)
git tag -a v1.0.0 -m "Versão 1.0.0"

# Tag em commit específico
git tag -a v1.0.0 abc123 -m "Release 1.0"

# Ver informações da tag
git show v1.0.0

# Push de tag
git push origin v1.0.0

# Push de todas as tags
git push origin --tags

# Deletar tag local
git tag -d v1.0.0

# Deletar tag remota
git push origin --delete v1.0.0
```

---

## 🔀 Git Rebase

### Rebase Básico

```bash
# Rebase branch atual sobre main
git checkout feature
git rebase main

# Continuar após resolver conflitos
git rebase --continue

# Pular commit com conflito
git rebase --skip

# Abortar rebase
git rebase --abort
```

### Rebase Interativo

```bash
# Reescrever últimos 3 commits
git rebase -i HEAD~3

# Opções:
# pick   = usar commit
# reword = editar mensagem
# edit   = parar para editar
# squash = mesclar com anterior
# fixup  = mesclar sem mensagem
# drop   = descartar commit
```

```bash
# Exemplo de rebase interativo
pick abc123 Commit 1
squash def456 Commit 2  # Será mesclado com Commit 1
reword ghi789 Commit 3  # Editar mensagem
drop jkl012 Commit 4    # Descartar
```

### Merge vs Rebase

| Aspecto | Merge | Rebase |
|---------|-------|--------|
| Histórico | Preserva | Reescreve |
| Commits de merge | Cria | Não cria |
| Conflitos | Uma vez | Múltiplas vezes |
| Uso | Branches públicos | Branches locais |

---

## 📦 Git Submodules

```bash
# Adicionar submodule
git submodule add https://github.com/usuario/repo.git libs/repo

# Clonar repositório com submodules
git clone --recurse-submodules https://github.com/usuario/repo.git

# Inicializar submodules após clone normal
git submodule init
git submodule update

# Atualizar submodules
git submodule update --remote

# Remover submodule
git submodule deinit libs/repo
git rm libs/repo
rm -rf .git/modules/libs/repo
```

---

## ✅ Boas Práticas

### Commits

| Prática | Exemplo |
|---------|---------|
| **Mensagens claras** | "Adicionar validação de email no formulário" |
| **Commits atômicos** | Um commit = uma mudança lógica |
| **Presente imperativo** | "Adicionar" não "Adicionado" |
| **Linha 1 < 50 chars** | Resumo curto |
| **Corpo detalhado** | Explicar o "porquê", não o "o quê" |

### Exemplo de Boa Mensagem

```
Adicionar validação de email no formulário de registro

- Implementar regex para validar formato de email
- Adicionar mensagem de erro customizada
- Incluir testes unitários para validação

Closes #123
```

### Branches

```bash
# Nomes descritivos
feature/login-social
fix/erro-pagamento
hotfix/vulnerabilidade-xss

# Convenções comuns
feature/  # Novas features
bugfix/   # Correções
hotfix/   # Correções urgentes
release/  # Preparar release
```

---

## 🐙 GitHub/GitLab/Bitbucket

### GitHub

#### Criar Repositório

```bash
# 1. Criar no GitHub (interface web)

# 2. Conectar repositório local
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
```

#### Pull Requests

```bash
# 1. Criar branch
git checkout -b feature-nova

# 2. Fazer commits
git add arquivo.txt
git commit -m "Mensagem"

# 3. Push
git push -u origin feature-nova

# 4. Abrir PR no GitHub (interface web)

# 5. Code review e aprovação

# 6. Merge da PR
```

#### SSH Key

```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu@email.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub: Settings → SSH Keys

# Testar conexão
ssh -T git@github.com
```

---

## 🔧 Git Avançado

### git cherry-pick

```bash
# Aplicar commit específico de outra branch
git cherry-pick abc123

# Cherry-pick múltiplos commits
git cherry-pick abc123 def456

# Cherry-pick sem commit
git cherry-pick --no-commit abc123
```

### git bisect

```bash
# Encontrar commit que introduziu bug
git bisect start
git bisect bad  # Commit atual tem bug
git bisect good abc123  # Commit abc123 estava ok

# Git faz binary search
# Testar cada commit e marcar:
git bisect good  # Commit ok
git bisect bad   # Commit com bug

# Quando encontrar:
git bisect reset
```

### git reflog

```bash
# Ver histórico de movimentos do HEAD
git reflog

# Recuperar commit "perdido"
git reflog
git checkout abc123
```

### git blame

```bash
# Ver quem modificou cada linha
git blame arquivo.txt

# Blame de linhas específicas
git blame -L 10,20 arquivo.txt
```

---

## 🚨 Troubleshooting

### Esqueci de criar branch

```bash
# Mover commits para nova branch
git branch feature-nova
git reset --hard origin/main
git checkout feature-nova
```

### Comitei na branch errada

```bash
# Mover último commit para outra branch
git log  # Copiar SHA do commit
git checkout branch-correta
git cherry-pick abc123
git checkout branch-errada
git reset --hard HEAD~1
```

### Deletei arquivo por engano

```bash
# Recuperar arquivo
git checkout HEAD arquivo.txt

# Ou
git restore arquivo.txt
```

### Preciso desfazer push

```bash
# CUIDADO! Reescreve histórico público
git reset --hard HEAD~1
git push --force

# Melhor: usar revert
git revert HEAD
git push
```

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [git-scm.com](https://git-scm.com/) |
| Pro Git Book | [git-scm.com/book](https://git-scm.com/book/pt-br/v2) |
| Git Explorer | [gitexplorer.com](https://gitexplorer.com/) |
| Learn Git Branching | [learngitbranching.js.org](https://learngitbranching.js.org/) |
| Oh My Git! (jogo) | [ohmygit.org](https://ohmygit.org/) |

---

## 🎓 Conclusão

Parabéns! Agora você tem conhecimento completo sobre:

✅ HTML, CSS e JavaScript
✅ SEO e Schema Markup
✅ Padrões Web (W3C, WCAG)
✅ React e Vue.js
✅ Next.js
✅ TypeScript
✅ Python e Django
✅ Flutter
✅ Git

Continue praticando e construindo projetos reais!

---

<p align="center">
  <strong>📦 Você completou o guia de Git!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
