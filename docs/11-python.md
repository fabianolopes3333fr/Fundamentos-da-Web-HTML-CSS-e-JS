# 🐍 Python - Guia Completo

[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

> 📚 Guia completo de Python - Linguagem versátil para web, dados, automação e muito mais.

---

## 📋 Índice

1. [O que é Python?](#-o-que-é-python)
2. [Por que usar Python?](#-por-que-usar-python)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Sintaxe Básica](#-sintaxe-básica)
5. [Tipos de Dados](#-tipos-de-dados)
6. [Estruturas de Controle](#-estruturas-de-controle)
7. [Funções](#-funções)
8. [Listas e Tuplas](#-listas-e-tuplas)
9. [Dicionários e Sets](#-dicionários-e-sets)
10. [Comprehensions](#-comprehensions)
11. [Classes e OOP](#-classes-e-oop)
12. [Módulos e Pacotes](#-módulos-e-pacotes)
13. [Arquivos](#-arquivos)
14. [Exceções](#-exceções)
15. [Decorators](#-decorators)
16. [Asyncio](#-asyncio)
17. [Bibliotecas Essenciais](#-bibliotecas-essenciais)
18. [Boas Práticas](#-boas-práticas)
19. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Python?

**Python** é uma linguagem de programação de alto nível, interpretada, de tipagem dinâmica e multi-paradigma criada por Guido van Rossum em 1991.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Simples e Legível** | Sintaxe próxima ao inglês |
| **Interpretada** | Não precisa compilar |
| **Tipagem Dinâmica** | Tipos determinados em runtime |
| **Multi-paradigma** | OOP, funcional, procedural |
| **Bibliotecas Ricas** | Ecossistema vasto |
| **Multiplataforma** | Windows, Linux, macOS |

### Python vs Outras Linguagens

| Aspecto | Python | JavaScript | Java |
|---------|--------|------------|------|
| Tipagem | Dinâmica | Dinâmica | Estática |
| Velocidade | Média | Rápida | Muito rápida |
| Curva de Aprendizado | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Web Backend | Django, Flask | Node.js | Spring |
| Ciência de Dados | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐ |

---

## 💡 Por que usar Python?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Produtividade** | Menos código, mais resultado |
| **Versatilidade** | Web, dados, IA, automação |
| **Comunidade Gigante** | Suporte e bibliotecas |
| **Fácil de Aprender** | Ideal para iniciantes |
| **Multiplataforma** | Roda em qualquer SO |
| **Mercado Aquecido** | Salários altos |

### Áreas de Aplicação

- 🌐 **Web Development**: Django, Flask, FastAPI
- 📊 **Data Science**: Pandas, NumPy, Matplotlib
- 🤖 **Machine Learning**: TensorFlow, PyTorch, Scikit-learn
- 🔬 **Automação**: Selenium, Pytest, Scripts
- 🎮 **Games**: Pygame
- 🖥️ **Desktop**: Tkinter, PyQt

### Empresas que usam Python

- Google
- Netflix
- Instagram
- Spotify
- NASA
- Dropbox

---

## 🛠️ Configurando o Ambiente

### Instalação

#### Windows

```bash
# Baixe em: https://www.python.org/downloads/
# Durante instalação, marque "Add Python to PATH"

# Verificar instalação
python --version
pip --version
```

#### Linux/macOS

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# macOS (com Homebrew)
brew install python

# Verificar
python3 --version
pip3 --version
```

### Virtual Environment

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar (Windows)
venv\Scripts\activate

# Ativar (Linux/macOS)
source venv/bin/activate

# Instalar pacotes
pip install requests flask

# Listar pacotes
pip list

# Congelar dependências
pip freeze > requirements.txt

# Instalar de requirements.txt
pip install -r requirements.txt

# Desativar ambiente
deactivate
```

### IDEs Recomendadas

| IDE | Uso |
|-----|-----|
| **VS Code** | Leve, extensível |
| **PyCharm** | Completo, profissional |
| **Jupyter Notebook** | Ciência de dados |
| **Sublime Text** | Minimalista |

---

## 📝 Sintaxe Básica

### Hello World

```python
print("Hello, World!")
```

### Comentários

```python
# Comentário de uma linha

"""
Comentário
de múltiplas
linhas
"""

'''
Também funciona
com aspas simples
'''
```

### Variáveis

```python
# Não precisa declarar tipo
nome = "João"
idade = 25
altura = 1.75
ativo = True

# Múltiplas atribuições
x, y, z = 1, 2, 3

# Mesma atribuição
a = b = c = 0

# Type hints (opcional)
nome: str = "Maria"
idade: int = 30
```

### Entrada e Saída

```python
# Input
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))

# Print
print("Nome:", nome)
print(f"Idade: {idade}")  # f-string (recomendado)
print("Idade: {}".format(idade))  # format
```

---

## 📊 Tipos de Dados

### Tipos Primitivos

```python
# Inteiros
numero = 42
grande = 1_000_000

# Float
preco = 19.99
pi = 3.14159

# String
nome = "João"
texto = 'Python'
multiline = """Texto
em múltiplas
linhas"""

# Boolean
ativo = True
inativo = False

# None (nulo)
vazio = None
```

### Conversão de Tipos

```python
# String para int
numero = int("123")

# Int para string
texto = str(456)

# String para float
preco = float("19.99")

# Verificar tipo
type(123)  # <class 'int'>
isinstance(123, int)  # True
```

### Operadores

```python
# Aritméticos
soma = 5 + 3        # 8
sub = 5 - 3         # 2
mult = 5 * 3        # 15
div = 5 / 2         # 2.5
div_int = 5 // 2    # 2 (divisão inteira)
mod = 5 % 2         # 1 (resto)
pot = 5 ** 2        # 25 (potência)

# Comparação
5 == 5  # True
5 != 3  # True
5 > 3   # True
5 < 3   # False
5 >= 5  # True
5 <= 5  # True

# Lógicos
True and False  # False
True or False   # True
not True        # False

# Operadores de associação
'a' in 'banana'     # True
'x' not in 'banana' # True
```

---

## 🔀 Estruturas de Controle

### if/elif/else

```python
idade = 18

if idade < 18:
    print("Menor de idade")
elif idade == 18:
    print("Acabou de fazer 18")
else:
    print("Maior de idade")

# if ternário
status = "Maior" if idade >= 18 else "Menor"
```

### for

```python
# Iterar sobre lista
frutas = ['maçã', 'banana', 'laranja']
for fruta in frutas:
    print(fruta)

# range
for i in range(5):  # 0 a 4
    print(i)

for i in range(1, 6):  # 1 a 5
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# enumerate (índice + valor)
for indice, fruta in enumerate(frutas):
    print(f"{indice}: {fruta}")
```

### while

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# While com else
n = 0
while n < 3:
    print(n)
    n += 1
else:
    print("Loop concluído")
```

### break, continue, pass

```python
# break: sai do loop
for i in range(10):
    if i == 5:
        break
    print(i)

# continue: pula para próxima iteração
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Apenas ímpares

# pass: placeholder
def funcao_futura():
    pass  # TODO: implementar depois
```

---

## ⚙️ Funções

### Função Básica

```python
def saudar(nome):
    return f"Olá, {nome}!"

print(saudar("Maria"))
```

### Parâmetros Padrão

```python
def saudar(nome, saudacao="Olá"):
    return f"{saudacao}, {nome}!"

saudar("João")              # "Olá, João!"
saudar("Maria", "Oi")       # "Oi, Maria!"
```

### Args e Kwargs

```python
# *args: argumentos posicionais variáveis
def somar(*numeros):
    return sum(numeros)

somar(1, 2, 3, 4, 5)  # 15

# **kwargs: argumentos nomeados variáveis
def exibir_info(**dados):
    for chave, valor in dados.items():
        print(f"{chave}: {valor}")

exibir_info(nome="João", idade=25, cidade="SP")
```

### Type Hints

```python
def somar(a: int, b: int) -> int:
    return a + b

def processar(texto: str) -> list[str]:
    return texto.split()
```

### Lambda (Funções Anônimas)

```python
# Lambda básica
quadrado = lambda x: x ** 2
print(quadrado(5))  # 25

# Com múltiplos parâmetros
somar = lambda a, b: a + b
print(somar(3, 7))  # 10

# Uso comum com map, filter
numeros = [1, 2, 3, 4, 5]
quadrados = list(map(lambda x: x ** 2, numeros))
pares = list(filter(lambda x: x % 2 == 0, numeros))
```

---

## 📚 Listas e Tuplas

### Listas (Mutáveis)

```python
# Criar lista
frutas = ['maçã', 'banana', 'laranja']
numeros = [1, 2, 3, 4, 5]
mista = [1, 'texto', True, 3.14]

# Acessar
frutas[0]   # 'maçã'
frutas[-1]  # 'laranja' (último)

# Slicing
numeros[1:4]    # [2, 3, 4]
numeros[:3]     # [1, 2, 3]
numeros[2:]     # [3, 4, 5]
numeros[::2]    # [1, 3, 5] (passo 2)
numeros[::-1]   # [5, 4, 3, 2, 1] (reverso)

# Métodos
frutas.append('uva')        # Adicionar no final
frutas.insert(1, 'pêra')    # Inserir em posição
frutas.remove('banana')     # Remover por valor
frutas.pop()                # Remover último
frutas.pop(0)               # Remover por índice
frutas.clear()              # Limpar lista
frutas.sort()               # Ordenar
frutas.reverse()            # Inverter
len(frutas)                 # Tamanho
```

### Tuplas (Imutáveis)

```python
# Criar tupla
coordenadas = (10, 20)
pessoa = ('João', 25, 'SP')

# Acessar
coordenadas[0]  # 10

# Desempacotamento
x, y = coordenadas
nome, idade, cidade = pessoa

# Tupla de um elemento
tupla = (1,)  # Vírgula é necessária
```

---

## 📖 Dicionários e Sets

### Dicionários

```python
# Criar dicionário
pessoa = {
    'nome': 'João',
    'idade': 25,
    'cidade': 'SP'
}

# Acessar
pessoa['nome']          # 'João'
pessoa.get('idade')     # 25
pessoa.get('email', 'Não informado')  # Com valor padrão

# Modificar
pessoa['idade'] = 26
pessoa['email'] = 'joao@email.com'

# Remover
del pessoa['cidade']
pessoa.pop('email')

# Métodos
pessoa.keys()       # Chaves
pessoa.values()     # Valores
pessoa.items()      # Pares chave-valor

# Iterar
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")
```

### Sets (Conjuntos)

```python
# Criar set (sem duplicatas)
numeros = {1, 2, 3, 4, 5}
frutas = set(['maçã', 'banana', 'maçã'])  # {'maçã', 'banana'}

# Operações
numeros.add(6)
numeros.remove(3)
numeros.discard(10)  # Não dá erro se não existir

# Operações de conjuntos
a = {1, 2, 3}
b = {3, 4, 5}

a | b  # União: {1, 2, 3, 4, 5}
a & b  # Interseção: {3}
a - b  # Diferença: {1, 2}
a ^ b  # Diferença simétrica: {1, 2, 4, 5}
```

---

## 🔄 Comprehensions

### List Comprehension

```python
# Básico
quadrados = [x ** 2 for x in range(10)]

# Com condição
pares = [x for x in range(10) if x % 2 == 0]

# Com if-else
numeros = [x if x % 2 == 0 else -x for x in range(10)]

# Nested
matriz = [[i * j for j in range(3)] for i in range(3)]
```

### Dict Comprehension

```python
# Básico
quadrados = {x: x ** 2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Com condição
pares = {x: x ** 2 for x in range(10) if x % 2 == 0}
```

### Set Comprehension

```python
quadrados = {x ** 2 for x in range(10)}
```

---

## 🏛️ Classes e OOP

### Classe Básica

```python
class Pessoa:
    # Construtor
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    # Método
    def apresentar(self):
        return f"Olá, sou {self.nome} e tenho {self.idade} anos."

# Instanciar
pessoa = Pessoa("João", 25)
print(pessoa.apresentar())
```

### Atributos de Classe

```python
class Carro:
    # Atributo de classe (compartilhado)
    rodas = 4

    def __init__(self, marca, modelo):
        # Atributos de instância
        self.marca = marca
        self.modelo = modelo

carro = Carro("Toyota", "Corolla")
print(carro.rodas)  # 4
print(Carro.rodas)  # 4
```

### Herança

```python
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def som(self):
        pass

class Cachorro(Animal):
    def som(self):
        return "Au au!"

class Gato(Animal):
    def som(self):
        return "Miau!"

cachorro = Cachorro("Rex")
print(cachorro.som())  # "Au au!"
```

### Encapsulamento

```python
class ContaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.__saldo = saldo  # Atributo privado

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        if self.__saldo >= valor:
            self.__saldo -= valor
            return True
        return False

    def get_saldo(self):
        return self.__saldo

conta = ContaBancaria("João", 1000)
# conta.__saldo  # AttributeError
conta.depositar(500)
print(conta.get_saldo())  # 1500
```

### Property

```python
class Pessoa:
    def __init__(self, nome):
        self._nome = nome

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, valor):
        if len(valor) > 0:
            self._nome = valor
        else:
            raise ValueError("Nome inválido")

pessoa = Pessoa("João")
print(pessoa.nome)  # getter
pessoa.nome = "Maria"  # setter
```

---

## 📦 Módulos e Pacotes

### Importar Módulos

```python
# Importar módulo inteiro
import math
print(math.pi)

# Importar função específica
from math import sqrt, pi
print(sqrt(16))

# Importar com alias
import pandas as pd
import numpy as np

# Importar tudo (não recomendado)
from math import *
```

### Criar Módulo

```python
# arquivo: meu_modulo.py
def saudar(nome):
    return f"Olá, {nome}!"

PI = 3.14159

# arquivo: main.py
import meu_modulo

print(meu_modulo.saudar("João"))
print(meu_modulo.PI)
```

### Criar Pacote

```
meu_pacote/
├── __init__.py
├── modulo1.py
└── modulo2.py
```

```python
# main.py
from meu_pacote import modulo1
from meu_pacote.modulo2 import funcao
```

---

## 📁 Arquivos

### Ler Arquivo

```python
# Modo básico
arquivo = open('dados.txt', 'r')
conteudo = arquivo.read()
arquivo.close()

# Com context manager (recomendado)
with open('dados.txt', 'r') as arquivo:
    conteudo = arquivo.read()

# Ler linha por linha
with open('dados.txt', 'r') as arquivo:
    for linha in arquivo:
        print(linha.strip())

# Ler todas as linhas
with open('dados.txt', 'r') as arquivo:
    linhas = arquivo.readlines()
```

### Escrever Arquivo

```python
# Sobrescrever
with open('saida.txt', 'w') as arquivo:
    arquivo.write("Olá, mundo!\n")
    arquivo.write("Segunda linha\n")

# Anexar
with open('saida.txt', 'a') as arquivo:
    arquivo.write("Adicionando linha\n")
```

### JSON

```python
import json

# Dicionário para JSON
dados = {'nome': 'João', 'idade': 25}
with open('dados.json', 'w') as arquivo:
    json.dump(dados, arquivo, indent=4)

# JSON para dicionário
with open('dados.json', 'r') as arquivo:
    dados = json.load(arquivo)
```

---

## ⚠️ Exceções

### Try/Except

```python
try:
    numero = int(input("Digite um número: "))
    resultado = 10 / numero
    print(resultado)
except ValueError:
    print("Entrada inválida!")
except ZeroDivisionError:
    print("Não pode dividir por zero!")
except Exception as e:
    print(f"Erro: {e}")
finally:
    print("Sempre executa")
```

### Raise

```python
def dividir(a, b):
    if b == 0:
        raise ValueError("Divisor não pode ser zero")
    return a / b

try:
    resultado = dividir(10, 0)
except ValueError as e:
    print(e)
```

### Custom Exceptions

```python
class SaldoInsuficienteError(Exception):
    pass

def sacar(saldo, valor):
    if valor > saldo:
        raise SaldoInsuficienteError("Saldo insuficiente")
    return saldo - valor
```

---

## 🎨 Decorators

```python
# Decorator básico
def meu_decorador(funcao):
    def wrapper():
        print("Antes da função")
        funcao()
        print("Depois da função")
    return wrapper

@meu_decorador
def dizer_ola():
    print("Olá!")

dizer_ola()

# Decorator com argumentos
def repetir(vezes):
    def decorador(funcao):
        def wrapper(*args, **kwargs):
            for _ in range(vezes):
                funcao(*args, **kwargs)
        return wrapper
    return decorador

@repetir(3)
def saudar(nome):
    print(f"Olá, {nome}!")

saudar("João")
```

---

## ⚡ Asyncio

```python
import asyncio

# Função assíncrona
async def buscar_dados(id):
    print(f"Buscando dados {id}...")
    await asyncio.sleep(2)  # Simula I/O
    print(f"Dados {id} recebidos")
    return f"Dados {id}"

# Executar
async def main():
    # Executar em sequência
    resultado1 = await buscar_dados(1)
    resultado2 = await buscar_dados(2)

    # Executar em paralelo
    resultados = await asyncio.gather(
        buscar_dados(1),
        buscar_dados(2),
        buscar_dados(3)
    )
    print(resultados)

asyncio.run(main())
```

---

## 📚 Bibliotecas Essenciais

| Biblioteca | Uso |
|------------|-----|
| **requests** | HTTP requests |
| **pandas** | Análise de dados |
| **numpy** | Computação numérica |
| **matplotlib** | Visualização |
| **flask** | Web framework |
| **django** | Web framework completo |
| **pytest** | Testes |
| **sqlalchemy** | ORM para banco de dados |

---

## ✅ Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **PEP 8** | Guia de estilo oficial |
| **Snake_case** | Variáveis e funções |
| **PascalCase** | Classes |
| **Type hints** | Melhor documentação |
| **Docstrings** | Documentar funções |
| **Virtual environments** | Isolar dependências |

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [python.org](https://www.python.org/) |
| Python Package Index | [pypi.org](https://pypi.org/) |
| Real Python | [realpython.com](https://realpython.com/) |
| Python.org Tutorial | [docs.python.org/3/tutorial](https://docs.python.org/3/tutorial/) |

---

## ⏭️ Próximo Passo

Aprenda Django para desenvolvimento web com Python:

➡️ [12-django.md - Guia Completo de Django](12-django.md)

---

<p align="center">
  <strong>🐍 Você completou o guia de Python!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>
