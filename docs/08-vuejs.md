# 💚 Vue.js - Guia Completo

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)

> 📚 Guia completo de Vue.js - framework JavaScript progressivo para construir interfaces de usuário.

---

## 📋 Índice

1. [O que é Vue.js?](#-o-que-é-vuejs)
2. [Por que usar Vue?](#-por-que-usar-vue)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Instância Vue](#-instância-vue)
5. [Template Syntax](#-template-syntax)
6. [Diretivas](#-diretivas)
7. [Computed e Watch](#-computed-e-watch)
8. [Componentes](#-componentes)
9. [Props e Events](#-props-e-events)
10. [Slots](#-slots)
11. [Lifecycle Hooks](#-lifecycle-hooks)
12. [Composition API](#-composition-api)
13. [Vue Router](#-vue-router)
14. [Pinia (State Management)](#-pinia-state-management)
15. [Fetch de Dados](#-fetch-de-dados)
16. [Boas Práticas](#-boas-práticas)
17. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Vue.js?

**Vue.js** (pronuncia-se "view") é um framework JavaScript progressivo criado por Evan You para construir interfaces de usuário.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Progressivo** | Use pouco ou muito conforme necessidade |
| **Reativo** | DOM atualiza automaticamente |
| **Component-Based** | UI em componentes reutilizáveis |
| **Virtual DOM** | Performance otimizada |
| **Fácil de Aprender** | Curva de aprendizado suave |
| **Flexível** | Options API ou Composition API |

### Vue vs React vs Angular

| Aspecto | Vue | React | Angular |
|---------|-----|-------|---------|
| Curva de Aprendizado | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Performance | Muito boa | Excelente | Boa |
| Tamanho | 33KB | 42KB | 500KB+ |
| Flexibilidade | Alta | Alta | Baixa |
| TypeScript | Opcional | Opcional | Obrigatório |
| Empresa | Independente | Meta | Google |

---

## 💡 Por que usar Vue?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Fácil de Aprender** | HTML, CSS, JS é o suficiente |
| **Documentação Excelente** | Em português e muito detalhada |
| **Progressivo** | Adote gradualmente |
| **Performance** | Virtual DOM otimizado |
| **Ecossistema Oficial** | Vue Router, Pinia, Devtools |
| **Single File Components** | HTML, CSS, JS em um arquivo |

### Empresas que usam Vue

- Alibaba
- GitLab
- Adobe
- Xiaomi
- Nintendo
- Grammarly
- Behance

---

## 🛠️ Configurando o Ambiente

### Via CDN (Prototipagem Rápida)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Vue App</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="app">{{ mensagem }}</div>

    <script>
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    mensagem: 'Olá, Vue!'
                };
            }
        }).mount('#app');
    </script>
</body>
</html>
```

###create-vue (Recomendado)

```bash
# NPM
npm create vue@latest

# Yarn
yarn create vue

# Opções:
# ✔ Project name: meu-app
# ✔ Add TypeScript? No
# ✔ Add JSX Support? No
# ✔ Add Vue Router? Yes
# ✔ Add Pinia? Yes
# ✔ Add Vitest? No
# ✔ Add ESLint? Yes

cd meu-app
npm install
npm run dev
```

### Estrutura de Pastas

```
meu-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── stores/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎯 Instância Vue

### Options API (Tradicional)

```vue
<script>
export default {
    name: 'MeuComponente',
    data() {
        return {
            contador: 0,
            mensagem: 'Olá!'
        };
    },
    methods: {
        incrementar() {
            this.contador++;
        }
    },
    computed: {
        contadorDobrado() {
            return this.contador * 2;
        }
    },
    mounted() {
        console.log('Componente montado');
    }
};
</script>

<template>
    <div>
        <p>{{ mensagem }}</p>
        <p>Contador: {{ contador }}</p>
        <p>Dobrado: {{ contadorDobrado }}</p>
        <button @click="incrementar">+</button>
    </div>
</template>

<style scoped>
button {
    padding: 10px 20px;
}
</style>
```

---

## 📝 Template Syntax

### Interpolação

```vue
<template>
    <!-- Texto -->
    <p>{{ mensagem }}</p>

    <!-- Expressões JavaScript -->
    <p>{{ numero + 1 }}</p>
    <p>{{ ok ? 'SIM' : 'NÃO' }}</p>
    <p>{{ mensagem.split('').reverse().join('') }}</p>

    <!-- HTML (use com cuidado - XSS) -->
    <div v-html="htmlCru"></div>

    <!-- Atributos -->
    <div v-bind:id="dynamicId"></div>
    <!-- Atalho -->
    <div :id="dynamicId"></div>

    <!-- Atributos booleanos -->
    <button :disabled="isDisabled">Botão</button>

    <!-- Múltiplos atributos -->
    <div v-bind="objectOfAttrs"></div>
</template>

<script>
export default {
    data() {
        return {
            mensagem: 'Olá!',
            numero: 5,
            ok: true,
            htmlCru: '<span style="color: red">Vermelho</span>',
            dynamicId: 'meu-id',
            isDisabled: false,
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            }
        };
    }
};
</script>
```

---

## 🎯 Diretivas

### v-if, v-else-if, v-else

```vue
<template>
    <div>
        <h1 v-if="awesome">Vue é awesome!</h1>
        <h1 v-else>Oh não 😢</h1>

        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Não A/B/C</div>

        <!-- v-if com template (não renderiza wrapper) -->
        <template v-if="ok">
            <h1>Título</h1>
            <p>Parágrafo 1</p>
            <p>Parágrafo 2</p>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            awesome: true,
            type: 'B',
            ok: true
        };
    }
};
</script>
```

### v-show

```vue
<template>
    <!-- v-show: muda apenas CSS display -->
    <h1 v-show="ok">Olá!</h1>

    <!-- Diferença: -->
    <!-- v-if: remove/adiciona do DOM (lazy) -->
    <!-- v-show: sempre no DOM, apenas esconde (CSS) -->
</template>

<script>
export default {
    data() {
        return {
            ok: true
        };
    }
};
</script>
```

### v-for

```vue
<template>
    <div>
        <!-- Array -->
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.text }}
            </li>
        </ul>

        <!-- Array com índice -->
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                {{ index }} - {{ item.text }}
            </li>
        </ul>

        <!-- Objeto -->
        <ul>
            <li v-for="(value, key) in meuObjeto" :key="key">
                {{ key }}: {{ value }}
            </li>
        </ul>

        <!-- Objeto com índice -->
        <ul>
            <li v-for="(value, key, index) in meuObjeto" :key="key">
                {{ index }}. {{ key }}: {{ value }}
            </li>
        </ul>

        <!-- Range -->
        <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, text: 'Item 1' },
                { id: 2, text: 'Item 2' },
                { id: 3, text: 'Item 3' }
            ],
            meuObjeto: {
                titulo: 'Como fazer listas',
                autor: 'João',
                publicadoEm: '2026-02-07'
            }
        };
    }
};
</script>
```

### v-on (Eventos)

```vue
<template>
    <div>
        <!-- Sintaxe completa -->
        <button v-on:click="contador++">Adicionar 1</button>

        <!-- Atalho @ -->
        <button @click="contador++">Adicionar 1</button>

        <!-- Chamar método -->
        <button @click="incrementar">Incrementar</button>

        <!-- Passar argumentos -->
        <button @click="dizer('oi')">Dizer oi</button>

        <!-- Acessar evento -->
        <button @click="avisar('Form cannot be submitted yet.', $event)">
            Enviar
        </button>

        <!-- Modificadores -->
        <form @submit.prevent="onSubmit">
            <input @keyup.enter="enviar" />
        </form>

        <!-- Múltiplos manipuladores -->
        <button @click="one($event), two($event)">
            Enviar
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        };
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        dizer(mensagem) {
            alert(mensagem);
        },
        avisar(mensagem, evento) {
            if (evento) {
                evento.preventDefault();
            }
            alert(mensagem);
        },
        onSubmit() {
            console.log('Formulário enviado');
        },
        enviar() {
            console.log('Enter pressionado');
        }
    }
};
</script>
```

### Modificadores de Eventos

| Modificador | Uso |
|-------------|-----|
| `.stop` | `event.stopPropagation()` |
| `.prevent` | `event.preventDefault()` |
| `.self` | Apenas se target é o elemento |
| `.capture` | Usa modo capture |
| `.once` | Dispara apenas uma vez |
| `.passive` | `addEventListener({ passive: true })` |

```vue
<!-- Para a propagação -->
<a @click.stop="fazerAlgo"></a>

<!-- Prevenir submit -->
<form @submit.prevent="onSubmit"></form>

<!-- Encadear modificadores -->
<a @click.stop.prevent="fazerAlgo"></a>

<!-- Apenas modificador -->
<form @submit.prevent></form>

<!-- Apenas se event.target é o próprio elemento -->
<div @click.self="fazerAlgo"></div>

<!-- Dispara apenas uma vez -->
<button @click.once="fazerAlgo"></button>
```

### Modificadores de Tecla

```vue
<!-- Enter -->
<input @keyup.enter="enviar" />

<!-- Tab -->
<input @keydown.tab="mudarFoco" />

<!-- Delete ou Backspace -->
<input @keyup.delete="apagar" />

<!-- Esc -->
<input @keyup.esc="cancelar" />

<!-- Espaço -->
<input @keyup.space="ativar" />

<!-- Setas -->
<input @keyup.up="moverCima" />
<input @keyup.down="moverBaixo" />
<input @keyup.left="moverEsquerda" />
<input @keyup.right="moverDireita" />

<!-- Modificadores de sistema -->
<input @keyup.ctrl.enter="enviar" />
<input @click.ctrl="selecionar" />
<input @click.shift="selecionarMultiplo" />
<input @click.alt="mostrarInfo" />
<input @click.meta="atalho" /> <!-- Cmd/Win -->

<!-- Exact -->
<button @click.ctrl.exact="onClick"></button> <!-- Apenas Ctrl -->
```

### v-model (Two-Way Binding)

```vue
<template>
    <div>
        <!-- Input texto -->
        <input v-model="mensagem" placeholder="Digite algo" />
        <p>Mensagem: {{ mensagem }}</p>

        <!-- Textarea -->
        <textarea v-model="texto"></textarea>

        <!-- Checkbox -->
        <input type="checkbox" v-model="checked" />
        <label>Marcado: {{ checked }}</label>

        <!-- Múltiplos checkboxes -->
        <input type="checkbox" value="João" v-model="nomes" />
        <input type="checkbox" value="Maria" v-model="nomes" />
        <p>Selecionados: {{ nomes }}</p>

        <!-- Radio -->
        <input type="radio" value="Um" v-model="picked" />
        <input type="radio" value="Dois" v-model="picked" />
        <p>Escolhido: {{ picked }}</p>

        <!-- Select -->
        <select v-model="selected">
            <option disabled value="">Selecione</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p>Selecionado: {{ selected }}</p>

        <!-- Select múltiplo -->
        <select v-model="selectedMultiple" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p>Selecionados: {{ selectedMultiple }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mensagem: '',
            texto: '',
            checked: false,
            nomes: [],
            picked: '',
            selected: '',
            selectedMultiple: []
        };
    }
};
</script>
```

### Modificadores do v-model

```vue
<!-- .lazy: sincroniza após change ao invés de input -->
<input v-model.lazy="msg" />

<!-- .number: converte para número -->
<input v-model.number="idade" type="number" />

<!-- .trim: remove espaços -->
<input v-model.trim="msg" />
```

---

## 🧮 Computed e Watch

### Computed Properties

```vue
<template>
    <div>
        <p>Mensagem original: {{ mensagem }}</p>
        <p>Mensagem invertida: {{ mensagemInvertida }}</p>

        <p>Nome: {{ nomeCompleto }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mensagem: 'Olá',
            nome: 'João',
            sobrenome: 'Silva'
        };
    },
    computed: {
        // Computed básico (apenas getter)
        mensagemInvertida() {
            return this.mensagem.split('').reverse().join('');
        },

        // Computed com getter e setter
        nomeCompleto: {
            get() {
                return `${this.nome} ${this.sobrenome}`;
            },
            set(novoValor) {
                const nomes = novoValor.split(' ');
                this.nome = nomes[0];
                this.sobrenome = nomes[nomes.length - 1];
            }
        }
    }
};
</script>
```

### Watchers

```vue
<script>
export default {
    data() {
        return {
            pergunta: '',
            resposta: 'Pergunte algo!',
            contador: 0,
            usuario: {
                nome: 'João',
                idade: 25
            }
        };
    },
    watch: {
        // Watcher simples
        pergunta(novoValor, valorAntigo) {
            this.resposta = 'Aguardando parar de digitar...';
            this.buscarResposta();
        },

        // Watcher com opções
        contador: {
            handler(novoValor, valorAntigo) {
                console.log(`Mudou de ${valorAntigo} para ${novoValor}`);
            },
            immediate: true, // Executa imediatamente na criação
            deep: false // Observar alterações profundas
        },

        // Watcher profundo (deep)
        usuario: {
            handler(novoValor) {
                console.log('Usuário mudou:', novoValor);
            },
            deep: true // Observa propriedades aninhadas
        },

        // Watcher de propriedade aninhada
        'usuario.nome'(novoValor) {
            console.log('Nome mudou:', novoValor);
        }
    },
    methods: {
        buscarResposta() {
            // Lógica de busca
        }
    }
};
</script>
```

---

## 🧩 Componentes

### Single File Component (SFC)

```vue
<!-- Button.vue -->
<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'primary'
        }
    },
    emits: ['click'],
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
};
</script>

<template>
    <button
        :class="['btn', `btn-${type}`]"
        @click="handleClick"
    >
        {{ label }}
    </button>
</template>

<style scoped>
.btn {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}
</style>
```

### Registro de Componentes

```vue
<!-- App.vue -->
<script>
import Button from './components/Button.vue';
import Card from './components/Card.vue';

export default {
    components: {
        Button,
        Card
    }
};
</script>

<template>
    <div>
        <Button label="Clique aqui" @click="handleClick" />
        <Card title="Meu Card" />
    </div>
</template>
```

### Registro Global

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import Button from './components/Button.vue';

const app = createApp(App);

app.component('Button', Button); // Registro global

app.mount('#app');
```

---

## 📦 Props e Events

### Props

```vue
<!-- UserCard.vue -->
<script>
export default {
    props: {
        // Simples
        nome: String,

        // Com tipo e padrão
        idade: {
            type: Number,
            default: 0
        },

        // Com validação
        email: {
            type: String,
            required: true,
            validator(value) {
                return value.includes('@');
            }
        },

        // Múltiplos tipos
        id: [String, Number],

        // Objeto com padrão
        config: {
            type: Object,
            default() {
                return { tema: 'claro' };
            }
        },

        // Array com padrão
        tags: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<template>
    <div class="user-card">
        <h3>{{ nome }}</h3>
        <p>Idade: {{ idade }}</p>
        <p>Email: {{ email }}</p>
    </div>
</template>
```

### Custom Events

```vue
<!-- Componente Filho -->
<script>
export default {
    emits: {
        // Sem validação
        click: null,

        // Com validação
        submit(payload) {
            return payload.email && payload.password;
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', {
                email: 'teste@email.com',
                password: '123456'
            });
        }
    }
};
</script>

<template>
    <button @click="$emit('click')">Clique</button>
    <button @click="handleSubmit">Enviar</button>
</template>
```

```vue
<!-- Componente Pai -->
<template>
    <ChildComponent
        @click="handleClick"
        @submit="handleSubmit"
    />
</template>

<script>
export default {
    methods: {
        handleClick() {
            console.log('Clicado');
        },
        handleSubmit(payload) {
            console.log('Enviado:', payload);
        }
    }
};
</script>
```

### v-model em Componentes Customizados

```vue
<!-- CustomInput.vue -->
<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
};
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
```

```vue
<!-- Uso -->
<template>
    <CustomInput v-model="texto" />
</template>
```

---

## 🎰 Slots

### Slots Básicos

```vue
<!-- Card.vue -->
<template>
    <div class="card">
        <slot></slot> <!-- Conteúdo será inserido aqui -->
    </div>
</template>
```

```vue
<!-- Uso -->
<template>
    <Card>
        <h2>Título do Card</h2>
        <p>Conteúdo do card</p>
    </Card>
</template>
```

### Named Slots

```vue
<!-- Layout.vue -->
<template>
    <div class="layout">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot></slot> <!-- slot padrão -->
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
```

```vue
<!-- Uso -->
<template>
    <Layout>
        <template #header>
            <h1>Meu Site</h1>
        </template>

        <p>Conteúdo principal</p>

        <template #footer>
            <p>© 2026</p>
        </template>
    </Layout>
</template>
```

### Scoped Slots

```vue
<!-- List.vue -->
<script>
export default {
    props: ['items']
};
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <slot :item="item"></slot>
        </li>
    </ul>
</template>
```

```vue
<!-- Uso -->
<template>
    <List :items="users">
        <template #default="{ item }">
            <strong>{{ item.name }}</strong> - {{ item.email }}
        </template>
    </List>
</template>
```

---

## 🔄 Lifecycle Hooks

### Options API

```vue
<script>
export default {
    // Antes da criação
    beforeCreate() {
        console.log('beforeCreate');
    },

    // Instância criada
    created() {
        console.log('created');
        // Bom para fetch de dados
    },

    // Antes de montar no DOM
    beforeMount() {
        console.log('beforeMount');
    },

    // Montado no DOM
    mounted() {
        console.log('mounted');
        // Acessar DOM aqui
    },

    // Antes de atualizar
    beforeUpdate() {
        console.log('beforeUpdate');
    },

    // Após atualizar
    updated() {
        console.log('updated');
    },

    // Antes de desmontar
    beforeUnmount() {
        console.log('beforeUnmount');
        // Cleanup: remover event listeners, timers
    },

    // Desmontado
    unmounted() {
        console.log('unmounted');
    }
};
</script>
```

### Diagrama do Ciclo de Vida

```
new Vue()
    │
    ▼
beforeCreate
    │
    ▼
created ──────────► Aqui: fetch dados, setup observers
    │
    ▼
beforeMount
    │
    ▼
mounted ──────────► Aqui: acessar DOM, iniciar timers
    │
    ▼
┌───▼───────────┐
│ beforeUpdate  │ ◄─── Dados mudam
│      │        │
│      ▼        │
│   updated     │
└───────────────┘
    │
    ▼
beforeUnmount ────► Aqui: cleanup
    │
    ▼
unmounted
```

---

## ⚡ Composition API

A Composition API é uma nova forma de organizar lógica em componentes Vue 3.

### setup()

```vue
<script>
import { ref, reactive, computed, onMounted } from 'vue';

export default {
    setup() {
        // Estado reativo
        const contador = ref(0);
        const usuario = reactive({
            nome: 'João',
            idade: 25
        });

        // Computed
        const contadorDobrado = computed(() => contador.value * 2);

        // Métodos
        const incrementar = () => {
            contador.value++;
        };

        // Lifecycle
        onMounted(() => {
            console.log('Montado!');
        });

        // Retornar para o template
        return {
            contador,
            usuario,
            contadorDobrado,
            incrementar
        };
    }
};
</script>

<template>
    <div>
        <p>Contador: {{ contador }}</p>
        <p>Dobrado: {{ contadorDobrado }}</p>
        <button @click="incrementar">+</button>
    </div>
</template>
```

### Script Setup (Sintaxe Simplificada)

```vue
<script setup>
import { ref, computed, onMounted } from 'vue';

// Tudo aqui está automaticamente exposto ao template
const contador = ref(0);
const contadorDobrado = computed(() => contador.value * 2);

const incrementar = () => {
    contador.value++;
};

onMounted(() => {
    console.log('Montado!');
});
</script>

<template>
    <div>
        <p>Contador: {{ contador }}</p>
        <p>Dobrado: {{ contadorDobrado }}</p>
        <button @click="incrementar">+</button>
    </div>
</template>
```

### Composables (Custom Hooks)

```javascript
// useCounter.js
import { ref, computed } from 'vue';

export function useCounter(initialValue = 0) {
    const count = ref(initialValue);
    const doubled = computed(() => count.value * 2);

    function increment() {
        count.value++;
    }

    function decrement() {
        count.value--;
    }

    function reset() {
        count.value = initialValue;
    }

    return {
        count,
        doubled,
        increment,
        decrement,
        reset
    };
}
```

```vue
<!-- Uso -->
<script setup>
import { useCounter } from './composables/useCounter';

const { count, doubled, increment, decrement, reset } = useCounter(10);
</script>

<template>
    <div>
        <p>{{ count }} / {{ doubled }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
    </div>
</template>
```

---

## 🛣️ Vue Router

### Instalação

```bash
npm install vue-router@4
```

### Configuração

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import('../views/User.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
```

```javascript
//main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app');
```

### Uso

```vue
<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link :to="{ name: 'User', params: { id: 123 }}">
                User 123
            </router-link>
        </nav>

        <router-view />
    </div>
</template>
```

### Navegação Programática

```vue
<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Acessar parâmetros
const userId = route.params.id;

// Navegar
const goToHome = () => {
    router.push('/');
};

const goToUser = () => {
    router.push({ name: 'User', params: { id: 456 }});
};

// Voltar
const goBack = () => {
    router.back();
};
</script>
```

---

## 🏪 Pinia (State Management)

### Instalação

```bash
npm install pinia
```

### Configuração

```javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
```

### Definir Store

```javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Eduardo'
    }),

    getters: {
        doubleCount: (state) => state.count * 2
    },

    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        async fetchCount() {
            const response = await fetch('/api/count');
            this.count = await response.json();
        }
    }
});
```

### Usar Store

```vue
<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

// Acessar state
console.log(counter.count);

// Acessar getters
console.log(counter.doubleCount);

// Chamar actions
counter.increment();
</script>

<template>
    <div>
        <p>{{ counter.count }}</p>
        <p>{{ counter.doubleCount }}</p>
        <button @click="counter.increment">+</button>
    </div>
</template>
```

---

## 🌐 Fetch de Dados

### Com Composition API

```vue
<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);
const loading = ref(true);
const error = ref(null);

async function fetchUsers() {
    try {
        loading.value = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users.value = await response.json();
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchUsers();
});
</script>

<template>
    <div>
        <p v-if="loading">Carregando...</p>
        <p v-else-if="error">Erro: {{ error }}</p>
        <ul v-else>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>
```

---

## ✅ Boas Práticas

### Estrutura de Componentes

```
src/
├── components/
│   ├── common/
│   │   ├── Button.vue
│   │   └── Card.vue
│   └── features/
│       └── UserProfile.vue
├── composables/
│   ├── useFetch.js
│   └── useAuth.js
├── stores/
│   ├── user.js
│   └── products.js
├── router/
│   └── index.js
└── views/
    ├── Home.vue
    └── About.vue
```

### Nomenclatura

- Componentes: **PascalCase** (`UserCard.vue`)
- Composables: **camelCase** com prefixo `use` (`useFetch.js`)
- Props/Events: **kebab-case** no template, **camelCase** no script
- Stores: **camelCase** (`userStore.js`)

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [vuejs.org](https://vuejs.org/) |
| Vue Router | [router.vuejs.org](https://router.vuejs.org/) |
| Pinia | [pinia.vuejs.org](https://pinia.vuejs.org/) |
| Vue Mastery | [vuemastery.com](https://www.vuemastery.com/) |
| Awesome Vue | [github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue) |

---

## ⏭️ Próximo Passo

Aprenda Next.js, o framework React para produção:

➡️ [09-nextjs.md - Guia Completo de Next.js](09-nextjs.md)

---

<p align="center">
  <strong>💚 Você completou o guia de Vue.js!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
