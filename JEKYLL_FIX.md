# 🔧 Fix: Erro de Build do GitHub Pages

## ❌ Problema

O GitHub Pages estava falhando no build com o erro:

```
Liquid syntax error (line 382): Unknown tag 'url' in docs/12-django.md
```

## 🔍 Causa

O **Jekyll** (processador do GitHub Pages) estava interpretando sintaxe de código nos guias markdown como **tags Liquid**:

| Arquivo | Sintaxe Problemática | Interpretado como |
|---------|---------------------|-------------------|
| `07-react.md` | `{{ color: 'red' }}` | Tag Liquid |
| `08-vuejs.md` | `{{ numero + 1 }}` | Tag Liquid |
| `12-django.md` | `{% url 'home' %}` | Tag Liquid (erro fatal) |

## ✅ Solução Implementada

### 1. Criado `_config.yml`

Arquivo de configuração Jekyll com:

```yaml
# Desabilitar processamento Liquid nos arquivos de documentação
defaults:
  - scope:
      path: "docs"
      type: "pages"
    values:
      render_with_liquid: false  # ← SOLUÇÃO!

liquid:
  error_mode: warn
  strict_filters: false
  strict_variables: false
```

### 2. Configurações Adicionais

- **Markdown engine**: Kramdown com GFM (GitHub Flavored Markdown)
- **Syntax highlighting**: Rouge
- **Liquid**: Desabilitado para pasta `docs/`

## 📋 Alternativas (se ainda houver problemas)

### Opção A: Desabilitar Jekyll Completamente

Crie arquivo `.nojekyll` na raiz (já temos `.nojekyll.backup` como referência):

```bash
touch .nojekyll
```

**Prós:**
- ✅ Serve HTML puro, sem processamento
- ✅ Sem erros de Liquid

**Contras:**
- ❌ Perde features do Jekyll (temas, plugins)
- ❌ Não processa Markdown automaticamente

### Opção B: Adicionar Front Matter em Cada Arquivo

Adicione no topo de cada arquivo `.md` problemático:

```yaml
---
render_with_liquid: false
---
```

### Opção C: Escapar Tags Liquid Manualmente

Envolver código problemático com tags `raw`:

```liquid
{% raw %}
Código Django: {% url 'home' %}
Código React: {{ color: 'red' }}
{% endraw %}
```

## 🎯 Resultado Esperado

Com o `_config.yml` configurado, o build deve:

✅ Processar HTML normalmente
✅ Converter Markdown para HTML
✅ **NÃO** interpretar `{{ }}` e `{% %}` em blocos de código
✅ Preservar exemplos de React, Vue, Django intactos

## 🔍 Verificar Build

Após commit, verificar em:
- **Actions**: https://github.com/fabianolopes3333fr/Fundamentos-da-Web-HTML-CSS-e-JS/actions
- **Pages**: Settings → Pages → Verificar URL

## 📚 Referências

- [Jekyll Liquid](https://jekyllrb.com/docs/liquid/)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Disabling Liquid Processing](https://jekyllrb.com/docs/configuration/front-matter-defaults/)

---

**Status:** ✅ Correção aplicada em [data do commit]
